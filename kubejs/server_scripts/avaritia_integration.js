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

    event.remove({ id: 'avaritia_integration:create/star_cake_base' })
    event.recipes.create.compacting('avaritia_integration:star_cake_base', [ 'create_enchantment_industry:experience_cake_base', '2x avaritia:endest_pearl', Fluid.of('avaritia_integration:molten_neutron', 250) ]).superheated()

    event.remove({ id: 'avaritia_integration:create/extreme_blaze_burner' })

    event.remove({ id: 'avaritia_integration:create/neutron_mechanical_press' })
    event.shaped('avaritia_integration:neutron_mechanical_press',
    [
        ' S ',
        ' C ',
        ' B '
    ],
    {
        S: '#create:shafts',
        C: 'avaritia_integration:crystal_matrix_casing',
        B: 'avaritia:neutron'
    })

    event.remove({ id: 'avaritia_integration:create/matrix_mechanical_mixer' })
    event.shaped('avaritia_integration:matrix_mechanical_mixer',
    [
        ' G ',
        ' C ',
        ' W '
    ],
    {
        G: '#create:large_cogwheels',
        C: 'avaritia_integration:crystal_matrix_casing',
        W: 'create:whisk' // TODO: Add neutron one or crystal matrix one.
    })

    event.remove({ id: 'avaritia_integration:create/extreme_encased_fan' })
    event.shaped('avaritia_integration:extreme_encased_fan',
    [
        ' S ',
        ' C ',
        ' P '
    ],
    {
        S: '#create:shafts',
        C: 'avaritia_integration:crystal_matrix_casing',
        P: 'create:propeller' // TODO: Same as upper.
    })

    event.remove({ id: 'avaritia_integration:create/extreme_basin' })
    event.shaped('avaritia_integration:extreme_basin',
    [
        '   ',
        'I I',
        'III'
    ],
    {
        I: 'avaritia:crystal_matrix_ingot'
    })

    event.remove({ id: 'avaritia_integration:create/extreme_depot' })
    event.shapeless('avaritia_integration:extreme_depot', [ 'avaritia:neutron_ingot', 'avaritia_integration:crystal_matrix_casing' ])

    event.remove({ id: 'avaritia_integration:create/chromatic_compound' })
    event.remove({ id: 'avaritia_integration:create/creative_compound' })
    event.custom({
	    type: 'avaritia_integration:extreme_mixing',
	    heatRequirement: 'star',
	    ingredients: [
		    { item: 'kubejs:prismatic_compound', count: 2 },
		    { item: 'avaritia:enhancement_core' },
            { item: 'avaritia_integration:blaze_cube_dust', count: 4 },
		    { item: 'avaritia_integration:crystal_matrix_dust', count: 4 },
            { item: 'avaritia_integration:infinity_dust', count: 4 },
            { item: 'avaritia_integration:neutron_dust', count: 4 }
	    ],
	    results: [{ count: 2, id: 'avaritia_integration:creative_compound' }]
    })

    event.remove({ id: 'avaritia_integration:create/creative_mechanism' })
    var incomplete = 'kubejs:incomplete_creative_mechanism'
    event.recipes.create.sequenced_assembly([ 'avaritia_integration:creative_mechanism' ], 'avaritia_integration:infinity_plate',
    [
        event.recipes.create.deploying(incomplete, [ incomplete, 'create:precision_mechanism' ]),
        event.recipes.create.deploying(incomplete, [ incomplete, 'avaritia_integration:infinity_plate' ]),
        event.recipes.create.deploying(incomplete, [ incomplete, 'avaritia_integration:infinity_rod' ]),
        event.recipes.create.filling(incomplete, [ incomplete, Fluid.of('avaritia_integration:molten_crystal_matrix', 500) ]),
        event.recipes.create.deploying(incomplete, [ incomplete, 'avaritia_integration:infinity_plate' ]),
        event.recipes.create.deploying(incomplete, [ incomplete, 'avaritia_integration:infinity_rod' ]),
        event.recipes.create.pressing(incomplete, incomplete),
        event.recipes.create.deploying(incomplete, [ incomplete, 'avaritia:tesseract' ]),
        event.recipes.create.deploying(incomplete, [ incomplete, 'kubejs:netherite_coil' ]),
        event.recipes.create.deploying(incomplete, [ incomplete, 'avaritia_integration:creative_compound' ]),
        event.recipes.create.deploying(incomplete, [ incomplete, 'avaritia:enhancement_core' ])
    ])
    .transitionalItem(incomplete)
    .loops(2)
})