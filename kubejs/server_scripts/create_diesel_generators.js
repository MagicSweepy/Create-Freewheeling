ServerEvents.tags('item', event => {
    event.add('createdieselgenerators:fermentable', 'neapolitan:strawberries')
    event.add('createdieselgenerators:fermentable', 'neapolitan:white_strawberries')
    event.add('createdieselgenerators:fermentable', 'neapolitan:banana')
    event.add('createdieselgenerators:fermentable', 'neapolitan:adzuki_beans')
})

ServerEvents.tags('fluid', event => {
    event.remove('c:plantoil', 'createaddition:seed_oil')
    event.remove('c:ignites', 'createaddition:seed_oil')
})

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

    event.remove({ output: 'createdieselgenerators:distillation_controller' })
    event.shaped('4x createdieselgenerators:distillation_controller',
    [
        '   ',
        'PGP',
        'IQI'
    ],
    {
        P: '#create:fluid_pipes',
        G: 'fluidlogistics:fluid_factory_gauge',
        I: '#c:ingots/andesite_alloy',
        Q: '#c:plates/iron'
    })

    event.shaped('16x createdieselgenerators:distillation_controller',
    [
        '   ',
        'PGP',
        'IQI'
    ],
    {
        P: '#create:fluid_pipes',
        G: 'fluidlogistics:fluid_factory_gauge',
        I: '#c:ingots/andesite_alloy',
        Q: '#c:plates/plastic'
    })

    event.remove({ id: 'createdieselgenerators:basin_fermenting/fermentable' })
    event.custom({
        type: 'createdieselgenerators:basin_fermenting',
        ingredients: [
            {
                tag: 'createdieselgenerators:fermentable'
            }
        ],
        processing_time: 200,
        results: [
            {
                id: 'createdieselgenerators:ethanol',
                amount: 200
            }
        ]
    })

    event.remove({ id: 'createdieselgenerators:bulk_fermenting/fermentable' })
    event.custom({
        type: 'createdieselgenerators:bulk_fermenting',
        ingredients: [
            {
                tag: 'createdieselgenerators:fermentable'
            }
        ],
        processing_time: 400,
        results: [
            {
                id: "createdieselgenerators:ethanol",
                amount: 400
            }
        ]
    })
    
    event.remove({ output: 'createaddition:biomass' })
    event.custom({
        type: "rubberworks:compressing",
        ingredients: [
            {
                type: 'neoforge:single',
                amount: 200,
                fluid: 'createdieselgenerators:plant_oil'
            }
        ],
        results: [
            {
                count: 1,
                id: 'createaddition:biomass'
            }
        ],
        heat_requirement: 'heated'
    })

    event.remove({ output: 'createaddition:seed_oil_bucket' })
})