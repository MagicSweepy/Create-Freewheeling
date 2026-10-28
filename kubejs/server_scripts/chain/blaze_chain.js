ServerEvents.recipes(event => {
    var incomplete = 'create:empty_blaze_burner'

    event.recipes.create.sequenced_assembly([ '2x create:blaze_burner' ], 'create:blaze_burner',
    [
        event.recipes.create.deploying(incomplete, [ incomplete, 'create:empty_blaze_burner' ]),
        event.recipes.create.deploying(incomplete, [ incomplete, 'minecraft:blaze_rod' ]),
        event.recipes.create.filling(incomplete, [ incomplete, Fluid.of('minecraft:lava', 1000) ]),
        event.recipes.create.pressing(incomplete, incomplete)
    ])
    .transitionalItem(incomplete)
    .loops(1)
})