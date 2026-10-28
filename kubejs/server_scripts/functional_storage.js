ServerEvents.tags('item', event => {
    event.remove('functionalstorage:drawer_1x1', 'functionalstorage:fluid_1')
    event.remove('functionalstorage:drawer_1x2', 'functionalstorage:fluid_2')
    event.remove('functionalstorage:drawer_2x2', 'functionalstorage:fluid_4')
    event.add('functionalstorage:drawer', 'functionalstorage:fluid_1')
    event.add('functionalstorage:drawer', 'functionalstorage:fluid_2')
    event.add('functionalstorage:drawer', 'functionalstorage:fluid_4')
})

ServerEvents.recipes(event => {
    event.remove({ output: 'functionalstorage:dripping_upgrade' })
    event.remove({ output: 'functionalstorage:water_generator_upgrade' })
    event.remove({ output: 'functionalstorage:obsidian_upgrade' })

    event.remove({ output: 'functionalstorage:fluid_1' })
    event.shaped('functionalstorage:fluid_1',
    [
        'ABA',
        'BTB',
        'ABA'
    ],
    {
        T: '#create:fluid_tanks',
        A: '#c:plates/copper',
        B: '#c:plates/brass'
    })

    event.remove({ output: 'functionalstorage:framed_fluid_1' })
    event.shaped('functionalstorage:framed_fluid_1',
    [
        'NNN',
        'NSN',
        'NNN'
    ],
    {
        N: '#c:nuggets/iron',
        S: 'functionalstorage:fluid_1'
    })

    event.remove({ output: 'functionalstorage:fluid_2' })
    event.shaped('2x functionalstorage:fluid_2',
    [
        'BTB',
        'ABA',
        'BTB'
    ],
    {
        T: '#create:fluid_tanks',
        A: '#c:plates/copper',
        B: '#c:plates/brass'
    })

    event.remove({ output: 'functionalstorage:framed_fluid_2' })
    event.shaped('functionalstorage:framed_fluid_2',
    [
        ' N ',
        'NSN',
        ' N '
    ],
    {
        N: '#c:nuggets/iron',
        S: 'functionalstorage:fluid_2'
    })

    event.remove({ output: 'functionalstorage:fluid_4' })
    event.shaped('4x functionalstorage:fluid_4',
    [
        'TBT',
        'BBB',
        'TBT'
    ],
    {
        T: '#create:fluid_tanks',
        B: '#c:plates/brass'
    })

    event.remove({ output: 'functionalstorage:framed_fluid_4' })
    event.shaped('functionalstorage:framed_fluid_4',
    [
        '   ',
        'NSN',
        '   '
    ],
    {
        N: '#c:nuggets/iron',
        S: 'functionalstorage:fluid_4'
    })

    event.remove({ output: 'functionalstorage:copper_upgrade' })
    event.shaped('2x functionalstorage:copper_upgrade',
    [
        'BCB',
        'PSP',
        'BCB'
    ],
    {
        B: '#c:storage_blocks/copper',
        P: '#c:plates/copper',
        S: '#functionalstorage:drawer',
        C: '#c:chests/wooden'
    })

    event.remove({ output: 'functionalstorage:gold_upgrade' })
    event.shaped('2x functionalstorage:gold_upgrade',
    [
        'BUB',
        'PSP',
        'BUB'
    ],
    {
        B: '#c:storage_blocks/gold',
        P: '#c:plates/gold',
        S: '#functionalstorage:drawer',
        U: 'functionalstorage:copper_upgrade'
    })

    event.remove({ output: 'functionalstorage:diamond_upgrade' })
    event.shaped('2x functionalstorage:diamond_upgrade',
    [
        'BUB',
        'PSP',
        'BUB'
    ],
    {
        B: '#c:storage_blocks/diamond',
        P: 'minecraft:diamond',
        S: '#functionalstorage:drawer',
        U: 'functionalstorage:gold_upgrade'
    })

    event.remove({ output: 'functionalstorage:netherite_upgrade' })
    event.shaped('2x functionalstorage:netherite_upgrade',
    [
        'BUB',
        'PSP',
        'BUB'
    ],
    {
        B: '#c:storage_blocks/netherite',
        P: 'minecraft:netherite_ingot',
        S: '#functionalstorage:drawer',
        U: 'functionalstorage:diamond_upgrade'
    })

    event.remove({ output: 'functionalstorage:iron_downgrade' })
    event.shaped('2x functionalstorage:iron_downgrade',
    [
        'PPP',
        'PSP',
        'PPP'
    ],
    {
        S: '#functionalstorage:drawer',
        P: '#c:plates/iron'
    })

    event.remove({ output: 'functionalstorage:linking_tool' })
    event.shaped('functionalstorage:linking_tool',
    [
        ' T ',
        ' C ',
        ' P '
    ],
    {
        C: 'create:cardboard',
        T: 'create:transmitter',
        P: '#c:plates/gold'
    })

    event.remove({ output: 'functionalstorage:configuration_tool' })
    event.shaped('functionalstorage:configuration_tool',
    [
        ' T ',
        ' C ',
        ' P '
    ],
    {
        C: 'create:cardboard',
        T: 'create:transmitter',
        P: '#c:plates/iron'
    })
})