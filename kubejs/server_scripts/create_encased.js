ServerEvents.tags('item', event => {
    event.add('kubejs:cogwheel', 'create:cogwheel')
    event.add('kubejs:large_cogwheel', 'create:large_cogwheel')
    event.add('kubejs:shaft', 'create:shaft')

    addCogwheelTags('andesite')
    addCogwheelTags('brass')
    addCogwheelTags('copper')
    addCogwheelTags('zinc')

    addCogwheelTags('oak')
    addCogwheelTags('birch')
    addCogwheelTags('jungle')
    addCogwheelTags('acacia')
    addCogwheelTags('dark_oak')
    addCogwheelTags('mangrove')
    addCogwheelTags('cherry')
    addCogwheelTags('bamboo')
    addCogwheelTags('crimson')
    addCogwheelTags('warped')

    event.add('kubejs:shaft', 'createcasing:glass_shaft')

    function addCogwheelTags(variant) {
        event.add('kubejs:cogwheel', 'createcasing:' + variant + '_cogwheel')
        event.add('kubejs:large_cogwheel', 'createcasing:' + variant + '_large_cogwheel')
        event.add('kubejs:shaft', 'createcasing:' + variant + '_shaft')
    }

    event.add('kubejs:fluid_pipe', 'create:fluid_pipe')
    event.add('kubejs:mechanical_pump', 'create:mechanical_pump')

    addFluidPipeTags('andesite')
    addFluidPipeTags('brass')
    addFluidPipeTags('zinc')

    function addFluidPipeTags(variant) {
        event.add('kubejs:fluid_pipe', 'createcasing:' + variant + '_fluid_pipe')
        event.add('kubejs:mechanical_pump', 'createcasing:' + variant + '_mechanical_pump')
    }
})

ServerEvents.recipes(event => {
    event.replaceInput({ input: 'create:cogwheel' }, 'create:cogwheel', '#kubejs:cogwheel')
    event.replaceInput({ input: 'create:large_cogwheel' }, 'create:large_cogwheel', '#kubejs:large_cogwheel')
    event.replaceInput({ input: 'create:shaft' }, 'create:shaft', '#kubejs:shaft')
    event.replaceInput({ input: 'create:fluid_pipe' }, 'create:fluid_pipe', '#kubejs:fluid_pipe')

    event.remove({ output: 'create:cogwheel' })
    event.remove({ output: 'create:large_cogwheel' })

    event.shapeless('create:cogwheel', [ '#kubejs:shaft', 'minecraft:spruce_planks' ])
    event.shapeless('create:large_cogwheel', [ '#kubejs:shaft', 'minecraft:spruce_planks', 'minecraft:spruce_planks' ])
    event.shapeless('create:large_cogwheel', [ 'create:cogwheel', 'minecraft:spruce_planks' ])

    resetCogwheelRecipes('oak')
    resetCogwheelRecipes('birch')
    resetCogwheelRecipes('jungle')
    resetCogwheelRecipes('acacia')
    resetCogwheelRecipes('dark_oak')
    resetCogwheelRecipes('mangrove')
    resetCogwheelRecipes('cherry')
    resetCogwheelRecipes('bamboo')
    resetCogwheelRecipes('crimson')
    resetCogwheelRecipes('warped')

    function resetCogwheelRecipes(variant) {
        var cogwheel = 'createcasing:' + variant + '_cogwheel'
        var large_cogwheel = 'createcasing:' + variant + '_large_cogwheel'
        event.remove({ output: cogwheel })
        event.remove({ output: large_cogwheel })

        event.shapeless(cogwheel, [ '#kubejs:shaft', 'minecraft:' + variant + '_planks' ])
        event.shapeless(large_cogwheel, [ '#kubejs:shaft', 'minecraft:' + variant + '_planks', 'minecraft:' + variant + '_planks' ])
        event.shapeless(large_cogwheel, [ cogwheel, 'minecraft:' + variant + '_planks' ])
    }
})