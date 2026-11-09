ServerEvents.recipes(event => {
    event.custom({
        type: 'mmcr:machine_recipe',
        recipe_pool: 'kubejs:industrial_centrifuge',
        tick_time: 800,
        parallelized: true,
        requirements: [
            {
                type: 'minecraft:fluid',
                io: 'input',
                fluid: { fluid: 'kubejs:cosmic_waste_water' },
                amount: 1000
            },
            {
                type: 'neoforge:energy',
                io: 'input',
                fe_per_tick: 1440
            },
            {
                type: 'create:stress',
                io: 'input',
                stress: 128.0,
                min_rpm: 64
            },
            {
                type: 'minecraft:item',
                io: 'output',
                stack: {
                    id: 'kubejs:cosmic_sludge',
                    count: 1
                }
            },
            {
                type: 'minecraft:fluid',
                io: 'output',
                stack: { id: 'kubejs:cosmic_water', amount: 750 }
            }
        ]
    }).id('kubejs:industrial_centrifuge/cosmic_water_recycle')

    event.custom({
        type: 'mmcr:machine_recipe',
        recipe_pool: 'kubejs:industrial_centrifuge',
        tick_time: 200,
        parallelized: true,
        requirements: [
            {
                type: 'minecraft:item',
                io: 'input',
                item: { item: 'kubejs:cosmic_sludge' },
                count: 1
            },
            {
                type: 'neoforge:energy',
                io: 'input',
                fe_per_tick: 720
            },
            {
                type: 'create:stress',
                io: 'input',
                stress: 128.0,
                min_rpm: 64
            },
            {
                type: 'minecraft:item',
                io: 'output',
                stack: {
                    id: 'neoecoae:tungsten_dust',
                    count: 1
                }
            },
            {
                type: 'minecraft:item',
                io: 'output',
                stack: {
                    id: 'neoecoae:aluminum_dust',
                    count: 1
                }
            },
            {
                type: 'minecraft:item',
                io: 'output',
                stack: {
                    id: 'createnuclear:thorium_dust',
                    count: 2
                }
            },
            {
                type: 'minecraft:item',
                io: 'output',
                stack: {
                    id: 'ae2:sky_dust',
                    count: 4
                }
            }
        ]
    }).id('kubejs:industrial_centrifuge/cosmic_sludge')

    event.custom({
        type: 'mmcr:machine_recipe',
        recipe_pool: 'kubejs:industrial_centrifuge',
        tick_time: 400,
        parallelized: true,
        requirements: [
            {
                type: 'minecraft:item',
                io: 'input',
                item: { item: 'kubejs:sculk_spirillum' },
                count: 1
            },
            {
                type: 'neoforge:energy',
                io: 'input',
                fe_per_tick: 2880
            },
            {
                type: 'create:stress',
                io: 'input',
                stress: 96.0,
                min_rpm: 64
            },
            {
                type: 'minecraft:item',
                io: 'output',
                stack: {
                    id: 'kubejs:sculk_vitamin',
                    count: 1
                }
            }
        ]
    }).id('kubejs:industrial_centrifuge/sculk_vitamin')

    event.custom({
        type: 'mmcr:machine_recipe',
        recipe_pool: 'kubejs:industrial_centrifuge',
        tick_time: 400,
        parallelized: true,
        requirements: [
            {
                type: 'minecraft:item',
                io: 'input',
                item: { item: 'kubejs:blaze_thermophile' },
                count: 1
            },
            {
                type: 'neoforge:energy',
                io: 'input',
                fe_per_tick: 2880
            },
            {
                type: 'create:stress',
                io: 'input',
                stress: 96.0,
                min_rpm: 64
            },
            {
                type: 'minecraft:item',
                io: 'output',
                stack: {
                    id: 'avaritia:blaze_cube',
                    count: 1
                }
            }
        ]
    }).id('kubejs:industrial_centrifuge/blaze_thermophile')

    event.custom({
        type: 'mmcr:machine_recipe',
        recipe_pool: 'kubejs:industrial_centrifuge',
        tick_time: 400,
        parallelized: true,
        requirements: [
            {
                type: 'minecraft:item',
                io: 'input',
                item: { item: 'kubejs:shadebane_streptococcus' },
                count: 1
            },
            {
                type: 'neoforge:energy',
                io: 'input',
                fe_per_tick: 2880
            },
            {
                type: 'create:stress',
                io: 'input',
                stress: 96.0,
                min_rpm: 64
            },
            {
                type: 'minecraft:item',
                io: 'output',
                stack: {
                    id: 'avaritia:endest_pearl',
                    count: 1
                }
            }
        ]
    }).id('kubejs:industrial_centrifuge/shadebane_streptococcus')
})