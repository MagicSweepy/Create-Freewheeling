ServerEvents.recipes(event => {
    event.recipes.create.mixing('kubejs:diamond_crystal_seed', [ 'minecraft:coal_block', Fluid.of('minecraft:lava', 500) ]).superheated()

    var incomplete = 'kubejs:incomplete_diamond_boule'
    event.recipes.create.sequenced_assembly([ 'kubejs:diamond_boule' ], 'kubejs:diamond_crystal_seed',
    [
        event.recipes.create.filling(incomplete, [ incomplete, Fluid.of('minecraft:water', 100) ]),
        event.recipes.create.filling(incomplete, [ incomplete, Fluid.of('minecraft:water', 100) ])
    ])
    .transitionalItem(incomplete)
    .loops(1)

    event.recipes.create.cutting([ 'minecraft:diamond', 'kubejs:diamond_crystal_seed' ], 'kubejs:diamond_boule')

    event.custom({
        type: 'create:mixing',
        ingredients: [
            {
                item: 'minecraft:coal_block'
            },
            {
                type: 'neoforge:components',
                amount: 250,
                fluids: 'create:potion',
                components: {
                    'create:potion_fluid_bottle_type': 'regular',
                    'minecraft:potion_contents': {
                        potion: 'minecraft:oozing'
                    }
                }
            }
        ],
        results: [
            {
                id: "kubejs:emerald_crystal_seed",
                count: 1
            }
        ],
        heat_requirement: 'superheated'
    }).id("kubejs:mixing_emerald_crystal_seed_from_oozing");

    var incomplete2 = 'kubejs:incomplete_emerald_boule'
    event.recipes.create.sequenced_assembly([ 'kubejs:emerald_boule' ], 'kubejs:emerald_crystal_seed',
    [
        event.recipes.create.filling(incomplete2, [ incomplete2, Fluid.of('minecraft:water', 100) ]),
        event.recipes.create.filling(incomplete2, [ incomplete2, Fluid.of('minecraft:water', 100) ])
    ])
    .transitionalItem(incomplete2)
    .loops(1)

    event.recipes.create.cutting([ 'minecraft:emerald', 'kubejs:emerald_crystal_seed' ], 'kubejs:emerald_boule')
})