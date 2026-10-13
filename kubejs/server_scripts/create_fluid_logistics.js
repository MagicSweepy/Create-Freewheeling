ServerEvents.recipes(event => {
    event.remove({ id: 'fluidlogistics:multi_fluid_tank' })
    event.remove({ id: 'fluidlogistics:horizontal_multi_fluid_tank' })

    event.shapeless('fluidlogistics:multi_fluid_tank', 'createcasing:brass_fluid_tank')
    event.shapeless('fluidlogistics:horizontal_multi_fluid_tank', 'createcasing:brass_fluid_tank')

    event.stonecutting('fluidlogistics:multi_fluid_tank', 'createcasing:brass_fluid_tank')
    event.stonecutting('fluidlogistics:horizontal_multi_fluid_tank', 'createcasing:brass_fluid_tank')
})