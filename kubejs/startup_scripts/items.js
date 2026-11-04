const CHROMATIC_DYES = [ 'red', 'yellow', 'blue', 'brown', 'white', 'black' ]

StartupEvents.registry('item', event => {
    event.create('cake_mechanism').food(food => { food
        .nutrition(12)
        .saturation(10)
        .alwaysEdible()
        .effect('minecraft:regeneration', 1000, 0, 1)
    })
    event.create('unfilled_cake_mechanism', 'create:sequenced_assembly').tag('kubejs:incomplete_items')

    event.create('plastic_ingot').tag('c:ingots').tag('c:ingots/plastic')
    event.create('plastic_sheet').tag('c:plates').tag('c:plates/plastic')
    event.create('steel_sheet').tag('c:plates').tag('c:plates/steel')
    event.create('steel_rod').tag('c:rods').tag('c:rods/steel')
    
    event.create('incomplete_sturdy_sheet', 'create:sequenced_assembly').tag('kubejs:incomplete_items')

    event.create('aluminum_sheet').tag('c:plates').tag('c:plates/aluminum')
    event.create('tungsten_sheet').tag('c:plates').tag('c:plates/tungsten')
    event.create('aluminum_rod').tag('c:rods').tag('c:rods/aluminum')
    event.create('tungsten_rod').tag('c:rods').tag('c:rods/tungsten')
    event.create('crushed_raw_tungsten').tag('create:crushed_raw_materials')
    event.create('aluminum_nugget').tag('c:nuggets').tag('c:nuggets/aluminum')
    event.create('tungsten_nugget').tag('c:nuggets').tag('c:nuggets/tungsten')

    event.create('lightning_trigger')
    event.create('incomplete_lightning_trigger').tag('kubejs:incomplete_items')

    event.create('zinc_dust').tag('c:dusts').tag('c:dusts/zinc')
    event.create('copper_dust').tag('c:dusts').tag('c:dusts/copper')

    CHROMATIC_DYES.forEach(dye => { event.create('chorium_' + dye).tag('kubejs:chorium_singles') })

    for (let i = 0; i < CHROMATIC_DYES.length; i++) {
        for (let j = i + 1; j < CHROMATIC_DYES.length; j++) {
            event.create('chorium_' + CHROMATIC_DYES[i] + '_' + CHROMATIC_DYES[j]).tag('kubejs:chorium_pairs')
        }
    }

    event.create('chorium_attuned')
    event.create('incomplete_chorium_ingot', 'create:sequenced_assembly').tag('kubejs:incomplete_items')
})