
ServerEvents.recipes(event => {
    event.remove({ id: 'mmcr:modularium' })

    event.remove({ id: 'mmcr:basic_casing' })
    event.custom({
        type: 'create:item_application',
        ingredients: [
            {
                item: 'create:railway_casing'
            },
            {
                tag: 'c:ingots/aluminum'
            }
        ],
        results: [
            {
                id: 'mmcr:basic_casing'
            }
        ]
    })

    event.remove({ output: 'mmcr:terminal' })
    event.shaped('mmcr:terminal',
    [
        ' T ',
        ' P ',
        ' C '
    ],
    {
        P: '#c:plates/aluminum',
        T: 'create:transmitter',
        C: 'create_optical:golden_coil'
    })

    event.remove({ id: 'mmcr:blueprint' })
    event.shapeless('mmcr:blueprint', [ 'create:empty_schematic', '#c:plates/aluminum' ])

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

    event.recipes.create.mechanical_crafting('mmcr:large_crusher_controller',
    [
        'ADDDA',
        'DUOUD',
        'DCBCD',
        'DUEUD',
        'ADDDA'
    ],
    {
        B: 'mmcr:basic_casing',
        C: 'create:crushing_wheel',
        O: 'create_connected:control_chip',
        U: 'create_connected:brass_chute',
        A: 'create:brass_casing',
        D: 'create:brass_sheet',
        E: 'create:precision_mechanism'
    })

    event.shaped('mmcr:large_rolling_mill_controller',
    [
        'CAC',
        'DBD',
        'CWC'
    ],
    {
        B: 'mmcr:basic_casing',
        W: 'createaddition:rolling_mill',
        A: '#create:presses',
        C: '#c:plates/industrial_iron',
        D: '#create:chain_drives'
    })

    // #region Input Buses

    event.remove({ output: 'mmcr:item_input_bus_tiny' })
    event.shaped('mmcr:item_input_bus_tiny', [
        ' U ',
        ' H ',
        ' C '
    ],
    {
        H: 'mmcr:basic_casing',
        U: 'create:chute',
        C: '#c:chests/wooden'
    })

    event.remove({ output: 'mmcr:item_input_bus_small' })
    event.shaped('mmcr:item_input_bus_small',
    [
        ' U ',
        ' H ',
        ' C '
    ],
    {
        H: 'mmcr:basic_casing',
        U: 'create:chute',
        C: '#sophisticated_tags:copper_chest'
    })    

    event.remove({ output: 'mmcr:item_input_bus' })
    event.shaped('mmcr:item_input_bus',
    [
        ' U ',
        ' H ',
        ' C '
    ],
    {
        H: 'mmcr:basic_casing',
        U: 'create:chute',
        C: '#sophisticated_tags:iron_chest'
    })

    event.remove({ output: 'mmcr:item_input_bus_reinforced' })
    event.shaped('mmcr:item_input_bus_reinforced',
    [
        ' U ',
        ' H ',
        ' C '
    ],
    {
        H: 'mmcr:basic_casing',
        U: 'create:chute',
        C: '#sophisticated_tags:gold_chest'
    })
    
    event.remove({ output: 'mmcr:item_input_bus_big' })
    event.shaped('mmcr:item_input_bus_big',
    [
        ' U ',
        ' H ',
        ' C '
    ],
    {
        H: 'mmcr:basic_casing',
        U: 'create_connected:brass_chute',
        C: '#sophisticated_tags:diamond_chest'
    })

    event.remove({ output: 'mmcr:item_input_bus_huge' })
    event.shaped('mmcr:item_input_bus_huge',
    [
        ' U ',
        ' H ',
        ' C '
    ],
    {
        H: 'mmcr:basic_casing',
        U: 'create_connected:brass_chute',
        C: '#sophisticated_tags:netherite_chest'
    })

    event.remove({ output: 'mmcr:item_input_bus_ludicrous' })
    event.shaped('mmcr:item_input_bus_ludicrous',
    [
        ' U ',
        ' H ',
        ' C '
    ],
    {
        H: 'mmcr:basic_casing',
        U: 'create_connected:brass_chute',
        C: 'ae2:chest'
    })

    // #endregion

    // #region Output Buses

    event.remove({ output: 'mmcr:item_output_bus_tiny' })
    event.shaped('mmcr:item_output_bus_tiny', [
        ' C ',
        ' H ',
        ' U '
    ],
    {
        H: 'mmcr:basic_casing',
        U: 'create:chute',
        C: '#c:chests/wooden'
    })

    event.remove({ output: 'mmcr:item_output_bus_small' })
    event.shaped('mmcr:item_output_bus_small',
    [
        ' C ',
        ' H ',
        ' U '
    ],
    {
        H: 'mmcr:basic_casing',
        U: 'create:chute',
        C: '#sophisticated_tags:copper_chest'
    })    

    event.remove({ output: 'mmcr:item_output_bus' })
    event.shaped('mmcr:item_output_bus',
    [
        ' C ',
        ' H ',
        ' U '
    ],
    {
        H: 'mmcr:basic_casing',
        U: 'create:chute',
        C: '#sophisticated_tags:iron_chest'
    })

    event.remove({ output: 'mmcr:item_output_bus_reinforced' })
    event.shaped('mmcr:item_output_bus_reinforced',
    [
        ' C ',
        ' H ',
        ' U '
    ],
    {
        H: 'mmcr:basic_casing',
        U: 'create:chute',
        C: '#sophisticated_tags:gold_chest'
    })
    
    event.remove({ output: 'mmcr:item_output_bus_big' })
    event.shaped('mmcr:item_output_bus_big',
    [
        ' C ',
        ' H ',
        ' U '
    ],
    {
        H: 'mmcr:basic_casing',
        U: 'create_connected:brass_chute',
        C: '#sophisticated_tags:diamond_chest'
    })

    event.remove({ output: 'mmcr:item_output_bus_huge' })
    event.shaped('mmcr:item_output_bus_huge',
    [
        ' C ',
        ' H ',
        ' U '
    ],
    {
        H: 'mmcr:basic_casing',
        U: 'create_connected:brass_chute',
        C: '#sophisticated_tags:netherite_chest'
    })

    event.remove({ output: 'mmcr:item_output_bus_ludicrous' })
    event.shaped('mmcr:item_output_bus_ludicrous',
    [
        ' C ',
        ' H ',
        ' U '
    ],
    {
        H: 'mmcr:basic_casing',
        U: 'create_connected:brass_chute',
        C: 'ae2:chest'
    })

    // #endregion

    // #region Fluid Input Hatches

    event.remove({ output: 'mmcr:fluid_input_hatch_tiny' })
    event.shaped('mmcr:fluid_input_hatch_tiny',
    [
        ' U ',
        ' H ',
        ' C '
    ],
    {
        H: 'mmcr:basic_casing',
        C: '#c:barrels/wooden',
        U: '#create:mechanical_pumps'
    })

    event.remove({ output: 'mmcr:fluid_input_hatch_small' })
    event.shaped('mmcr:fluid_input_hatch_small',
    [
        ' U ',
        ' H ',
        ' C '
    ],
    {
        H: 'mmcr:basic_casing',
        C: '#sophisticated_tags:copper_barrel',
        U: '#create:mechanical_pumps'
    })

    event.remove({ output: 'mmcr:fluid_input_hatch' })
    event.shaped('mmcr:fluid_input_hatch',
    [
        ' U ',
        ' H ',
        ' C '
    ],
    {
        H: 'mmcr:basic_casing',
        C: '#sophisticated_tags:iron_barrel',
        U: '#create:mechanical_pumps'
    })

    event.remove({ output: 'mmcr:fluid_input_hatch_reinforced' })
    event.shaped('mmcr:fluid_input_hatch_reinforced',
    [
        ' U ',
        ' H ',
        ' C '
    ],
    {
        H: 'mmcr:basic_casing',
        C: '#sophisticated_tags:gold_barrel',
        U: '#create:mechanical_pumps'
    })
    
    event.remove({ output: 'mmcr:fluid_input_hatch_big' })
    event.shaped('mmcr:fluid_input_hatch_big',
    [
        ' U ',
        ' H ',
        ' C '
    ],
    {
        H: 'mmcr:basic_casing',
        C: '#sophisticated_tags:diamond_barrel',
        U: '#create:mechanical_pumps'
    })

    event.remove({ output: 'mmcr:fluid_input_hatch_huge' })
    event.shaped('mmcr:fluid_input_hatch_huge',
    [
        ' U ',
        ' H ',
        ' C '
    ],
    {
        H: 'mmcr:basic_casing',
        C: '#sophisticated_tags:netherite_barrel',
        U: 'createaddition:electric_pump'
    })

    event.remove({ output: 'mmcr:fluid_input_hatch_ludicrous' })
    event.shaped('mmcr:fluid_input_hatch_ludicrous',
    [
        ' U ',
        ' H ',
        ' C '
    ],
    {
        H: 'mmcr:basic_casing',
        C: 'ae2:chest',
        U: 'createaddition:electric_pump',
    })

    event.remove({ output: 'mmcr:fluid_input_hatch_vacuum' })
    event.shaped('mmcr:fluid_input_hatch_vacuum',
    [
        ' U ',
        ' H ',
        ' C '
    ],
    {
        H: 'mmcr:basic_casing',
        C: 'ae2:drive',
        U: 'createaddition:electric_pump',
    })

    // #endregion

    // #region Fluid Output Hatches

    event.remove({ output: 'mmcr:fluid_output_hatch_tiny' })
    event.shaped('mmcr:fluid_output_hatch_tiny',
    [
        ' C ',
        ' H ',
        ' U '
    ],
    {
        H: 'mmcr:basic_casing',
        C: '#c:barrels/wooden',
        U: '#create:mechanical_pumps'
    })

    event.remove({ output: 'mmcr:fluid_output_hatch_small' })
    event.shaped('mmcr:fluid_output_hatch_small',
    [
        ' C ',
        ' H ',
        ' U '
    ],
    {
        H: 'mmcr:basic_casing',
        C: '#sophisticated_tags:copper_barrel',
        U: '#create:mechanical_pumps'
    })

    event.remove({ output: 'mmcr:fluid_output_hatch' })
    event.shaped('mmcr:fluid_output_hatch',
    [
        ' C ',
        ' H ',
        ' U '
    ],
    {
        H: 'mmcr:basic_casing',
        C: '#sophisticated_tags:iron_barrel',
        U: '#create:mechanical_pumps'
    })

    event.remove({ output: 'mmcr:fluid_output_hatch_reinforced' })
    event.shaped('mmcr:fluid_output_hatch_reinforced',
    [
        ' C ',
        ' H ',
        ' U '
    ],
    {
        H: 'mmcr:basic_casing',
        C: '#sophisticated_tags:gold_barrel',
        U: '#create:mechanical_pumps'
    })
    
    event.remove({ output: 'mmcr:fluid_output_hatch_big' })
    event.shaped('mmcr:fluid_output_hatch_big',
    [
        ' C ',
        ' H ',
        ' U '
    ],
    {
        H: 'mmcr:basic_casing',
        C: '#sophisticated_tags:diamond_barrel',
        U: '#create:mechanical_pumps'
    })

    event.remove({ output: 'mmcr:fluid_output_hatch_huge' })
    event.shaped('mmcr:fluid_output_hatch_huge',
    [
        ' C ',
        ' H ',
        ' U '
    ],
    {
        H: 'mmcr:basic_casing',
        C: '#sophisticated_tags:netherite_barrel',
        U: 'createaddition:electric_pump'
    })

    event.remove({ output: 'mmcr:fluid_output_hatch_ludicrous' })
    event.shaped('mmcr:fluid_output_hatch_ludicrous',
    [
        ' C ',
        ' H ',
        ' U '
    ],
    {
        H: 'mmcr:basic_casing',
        C: 'ae2:chest',
        U: 'createaddition:electric_pump',
    })

    event.remove({ output: 'mmcr:fluid_output_hatch_vacuum' })
    event.shaped('mmcr:fluid_output_hatch_vacuum',
    [
        ' C ',
        ' H ',
        ' U '
    ],
    {
        H: 'mmcr:basic_casing',
        C: 'ae2:drive',
        U: 'createaddition:electric_pump',
    })

    // #endregion

    // #region Energy Input Hatches

    event.remove({ output: 'mmcr:energy_input_hatch_tiny' })
    event.shaped('mmcr:energy_input_hatch_tiny',
    [
        ' U ',
        ' H ',
        ' C '
    ],
    {
        H: 'mmcr:basic_casing',
        C: 'createaddition:modular_accumulator',
        U: '#c:plates/iron'
    })

    event.remove({ output: 'mmcr:energy_input_hatch_small' })
    event.shaped('mmcr:energy_input_hatch_small',
    [
        ' U ',
        ' H ',
        ' C '
    ],
    {
        H: 'mmcr:basic_casing',
        C: 'createaddition:modular_accumulator',
        U: '#c:plates/industrial_iron'
    })

    event.remove({ output: 'mmcr:energy_input_hatch' })
    event.shaped('mmcr:energy_input_hatch',
    [
        ' U ',
        ' H ',
        ' C '
    ],
    {
        H: 'mmcr:basic_casing',
        C: 'createaddition:modular_accumulator',
        U: '#c:plates/andesite_alloy'
    })

    event.remove({ output: 'mmcr:energy_input_hatch_reinforced' })
    event.shaped('mmcr:energy_input_hatch_reinforced',
    [
        ' U ',
        ' H ',
        ' C '
    ],
    {
        H: 'mmcr:basic_casing',
        C: 'createaddition:modular_accumulator',
        U: '#c:plates/brass'
    })

    event.remove({ output: 'mmcr:energy_input_hatch_big' })
    event.shaped('mmcr:energy_input_hatch_big',
    [
        ' U ',
        ' H ',
        ' C '
    ],
    {
        H: 'mmcr:basic_casing',
        C: 'createaddition:modular_accumulator',
        U: '#c:plates/electrum'
    })

    event.remove({ output: 'mmcr:energy_input_hatch_huge' })
    event.shaped('mmcr:energy_input_hatch_huge',
    [
        ' U ',
        ' H ',
        ' C '
    ],
    {
        H: 'mmcr:basic_casing',
        C: 'createaddition:modular_accumulator',
        U: '#c:plates/steel'
    })

    event.remove({ output: 'mmcr:energy_input_hatch_ludicrous' })
    event.shaped('mmcr:energy_input_hatch_ludicrous',
    [
        ' U ',
        ' H ',
        ' C '
    ],
    {
        H: 'mmcr:basic_casing',
        C: 'createaddition:modular_accumulator',
        U: '#c:plates/aluminum'
    })

    event.remove({ output: 'mmcr:energy_input_hatch_ultimate' })
    event.shaped('mmcr:energy_input_hatch_ultimate',
    [
        ' U ',
        ' H ',
        ' C '
    ],
    {
        H: 'mmcr:basic_casing',
        C: 'createaddition:modular_accumulator',
        U: '#c:plates/tungsten'
    })

    // #endregion

    // #region Energy Output Hatches

    event.remove({ output: 'mmcr:energy_output_hatch_tiny' })
    event.shaped('mmcr:energy_output_hatch_tiny',
    [
        ' C ',
        ' H ',
        ' U '
    ],
    {
        H: 'mmcr:basic_casing',
        C: 'createaddition:modular_accumulator',
        U: '#c:plates/iron'
    })

    event.remove({ output: 'mmcr:energy_output_hatch_small' })
    event.shaped('mmcr:energy_output_hatch_small',
    [
        ' C ',
        ' H ',
        ' U '
    ],
    {
        H: 'mmcr:basic_casing',
        C: 'createaddition:modular_accumulator',
        U: '#c:plates/industrial_iron'
    })

    event.remove({ output: 'mmcr:energy_output_hatch' })
    event.shaped('mmcr:energy_output_hatch',
    [
        ' C ',
        ' H ',
        ' U '
    ],
    {
        H: 'mmcr:basic_casing',
        C: 'createaddition:modular_accumulator',
        U: '#c:plates/andesite_alloy'
    })

    event.remove({ output: 'mmcr:energy_output_hatch_reinforced' })
    event.shaped('mmcr:energy_output_hatch_reinforced',
    [
        ' C ',
        ' H ',
        ' U '
    ],
    {
        H: 'mmcr:basic_casing',
        C: 'createaddition:modular_accumulator',
        U: '#c:plates/brass'
    })

    event.remove({ output: 'mmcr:energy_output_hatch_big' })
    event.shaped('mmcr:energy_output_hatch_big',
    [
        ' C ',
        ' H ',
        ' U '
    ],
    {
        H: 'mmcr:basic_casing',
        C: 'createaddition:modular_accumulator',
        U: '#c:plates/electrum'
    })

    event.remove({ output: 'mmcr:energy_output_hatch_huge' })
    event.shaped('mmcr:energy_output_hatch_huge',
    [
        ' C ',
        ' H ',
        ' U '
    ],
    {
        H: 'mmcr:basic_casing',
        C: 'createaddition:modular_accumulator',
        U: '#c:plates/steel'
    })

    event.remove({ output: 'mmcr:energy_output_hatch_ludicrous' })
    event.shaped('mmcr:energy_output_hatch_ludicrous',
    [
        ' C ',
        ' H ',
        ' U '
    ],
    {
        H: 'mmcr:basic_casing',
        C: 'createaddition:modular_accumulator',
        U: '#c:plates/aluminum'
    })

    event.remove({ output: 'mmcr:energy_output_hatch_ultimate' })
    event.shaped('mmcr:energy_output_hatch_ultimate',
    [
        ' C ',
        ' H ',
        ' U '
    ],
    {
        H: 'mmcr:basic_casing',
        C: 'createaddition:modular_accumulator',
        U: '#c:plates/tungsten'
    })

    // #endregion

    // #region Stress Interfaces

    event.remove({ output: 'mmcr:create_stress_input_interface' })
    event.shaped('mmcr:create_stress_input_interface',
    [
        ' P ',
        ' C ',
        ' D '
    ],
    {
        C: 'mmcr:basic_casing',
        D: 'create:encased_chain_drive',
        P: '#c:plates/aluminum'
    })

    event.remove({ output: 'mmcr:create_stress_output_interface' })
    event.shaped('mmcr:create_stress_output_interface',
    [
        ' D ',
        ' C ',
        ' P '
    ],
    {
        C: 'mmcr:basic_casing',
        D: 'create:encased_chain_drive',
        P: '#c:plates/aluminum'
    })

    // #endregion
})