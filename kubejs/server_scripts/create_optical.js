ServerEvents.recipes(event => {
    event.remove({ output: 'create_optical:optical_source' })
    event.shaped('create_optical:optical_source',
    [
        ' G ',
        'DCP',
        ' S '
    ],
    {
        G: '#create:cogwheels',
        D: 'create_optical:optical_device',
        C: 'createcasing:zinc_casing',
        P: 'create_optical:polarizing_filter',
        S: '#create:shafts'
    })

    event.remove({ output: 'create_optical:thermal_optical_source' })
    event.shaped('create_optical:thermal_optical_source',
    [
        ' P ',
        ' O ',
        ' F '
    ],
    {
        O: 'create_optical:optical_source',
        F: '#create:fluid_tanks',
        P: 'create:precision_mechanism'
    })

    event.remove({ output: 'create_optical:optical_receptor' })
    event.shaped('create_optical:optical_receptor',
    [
        ' D ',
        'SES',
        ' C '
    ],
    {
        D: 'create_optical:optical_device',
        S: '#create:shafts',
        E: 'create_optical:copper_coil',
        C: 'createcasing:zinc_casing'
    })

    event.remove({ output: 'create_optical:heavy_optical_receptor' })
    event.shaped('create_optical:heavy_optical_receptor',
    [
        ' D ',
        'SES',
        ' C '
    ],
    {
        D: 'create_optical:optical_device',
        S: '#create:shafts',
        E: 'create_optical:golden_coil',
        C: 'createcasing:zinc_casing'
    })

    event.remove({ output: 'create_optical:beam_condenser' })
    event.shaped('create_optical:beam_condenser',
    [
        ' D ',
        'DED',
        ' C '
    ],
    {
        C: 'createcasing:zinc_casing',
        D: 'create_optical:optical_device',
        E: 'create_optical:rose_quartz_catalyst_coil'
    })

    event.remove({ output: 'create_optical:beam_focuser' })
    event.shaped('create_optical:beam_focuser',
    [
        ' D ',
        'SCS',
        ' P '
    ],
    {
        C: 'createcasing:zinc_casing',
        S: '#create:shafts',
        D: 'create_optical:optical_device',
        P: '#c:plates/brass'
    })

    event.remove({ output: 'create_optical:hologram_source' })
    event.shaped('create_optical:hologram_source',
    [
        '   ',
        'IEI',
        'DCD'
    ],
    {
        C: 'createcasing:zinc_casing',
        D: 'create_optical:optical_device',
        E: 'create_optical:zinc_coil',
        I: '#c:plates/zinc'
    })

    var incomplete = 'create_optical:incomplete_optical_device'

    event.remove({ id: 'create_optical:sequenced_assembly/optical_device' })
    event.recipes.create.sequenced_assembly([ 'create_optical:optical_device' ], 'create:brass_sheet',
    [
        event.recipes.create.deploying(incomplete, [ incomplete, 'create:electron_tube' ]),
        event.recipes.create.deploying(incomplete, [ incomplete, 'createendergateway:amethyst_dust' ]),
        event.recipes.create.deploying(incomplete, [ incomplete, 'minecraft:glass_pane' ]),
        event.recipes.create.filling(incomplete, [ incomplete, Fluid.of('minecraft:water', 500) ]),
        event.recipes.create.pressing(incomplete, incomplete)
    ])
    .transitionalItem(incomplete)
    .loops(1)

    var incomplete2 = 'create_optical:incomplete_copper_coil'

    event.remove({ id: 'create_optical:sequenced_assembly/copper_coil' })
    event.recipes.create.sequenced_assembly([ 'create_optical:copper_coil' ], 'createaddition:iron_rod',
    [
        event.recipes.create.deploying(incomplete2, [ incomplete2, 'createaddition:copper_wire' ]),
        event.recipes.create.pressing(incomplete2, incomplete2)
    ])
    .transitionalItem(incomplete2)
    .loops(2)

    var incomplete3 = 'create_optical:incomplete_golden_coil'

    event.remove({ id: 'create_optical:sequenced_assembly/golden_coil' })
    event.recipes.create.sequenced_assembly([ 'create_optical:golden_coil' ], 'createaddition:brass_rod',
    [
        event.recipes.create.deploying(incomplete3, [ incomplete3, 'createaddition:gold_wire' ]),
        event.recipes.create.pressing(incomplete3, incomplete3)
    ])
    .transitionalItem(incomplete3)
    .loops(2)

    var incomplete4 = 'create_optical:incomplete_zinc_coil'

    event.remove({ id: 'create_optical:sequenced_assembly/zinc_coil' })
    event.recipes.create.sequenced_assembly([ 'create_optical:zinc_coil' ], 'createaddition:gold_rod',
    [
        event.recipes.create.deploying(incomplete4, [ incomplete4, 'createaddition:zinc_sheet' ]),
        event.recipes.create.deploying(incomplete4, [ incomplete4, 'createcasing:andesite_sheet' ]),
        event.recipes.create.pressing(incomplete4, incomplete4)
    ])
    .transitionalItem(incomplete4)
    .loops(2)
})