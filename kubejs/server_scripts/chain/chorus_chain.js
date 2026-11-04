ServerEvents.recipes(event => {
    event.custom({
        type: 'mmcr:machine_recipe',
        recipe_pool: 'kubejs:chemical_reactor',
        tick_time: 200,
        parallelized: true,
        requirements: [
            {
                type: 'minecraft:item',
                io: 'input',
                item: { item: 'minecraft:popped_chorus_fruit' },
                count: 1,
            },
            {
                type: 'minecraft:fluid',
                io: 'input',
                fluid: { fluid: 'kubejs:sulfuric_acid' },
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
                stack: { id: 'kubejs:chorusic_acid', amount: 1000 }
            }
        ]
    }).id('kubejs:chemical_reactor/chorusic_acid')

    var incomplete = 'kubejs:incomplete_chorium_ingot'

    event.remove({ id: 'createcasing:sequenced_assembly/chorium_ingot' })
    event.recipes.create.sequenced_assembly([ '4x createcasing:chorium_ingot' ], 'create:polished_rose_quartz',
    [
        event.recipes.create.filling(incomplete, [ incomplete, Fluid.of('kubejs:chorusic_acid', 250) ]),
        event.recipes.create.filling(incomplete, [ incomplete, Fluid.of('kubejs:hydrogen', 200) ]),
        event.recipes.create.filling(incomplete, [ incomplete, Fluid.of('createendergateway:dormant_ender_solution', 100) ]),
        event.recipes.create.pressing(incomplete, [ incomplete ]),
        event.recipes.create.cutting(incomplete, [ incomplete ])
    ])
    .transitionalItem(incomplete)
    .loops(1)
})