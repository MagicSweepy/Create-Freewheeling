
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

    event.recipes.create.mechanical_crafting('mmcr:large_alloy_smelter_controller',
    [
        'BDB',
        'S S',
        'BCB',
        'G G',
        'AHA'
    ],
    {
        H: 'mmcr:basic_casing',
        G: 'create:metal_girder',
        A: '#c:plates/aluminum',
        B: '#c:plates/tungsten',
        S: '#c:rods/tungsten',
        C: 'create_connected:control_chip',
        D: 'create:precision_mechanism'
    })

    event.shaped('mmcr:atmospheric_collector_controller',
    [
        ' C ',
        'PBP',
        ' M '
    ],
    {
        C: 'create:copper_casing',
        P: 'create:fluid_pipe',
        B: 'mmcr:basic_casing',
        M: 'create:mechanical_pump'
    })

    event.shaped('mmcr:atmospheric_diffuser_controller',
    [
        ' F ',
        'PBP',
        ' C '
    ],
    {
        F: 'create:encased_fan',
        P: 'create:fluid_pipe',
        B: 'create:brass_casing',
        C: 'create:copper_casing'
    })

    event.shaped('mmcr:chemical_reactor_controller',
    [
        'PMP',
        'CBC',
        'PMP'
    ],
    {
        P: 'create:fluid_pipe',
        M: 'create:precision_mechanism',
        C: 'create:copper_casing',
        B: 'mmcr:basic_casing'
    })

    event.shaped('mmcr:lightning_processor_controller',
    [
        'ALA',
        'DCD',
        'AEA'
    ],
    {
        C: 'create:shadow_steel_casing',
        D: '#c:plates/energized_certus_quartz',
        A: '#c:plates/shadow_steel',
        L: 'ae2:logic_processor',
        E: 'ae2:engineering_processor'
    })

    event.shaped('mmcr:large_alternator_controller',
    [
        'APA',
        'PCP',
        'APA'
    ],
    {
        C: 'createaddition:capacitor',
        A: 'createaddition:alternator',
        P: '#c:plates/steel'
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

    event.remove({ output: 'mmcr:factory_controller' })
    event.shaped('mmcr:factory_controller',
    [
        'EIE',
        'BCB',
        'EAE'
    ],
    {
        C: 'mmcr:basic_casing',
        I: 'kubejs:integrated_circuit',
        A: 'ae2:calculation_processor',
        B: 'createcasing:shadow_steel_sheet',
        E: 'createcasing:refined_radiance_sheet'
    })

    // #region Parallel Controller

    event.remove({ output: 'mmcr:parallel_controller_normal' })
    event.shaped('mmcr:parallel_controller_normal',
    [
        'AIA',
        'BCB',
        'AXA'
    ],
    {
        C: 'mmcr:basic_casing',
        I: 'kubejs:integrated_circuit',
        X: 'create:precision_mechanism',
        A: '#c:plates/aluminum',
        B: '#c:plates/fluix'
    })

    event.remove({ output: 'mmcr:parallel_controller_plus' })
    event.shaped('mmcr:parallel_controller_plus',
    [
        'BIB',
        'ACA',
        'BXB'
    ],
    {
        C: 'mmcr:basic_casing',
        A: 'mmcr:parallel_controller_normal',
        B: '#c:plates/tungsten',
        I: 'kubejs:integrated_circuit',
        X: 'create:precision_mechanism'
    })

    event.remove({ output: 'mmcr:parallel_controller_reinforced' })
    event.shaped('mmcr:parallel_controller_reinforced',
    [
        'BIB',
        'ACA',
        'BAB'
    ],
    {
        C: 'mmcr:basic_casing',
        A: 'mmcr:parallel_controller_plus',
        B: '#c:plates/chorium',
        I: 'kubejs:integrated_circuit',
    })

    event.remove({ output: 'mmcr:parallel_controller_pro' })
    event.shaped('mmcr:parallel_controller_pro',
    [
        'AIA',
        'BCB',
        'AXA'
    ],
    {
        C: 'mmcr:basic_casing',
        A: 'mmcr:parallel_controller_reinforced',
        B: '#c:plates/aluminum_alloy',
        I: 'kubejs:integrated_circuit',
        X: 'ae2:logic_processor'
    })

    event.remove({ output: 'mmcr:parallel_controller_elite' })
    event.shaped('mmcr:parallel_controller_elite',
    [
        'AIA',
        'BCB',
        'AXA'
    ],
    {
        C: 'create:shadow_steel_casing',
        I: 'kubejs:integrated_circuit',
        X: 'ae2:engineering_processor',
        A: '#c:plates/black_tungsten_alloy',
        B: '#c:plates/energized_fluix'
    })

    event.remove({ output: 'mmcr:parallel_controller_fantasy' })
    event.shaped('mmcr:parallel_controller_fantasy',
    [
        'BIB',
        'ACA',
        'BXB'
    ],
    {
        C: 'create:shadow_steel_casing',
        A: 'mmcr:parallel_controller_elite',
        B: '#c:plates/energized_superconductive',
        I: 'extendedae:concurrent_processor',
        X: 'create:precision_mechanism'
    })

    event.remove({ output: 'mmcr:parallel_controller_max'})
    event.shaped('mmcr:parallel_controller_max',
    [
        'BIB',
        'ACA',
        'BAB'
    ],
    {
        C: 'create:refined_radiance_casing',
        A: 'mmcr:parallel_controller_fantasy',
        B: '#c:ingots/neutronium',
        I: 'neoecoae:superconducting_processor',
    })

    event.remove({ id: 'mmcr:parallel_controller_ultimate' })
    
    // #endregion

    // #region Upgrade Bus

    event.remove({ output: 'mmcr:upgrade_bus_normal' })
    event.shaped('mmcr:upgrade_bus_normal',
    [
        'PMP',
        'ACA',
        'PBP'
    ],
    {
        C: 'mmcr:basic_casing',
        M: 'neoecoae:crystal_matrix',
        A: 'neoecoae:superconducting_processor',
        B: 'extendedae:concurrent_processor',
        P: '#c:plates/energized_fluix'
    })

    event.remove({ output: 'mmcr:upgrade_bus_reinforced' })
    event.shaped('mmcr:upgrade_bus_reinforced',
    [
        'PAP',
        'BCB',
        'PAP'
    ],
    {
        C: 'mmcr:upgrade_bus_normal',
        A: 'neoecoae:superconducting_processor',
        B: 'extendedae:concurrent_processor',
        P: '#c:plates/energized_superconductive'
    })

    event.remove({ output: 'mmcr:upgrade_bus_elite' })
    event.shaped('mmcr:upgrade_bus_elite',
    [
        'PAP',
        'BCD',
        'PEP'
    ],
    {
        C: 'mmcr:upgrade_bus_reinforced',
        A: 'neoecoae:superconducting_processor',
        B: 'kubejs:speed_module_mk1',
        D: 'kubejs:productivity_module_mk1',
        E: 'kubejs:efficiency_module_mk1',
        P: '#plates/energized_superconductive'
    })

    event.remove({ output: 'mmcr:upgrade_bus_super' })
    event.shaped('mmcr:upgrade_bus_super',
    [
        'PAP',
        'BCD',
        'PEP'
    ],
    {
        C: 'mmcr:upgrade_bus_elite',
        A: 'neoecoae:superconducting_processor',
        B: 'kubejs:speed_module_mk3',
        D: 'kubejs:productivity_module_mk3',
        E: 'kubejs:efficiency_module_mk3',
        P: '#plates/energized_superconductive'
    })

    event.remove({ id: 'mmcr:upgrade_bus_ultimate' })

    // #endregion

    event.remove({ output: 'mmcr:data_storage' })
    event.shaped('mmcr:data_storage',
    [
        ' D ',
        ' C ',
        ' L '
    ],
    {
        C: 'mmcr:basic_casing',
        D: 'create:display_board',
        L: 'create:display_link'
    })

    event.remove({ output: 'mmcr:network_interface' })
    event.shaped('mmcr:network_interface',
    [
        ' D ',
        ' C ',
        ' L '
    ],
    {
        C: 'mmcr:basic_casing',
        D: 'create:display_board',
        L: 'extra_gauges:display_collector'
    })

    event.remove({ output: 'mmcr:smart_interface' })
    event.shaped('mmcr:smart_interface',
    [
        ' X ',
        ' C ',
        ' O '
    ],
    {
        C: 'mmcr:basic_casing',
        O: 'create:content_observer',
        X: 'create:precision_mechanism'
    })

    // #region Extended Item Input Bus

    event.remove({ output: 'mmcr:extended_item_input_bus_basic' })
    event.shaped('mmcr:extended_item_input_bus_basic',
    [
        ' T ',
        ' C ',
        ' B '
    ],
    {
        C: 'mmcr:item_input_bus_reinforced',
        T: '#c:plates/tungsten',
        B: 'create_connected:inventory_bridge'
    })

    event.remove({ output: 'mmcr:extended_item_input_bus_advanced' })
    event.shaped('mmcr:extended_item_input_bus_advanced',
    [
        ' T ',
        ' C ',
        ' B '
    ],
    {
        C: 'mmcr:item_input_bus_big',
        T: '#c:plates/fluix',
        B: 'create_connected:inventory_bridge'
    })

    event.remove({ output: 'mmcr:extended_item_input_bus_reinforced' })
    event.shaped('mmcr:extended_item_input_bus_reinforced',
    [
        ' T ',
        ' C ',
        ' B '
    ],
    {
        C: 'mmcr:item_input_bus_huge',
        T: '#c:plates/chorium',
        B: 'create_connected:inventory_bridge'
    })

    event.remove({ output: 'mmcr:extended_item_input_bus_ultimate' })
    event.shaped('mmcr:extended_item_input_bus_ultimate',
    [
        ' T ',
        ' C ',
        ' B '
    ],
    {
        C: 'mmcr:item_input_bus_ludicrous',
        T: '#c:plates/energized_certus_quartz',
        B: 'create_connected:inventory_bridge'
    })

    // #endregion

    // #region Extended Item Output Bus

    event.remove({ output: 'mmcr:extended_item_output_bus_basic' })
    event.shaped('mmcr:extended_item_output_bus_basic',
    [
        ' B ',
        ' C ',
        ' T '
    ],
    {
        C: 'mmcr:item_output_bus_reinforced',
        T: '#c:plates/tungsten',
        B: 'create_connected:inventory_bridge'
    })

    event.remove({ output: 'mmcr:extended_item_output_bus_advanced' })
    event.shaped('mmcr:extended_item_output_bus_advanced',
    [
        ' B ',
        ' C ',
        ' T '
    ],
    {
        C: 'mmcr:item_output_bus_big',
        T: '#c:plates/fluix',
        B: 'create_connected:inventory_bridge'
    })

    event.remove({ output: 'mmcr:extended_item_output_bus_reinforced' })
    event.shaped('mmcr:extended_item_output_bus_reinforced',
    [
        ' B ',
        ' C ',
        ' T '
    ],
    {
        C: 'mmcr:item_output_bus_huge',
        T: '#c:plates/chorium',
        B: 'create_connected:inventory_bridge'
    })

    event.remove({ output: 'mmcr:extended_item_output_bus_ultimate' })
    event.shaped('mmcr:extended_item_output_bus_ultimate',
    [
        ' B ',
        ' C ',
        ' T '
    ],
    {
        C: 'mmcr:item_output_bus_ludicrous',
        T: '#c:plates/energized_certus_quartz',
        B: 'create_connected:inventory_bridge'
    })

    // #endregion

    // #region Extended Fluid Input Hatch

    event.remove({ output: 'mmcr:extended_fluid_input_hatch_basic' })
    event.shaped('mmcr:extended_fluid_input_hatch_basic',
    [
        ' T ',
        ' C ',
        ' B '
    ],
    {
        C: 'mmcr:fluid_input_hatch_reinforced',
        T: '#c:plates/tungsten',
        B: 'fluidlogistics:multi_fluid_access_port'
    })

    event.remove({ output: 'mmcr:extended_fluid_input_hatch_advanced' })
    event.shaped('mmcr:extended_fluid_input_hatch_advanced',
    [
        ' T ',
        ' C ',
        ' B '
    ],
    {
        C: 'mmcr:fluid_input_hatch_big',
        T: '#c:plates/fluix',
        B: 'fluidlogistics:multi_fluid_access_port'
    })

    event.remove({ output: 'mmcr:extended_fluid_input_hatch_reinforced' })
    event.shaped('mmcr:extended_fluid_input_hatch_reinforced',
    [
        ' T ',
        ' C ',
        ' B '
    ],
    {
        C: 'mmcr:fluid_input_hatch_huge',
        T: '#c:plates/chorium',
        B: 'fluidlogistics:multi_fluid_access_port'
    })

    event.remove({ output: 'mmcr:extended_fluid_input_hatch_ultimate' })
    event.shaped('mmcr:extended_fluid_input_hatch_ultimate',
    [
        ' T ',
        ' C ',
        ' B '
    ],
    {
        C: 'mmcr:fluid_input_hatch_ludicrous',
        T: '#c:plates/energized_certus_quartz',
        B: 'fluidlogistics:multi_fluid_access_port'
    })

    // #endregion

    // #region Extended Fluid Output Hatch

    event.remove({ output: 'mmcr:extended_fluid_output_hatch_basic' })
    event.shaped('mmcr:extended_fluid_output_hatch_basic',
    [
        ' B ',
        ' C ',
        ' T '
    ],
    {
        C: 'mmcr:fluid_output_hatch_reinforced',
        T: '#c:plates/tungsten',
        B: 'fluidlogistics:multi_fluid_access_port'
    })

    event.remove({ output: 'mmcr:extended_fluid_output_hatch_advanced' })
    event.shaped('mmcr:extended_fluid_output_hatch_advanced',
    [
        ' B ',
        ' C ',
        ' T '
    ],
    {
        C: 'mmcr:fluid_output_hatch_big',
        T: '#c:plates/fluix',
        B: 'fluidlogistics:multi_fluid_access_port'
    })

    event.remove({ output: 'mmcr:extended_fluid_output_hatch_reinforced' })
    event.shaped('mmcr:extended_fluid_output_hatch_reinforced',
    [
        ' B ',
        ' C ',
        ' T '
    ],
    {
        C: 'mmcr:fluid_output_hatch_huge',
        T: '#c:plates/chorium',
        B: 'fluidlogistics:multi_fluid_access_port'
    })

    event.remove({ output: 'mmcr:extended_fluid_output_hatch_ultimate' })
    event.shaped('mmcr:extended_fluid_output_hatch_ultimate',
    [
        ' B ',
        ' C ',
        ' T '
    ],
    {
        C: 'mmcr:fluid_output_hatch_ludicrous',
        T: '#c:plates/energized_certus_quartz',
        B: 'fluidlogistics:multi_fluid_access_port'
    })

    // #endregion

    // #region Extended Energy Hatch

    event.remove({ output: 'mmcr:extended_energy_input_hatch_reinforced' })
    event.shaped('mmcr:extended_energy_input_hatch_reinforced',
    [
        ' P ',
        ' C ',
        ' M '
    ],
    {
        C: 'mmcr:basic_casing',
        P: '#c:ingots/neutronium',
        M: 'kubejs:supercapacitor'
    })

    event.remove({ id: 'mmcr:extended_energy_input_hatch_ultimate' })

    event.remove({ output: 'mmcr:extended_energy_output_hatch_reinforced' })
    event.shaped('mmcr:extended_energy_output_hatch_reinforced',
    [
        ' M ',
        ' C ',
        ' P '
    ],
    {
        C: 'mmcr:basic_casing',
        P: '#c:ingots/neutronium',
        M: 'kubejs:supercapacitor'
    })

    event.remove({ id: 'mmcr:extended_energy_output_hatch_ultimate' })

    // #endregion

    // #region Combined Input Buffer

    event.remove({ output: 'mmcr:combined_input_basic' })
    event.shapeless('mmcr:combined_input_basic', [ 'mmcr:item_input_bus_reinforced', 'mmcr:fluid_input_hatch_reinforced' ])

    event.remove({ output: 'mmcr:combined_input_advanced' })
    event.shapeless('mmcr:combined_input_advanced', [ 'mmcr:item_input_bus_big', 'mmcr:fluid_input_hatch_big' ])

    event.remove({ output: 'mmcr:combined_input_reinforced' })
    event.shapeless('mmcr:combined_input_reinforced', [ 'mmcr:item_input_bus_huge', 'mmcr:fluid_input_hatch_huge' ])

    event.remove({ output: 'mmcr:combined_input_ultimate' })
    event.shapeless('mmcr:combined_input_ultimate', [ 'mmcr:item_input_bus_ludicrous', 'mmcr:fluid_input_hatch_ludicrous' ])

    // #endregion

    // #region Combined Output Buffer

    event.remove({ output: 'mmcr:combined_output_basic' })
    event.shapeless('mmcr:combined_output_basic', [ 'mmcr:item_output_bus_reinforced', 'mmcr:fluid_output_hatch_reinforced' ])

    event.remove({ output: 'mmcr:combined_output_advanced' })
    event.shapeless('mmcr:combined_output_advanced', [ 'mmcr:item_output_bus_big', 'mmcr:fluid_output_hatch_big' ])

    event.remove({ output: 'mmcr:combined_output_reinforced' })
    event.shapeless('mmcr:combined_output_reinforced', [ 'mmcr:item_output_bus_huge', 'mmcr:fluid_output_hatch_huge' ])

    event.remove({ output: 'mmcr:combined_output_ultimate' })
    event.shapeless('mmcr:combined_output_ultimate', [ 'mmcr:item_output_bus_ludicrous', 'mmcr:fluid_output_hatch_ludicrous' ])

    // #endregion

    // #region Extended Combined Input Buffer

    event.remove({ output: 'mmcr:extended_combined_input_advanced' })
    event.shaped('mmcr:extended_combined_input_advanced',
    [
        ' P ',
        'ACB',
        ' X '
    ],
    {
        C: 'mmcr:combined_input_advanced',
        A: 'create_connected:inventory_bridge',
        B: 'fluidlogistics:multi_fluid_access_port',
        P: '#c:plates/energized_certus_quartz',
        X: 'ae2:logic_processor'
    })

    event.remove({ output: 'mmcr:extended_combined_input_reinforced' })
    event.shaped('mmcr:extended_combined_input_reinforced',
    [
        ' P ',
        'ACB',
        ' X '
    ],
    {
        C: 'mmcr:combined_input_reinforced',
        A: 'create_connected:inventory_bridge',
        B: 'fluidlogistics:multi_fluid_access_port',
        P: '#c:plates/energized_fluix',
        X: 'extendedae:concurrent_processor'
    })

    event.remove({ output: 'mmcr:extended_combined_input_ultimate' })
    event.shaped('mmcr:extended_combined_input_ultimate',
    [
        ' P ',
        'ACB',
        ' X '
    ],
    {
        C: 'mmcr:combined_input_ultimate',
        A: 'create_connected:inventory_bridge',
        B: 'fluidlogistics:multi_fluid_access_port',
        P: '#c:plates/energized_superconductive',
        X: 'neoecoae:superconducting_processor'
    })

    // #endregion

    // #region Extended Combined Output Buffer

    event.remove({ output: 'mmcr:extended_combined_output_advanced' })
    event.shaped('mmcr:extended_combined_output_advanced',
    [
        ' X ',
        'ACB',
        ' P '
    ],
    {
        C: 'mmcr:combined_output_advanced',
        A: 'create_connected:inventory_bridge',
        B: 'fluidlogistics:multi_fluid_access_port',
        P: '#c:plates/energized_certus_quartz',
        X: 'ae2:logic_processor'
    })

    event.remove({ output: 'mmcr:extended_combined_output_reinforced' })
    event.shaped('mmcr:extended_combined_output_reinforced',
    [
        ' X ',
        'ACB',
        ' P '
    ],
    {
        C: 'mmcr:combined_output_reinforced',
        A: 'create_connected:inventory_bridge',
        B: 'fluidlogistics:multi_fluid_access_port',
        P: '#c:plates/energized_fluix',
        X: 'extendedae:concurrent_processor'
    })

    event.remove({ output: 'mmcr:extended_combined_output_ultimate' })
    event.shaped('mmcr:extended_combined_output_ultimate',
    [
        ' X ',
        'ACB',
        ' P '
    ],
    {
        C: 'mmcr:combined_output_ultimate',
        A: 'create_connected:inventory_bridge',
        B: 'fluidlogistics:multi_fluid_access_port',
        P: '#c:plates/energized_superconductive',
        X: 'neoecoae:superconducting_processor'
    })

    // #endregion

    event.remove({ output: 'mmcr:thread_disperser' })
    event.shaped('mmcr:thread_disperser',
    [
        'PAP',
        'RCR',
        'PBP'
    ],
    {
        C: 'kubejs:integrated_circuit',
        A: 'ae2:calculation_processor',
        B: 'ae2:logic_processor',
        P: '#c:plates/aluminum',
        R: '#c:rods/aluminum'
    })

    event.remove({ output: 'mmcr:key_card' })
    event.shaped('mmcr:key_card',
    [
        '   ',
        'XPP',
        'ARA'
    ],
    {
        R: 'kubejs:integrated_circuit',
        A: '#c:plates/gold',
        X: 'ae2:logic_processor',
        P: '#c:plates/iron'
    })
})