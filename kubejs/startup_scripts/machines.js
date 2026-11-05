const $Long = Java.loadClass('java.lang.Long')

MMCREvents.startup(event => {
    const api = event.getAPI()

    event.createMachine('kubejs:large_assembler')
        .displayNameKey('machine.kubejs.large_assembler.name')
        .recipePool('kubejs:large_assembler')
        .controllerBaseTexture('create:block/railway_casing')
        .formedPortBaseTexture('create:block/railway_casing')
        .allowMultithreading()
        .allowParallelism()
        .maxParallelAmount(64)
        .register()

    event.createMachine('kubejs:large_crusher')
        .displayNameKey('machine.kubejs.large_crusher.name')
        .recipePool('kubejs:large_crusher')
        .controllerBaseTexture('create:block/brass_casing')
        .formedPortBaseTexture('create:block/brass_casing')
        .allowMultithreading()
        .allowParallelism()
        .maxParallelAmount(64)
        .register()

    event.createMachine('kubejs:large_rolling_mill')
        .displayNameKey('machine.kubejs.large_rolling_mill.name')
        .recipePool('kubejs:large_rolling_mill')
        .controllerBaseTexture('createcasing:block/casing/zinc')
        .formedPortBaseTexture('createcasing:block/casing/zinc')
        .allowMultithreading()
        .allowParallelism()
        .maxParallelAmount(64)
        .register()

    event.createMachine('kubejs:large_alloy_smelter')
        .displayNameKey('machine.kubejs.large_alloy_smelter.name')
        .recipePool('kubejs:large_alloy_smelter')
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
        .displayNameKey('machine.kubejs.lightning_processor')
        .recipePool('kubejs:lightning_processor')
        .controllerBaseTexture('create:block/shadow_steel_casing')
        .formedPortBaseTexture('create:block/shadow_steel_casing')
        .allowMultithreading()
        .allowParallelism()
        .maxParallelAmount(256)
        .register()
})