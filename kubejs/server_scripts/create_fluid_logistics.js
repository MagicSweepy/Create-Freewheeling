ServerEvents.recipes(event => {
    event.remove({ id: 'fluidlogistics:multi_fluid_tank' })
    event.remove({ id: 'fluidlogistics:horizontal_multi_fluid_tank' })

    event.shapeless('fluidlogistics:multi_fluid_tank', 'createcasing:brass_fluid_tank')
    event.shapeless('fluidlogistics:horizontal_multi_fluid_tank', 'createcasing:brass_fluid_tank')

    event.remove({ output: 'fluidlogistics:redstone_fluid_valve'})
    event.shapeless('fluidlogistics:redstone_fluid_valve', [ '#create:fluid_valves', '#c:dusts/redstone' ])

    event.remove({ output: 'fluidlogistics:oscillating_steam_engine' })
    event.shapeless('fluidlogistics:oscillating_steam_engine', [ '#create:steam_engines', 'create:precision_mechanism' ])
})