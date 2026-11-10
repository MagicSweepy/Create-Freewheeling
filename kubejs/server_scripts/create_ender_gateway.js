ServerEvents.recipes(event => {
    var incomplete = 'createendergateway:incomplete_mechanical_gateway'
    event.remove({ id: 'createendergateway:sequenced_assembly/mechanical_gateway' })
    event.recipes.create.sequenced_assembly([ 'createendergateway:mechanical_gateway' ], 'minecraft:end_stone',
    [
        event.recipes.create.pressing(incomplete, incomplete),
        event.recipes.create.cutting(incomplete, incomplete),
        event.recipes.create.filling(incomplete, [ incomplete, Fluid.of('createendergateway:active_ender_solution', 100) ]),
        event.recipes.create.deploying(incomplete, [ incomplete, 'create:precision_mechanism' ]),
    ])
    .transitionalItem(incomplete)
    .loops(1)

    event.shapeless('minecraft:ender_eye', 'createendergateway:synthetic_eye')
})