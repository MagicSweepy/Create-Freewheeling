const $Long = Java.loadClass('java.lang.Long')
const $BigInteger = Java.loadClass('java.math.BigInteger')

const ENERGY_CORE_TIERS = [
    { id: 'ae2:quartz_block', capacity: $BigInteger.TEN.pow(6), nameKey: 'kubejs.crystal_energy_storage.tier.quartz' },
    { id: 'ae2:fluix_block', capacity: $BigInteger.TEN.pow(7), nameKey: 'kubejs.crystal_energy_storage.tier.fluix' },
    { id: 'neoecoae:energized_crystal_block', capacity: $BigInteger.TEN.pow(8), nameKey: 'kubejs.crystal_energy_storage.tier.energized_crystal' },
    { id: 'neoecoae:energized_fluix_crystal_block', capacity: $BigInteger.TEN.pow(9), nameKey: 'kubejs.crystal_energy_storage.tier.energized_fluix' },
    { id: 'neoecoae:energized_superconductive_block', capacity: $BigInteger.TEN.pow(10), nameKey: 'kubejs.crystal_energy_storage.tier.energized_superconductive' }
]

// ~2^53
const ENERGY_CORE_TRANSFER = 9000000000000000

function energyCoreState(ctx) {
    var total = $BigInteger.ZERO
    var topTier = -1
    var kinds = 0

    for (var i = 0; i < ENERGY_CORE_TIERS.length; i++) {
        var tier = ENERGY_CORE_TIERS[i]
        var count = ctx.countStructureBlocks(tier.id)
        if (count > 0) {
            total = total.add(tier.capacity.multiply($BigInteger.valueOf(count)))
            topTier = i
            kinds++
        }
    }

    return { total: total, topTier: topTier, kinds: kinds }
}

