ServerEvents.recipes(event => {
    event.remove({ id: 'createdieselgenerators:distillation/superheated_crude_oil' })

    event.recipes.create.mixing(Fluid.of('kubejs:sulfuric_acid', 500), [ 'create:cinder_flour', Fluid.of('water', 250) ]).heated()
    event.recipes.create.mixing(Fluid.of('kubejs:ethylene', 500), [ Fluid.of('kubejs:sulfuric_acid', 250), Fluid.of('createdieselgenerators:ethanol', 250) ]).heated()
    event.custom({
        type: 'rubberworks:compressing',
        ingredients: [
            {
                type: 'neoforge:single',
                amount: 250,
                fluid: 'kubejs:ethylene'
            }
        ],
        results: [
            {
                count: 1,
                id: 'kubejs:plastic_ingot'
            }
        ],
        'heat_requirement': 'heated'
    })

    event.recipes.create.pressing('kubejs:plastic_sheet', 'kubejs:plastic_ingot')
})