ServerEvents.recipes(event => {
    event.remove({ id: 'createimp:batch_mechanical_crafter' })
    event.shaped('3x createimp:batch_mechanical_crafter',
    [
        ' E ',
        ' C ',
        ' R '
    ],
    {
        E: 'create:precision_mechanism',
        C: 'create:railway_casing',
        R: 'minecraft:crafter'
    })
})