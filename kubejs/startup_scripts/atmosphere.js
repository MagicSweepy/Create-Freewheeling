const Atmosphere = (() => {
    const $BuiltInRegistries = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries')
    const $ParticleTypes = Java.loadClass('net.minecraft.core.particles.ParticleTypes')

    const ENVIRONMENT_KEY = 'environment'
    const PULSE = 10
    const TTL = 60

    const ENVIRONMENTS = {
        'kubejs:hot_air': {
            code: 1,
            nameKey: 'environment.kubejs.hot',
            particle: $ParticleTypes.FLAME,
            radius: 8.0,
            priority: 0
        },
        'kubejs:cold_air': {
            code: 2,
            nameKey: 'environment.kubejs.cold',
            particle: $ParticleTypes.SNOWFLAKE,
            radius: 8.0,
            priority: 0
        },
        'kubejs:humid_air': {
            code: 3,
            nameKey: 'environment.kubejs.humid',
            particle: $ParticleTypes.FALLING_WATER,
            radius: 8.0,
            priority: 0
        },
        'kubejs:dry_air': {
            code: 4,
            nameKey: 'environment.kubejs.dry',
            particle: $ParticleTypes.ASH,
            radius: 8.0,
            priority: 0
        },
        'kubejs:acidic_air': {
            code: 5,
            nameKey: 'environment.kubejs.acidic',
            particle: $ParticleTypes.WITCH,
            radius: 8.0,
            priority: 0
        },
        'kubejs:alkaline_air': {
            code: 6,
            nameKey: 'environment.kubejs.alkaline',
            particle: $ParticleTypes.SPORE_BLOSSOM_AIR,
            radius: 8.0,
            priority: 0
        }
    }

    const AIRS = {
        'minecraft:overworld': { fluidId: 'kubejs:air', nameKey: 'fluid.kubejs.air' },
        'minecraft:the_nether': { fluidId: 'kubejs:nether_air', nameKey: 'fluid.kubejs.nether_air' },
        'minecraft:the_end': { fluidId: 'kubejs:end_air', nameKey: 'fluid.kubejs.end_air' }
    }

    const fields = []

    function airFor(dimensionId) {
        return AIRS[dimensionId] || null
    }

    function findGas(inputs) {
        for (let i = 0; i < inputs.size(); i++) {
            const stack = inputs.get(i).resource()
            const fluidId = $BuiltInRegistries.FLUID.getKey(stack.getFluid()).toString()
            const environment = ENVIRONMENTS[fluidId]
            if (environment !== undefined)
                return { fluidId: fluidId, environment: environment }
        }
        return null
    }

    function publish(level, pos, environment, gameTime) {
        const dimension = level.dimension.toString()
        const key = dimension + '@' + pos.getX() + ',' + pos.getY() + ',' + pos.getZ()
        const field = {
            key: key,
            dimension: dimension,
            x: pos.getX(),
            y: pos.getY(),
            z: pos.getZ(),
            radius: environment.radius,
            code: environment.code,
            nameKey: environment.nameKey,
            priority: environment.priority,
            createdAt: gameTime,
            expires: gameTime + TTL
        }

        let replaced = false
        for (let i = 0; i < fields.length; i++) {
            if (fields[i].key === key) {
                fields[i] = field
                replaced = true
                break
            }
        }
        if (!replaced) fields.push(field)

        for (let i = fields.length - 1; i >= 0; i--) {
            if (fields[i].expires < gameTime)
                fields.splice(i, 1)
        }
    }

    function at(level, pos, gameTime) {
        const dimension = level.dimension.toString()
        let best = null
        for (let i = 0; i < fields.length; i++) {
            const field = fields[i]
            if (field.dimension !== dimension || field.expires < gameTime) continue
            if (field.createdAt > gameTime) continue

            const dx = field.x - pos.getX()
            const dy = field.y - pos.getY()
            const dz = field.z - pos.getZ()
            if (dx * dx + dy * dy + dz * dz > field.radius * field.radius) continue

            if (best === null || field.priority > best.priority)
                best = field
        }
        return best
    }

    function spawnParticles(level, pos, environment, gameTime) {
        const centerX = pos.getX() + 0.5
        const centerY = pos.getY() + 0.5
        const centerZ = pos.getZ() + 0.5

        for (let i = 0; i < 8; i++) {
            const angle = Math.random() * Math.PI * 2
            const distance = Math.sqrt(Math.random()) * environment.radius
            level.sendParticles(
                environment.particle,
                centerX + Math.cos(angle) * distance,
                centerY + (Math.random() - 0.5) * environment.radius * 0.8,
                centerZ + Math.sin(angle) * distance,
                1, 0.0, 0.02, 0.0, 0.01)
        }

        if (gameTime % 40 === 0) {
            for (let i = 0; i < 24; i++) {
                const angle = (i / 24) * Math.PI * 2
                level.sendParticles(
                    environment.particle,
                    centerX + Math.cos(angle) * environment.radius,
                    centerY + 0.1,
                    centerZ + Math.sin(angle) * environment.radius,
                    1, 0.0, 0.0, 0.0, 0.0)
            }
        }
    }

    function write(ctx, code) {
        if (ctx.controller() == null)
            return
        const components = ctx.controller().componentRuntime().components()
        for (let i = 0; i < components.size(); i++) {
            const blockEntity = components.get(i).getContainer()
            if (blockEntity == null) continue

            const blockId = $BuiltInRegistries.BLOCK
                .getKey(blockEntity.getBlockState().getBlock()).toString()
            if (blockId !== 'mmcr:smart_interface') continue
            if (!blockEntity.hasController(ctx.controllerPos())) continue

            blockEntity.setValue(ENVIRONMENT_KEY, code)
        }
    }

    function reset() {
        fields.length = 0
    }

    return {
        ENVIRONMENT_KEY: ENVIRONMENT_KEY,
        PULSE: PULSE,
        airFor: airFor,
        findGas: findGas,
        publish: publish,
        at: at,
        spawnParticles: spawnParticles,
        write: write,
        reset: reset
    }
})()

globalThis.Atmosphere = Atmosphere
