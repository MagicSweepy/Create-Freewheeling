ServerEvents.recipes(event => {
    let postBuilder = PostBuilder.create()

    event.remove({ id: 'create:milling/compat/ae2/sky_stone_block' })
    event.recipes.create.crushing([ '2x ae2:sky_dust', CreateItem.of('neoecoae:raw_tungsten_ore', 0.75) ], 'ae2:sky_stone_block')

    event.recipes.lychee.block_clicking(
        [ SizedIngredientWrapper.of('ae2:sky_dust') ],
        BlockPredicateWrapper.block('minecraft:deepslate'),
        [ postBuilder.dropItem('ae2:sky_stone_block') ])

    event.recipes.create.mixing([ 'extendedae:entro_ingot', 'ae2:sky_stone_block' ], [ 'kubejs:half_bedrock_budding_sky_stone_block', '2x extendedae:entro_dust', 'neoecoae:aluminum_ingot' ]).superheated()

})