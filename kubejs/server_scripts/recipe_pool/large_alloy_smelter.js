ServerEvents.recipes(event => {
    event.custom({
        type: 'mmcr:machine_recipe',
        recipe_pool: 'kubejs:large_alloy_smelter',
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
                item: { item: 'minecraft:andesite' },
                count: 16
            },
            {
                type: 'minecraft:item',
                io: 'input',
                item: { item: 'neoecoae:iron_dust' },
                count: 1
            },
            {
                type: 'minecraft:item',
                io: 'output',
                stack: {
                    id: 'create:andesite_alloy',
                    count: 64
                },
            },
            {
                type: 'create:stress',
                io: 'input',
                stress: 24.0,
                min_rpm: 64
            },
            {
                type: 'neoforge:energy',
                io: 'input',
                fe_per_tick: 72
            }
        ]
    }).id('kubejs:large_alloy_smelter/andesite_alloy_iron')

    event.custom({
        type: 'mmcr:machine_recipe',
        recipe_pool: 'kubejs:large_alloy_smelter',
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
                item: { item: 'minecraft:andesite' },
                count: 16
            },
            {
                type: 'minecraft:item',
                io: 'input',
                item: { item: 'kubejs:zinc_dust' },
                count: 1
            },
            {
                type: 'minecraft:item',
                io: 'output',
                stack: {
                    id: 'create:andesite_alloy',
                    count: 64
                },
            },
            {
                type: 'create:stress',
                io: 'input',
                stress: 24.0,
                min_rpm: 64
            },
            {
                type: 'neoforge:energy',
                io: 'input',
                fe_per_tick: 72
            }
        ]
    }).id('kubejs:large_alloy_smelter/andesite_alloy_zinc')

    event.custom({
        type: 'mmcr:machine_recipe',
        recipe_pool: 'kubejs:large_alloy_smelter',
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
                item: { item: 'kubejs:copper_dust' },
                count: 16
            },
            {
                type: 'minecraft:item',
                io: 'input',
                item: { item: 'kubejs:zinc_dust' },
                count: 16
            },
            {
                type: 'minecraft:item',
                io: 'output',
                stack: {
                    id: 'create:brass_ingot',
                    count: 64
                },
            },
            {
                type: 'create:stress',
                io: 'input',
                stress: 32.0,
                min_rpm: 64
            },
            {
                type: 'neoforge:energy',
                io: 'input',
                fe_per_tick: 96
            }
        ]
    }).id('kubejs:large_alloy_smelter/brass')

    event.custom({
        type: 'mmcr:machine_recipe',
        recipe_pool: 'kubejs:large_alloy_smelter',
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
                item: { item: 'neoecoae:aluminum_dust' },
                count: 32
            },
            {
                type: 'minecraft:item',
                io: 'input',
                item: { item: 'neoecoae:iron_dust' },
                count: 16
            },
            {
                type: 'minecraft:item',
                io: 'input',
                item: { item: 'extendedae:quartz_blend' },
                count: 16
            },
            {
                type: 'minecraft:item',
                io: 'output',
                stack: {
                    id: 'neoecoae:aluminum_alloy_ingot',
                    count: 64
                },
            },
            {
                type: 'create:stress',
                io: 'input',
                stress: 64.0,
                min_rpm: 64
            },
            {
                type: 'neoforge:energy',
                io: 'input',
                fe_per_tick: 128
            }
        ]
    }).id('kubejs:large_alloy_smelter/aluminum_alloy')

    event.custom({
        type: 'mmcr:machine_recipe',
        recipe_pool: 'kubejs:large_alloy_smelter',
        tick_time: 100,
        requirements: [
            {
                type: 'minecraft:item',
                io: 'input',
                item: { item: 'frequency:brass_symbol_4' },
                count: 1,
                consume_chance: 0.0
            },
            {
                type: 'minecraft:item',
                io: 'input',
                item: { item: 'neoecoae:tungsten_dust' },
                count: 24
            },
            {
                type: 'minecraft:item',
                io: 'input',
                item: { item: 'create:shadow_steel' },
                count: 16
            },
            {
                type: 'minecraft:item',
                io: 'input',
                item: { item: 'neoecoae:energized_fluix_crystal_dust' },
                count: 12
            },
            {
                type: 'minecraft:item',
                io: 'input',
                item: { item: 'ae2:sky_dust' },
                count: 12
            },
            {
                type: 'minecraft:item',
                io: 'output',
                stack: {
                    id: 'neoecoae:black_tungsten_alloy_ingot',
                    count: 64
                },
            },
            {
                type: 'create:stress',
                io: 'input',
                stress: 72.0,
                min_rpm: 64
            },
            {
                type: 'neoforge:energy',
                io: 'input',
                fe_per_tick: 156
            }
        ]
    }).id('kubejs:large_alloy_smelter/black_tungsten_alloy')
})