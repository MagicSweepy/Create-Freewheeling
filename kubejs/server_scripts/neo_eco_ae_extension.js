ServerEvents.recipes(event => {
    event.recipes.create.pressing('kubejs:aluminum_sheet', 'neoecoae:aluminum_ingot')
    event.recipes.create.pressing('kubejs:tungsten_sheet', 'neoecoae:tungsten_ingot')

    event.remove({ id: 'create:crushing/aluminum_ore' })
    event.recipes.create.crushing([
        'create:crushed_raw_aluminum',
        CreateItem.of('create:crushed_raw_aluminum', 0.75),
        CreateItem.of('create:experience_nugget', 0.75),
        CreateItem.of('minecraft:end_stone', 0.12)
    ], 'neoecoae:aluminum_ore')

    event.remove({ id: 'neoecoae:tungsten_ingot_from_ores_tungsten_smelting' })
    event.remove({ id: 'neoecoae:tungsten_ingot_from_raw_materials_tungsten_smelting' })
    event.remove({ id: 'neoecoae:tungsten_ingot_from_ores_tungsten_blasting' })
    event.remove({ id: 'neoecoae:tungsten_ingot_from_raw_materials_tungsten_blasting' })
    event.smelting('neoecoae:aluminum_ingot', 'create:crushed_raw_aluminum')
    event.blasting('neoecoae:aluminum_ingot', 'create:crushed_raw_aluminum')
    event.recipes.create.splashing([ '9x kubejs:aluminum_nugget', CreateItem.of('create:experience_nugget', 0.50) ], 'create:crushed_raw_aluminum')
    event.smelting('neoecoae:tungsten_ingot', 'kubejs:crushed_raw_tungsten')
    event.blasting('neoecoae:tungsten_ingot', 'kubejs:crushed_raw_tungsten')
    event.recipes.create.splashing([ '9x kubejs:tungsten_nugget', CreateItem.of('create:experience_nugget', 0.50) ], 'kubejs:crushed_raw_tungsten')

    event.shapeless('9x kubejs:aluminum_nugget', 'neoecoae:aluminum_ingot')
    event.shapeless('9x kubejs:tungsten_nugget', 'neoecoae:tungsten_ingot')

    event.shaped('neoecoae:aluminum_ingot',
    [
        'NNN',
        'NNN',
        'NNN'
    ],
    {
        N: 'kubejs:aluminum_nugget'
    })

    event.shaped('neoecoae:tungsten_ingot',
    [
        'NNN',
        'NNN',
        'NNN'
    ],
    {
        N: 'kubejs:tungsten_nugget'
    })
})