ServerEvents.recipes(event => {
    event.replaceInput({ input: 'minecraft:dried_kelp' }, 'minecraft:dried_kelp', 'rubberworks:rubber_sheet')
    event.replaceInput({ input: 'minecraft:dried_kelp_block' }, 'minecraft:dried_kelp_block', 'rubberworks:rubber_block')

    event.remove({ output: 'minecraft:dried_kelp_block' })
    event.shaped('minecraft:dried_kelp_block', [
        'KKK',
        'KKK',
        'KKK'
    ],
    {
        K: 'minecraft:dried_kelp'
    })

    event.remove({ id: 'minecraft:dried_kelp' })
})