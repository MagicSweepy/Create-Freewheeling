StartupEvents.registry('item', event => {
    event.create('cake_mechanism').food(food => { food
        .nutrition(12)
        .saturation(10)
        .alwaysEdible()
        .effect('minecraft:regeneration', 1000, 0, 1)
    })
    event.create('unfilled_cake_mechanism', 'create:sequenced_assembly').tag('kubejs:incomplete_items')

    event.create('plastic_ingot').tag('c:ingots/plastic')
    event.create('plastic_sheet').tag('c:plates/plastic')
    event.create('steel_sheet').tag('c:plates/steel')
    event.create('steel_rod').tag('c:rods/steel')
    
    event.create('incomplete_sturdy_sheet', 'create:sequenced_assembly').tag('kubejs:incomplete_items')
})