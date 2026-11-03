ServerEvents.recipes(event => {
    event.custom({
        type: 'mmcr:machine_recipe',
        recipe_pool: 'kubejs:chemical_reactor',
        tick_time: 200,
        parallelized: true,
        requirements: [
            {
                type: 'minecraft:fluid',
                io: 'input',
                fluid: { fluid: 'createnuclear:nitrogen' },
                amount: 1000
            },
            {
                type: 'minecraft:fluid',
                io: 'input',
                fluid: { fluid: 'kubejs:hydrogen' },
                amount: 3000
            },
            {
                type: 'neoforge:energy',
                io: 'input',
                fe_per_tick: 32
            },
            {
                type: 'mmcr:smart_interface',
                io: 'input',
                interface_type: 'environment',
                min_value: 2,
                max_value: 2
            },
            {
                type: 'minecraft:fluid',
                io: 'output',
                stack: { id: 'kubejs:ammonia', amount: 4000 }
            }
        ]
    }).id('kubejs:chemical_reactor/ammonia')

    event.custom({
        type: 'mmcr:machine_recipe',
        recipe_pool: 'kubejs:chemical_reactor',
        tick_time: 800,
        parallelized: true,
        requirements: [
            {
                type: 'minecraft:item',
                io: 'input',
                item: { item: 'kubejs:lightning_trigger' },
                count: 1,
                consume_chance: 0.0
            },
            {
                type: 'minecraft:fluid',
                io: 'input',
                fluid: { fluid: 'minecraft:water' },
                amount: 1000
            },
            {
                type: 'neoforge:energy',
                io: 'input',
                fe_per_tick: 64
            },
            {
                type: 'mmcr:smart_interface',
                io: 'input',
                interface_type: 'environment',
                min_value: 1,
                max_value: 1
            },
            {
                type: 'minecraft:fluid',
                io: 'output',
                stack: { id: 'kubejs:hydrogen', amount: 2000 }
            },
            {
                type: 'minecraft:fluid',
                io: 'output',
                stack: { id: 'kubejs:oxygen', amount: 1000 }
            }
        ]
    }).id('kubejs:chemical_reactor/water_electrolysis')

    event.custom({
        type: 'mmcr:machine_recipe',
        recipe_pool: 'kubejs:chemical_reactor',
        tick_time: 200,
        parallelized: true,
        requirements: [
            {
                type: 'minecraft:fluid',
                io: 'input',
                fluid: { fluid: 'kubejs:sulfuric_acid' },
                amount: 1000
            },
            {
                type: 'minecraft:fluid',
                io: 'input',
                fluid: { fluid: 'createdieselgenerators:ethanol' },
                amount: 1000
            },
            {
                type: 'neoforge:energy',
                io: 'input',
                fe_per_tick: 48
            },
            {
                type: 'mmcr:smart_interface',
                io: 'input',
                interface_type: 'environment',
                min_value: 1,
                max_value: 1
            },
            {
                type: 'minecraft:fluid',
                io: 'output',
                stack: { id: 'kubejs:ethylene', amount: 2000 }
            }
        ]
    }).id('kubejs:chemical_reactor/ethylene')

    event.custom({
        type: 'mmcr:machine_recipe',
        recipe_pool: 'kubejs:chemical_reactor',
        tick_time: 200,
        parallelized: true,
        requirements: [
            {
                type: 'minecraft:fluid',
                io: 'input',
                fluid: { fluid: 'kubejs:ethylene' },
                amount: 2000
            },
            {
                type: 'minecraft:fluid',
                io: 'input',
                fluid: { fluid: 'kubejs:oxygen' },
                amount: 500
            },
            {
                type: 'neoforge:energy',
                io: 'input',
                fe_per_tick: 64
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
                    id: 'kubejs:plastic_ingot',
                    count: 16
                },
            }
        ]
    }).id('kubejs:chemical_reactor/plastic_oxidization')
})
