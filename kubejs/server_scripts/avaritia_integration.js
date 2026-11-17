ServerEvents.tags('item', event => {
    event.remove('c:gears', 'avaritia_integration:blaze_cube_gear')
    event.remove('c:gears/blaze_cube', 'avaritia_integration:blaze_cube_gear')
    event.remove('c:gears', 'avaritia_integration:crystal_matrix_gear')
    event.remove('c:gears/blaze_cube', 'avaritia_integration:crystal_matrix_gear')
    event.remove('c:gears', 'avaritia_integration:infinity_gear')
    event.remove('c:gears/blaze_cube', 'avaritia_integration:infinity_gear')
})

ServerEvents.recipes(event => {
    event.remove({ id: 'avaritia_integration:create/mechanical_crafting/endest_pearl' })
    event.remove({ id: 'avaritia_integration:create/mechanical_crafting/cosmic_meatballs' })
    event.remove({ id: 'avaritia_integration:create/mechanical_crafting/ultimate_stew' })

    event.remove({ output: 'avaritia_integration:crystal_matrix_casing' })
    event.custom({
        type: 'create:item_application',
        ingredients: [
            {
                item: 'neoecoae:black_tungsten_alloy_casing'
            },
            {
                item: 'avaritia:crystal_matrix_ingot'
            }
        ],
        results: [
            {
                id: 'avaritia_integration:crystal_matrix_casing'
            }
        ]
    })

    event.remove({ id: 'avaritia_integration:parts/blaze_cube/bolt' })
    event.remove({ id: 'avaritia_integration:parts/blaze_cube/dense_plate' })
    event.remove({ id: 'avaritia_integration:parts/blaze_cube/double_plate' })
    event.remove({ id: 'avaritia_integration:parts/blaze_cube/dust' })
    event.recipes.create.crushing('avaritia_integration:blaze_cube_dust', 'avaritia:blaze_cube')
    event.remove({ id: 'avaritia_integration:parts/blaze_cube/gear' })
    event.remove({ id: 'avaritia_integration:parts/blaze_cube/long_rod' })
    event.remove({ id: 'avaritia_integration:parts/blaze_cube/plate' })
    event.remove({ id: 'avaritia_integration:parts/blaze_cube/ring' })
    event.remove({ id: 'avaritia_integration:parts/blaze_cube/rod' })
    event.remove({ id: 'avaritia_integration:parts/blaze_cube/screw' })
    event.remove({ id: 'avaritia_integration:parts/blaze_cube/spring' })
    event.remove({ id: 'avaritia_integration:parts/blaze_cube/wire' })
    
    event.remove({ id: 'avaritia_integration:parts/crystal_matrix/bolt' })
    event.remove({ id: 'avaritia_integration:parts/crystal_matrix/dense_plate' })
    event.remove({ id: 'avaritia_integration:parts/crystal_matrix/double_plate' })
    event.remove({ id: 'avaritia_integration:parts/crystal_matrix/dust' })
    event.recipes.create.crushing('avaritia_integration:crystal_matrix_dust', 'avaritia:crystal_matrix_ingot')
    event.remove({ id: 'avaritia_integration:parts/crystal_matrix/gear' })
    event.remove({ id: 'avaritia_integration:parts/crystal_matrix/long_rod' })
    event.remove({ id: 'avaritia_integration:parts/crystal_matrix/plate' })
    event.remove({ id: 'avaritia_integration:parts/crystal_matrix/ring' })
    event.remove({ id: 'avaritia_integration:parts/crystal_matrix/rod' })
    event.remove({ id: 'avaritia_integration:parts/crystal_matrix/screw' })
    event.remove({ id: 'avaritia_integration:parts/crystal_matrix/spring' })
    event.remove({ id: 'avaritia_integration:parts/crystal_matrix/wire' })

    event.remove({ id: 'avaritia_integration:parts/infinity/bolt' })
    event.remove({ id: 'avaritia_integration:parts/infinity/dense_plate' })
    event.remove({ id: 'avaritia_integration:parts/infinity/double_plate' })
    event.remove({ id: 'avaritia_integration:parts/infinity/dust' })
    event.recipes.create.crushing('avaritia_integration:infinity_dust', 'avaritia:infinity_ingot')
    event.remove({ id: 'avaritia_integration:parts/infinity/gear' })
    event.remove({ id: 'avaritia_integration:parts/infinity/long_rod' })
    event.remove({ id: 'avaritia_integration:parts/infinity/plate' })
    event.remove({ id: 'avaritia_integration:parts/infinity/ring' })
    event.remove({ id: 'avaritia_integration:parts/infinity/rod' })
    event.remove({ id: 'avaritia_integration:parts/infinity/screw' })
    event.remove({ id: 'avaritia_integration:parts/infinity/spring' })
    event.remove({ id: 'avaritia_integration:parts/infinity/wire' })

    event.remove({ id: 'avaritia_integration:parts/neutron/bolt' })
    event.remove({ id: 'avaritia_integration:parts/neutron/dense_plate' })
    event.remove({ id: 'avaritia_integration:parts/neutron/double_plate' })
    event.remove({ id: 'avaritia_integration:parts/neutron/dust' })
    event.recipes.create.crushing('avaritia_integration:neutron_dust', 'avaritia:neutron_ingot')
    event.remove({ id: 'avaritia_integration:parts/neutron/long_rod' })
    event.remove({ id: 'avaritia_integration:parts/neutron/plate' })
    event.remove({ id: 'avaritia_integration:parts/neutron/ring' })
    event.remove({ id: 'avaritia_integration:parts/neutron/rod' })
    event.remove({ id: 'avaritia_integration:parts/neutron/screw' })
    event.remove({ id: 'avaritia_integration:parts/neutron/spring' })
    event.remove({ id: 'avaritia_integration:parts/neutron/wire' })
})