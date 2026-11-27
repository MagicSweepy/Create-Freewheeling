ServerEvents.recipes(event => {
    let postBuilder = PostBuilder.create()
    let contextualBuilder = ContextualBuilder.create()

    event.remove({ id: 'minecraft:netherite_ingot' })
    event.remove({ id: 'avaritia:netherite_ingot_too' })
    event.remove({ id: 'avaritia:ancient_debris_eight' })
    event.remove({ id: 'minecraft:ancient_debris' })

    event.recipes.create.filling('kubejs:hot_netherite_scrap', [ 'minecraft:netherite_scrap', Fluid.of('minecraft:lava', 250) ])
    event.recipes.create.mixing('kubejs:inert_netherite_ingot', [ 'createnuclear:steel_ingot', 'kubejs:netherite_mixture', '2x minecraft:blaze_powder', Fluid.of('minecraft:lava', 250) ]).superheated()

    event.recipes.create.haunting('kubejs:wither_powder', 'kubejs:netherite_mixture')
    event.recipes.lychee.item_exploding(
        [
            SizedIngredientWrapper.of('kubejs:wither_powder'),
            SizedIngredientWrapper.of('2x create_enchantment_industry:super_experience_nugget')
        ],
        [
            postBuilder.dropItem('kubejs:active_wither_powder')
        ])

    event.recipes.lychee.block_interacting(
        [ SizedIngredientWrapper.of('kubejs:active_wither_powder') ],
        BlockPredicateWrapper.block('createnuclear:enriched_soul_soil'),
        [ postBuilder.place('kubejs:wither_infused_soul_soil') ])

    event.recipes.create.mixing([ 'minecraft:nether_star', 'minecraft:soul_soil' ], [ 'createaddition:diamond_grit', '4x minecraft:quartz', 'kubejs:wither_infused_soul_soil', Fluid.of('kubejs:nether_air', 500) ]).superheated()
})