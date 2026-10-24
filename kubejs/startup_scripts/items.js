StartupEvents.registry('item', event => {
    event.create('cake_mechanism').food(food => { food
        .nutrition(12)
        .saturation(10)
        .alwaysEdible()
        .effect('minecraft:regeneration', 1000, 0, 1)
    })
    event.create('unfilled_cake_mechanism', 'create:sequenced_assembly')
})