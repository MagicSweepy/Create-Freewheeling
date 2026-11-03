ServerEvents.recipes(event => {
    event.recipes.create.mixing(Fluid.of('kubejs:hot_air', 1000), [ Fluid.of('kubejs:air', 500), Fluid.of('minecraft:lava', 500) ]).heated()
    event.custom({
        type: 'mmcr:machine_recipe',
        recipe_pool: 'kubejs:chemical_reactor',
        tick_time: 200,
        parallelized: true,
        requirements: [
            {
                type: 'minecraft:fluid',
                io: 'input',
                fluid: { fluid: 'minecraft:lava' },
                amount: 1000,
                consume_chance: 0.0
            },
            {
                type: 'minecraft:fluid',
                io: 'input',
                fluid: { fluid: 'kubejs:air' },
                amount: 1000
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
                stack: { id: 'kubejs:hot_air', amount: 2000 }
            }
        ]
    }).id('kubejs:chemical_reactor/hot_air')

    // Cold gas recipe from data pack 'fluidlogistics:recipe/cooling/cold_gas.json'

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
                amount: 1000,
                consume_chance: 0.0
            },
            {
                type: 'minecraft:fluid',
                io: 'input',
                fluid: { fluid: 'kubejs:air' },
                amount: 1000
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
                stack: { id: 'kubejs:cold_air', amount: 2000 }
            }
        ]
    }).id('kubejs:chemical_reactor/cold_air')

    event.recipes.create.mixing(Fluid.of('kubejs:humid_air', 1000), [ Fluid.of('kubejs:air', 850), Fluid.of('minecraft:water', 150) ])

    event.custom({
        type: 'mmcr:machine_recipe',
        recipe_pool: 'kubejs:chemical_reactor',
        tick_time: 200,
        parallelized: true,
        requirements: [
            {
                type: 'minecraft:fluid',
                io: 'input',
                fluid: { fluid: 'minecraft:water' },
                amount: 1000,
                consume_chance: 0.0
            },
            {
                type: 'minecraft:fluid',
                io: 'input',
                fluid: { fluid: 'kubejs:air' },
                amount: 1000
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
                min_value: 3,
                max_value: 3
            },
            {
                type: 'minecraft:fluid',
                io: 'output',
                stack: { id: 'kubejs:humid_air', amount: 2000 }
            }
        ]
    }).id('kubejs:chemical_reactor/humid_air')

    event.recipes.create.mixing(Fluid.of('kubejs:dry_air', 1000), [ 'minecraft:gunpowder', Fluid.of('kubejs:air', 750) ]).heated()

    event.custom({
        type: 'mmcr:machine_recipe',
        recipe_pool: 'kubejs:chemical_reactor',
        tick_time: 200,
        parallelized: true,
        requirements: [
            {
                type: 'minecraft:item',
                io: 'input',
                item: { item: 'minecraft:gunpowder' },
                count: 1,
                consume_chance: 0.0
            },
            {
                type: 'minecraft:fluid',
                io: 'input',
                fluid: { fluid: 'kubejs:air' },
                amount: 1000
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
                min_value: 4,
                max_value: 4
            },
            {
                type: 'minecraft:fluid',
                io: 'output',
                stack: { id: 'kubejs:dry_air', amount: 2000 }
            }
        ]
    }).id('kubejs:chemical_reactor/dry_air')

    event.recipes.create.mixing(Fluid.of('kubejs:acidic_air', 1000), [ Fluid.of('kubejs:air', 850), Fluid.of('kubejs:sulfuric_acid', 150) ])

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
                amount: 1000,
                consume_chance: 0.0
            },
            {
                type: 'minecraft:fluid',
                io: 'input',
                fluid: { fluid: 'kubejs:air' },
                amount: 1000
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
                min_value: 5,
                max_value: 5
            },
            {
                type: 'minecraft:fluid',
                io: 'output',
                stack: { id: 'kubejs:acidic_air', amount: 2000 }
            }
        ]
    }).id('kubejs:chemical_reactor/acidic_air')

    event.recipes.create.mixing(Fluid.of('kubejs:alkaline_air', 1000), [ Fluid.of('kubejs:air', 700), Fluid.of('kubejs:ammonia', 300) ])
    
    event.custom({
        type: 'mmcr:machine_recipe',
        recipe_pool: 'kubejs:chemical_reactor',
        tick_time: 200,
        parallelized: true,
        requirements: [
            {
                type: 'minecraft:fluid',
                io: 'input',
                fluid: { fluid: 'kubejs:ammonia' },
                amount: 1000,
                consume_chance: 0.0
            },
            {
                type: 'minecraft:fluid',
                io: 'input',
                fluid: { fluid: 'kubejs:air' },
                amount: 1000
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
                min_value: 6,
                max_value: 6
            },
            {
                type: 'minecraft:fluid',
                io: 'output',
                stack: { id: 'kubejs:alkaline_air', amount: 2000 }
            }
        ]
    }).id('kubejs:chemical_reactor/alkaline_air')
})