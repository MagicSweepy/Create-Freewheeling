ServerEvents.tags('item', event => {
    event.add('kubejs:pipes', 'pipez:item_pipe')
    event.add('kubejs:pipes', 'pipez:fluid_pipe')
    event.add('kubejs:pipes', 'pipez:energy_pipe')
    event.add('kubejs:pipes', 'pipez:universal_pipe')
})

ServerEvents.recipes(event => {
    event.remove({ output: 'pipez:wrench' })

    event.remove({ output: 'pipez:filter_destination_tool' })
    event.shaped('pipez:filter_destination_tool',
    [
        ' T ',
        ' P ',
        ' F '
    ],
    {
        P: '#c:plates/iron',
        T: 'create:transmitter',
        F: 'create:filter'
    })

    event.remove({ output: 'pipez:item_pipe' })
    event.shaped('16x pipez:item_pipe',
    [
        'PPP',
        'AIA',
        'PPP'
    ],
    {
        P: '#c:plates/steel',
        A: '#c:plates/aluminum',
        I: 'kubejs:integrated_circuit',
    })

    event.remove({ output: 'pipez:fluid_pipe' })
    event.shaped('16x pipez:fluid_pipe',
    [
        'PPP',
        'AIA',
        'PPP'
    ],
    {
        P: '#c:plates/plastic',
        A: '#c:plates/aluminum',
        I: 'kubejs:integrated_circuit',
    })

    event.remove({ output: 'pipez:energy_pipe' })
    event.shaped('16x pipez:energy_pipe',
    [
        'PPP',
        'AIA',
        'PPP'
    ],
    {
        P: 'rubberworks:rubber_sheet',
        A: '#c:plates/aluminum',
        I: 'kubejs:integrated_circuit',
    })

    event.remove({ output: 'pipez:universal_pipe' })
    event.shapeless('3x pipez:universal_pipe', [ 'pipez:item_pipe', 'pipez:fluid_pipe', 'pipez:energy_pipe' ])

    event.remove({ output: 'pipez:basic_upgrade' })
    event.shaped('2x pipez:basic_upgrade',
    [
        'PQP',
        'AIA',
        'PQP'
    ],
    {
        P: '#c:plates/plastic',
        Q: '#c:plates/iron',
        I: 'kubejs:integrated_circuit',
        A: '#kubejs:pipes'
    })

    event.remove({ output: 'pipez:improved_upgrade' })
    event.shaped('2x pipez:improved_upgrade',
    [
        'PIP',
        'AXA',
        'PIP'
    ],
    {
        I: 'pipez:basic_upgrade',
        X: 'kubejs:integrated_circuit',
        P: '#c:plates/aluminum',
        A: '#kubejs:pipes'
    })

    event.remove({ output: 'pipez:advanced_upgrade' })
    event.shaped('2x pipez:advanced_upgrade',
    [
        'PIP',
        'AXA',
        'PIP'
    ],
    {
        I: 'pipez:improved_upgrade',
        X: 'kubejs:integrated_circuit',
        P: '#c:plates/tungsten',
        A: '#kubejs:pipes'
    })

    event.remove({ output: 'pipez:ultimate_upgrade' })
    event.shaped('2x pipez:ultimate_upgrade',
    [
        'PIP',
        'AXA',
        'PIP'
    ],
    {
        I: 'pipez:advanced_upgrade',
        X: 'kubejs:integrated_circuit',
        P: '#c:plates/chorium',
        A: '#kubejs:pipes'
    })
})