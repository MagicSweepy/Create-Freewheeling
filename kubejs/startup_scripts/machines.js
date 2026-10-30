MMCREvents.startup(event => {

    event.createMachine('kubejs:large_assembler')
        .displayNameKey('machine.kubejs.large_assembler.name')
        .recipePool('kubejs:large_assembler')
        .controllerBaseTexture('create:block/railway_casing')
        .formedPortBaseTexture('create:block/railway_casing')
        .allowMultithreading()
        .allowParallelism()
        .maxParallelAmount(64)
        .register()
})