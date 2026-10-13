ServerEvents.recipes(event => {
    var incomplete = 'create_connected:incomplete_control_chip'

    event.remove({ id: 'create_connected:sequenced_assembly/control_chip' })
    event.recipes.create.sequenced_assembly([ 'create_connected:control_chip' ], 'createaddition:electrum_sheet',
        [
            event.recipes.create.deploying(incomplete, [ incomplete, 'createcasing:andesite_sheet' ]),
            event.recipes.create.deploying(incomplete, [ incomplete, 'create:electron_tube' ]),
            event.recipes.create.deploying(incomplete, [ incomplete, 'createaddition:copper_spool' ])
        ])
        .transitionalItem(incomplete)
        .loops(1)
})