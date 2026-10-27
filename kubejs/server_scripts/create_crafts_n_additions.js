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

    event.remove({ output: 'createaddition:modular_accumulator' })

    var incomplete = 'createaddition:modular_accumulator' // TODO: Add a kubejs block for incomplete modular acccumulator
    event.recipes.create.sequenced_assembly([ 'createaddition:modular_accumulator' ], 'create:brass_casing',
    [
        event.recipes.create.deploying(incomplete, [ incomplete, 'create:copper_sheet' ]),
        event.recipes.create.deploying(incomplete, [ incomplete, 'create:iron_sheet' ]),
        event.recipes.create.deploying(incomplete, [ incomplete, 'createaddition:capacitor' ]),
        event.recipes.create.filling(incomplete, [ incomplete, Fluid.of('kubejs:sulfuric_acid', 250) ])
    ])
    .transitionalItem(incomplete)
    .loops(1)
})