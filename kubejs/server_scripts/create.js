ServerEvents.recipes(event => {
    event.shaped('create:stressometer', [
        '   ',
        ' A ',
        ' C '
    ],
    {
        A: 'create:andesite_casing',
        C: 'minecraft:compass'
    })

    event.remove({ output: 'create:steam_engine' })
    event.shaped('create:steam_engine',
    [
        'AG ',
        ' SR',
        ' T '
    ],
    {
        A: '#c:ingots/andesite_alloy',
        G: '#c:plates/gold',
        S: '#create:shafts',
        R: 'rubberworks:rubber_sheet',
        T: 'create:fluid_tank'
    })

    event.remove({ output: 'create:item_drain' })
    event.shaped('create:item_drain',
    [
        ' B ',
        ' C ',
        ' P '
    ],
    {
        B: 'minecraft:iron_bars',
        C: 'create:copper_casing',
        P: 'create:fluid_pipe'
    })

    event.remove({ output: 'create:spout' })
    event.shaped('create:spout',
    [
        ' R ',
        ' C ',
        ' P '
    ],
    {
        R: 'rubberworks:rubber_sheet',
        C: 'create:copper_casing',
        P: 'create:fluid_pipe'
    })

    event.remove({ output: 'create:hose_pulley' })
    event.shaped('create:hose_pulley',
    [
        ' C ',
        ' B ',
        ' P '
    ],
    {
        C: 'create:copper_casing',
        B: 'rubberworks:rubber_block',
        P: 'create:fluid_pipe'
    })

    event.remove({ output: 'create:portable_storage_interface' })
    event.shaped('create:portable_storage_interface',
    [
        '   ',
        ' CH',
        '   '
    ],
    {
        C: 'create:andesite_casing',
        H: 'create:chute'
    })

    event.remove({ output: 'create:portable_fluid_interface' })
    event.shaped('create:portable_fluid_interface',
    [
        '   ',
        'HC ',
        '   '
    ],
    {
        C: 'create:copper_casing',
        H: 'create:chute'
    })

    event.remove({ output: 'create:encased_chain_drive' })
    event.shapeless('create:encased_chain_drive', [ 'create:andesite_casing', '#c:chains' ])

    var incomplete = 'kubejs:incomplete_sturdy_sheet'

    event.remove({ id: 'create:sequenced_assembly/sturdy_sheet' })
    event.recipes.create.sequenced_assembly([ 'create:sturdy_sheet' ], 'kubejs:steel_sheet',
    [
        event.recipes.create.filling(incomplete, [ incomplete, Fluid.of('minecraft:lava', 250) ]),
        event.recipes.create.deploying(incomplete, [ incomplete, 'create:powdered_obsidian' ]),
        event.recipes.create.pressing(incomplete, [ incomplete ])
    ])
    .transitionalItem(incomplete)
    .loops(1)

    event.remove({ id: 'create:mechanical_crafter' })
    event.shaped('3x create:mechanical_crafter',
    [
        ' E ',
        ' C ',
        ' R '
    ],
    {
        E: 'create:electron_tube',
        C: 'create:brass_casing',
        R: 'minecraft:crafter'
    })
})