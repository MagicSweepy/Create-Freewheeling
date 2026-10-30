ServerEvents.recipes(event => {
    addPlateRecipe('iron', 'minecraft:iron_ingot', 'create:iron_sheet')
    addPlateRecipe('andesite_alloy', 'create:andesite_alloy', 'createcasing:andesite_sheet')
    addPlateRecipe('gold', 'minecraft:gold_ingot', 'create:golden_sheet')
    addPlateRecipe('brass', 'create:brass_ingot', 'create:brass_sheet')
    addPlateRecipe('zinc', 'create:zinc_ingot', 'createaddition:zinc_sheet')
    addPlateRecipe('copper', 'minecraft:copper_ingot', 'create:copper_sheet')
    addPlateRecipe('industrial_iron', 'create:industrial_iron_block', 'createcasing:industrial_iron_sheet')
    addPlateRecipe('weathered_iron', 'create:weathered_iron_block', 'createcasing:weathered_iron_sheet')
    addPlateRecipe('shadow_steel', 'create:shadow_steel', 'createcasing:shadow_steel_sheet')
    addPlateRecipe('refined_radiance', 'create:refined_radiance', 'createcasing:refined_radiance_sheet')
    addPlateRecipe('steel', 'createnuclear:steel_ingot', 'kubejs:steel_sheet')
    addPlateRecipe('graphene', 'createnuclear:coal_dust', 'createnuclear:graphene')
    addPlateRecipe('chorium', 'createcasing:chorium_ingot', 'createcasing:chorium_sheet')
    addPlateRecipe('rubber', 'rubberworks:rubber', 'rubberworks:rubber_sheet')
    addPlateRecipe('plastic', 'kubejs:plastic_ingot', 'kubejs:plastic_sheet')

    addRodRecipe('copper', 'minecraft:copper_ingot', 'createaddition:copper_rod')
    addRodRecipe('iron', 'minecraft:iron_ingot', 'createaddition:iron_rod')
    addRodRecipe('gold', 'minecraft:gold_ingot', 'createaddition:gold_rod')
    addRodRecipe('electrum', 'createaddition:electrum_ingot', 'createaddition:electrum_rod')
    addRodRecipe('brass', 'create:brass_ingot', 'createaddition:brass_rod')
    addRodRecipe('steel', 'createnuclear:steel_ingot', 'kubejs:steel_rod')

    addWireRecipe('copper', 'minecraft:copper_ingot', 'create:copper_sheet', 'createaddition:copper_wire')
    addWireRecipe('iron', 'minecraft:iron_ingot', 'create:iron_sheet', 'createaddition:iron_wire')
    addWireRecipe('gold', 'minecraft:gold_ingot', 'create:golden_sheet', 'createaddition:gold_wire')
    addWireRecipe('electrum', 'createaddition:electrum_ingot', 'createaddition:electrum_sheet', 'createaddition:electrum_wire')

    function addPlateRecipe(name, input, output) {
        event.custom({
            type: 'mmcr:machine_recipe',
            recipe_pool: 'kubejs:large_rolling_mill',
            tick_time: 100,
            requirements: [
                {
                    type: 'minecraft:item',
                    io: 'input',
                    item: { item: 'frequency:brass_symbol_1' },
                    count: 1,
                    consume_chance: 0.0
                },
                {
                    type: 'minecraft:item',
                    io: 'input',
                    item: { item: input },
                    count: 16
                },
                {
                    type: 'minecraft:item',
                    io: 'output',
                    stack: {
                        id: output,
                        count: 16
                    },
                },
                {
                    type: 'create:stress',
                    io: 'input',
                    stress: 16.0,
                    min_rpm: 64
                }
            ],
            priority: 3
        }).id('kubejs:large_rolling_mill/' + name + '_sheet')
    }

    function addRodRecipe(name, input, output) {
        event.custom({
            type: 'mmcr:machine_recipe',
            recipe_pool: 'kubejs:large_rolling_mill',
            tick_time: 100,
            requirements: [
                {
                    type: 'minecraft:item',
                    io: 'input',
                    item: { item: 'frequency:brass_symbol_2' },
                    count: 1,
                    consume_chance: 0.0
                },
                {
                    type: 'minecraft:item',
                    io: 'input',
                    item: { item: input },
                    count: 16
                },
                {
                    type: 'minecraft:item',
                    io: 'output',
                    stack: {
                        id: output,
                        count: 32
                    },
                },
                {
                    type: 'create:stress',
                    io: 'input',
                    stress: 16.0,
                    min_rpm: 64
                }
            ],
            priority: 2
        }).id('kubejs:large_rolling_mill/' + name + '_rod')
    }

    function addWireRecipe(name, input1, input2, output) {
        event.custom({
            type: 'mmcr:machine_recipe',
            recipe_pool: 'kubejs:large_rolling_mill',
            tick_time: 100,
            requirements: [
                {
                    type: 'minecraft:item',
                    io: 'input',
                    item: { item: 'frequency:brass_symbol_3' },
                    count: 1,
                    consume_chance: 0.0
                },
                {
                    type: 'minecraft:item',
                    io: 'input',
                    item: { item: input1 },
                    count: 16
                },
                {
                    type: 'minecraft:item',
                    io: 'output',
                    stack: {
                        id: output,
                        count: 32
                    },
                },
                {
                    type: 'create:stress',
                    io: 'input',
                    stress: 16.0,
                    min_rpm: 64
                }
            ],
            priority: 1
        }).id('kubejs:large_rolling_mill/' + name + '_wire_from_ingot')

        event.custom({
            type: 'mmcr:machine_recipe',
            recipe_pool: 'kubejs:large_rolling_mill',
            tick_time: 100,
            requirements: [
                {
                    type: 'minecraft:item',
                    io: 'input',
                    item: { item: 'frequency:brass_symbol_3' },
                    count: 1,
                    consume_chance: 0.0
                },
                {
                    type: 'minecraft:item',
                    io: 'input',
                    item: { item: input2 },
                    count: 16
                },
                {
                    type: 'minecraft:item',
                    io: 'output',
                    stack: {
                        id: output,
                        count: 32
                    },
                },
                {
                    type: 'create:stress',
                    io: 'input',
                    stress: 16.0,
                    min_rpm: 64
                }
            ],
            priority: 0
        }).id('kubejs:large_rolling_mill/' + name + '_wire_from_sheet')
    }
})