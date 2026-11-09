const CHROMATIC_DYES = [ 'red', 'yellow', 'blue', 'brown', 'white', 'black' ]
const MODULE_FAMILIES = ['speed', 'productivity', 'efficiency']
const MODULE_TIERS = ['mk1', 'mk2', 'mk3']

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

    event.create('fluix_coil')
    event.create('incomplete_fluix_coil', 'create:sequenced_assembly').tag('kubejs:incomplete_items')
    event.create('diamond_sheet').tag('c:plates').tag('c:plates/diamond')
    event.create('certus_quartz_sheet').tag('c:plates').tag('c:plates/certus_quartz')
    event.create('fluix_sheet').tag('c:plates').tag('c:plates/fluix')
    event.create('integrated_circuit')

    event.create('aluminum_alloy_sheet').tag('c:plates').tag('c:plates/aluminum_alloy')
    event.create('black_tungsten_alloy_sheet').tag('c:plates').tag('c:plates/black_tungsten_alloy')
    event.create('energized_certus_quartz_sheet').tag('c:plates').tag('c:plates/energized_certus_quartz')
    event.create('energized_fluix_sheet').tag('c:plates').tag('c:plates/energized_fluix')
    event.create('energized_superconductive_sheet').tag('c:plates').tag('c:plates/energized_superconductive')
    event.create('entro_sheet').tag('c:plates').tag('c:plates/entro')
    event.create('supercapacitor')

    MODULE_FAMILIES.forEach(family => {
        MODULE_TIERS.forEach(tier => {
            event.create(`${family}_module_${tier}`).tag('kubejs:modules').maxStackSize(1)
        })
    })

    event.create('biochemical_slime')
    event.create('chemical_gel')
    event.create('nutritional_gel')
    event.create('sculk_spirillum').tag('kubejs:bacteria').tag('kubejs:bacteria/sculk')
    event.create('blaze_thermophile').tag('kubejs:bacteria').tag('kubejs:bacteria/blaze')
    event.create('shadebane_streptococcus').tag('kubejs:bacteria').tag('kubejs:bacteria/ender_eye')
    event.create('sculk_vitamin').tag('c:dusts').tag('c:dusts/sculk_vitamin')
})