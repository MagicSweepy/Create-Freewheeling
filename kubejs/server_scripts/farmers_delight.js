ServerEvents.recipes(event => {
    event.remove({ id: 'farmersdelight:kelp_roll' })
    event.shaped('farmersdelight:kelp_roll', [
        '   ',
        'RVR',
        'KKK'
    ],
    {
        R: 'farmersdelight:cooked_rice',
        V: '#c:foods/vegetables',
        K: 'minecraft:dried_kelp'
    })
})