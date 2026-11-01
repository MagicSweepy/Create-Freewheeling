ItemEvents.modifyTooltips(event => {
    event.add([
        // 'mmcr:item_input_bus_tiny',
        'mmcr:item_input_bus_small',
        'mmcr:item_input_bus',
        'mmcr:item_input_bus_reinforced',
        'mmcr:item_input_bus_big',
        'mmcr:item_input_bus_huge',
        // 'mmcr:item_input_bus_ludicrous',
        // 'mmcr:item_output_bus_tiny',
        'mmcr:item_output_bus_small',
        'mmcr:item_output_bus',
        'mmcr:item_output_bus_reinforced',
        'mmcr:item_output_bus_big',
        'mmcr:item_output_bus_huge',
        // 'mmcr:item_output_bus_ludicrous'
    ], Text.translate('kubejs.tooltip.mmcr_item_io_bus'))

    event.add([
        // 'mmcr:fluid_input_hatch_tiny',
        'mmcr:fluid_input_hatch_small',
        'mmcr:fluid_input_hatch',
        'mmcr:fluid_input_hatch_reinforced',
        'mmcr:fluid_input_hatch_big',
        'mmcr:fluid_input_hatch_huge',
        // 'mmcr:fluid_input_hatch_ludicrous',
        // 'mmcr:fluid_input_hatch_vacuum',
        // 'mmcr:fluid_output_hatch_tiny',
        'mmcr:fluid_output_hatch_small',
        'mmcr:fluid_output_hatch',
        'mmcr:fluid_output_hatch_reinforced',
        'mmcr:fluid_output_hatch_big',
        'mmcr:fluid_output_hatch_huge',
        // 'mmcr:fluid_output_hatch_ludicrous',
        // 'mmcr:fluid_output_hatch_vacuum'
    ], Text.translate('kubejs.tooltip.mmcr_fluid_io_bus'))
})