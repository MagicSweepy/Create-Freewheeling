MMCREvents.server(event => {
    const api = event.getAPI()
    event.createStructure('kubejs:large_alternator')
        .pattern("     ", " YYY ", " YYY ", " YYY ", "     ")
        .pattern(" XXX ", "X   X", "X A X", "X   X", " XXX ")
        .pattern("BBBBB", "B   B", "B A B", "B   B", "BBBBB")
        .pattern(" DDD ", "D   D", "D A D", "D   D", " DDD ")
        .pattern(" DDD ", "D   D", "D A D", "D   D", " DDD ")
        .pattern("BBBBB", "B   B", "B A B", "B   B", "BBBBB")
        .pattern(" XXX ", "X   X", "X A X", "X   X", " XXX ")
        .pattern("     ", " XXX ", " XCX ", " XXX ", "     ")
        .set('X', api.anyOf(
            api.block('create:andesite_casing'),
            api.anyOfEnergyOutput()))
        .set('Y', api.anyOf(
            api.block('create:andesite_casing'),
            api.block('mmcr:create_stress_input_interface')))
        .set('A', api.block('create:andesite_alloy_block'))
        .set('B', api.block('rubberworks:rubber_block'))
        .set('D', api.anyOf(
            api.block('minecraft:copper_grate'),
            api.block('minecraft:exposed_copper_grate'),
            api.block('minecraft:weathered_copper_grate'),
            api.block('minecraft:oxidized_copper_grate'),
            api.block('minecraft:waxed_copper_grate'),
            api.block('minecraft:waxed_exposed_copper_grate'),
            api.block('minecraft:waxed_weathered_copper_grate'),
            api.block('minecraft:waxed_oxidized_copper_grate')))
        .portRequirements(api.portRequirements({ 'create_stress_input_interface': 1 }))
        .controller('C')
        .build()
})
