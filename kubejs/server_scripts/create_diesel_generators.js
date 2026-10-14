ServerEvents.recipes(event => {
    event.remove({ output: 'createdieselgenerators:wire_cutters' })
    event.remove({ output: 'createdieselgenerators:hammer' })
    
    event.remove({ output: 'createdieselgenerators:oil_barrel' })
    event.shaped('createdieselgenerators:oil_barrel', [
        ' P ',
        ' B ',
        ' P '
    ],
    {
        B: 'minecraft:barrel',
        P: '#c:plates/andesite_alloy'
    })

    event.remove({ output: 'createdieselgenerators:basin_lid' })
    event.shaped('createdieselgenerators:basin_lid', [
        '   ',
        ' I ',
        'PPP'
    ],
    {
        I: '#c:ingots/andesite_alloy',
        P: '#c:plates/andesite_alloy'
    })
})