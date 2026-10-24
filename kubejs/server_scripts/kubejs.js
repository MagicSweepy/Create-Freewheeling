ServerEvents.tags('item', event => {
    event.add('kubejs:incomplete_items', 'kubejs:unfilled_cake_mechanism')
})

ServerEvents.recipes(event => {
    var incomplete = 'kubejs:unfilled_cake_mechanism'
    event.recipes.create.sequenced_assembly([ 'kubejs:cake_mechanism' ], 'createaddition:cake_base_baked',
    [
        event.recipes.create.cutting(incomplete, incomplete),
        event.recipes.create.filling(incomplete, [ incomplete, Fluid.of('minecraft:milk', 250) ]),
        event.recipes.create.deploying(incomplete, [ incomplete, 'neapolitan:strawberries' ]),
        event.recipes.create.deploying(incomplete, [ incomplete, 'minecraft:sugar' ]),
        event.recipes.create.pressing(incomplete, incomplete)
    ])
    .transitionalItem(incomplete)
    .loops(1)
})