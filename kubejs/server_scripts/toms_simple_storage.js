ServerEvents.tags('block', event => {
    event.add('create:wrench_pickup', 'toms_storage:inventory_connector')
    event.add('create:wrench_pickup', 'toms_storage:storage_terminal')
    event.add('create:wrench_pickup', 'toms_storage:crafting_terminal')
    event.add('create:wrench_pickup', 'toms_storage:open_crate')
    event.add('create:wrench_pickup', 'toms_storage:trim')
    event.add('create:wrench_pickup', 'toms_storage:level_emitter')
    event.add('create:wrench_pickup', 'toms_storage:inventory_cable')
    event.add('create:wrench_pickup', 'toms_storage:inventory_cable_framed')
    event.add('create:wrench_pickup', 'toms_storage:basic_inventory_hopper')
    event.add('create:wrench_pickup', 'toms_storage:inventory_interface')
    event.add('create:wrench_pickup', 'toms_storage:inventory_proxy')
    event.add('create:wrench_pickup', 'toms_storage:inventory_cable_connector_framed')
    event.add('create:wrench_pickup', 'toms_storage:inventory_cable_connector')
    event.add('create:wrench_pickup', 'toms_storage:filing_cabinet')
})

ServerEvents.recipes(event => {
    event.remove({ output: 'toms_storage:inventory_connector' })
    event.shaped('toms_storage:inventory_connector',
    [
        ' T ',
        ' C ',
        '   '
    ],
    {
        T: 'create:transmitter',
        C: 'createcasing:zinc_casing'
    })

    event.remove({ output: 'toms_storage:storage_terminal' })
    event.shaped('toms_storage:storage_terminal',
    [
        ' T ',
        ' C ',
        ' B '
    ],
    {
        T: 'create:transmitter',
        C: 'create:item_vault',
        B: '#c:barrels/wooden'
    })

    event.remove({ output: 'toms_storage:crafting_terminal' })
    event.shaped('toms_storage:crafting_terminal',
    [
        ' T ',
        ' C ',
        ' A '
    ],
    {
        T: 'create:transmitter',
        C: 'create:item_vault',
        A: 'minecraft:crafting_table'
    })

    event.remove({ output: 'toms_storage:open_crate' })
    event.shaped('toms_storage:open_crate',
    [
        ' P ',
        ' C ',
        '   '
    ],
    {
        C: 'create:andesite_casing',
        P: '#create:storage_interfaces'
    })

    event.remove({ id: 'toms_storage:trim' })
    event.shaped('2x toms_storage:trim',
    [
        ' D ',
        ' C ',
        ' I '
    ],
    {
        C: 'create:andesite_casing',
        D: '#c:chests/wooden',
        I: 'create:andesite_alloy'
    })

    event.remove({ output: 'toms_storage:level_emitter' })
    event.shapeless('toms_storage:level_emitter', [ 'toms_storage:inventory_cable', 'create:transmitter' ])

    event.remove({ output: 'toms_storage:inventory_cable' })
    event.shaped('4x toms_storage:inventory_cable',
    [
        ' P ',
        ' C ',
        ' P '
    ],
    {
        C: '#c:barrels/wooden',
        P: 'rubberworks:rubber_sheet'
    })

    event.shaped('4x toms_storage:inventory_cable',
    [
        '   ',
        'PCP',
        '   '
    ],
    {
        C: '#c:barrels/wooden',
        P: 'rubberworks:rubber_sheet'
    })

    event.remove({ id: 'toms_storage:inventory_cable_framed' })
    event.stonecutting('toms_storage:inventory_cable_framed', 'toms_storage:inventory_cable')

    event.remove({ output: 'toms_storage:basic_inventory_hopper' })
    event.shapeless('toms_storage:basic_inventory_hopper', [ 'create:chute', 'toms_storage:inventory_cable' ])

    event.remove({ output: 'toms_storage:inventory_interface' })
    event.shaped('toms_storage:inventory_interface',
    [
        'PGP',
        'GCG',
        'PDP'
    ],
    {
        C: 'createcasing:zinc_casing',
        G: 'minecraft:glass',
        D: '#c:chests/wooden',
        P: '#c:plates/iron'
    })

    event.remove({ output: 'toms_storage:filing_cabinet' })
    event.shaped('toms_storage:filing_cabinet',
    [
        'PIP',
        'BVB',
        'PIP'
    ],
    {
        V: 'create:item_vault',
        B: 'minecraft:iron_bars',
        P: '#c:plates/iron',
        I: '#c:ingots/andesite_alloy'
    })

    event.remove({ output: 'toms_storage:inventory_cable_connector' })
    event.shaped('toms_storage:inventory_cable_connector',
    [
        ' IP',
        'ACE',
        ' IP'
    ],
    {
        E: 'minecraft:ender_pearl',
        P: '#minecraft:planks',
        C: 'createcasing:zinc_casing',
        A: 'toms_storage:inventory_cable',
        I: '#c:ingots/andesite_alloy'
    })

    event.remove({ id: 'toms_storage:inventory_cable_connector_framed' })
    event.stonecutting('toms_storage:inventory_cable_connector_framed', 'toms_storage:inventory_cable_connector')

    event.remove({ output: 'toms_storage:inventory_proxy' })
    event.shaped('toms_storage:inventory_proxy',
    [
        ' I ',
        ' C ',
        ' B '
    ],
    {
        C: 'create:andesite_casing',
        I: '#c:ingots/andesite_alloy',
        B: '#c:barrels/wooden'
    })

    event.remove({ output: 'toms_storage:paint_kit' })
    event.shaped('toms_storage:paint_kit',
    [
        'XP ',
        'NX ',
        '   '
    ],
    {
        N: '#c:nuggets/zinc',
        P: '#c:plates/zinc',
        X: '#c:dyes'
    })

    event.remove({ output: 'toms_storage:wireless_terminal' })
    event.shapeless('toms_storage:wireless_terminal', [ 'toms_storage:crafting_terminal', 'create:stock_ticker' ])

    event.remove({ output: 'toms_storage:adv_wireless_terminal' })
    event.shapeless('toms_storage:adv_wireless_terminal', [ 'toms_storage:wireless_terminal', 'create:electron_tube', '#c:plates/brass' ])

    event.remove({ output: 'toms_storage:item_filter' })
    event.shaped('toms_storage:item_filter',
    [
        '   ',
        'NWN',
        '   '
    ],
    {
        N: '#c:nuggets/gold',
        W: '#minecraft:wool'
    })

    event.remove({ output: 'toms_storage:polymorphic_item_filter' })
    event.shapeless('toms_storage:polymorphic_item_filter', [ 'toms_storage:item_filter', 'minecraft:redstone_torch', '#c:plates/andesite_alloy' ])

    event.remove({ output: 'toms_storage:tag_item_filter' })
    event.shapeless('toms_storage:tag_item_filter', [ 'toms_storage:item_filter', 'minecraft:lever', '#c:plates/brass' ])
})