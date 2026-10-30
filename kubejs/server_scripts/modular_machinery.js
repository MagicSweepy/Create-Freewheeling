
ServerEvents.recipes(event => {
    event.remove({ id: 'mmcr:modularium' })

    event.remove({ id: 'mmcr:basic_casing' })
    event.recipes.create.deploying('mmcr:basic_casing', [ 'create:railway_casing', 'neoecoae:aluminum_ingot' ])

    var incomplete = 'create:railway_casing'

    event.recipes.create.sequenced_assembly([ 'mmcr:large_assembler_controller' ], 'mmcr:basic_casing',
    [
        event.recipes.create.deploying(incomplete, [ incomplete, 'create_connected:control_chip' ]),
        event.recipes.create.deploying(incomplete, [ incomplete, 'create:precision_mechanism' ]),
        event.recipes.create.deploying(incomplete, [ incomplete, 'create:mechanical_arm' ]),
        event.recipes.create.deploying(incomplete, [ incomplete, 'fluidlogistics:mechanical_fluid_gun' ]),
        event.recipes.create.deploying(incomplete, [ incomplete, 'create:belt_connector' ])
    ])
    .transitionalItem(incomplete)
    .loops(1)
})