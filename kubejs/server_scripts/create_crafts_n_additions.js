ServerEvents.recipes(event => {
    event.remove({ output: 'createaddition:capacitor' })
    event.shaped('2x createaddition:capacitor',
    [
        ' A ',
        ' B ',
        ' C '
    ],
    {
        A: '#c:plates/copper',
        B: '#c:plates/plastic',
        C: '#c:plates/zinc'
    })

    event.shaped('16x createaddition:capacitor',
    [
        ' A ',
        ' B ',
        ' C '
    ],
    {
        A: 'create_optical:copper_coil',
        B: '#c:ingots/plastic',
        C: 'create_optical:zinc_coil'
    })
})