ServerEvents.recipes(event => {
    event.recipes.create.filling('minecraft:echo_shard', [ 'minecraft:amethyst_shard', Fluid.of('createendergateway:active_ender_solution', 100) ])

    event.recipes.create.mixing(Fluid.of('kubejs:acidified_vitamin', 200), [ 'kubejs:sculk_vitamin', '2x kubejs:biochemical_slime', Fluid.of('kubejs:sulfuric_acid', 500) ]).superheated()

    event.recipes.create.compacting('kubejs:epoxy_resin', [ '2x rubberworks:rubber_sheet', Fluid.of('kubejs:acidified_vitamin', 400) ]).superheated()
})