MMCREvents.startup(event => {
    const api = event.getAPI()
    const RecipeIO = api.recipeIO()
    const OutputPolicy = api.outputPolicy()

    event.createMachine('kubejs:large_assembler')
        .displayNameKey('machine.kubejs.large_assembler.name')
        .recipePool('kubejs:large_assembler')
        .allowModifiers()
        .controllerBaseTexture('create:block/railway_casing')
        .formedPortBaseTexture('create:block/railway_casing')
        .allowMultithreading()
        .allowParallelism()
        .maxParallelAmount(64)
        .register()

    event.createMachine('kubejs:large_crusher')
        .displayNameKey('machine.kubejs.large_crusher.name')
        .recipePool('kubejs:large_crusher')
        .allowModifiers()
        .controllerBaseTexture('create:block/brass_casing')
        .formedPortBaseTexture('create:block/brass_casing')
        .allowMultithreading()
        .allowParallelism()
        .maxParallelAmount(64)
        .register()

    event.createMachine('kubejs:large_rolling_mill')
        .displayNameKey('machine.kubejs.large_rolling_mill.name')
        .recipePool('kubejs:large_rolling_mill')
        .allowModifiers()
        .controllerBaseTexture('createcasing:block/casing/zinc')
        .formedPortBaseTexture('createcasing:block/casing/zinc')
        .allowMultithreading()
        .allowParallelism()
        .maxParallelAmount(64)
        .register()

    event.createMachine('kubejs:large_alloy_smelter')
        .displayNameKey('machine.kubejs.large_alloy_smelter.name')
        .recipePool('kubejs:large_alloy_smelter')
        .allowModifiers()
        .allowMultithreading()
        .allowParallelism()
        .maxParallelAmount(64)
        .register()

    event.createMachine('kubejs:atmospheric_collector')
        .displayNameKey('machine.kubejs.atmospheric_collector.name')
        .controllerBaseTexture('create:block/copper_casing')
        .formedPortBaseTexture('create:block/copper_casing')
        .tickBehavior(behavior => behavior.serverTick(ctx => {
            if (!ctx.isDue(100))
                return

            const air = Atmosphere.airFor(ctx.level().dimension.toString())
            if (air === null) {
                ctx.screenText().append(api.screenScope().CONTROLLER, 
                    api.id('kubejs:collector_status'),
                    Text.translatable('atmosphere.kubejs.unknown_dimension'))
                return
            }

            const plan = ctx.ioPlan()
            // Force overrided cast long to resolve compile error.
            plan.addOutput(api.fluidOutputRequirement(api.id(air.fluidId), $Long.valueOf(250), 1.0))
            if (plan.simulate().failure() !== null) {
                ctx.screenText().append(api.screenScope().CONTROLLER, 
                    api.id('kubejs:collector_status'),
                    Text.translatable('atmosphere.kubejs.output_full'))
                return
            }
            if (!plan.commit().successful()) {
                ctx.screenText().append(api.screenScope().CONTROLLER, 
                    api.id('kubejs:collector_status'),
                    Text.translatable('atmosphere.kubejs.output_full'))
                return
            }

            ctx.screenText().append(api.screenScope().CONTROLLER, 
                api.id('kubejs:collector_status'),
                Text.translatable(air.nameKey))
        }))
        .register()

    event.createMachine('kubejs:atmospheric_diffuser')
        .displayNameKey('machine.kubejs.atmospheric_diffuser.name')
        .controllerBaseTexture('create:block/copper_casing')
        .formedPortBaseTexture('create:block/copper_casing')
        .tickBehavior(behavior => behavior.serverTick(ctx => {
            if (!ctx.isDue(Atmosphere.PULSE))
                return

            const gas = Atmosphere.findGas(ctx.ioView().fluidInputs())
            if (gas === null) {
                ctx.screenText().append(api.screenScope().CONTROLLER, 
                    api.id('kubejs:diffuser_status'),
                    Text.translatable('atmosphere.kubejs.no_gas'))
                return
            }

            const plan = ctx.ioPlan()
            // Force overrided cast long to resolve compile error.
            plan.addInput(api.fluidInputRequirement(api.id(gas.fluidId), $Long.valueOf(5)))
            if (!plan.simulate().inputsSatisfied()) {
                ctx.screenText().append(api.screenScope().CONTROLLER, 
                    api.id('kubejs:diffuser_status'),
                    Text.translatable('atmosphere.kubejs.no_gas'))
                return
            }
            if (!plan.commit().successful()) {
                ctx.screenText().append(api.screenScope().CONTROLLER, 
                    api.id('kubejs:diffuser_status'),
                    Text.translatable('atmosphere.kubejs.no_gas')
                )
                return
            }

            Atmosphere.publish(ctx.level(), ctx.controllerPos(), gas.environment, ctx.gameTime())
            Atmosphere.spawnParticles(ctx.level(), ctx.controllerPos(), gas.environment, ctx.gameTime())

            ctx.screenText().append(api.screenScope().CONTROLLER, 
                api.id('kubejs:diffuser_status'),
                Text.translatable(gas.environment.nameKey))
        }))
        .register()

    event.createMachine('kubejs:chemical_reactor')
        .displayNameKey('machine.kubejs.chemical_reactor.name')
        .recipePool('kubejs:chemical_reactor')
        .allowModifiers()
        .allowMultithreading()
        .allowParallelism()
        .maxParallelAmount(64)
        .recipeBehavior(behavior => {})
        .smartInterface('environment', 0, 6).valueType('integer').end()
        .preServerTick(ctx => {
            if (!ctx.isDue(Atmosphere.PULSE))
                return

            const field = Atmosphere.at(ctx.level(), ctx.controllerPos(), ctx.gameTime())
            Atmosphere.write(ctx, field === null ? 0 : field.code)

            ctx.screenText().append(api.screenScope().CONTROLLER, 
                api.id('kubejs:environment_status'),
                field === null
                    ? Text.translatable('environment.kubejs.none')
                    : Text.translatable(field.nameKey))
        })
        .register()

    event.createMachine('kubejs:lightning_processor')
        .displayNameKey('machine.kubejs.lightning_processor.name')
        .recipePool('kubejs:lightning_processor')
        .controllerBaseTexture('create:block/shadow_steel_casing')
        .formedPortBaseTexture('create:block/shadow_steel_casing')
        .allowModifiers()
        .allowMultithreading()
        .allowParallelism()
        .maxParallelAmount(256)
        .register()

    event.createMachine('kubejs:crystal_energy_storage')
        .displayNameKey('machine.kubejs.crystal_energy_storage.name')
        .recipePool('kubejs:crystal_energy_storage')
        .controllerBaseTexture('create:block/refined_radiance_casing')
        .formedPortBaseTexture('create:block/refined_radiance_casing')
        .tickBehavior(behavior => behavior.serverTick(ctx => {
            var storage = ctx.dataStorage()
            if (storage == null) return

            if (!ctx.isDue(5)) return

            var saved = storage.get('energy')
            var stored = saved.isPresent()
                ? saved.get().asBigInteger().orElse($BigInteger.ZERO)
                : $BigInteger.ZERO

            var state = energyCoreState(ctx)
            var capacity = state.total
            var charged = 0
            var discharged = 0

            var room = capacity.subtract(stored)
            if (room.signum() > 0) {
                var available = ctx.ioView().energyInput()
                var roomLong = room.min($BigInteger.valueOf(ENERGY_CORE_TRANSFER)).longValue()
                var maxRequest = Math.min(available, roomLong)

                if (maxRequest > 0) {
                    var low = 0
                    var high = maxRequest
                    while (low < high) {
                        var candidate = low + Math.ceil((high - low) / 2)
                        var probe = ctx.ioPlan()
                        probe.addInput(api.energyRequirement(RecipeIO.INPUT, candidate))
                        if (probe.simulate().energySatisfied()) {
                            low = candidate
                        } else {
                            high = candidate - 1
                        }
                    }

                    if (low > 0) {
                        var next = stored.add($BigInteger.valueOf(low))
                        var inputPlan = ctx.ioPlan()
                        inputPlan.addInput(api.energyRequirement(RecipeIO.INPUT, low))

                        if (inputPlan.simulate().energySatisfied()
                            && inputPlan.commitData(transaction => {
                                storage.set('energy', next, transaction)
                            }).successful()) {
                            stored = next
                            charged = low
                        }
                    }
                }
            }

            if (stored.signum() > 0) {
                var outputCapacity = ctx.ioView().energyOutputCapacity()
                if (outputCapacity > 0) {
                    var request = stored.min($BigInteger.valueOf(Math.min(outputCapacity, ENERGY_CORE_TRANSFER)))
                    var requested = request.longValue()

                    if (requested > 0) {
                        var outputPlan = ctx.ioPlan()
                        outputPlan.addOutput(
                            api.energyRequirement(RecipeIO.OUTPUT, requested),
                            OutputPolicy.ALLOW_PARTIAL)

                        var simulation = outputPlan.simulate()
                        var outputs = simulation.outputs()

                        if (!outputs.isEmpty()) {
                            var accepted = outputs.get(0).accepted()
                            if (accepted > 0) {
                                var nextStored = stored.subtract($BigInteger.valueOf(accepted))

                                if (outputPlan.commitData(transaction => {
                                    storage.set('energy', nextStored, transaction)
                                }).successful()) {
                                    stored = nextStored
                                    discharged = accepted
                                }
                            }
                        }
                    }
                }
            }

            var tierText
            if (state.kinds <= 0) {
                tierText = Text.translatable('kubejs.crystal_energy_storage.tier.none')
            } else if (state.kinds > 1) {
                tierText = Text.translatable('kubejs.crystal_energy_storage.tier.mixed')
            } else {
                tierText = Text.translatable(ENERGY_CORE_TIERS[state.topTier].nameKey)
            }

            ctx.screenText().append(
                api.screenScope().CONTROLLER,
                api.id('kubejs:crystal_energy_storage.status'),
                Text.translatable(
                    'kubejs.crystal_energy_storage.status',
                    api.readableNumberBigInt(stored),
                    api.readableNumberBigInt(capacity)))

            ctx.screenText().append(
                api.screenScope().CONTROLLER,
                api.id('kubejs:crystal_energy_storage.crystal_type'),
                Text.translatable('kubejs.crystal_energy_storage.crystal_type', tierText))

            ctx.screenText().append(
                api.screenScope().CONTROLLER,
                api.id('kubejs:crystal_energy_storage.flow'),
                Text.translatable('kubejs.crystal_energy_storage.flow', charged, discharged))
        }))
        .register()
    
    event.createMachine('kubejs:bio_chamber')
        .displayNameKey('machine.kubejs.bio_chamber.name')
        .recipePool('kubejs:bio_chamber')
        .allowModifiers()
        .allowMultithreading()
        .allowParallelism()
        .maxParallelAmount(256)
        .recipeBehavior(behavior => {})
        .smartInterface('environment', 0, 6).valueType('integer').end()
        .preServerTick(ctx => {
            if (!ctx.isDue(Atmosphere.PULSE))
                return

            const field = Atmosphere.at(ctx.level(), ctx.controllerPos(), ctx.gameTime())
            Atmosphere.write(ctx, field === null ? 0 : field.code)

            ctx.screenText().append(api.screenScope().CONTROLLER, 
                api.id('kubejs:environment_status'),
                field === null
                    ? Text.translatable('environment.kubejs.none')
                    : Text.translatable(field.nameKey))
        })
        .register()

})