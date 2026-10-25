ServerEvents.recipes(event => {
    event.remove({ id: 'create:crushing/crimsite' })
    event.remove({ id: 'create:crushing/crimsite_recycling' })

    event.recipes.create.crushing('2x create:crushed_raw_iron', 'create:crimsite')
    event.recipes.create.compacting('create:crimsite', [ 'minecraft:iron_ingot', 'minecraft:stone', Fluid.of('minecraft:lava', 250) ]).heated()

    event.remove({ id: 'create:crushing/veridium' })
    event.remove({ id: 'create:crushing/veridium_recycling' })
    event.remove({ id: 'create:splashing/crushed_raw_copper' })

    event.recipes.create.crushing('2x create:crushed_raw_copper', 'create:veridium')
    event.recipes.create.compacting('create:veridium', [ 'minecraft:copper_ingot', 'minecraft:cobblestone', Fluid.of('minecraft:lava', 250) ]).heated()
    event.recipes.create.splashing([ '9x create:copper_nugget', CreateItem.of('ae2:silicon', 0.50) ], 'create:crushed_raw_copper')

    event.remove({ id: 'create:crushing/asurine' })
    event.remove({ id: 'create:crushing/asurine_recycling' })

    event.recipes.create.crushing('2x create:crushed_raw_zinc', 'create:asurine')
    event.recipes.create.compacting('create:asurine', [ 'create:zinc_ingot', 'minecraft:gravel', Fluid.of('minecraft:lava', 250) ]).heated()

    event.remove({ id: 'create:crushing/ochrum' })
    event.remove({ id: 'create:crushing/ochrum_recycling' })

    event.recipes.create.crushing('2x create:crushed_raw_gold', 'create:ochrum')
    event.recipes.create.compacting('create:ochrum', [ 'minecraft:gold_ingot', 'minecraft:sand', Fluid.of('minecraft:lava', 250) ]).heated()

    event.remove({ id: 'create:compacting/andesite_from_flint' })
    event.recipes.create.compacting('minecraft:andesite', [ 'minecraft:flint', 'minecraft:gravel', Fluid.of('minecraft:lava', 250) ]).heated()

    event.remove({ id: 'create:compacting/granite_from_flint' })
    event.recipes.create.compacting('minecraft:granite', [ 'minecraft:flint', 'minecraft:red_sand', Fluid.of('minecraft:lava', 250) ]).heated()

    event.remove({ id: 'create:compacting/diorite_from_flint' })
    event.recipes.create.compacting('minecraft:diorite', [ 'minecraft:flint', 'minecraft:calcite', Fluid.of('minecraft:lava', 250) ]).heated()
})