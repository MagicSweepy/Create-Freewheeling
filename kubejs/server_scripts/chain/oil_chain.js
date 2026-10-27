ServerEvents.recipes(event => {
    event.remove({ id: 'createdieselgenerators:distillation/superheated_crude_oil' })

    event.recipes.create.mixing(Fluid.of('kubejs:sulfuric_acid', 500), [ 'create:cinder_flour', Fluid.of('water', 250) ]).heated()
    event.recipes.create.mixing('kubejs:plastic_ingot', Fluid.of('kubejs:ethylene', 250)).heated()
    event.recipes.create.mixing(Fluid.of('kubejs:ethylene', 500), [ Fluid.of('kubejs:sulfuric_acid', 250), Fluid.of('createdieselgenerators:ethanol', 250) ]).heated()

    event.recipes.create.compacting('kubejs:plastic_sheet', 'kubejs:plastic_ingot')
})