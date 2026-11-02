ServerEvents.recipes(event => {
    // Test
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
                amount: 250
            },
            {
                type: 'minecraft:fluid',
                io: 'input',
                fluid: { fluid: 'minecraft:water' },
                amount: 250
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
                min_value: 1,
                max_value: 1
            },
            {
                type: 'minecraft:fluid',
                io: 'output',
                stack: { id: 'createdieselgenerators:ethanol', amount: 500 }
            }
        ]
    }).id('kubejs:chemical_reactor/ethanol_from_ethylene')

    event.custom({
        type: 'mmcr:machine_recipe',
        recipe_pool: 'kubejs:chemical_reactor',
        tick_time: 100,
        parallelized: true,
        requirements: [
            {
                type: 'minecraft:fluid',
                io: 'input',
                fluid: { fluid: 'minecraft:water' },
                amount: 1000
            },
            {
                type: 'neoforge:energy',
                io: 'input',
                fe_per_tick: 16
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
                stack: { id: 'minecraft:ice', count: 1 }
            }
        ]
    }).id('kubejs:chemical_reactor/ice_from_water')

    // #endregion
})
