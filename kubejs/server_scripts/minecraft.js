ServerEvents.recipes(event => {
    event.remove({ id: 'minecraft:stick' })
    event.shaped('4x minecraft:stick',
    [
        ' P ',
        'P  ',
        '   '
    ],
    {
        P: '#minecraft:planks'
    })

    event.remove({ id: 'minecraft:stick_from_bamboo_item' })
    event.shaped('minecraft:stick',
    [
        ' P ',
        'P  ',
        '   '
    ],
    {
        P: 'minecraft:bamboo'
    })
})