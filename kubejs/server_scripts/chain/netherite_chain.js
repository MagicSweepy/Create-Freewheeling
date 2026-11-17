ServerEvents.recipes(event => {
    event.remove({ id: 'minecraft:netherite_ingot' })
    event.remove({ id: 'avaritia:netherite_ingot_too' })
    event.remove({ id: 'avaritia:ancient_debris_eight' })
    event.remove({ id: 'minecraft:ancient_debris' })

    event.recipes.create.filling('kubejs:hot_netherite_scrap', [ 'minecraft:netherite_scrap', Fluid.of('minecraft:lava', 250) ])
    event.recipes.create.mixing('kubejs:inert_netherite_ingot', [ 'createnuclear:steel_ingot', 'kubejs:netherite_mixture', '2x minecraft:blaze_powder', Fluid.of('minecraft:lava', 250) ]).superheated()
})