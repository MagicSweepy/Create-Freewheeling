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
})