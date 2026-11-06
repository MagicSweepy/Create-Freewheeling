ServerEvents.recipes(event => {
    event.remove({ id: 'extendedae:entro_crystal' })
    event.recipes.create.milling('extendedae:entro_dust', 'extendedae:entro_crystal')
    event.recipes.create.crushing('extendedae:entro_dust', 'extendedae:entro_crystal')
    
    event.remove({ id: 'extendedae:inscriber/concurrent_print' })
    event.remove({ id: 'extendedae:inscriber/concurrent_process' })
    event.recipes.create.cutting('kubejs:entro_sheet', 'extendedae:entro_crystal')

    event.remove({ id: 'extendedae:assembler/wireless_connector' })
    event.shaped('2x extendedae:wireless_connect',
    [
        'PWP',
        'BCB',
        'PXP'
    ],
    {
        C: 'create:shadow_steel_casing',
        W: 'ae2:wireless_receiver',
        X: 'extendedae:concurrent_processor',
        B: 'ae2:wireless_booster',
        P: '#c:plates/aluminum_alloy'
    })

    event.remove({ id: 'extendedae:assembler/wireless_hub' })
    event.shaped('extendedae:wireless_hub',
    [
        'PQP',
        'XWX',
        'PCP'
    ],
    {
        W: 'extendedae:wireless_connect',
        C: '#ae2:covered_cable',
        X: 'extendedae:concurrent_processor',
        Q: 'ae2:quantum_link',
        P: '#c:plates/black_tungsten_alloy'
    })

    event.remove({ id: 'extendedae:assembler/wireless_kit' })
    event.recipes.create.mechanical_crafting('extendedae:wireless_tool',
    [
        ' W ',
        'PPP',
        'PCP',
        'PXP',
        'PPP'
    ],
    {
        P: '#c:plates/aluminum_alloy',
        C: 'ae2:calculation_processor',
        X: 'extendedae:concurrent_processor',
        W: 'ae2:wireless_receiver'
    })

    event.remove({ id: 'extendedae:assembler/circuit_cutter' })
    event.shaped('extendedae:circuit_cutter',
    [
        'PXP',
        'ACA',
        'PWP'
    ],
    {
        C: 'create:shadow_steel_casing',
        A: '#c:plates/energized_fluix',
        X: 'extendedae:concurrent_processor',
        W: '#ae2:covered_cable',
        P: '#c:plates/aluminum_alloy'
    })

    event.remove({ id: 'extendedae:cutter/fishbig_destroy' })
    event.remove({ id: 'extendedae:cutter/mddyue_destroy' })
    event.remove({ id: 'neoecoae:circuit_cutter/superconducting_processor_print' })

    event.remove({ id: 'extendedae:assembler/ex_inscriber' })
    event.shaped('extendedae:ex_inscriber',
    [
        'PIP',
        'ACA',
        'PIP'
    ],
    {
        C: 'create:shadow_steel_casing',
        I: 'ae2:inscriber',
        A: 'ae2:capacity_card',
        P: '#c:plates/aluminum_alloy'
    })

    event.remove({ id: 'extendedae:assembler/crystal_fixer' })
    event.shaped('extendedae:crystal_fixer',
    [
        'AXA',
        'BCB',
        'APA'
    ],
    {
        C: 'create:shadow_steel_casing',
        B: 'ae2:quartz_block',
        X: 'kubejs:fluix_coil',
        P: 'extendedae:concurrent_processor',
        A: '#c:plates/aluminum_alloy'
    })

    event.remove({ output: 'extendedae:crystal_assembler' })
    event.shaped('extendedae:crystal_assembler',
    [
        'PTP',
        'LCE',
        'PXP'
    ],
    {
        C: 'create:refined_radiance_casing',
        T: 'ae2:crafting_terminal',
        P: '#c:plates/entro',
        X: 'extendedae:concurrent_processor',
        L: 'ae2:logic_processor',
        E: 'ae2:engineering_processor'
    })

    event.remove({ id: 'extendedae:assembler/concurrent_press' })
    event.recipes.create.deploying('extendedae:concurrent_processor_press', [ 'ae2:silicon_press', 'kubejs:entro_sheet' ])

    event.remove({ id: 'extendedae:assembler/fluix_transformation' })
    event.remove({ id: 'extendedae:assembler/logic_processor' })
    event.remove({ id: 'extendedae:assembler/engineering_processor' })
    event.remove({ id: 'extendedae:assembler/concurrent_processor' })
    event.remove({ id: 'neoecoae:crystal_assembler/superconducting_processor' })

    event.remove({ id: 'extendedae:transform/entro_ingot' })
    event.remove({ id: 'extendedae:assembler/entro_ingot_transformation' })
    event.remove({ id: 'extendedae:machine_frame' })
    event.remove({ id: 'extendedae:machine_frame_mirror' })

    event.remove({ id: 'extendedae:assembler_matrix_frame' })
    event.remove({ id: 'extendedae:assembler_matrix_wall' })
    event.remove({ id: 'extendedae:assembler_matrix_glass' })
    event.recipes.create.deploying('extendedae:assembler_matrix_glass', [ 'extendedae:assembler_matrix_wall', 'createnuclear:reinforced_glass' ])
})