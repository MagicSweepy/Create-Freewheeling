ServerEvents.recipes(event => {
    event.custom({
        type: 'mmcr:machine_recipe',
        recipe_pool: 'kubejs:bio_chamber',
        tick_time: 800,
        parallelized: true,
        requirements: [
            {
                type: 'minecraft:item',
                io: 'input',
                item: { item: 'createaddition:biomass' },
                count: 16
            },
            {
                type: 'minecraft:fluid',
                io: 'input',
                fluid: { fluid: 'kubejs:cosmic_water' },
                amount: 4000
            },
            {
                type: 'neoforge:energy',
                io: 'input',
                fe_per_tick: 1440
            },
            {
                type: 'mmcr:smart_interface',
                io: 'input',
                interface_type: 'environment',
                min_value: 3,
                max_value: 3
            },
            {
                type: 'minecraft:item',
                io: 'output',
                stack: {
                    id: 'kubejs:biochemical_slime',
                    count: 4
                }
            },
            {
                type: 'minecraft:fluid',
                io: 'output',
                stack: { id: 'kubejs:cosmic_waste_water', amount: 4000 }
            }
        ]
    }).id('kubejs:bio_chamber/biochemical_slime')

    event.custom({
        type: 'mmcr:machine_recipe',
        recipe_pool: 'kubejs:bio_chamber',
        tick_time: 1600,
        parallelized: true,
        requirements: [
            {
                type: 'minecraft:item',
                io: 'input',
                item: { item: 'kubejs:biochemical_slime' },
                count: 4
            },
            {
                type: 'minecraft:item',
                io: 'input',
                item: { item: 'kubejs:chemical_gel' },
                count: 16
            },
            {
                type: 'minecraft:item',
                io: 'input',
                item: { item: 'createnuclear:graphene' },
                count: 8
            },
            {
                type: 'minecraft:fluid',
                io: 'input',
                fluid: { fluid: 'kubejs:cosmic_water' },
                amount: 4000
            },
            {
                type: 'neoforge:energy',
                io: 'input',
                fe_per_tick: 5760
            },
            {
                type: 'mmcr:smart_interface',
                io: 'input',
                interface_type: 'environment',
                min_value: 6,
                max_value: 6
            },
            {
                type: 'minecraft:item',
                io: 'output',
                stack: {
                    id: 'kubejs:nutritional_gel',
                    count: 32
                }
            },
            {
                type: 'minecraft:fluid',
                io: 'output',
                stack: { id: 'kubejs:cosmic_waste_water', amount: 4000 }
            }
        ]
    }).id('kubejs:bio_chamber/nutritional_gel')

    event.custom({
        type: 'mmcr:machine_recipe',
        recipe_pool: 'kubejs:bio_chamber',
        tick_time: 1600,
        parallelized: true,
        requirements: [
            {
                type: 'minecraft:item',
                io: 'input',
                item: { item: 'minecraft:sculk' },
                count: 16
            },
            {
                type: 'minecraft:item',
                io: 'input',
                item: { item: 'kubejs:nutritional_gel' },
                count: 1
            },
            {
                type: 'minecraft:fluid',
                io: 'input',
                fluid: { fluid: 'kubejs:cosmic_water' },
                amount: 4000
            },
            {
                type: 'neoforge:energy',
                io: 'input',
                fe_per_tick: 5760
            },
            {
                type: 'mmcr:smart_interface',
                io: 'input',
                interface_type: 'environment',
                min_value: 2,
                max_value: 2
            },
            {
                type: 'minecraft:item',
                io: 'output',
                stack: {
                    id: 'kubejs:sculk_spirillum',
                    count: 2
                }
            },
            {
                type: 'minecraft:fluid',
                io: 'output',
                stack: { id: 'kubejs:cosmic_waste_water', amount: 4000 }
            }
        ]
    }).id('kubejs:bio_chamber/sculk_spirillum')

    event.custom({
        type: 'mmcr:machine_recipe',
        recipe_pool: 'kubejs:bio_chamber',
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
                type: 'minecraft:item',
                io: 'input',
                item: { item: 'kubejs:nutritional_gel' },
                count: 1
            },
            {
                type: 'minecraft:fluid',
                io: 'input',
                fluid: { fluid: 'kubejs:cosmic_water' },
                amount: 1000
            },
            {
                type: 'neoforge:energy',
                io: 'input',
                fe_per_tick: 2880
            },
            {
                type: 'mmcr:smart_interface',
                io: 'input',
                interface_type: 'environment',
                min_value: 2,
                max_value: 2
            },
            {
                type: 'minecraft:item',
                io: 'output',
                stack: {
                    id: 'kubejs:sculk_spirillum',
                    count: 2
                }
            },
            {
                type: 'minecraft:fluid',
                io: 'output',
                stack: { id: 'kubejs:cosmic_waste_water', amount: 1000 }
            }
        ]
    }).id('kubejs:bio_chamber/sculk_spirillum_recycle')
})