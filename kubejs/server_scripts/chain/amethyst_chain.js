ServerEvents.recipes(event => {
    var incomplete = 'minecraft:medium_amethyst_bud'
    event.recipes.create.sequenced_assembly([ 'minecraft:amethyst_cluster' ], 'minecraft:small_amethyst_bud',
    [
        event.recipes.create.filling(incomplete, [ incomplete, Fluid.of('minecraft:water', 100) ]),
        event.recipes.create.filling(incomplete, [ incomplete, Fluid.of('minecraft:water', 100) ])
    ])
    .transitionalItem(incomplete)
    .loops(1)

    event.remove({ id: 'create:crushing/amethyst_cluster' })
    event.recipes.create.crushing('4x minecraft:amethyst_shard', 'minecraft:amethyst_cluster')
})