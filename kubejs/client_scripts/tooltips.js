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
    ], Text.translate('kubejs.tooltip.mmcr_item_io_bus').gray())

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
    ], Text.translate('kubejs.tooltip.mmcr_fluid_io_bus').gray())

    event.add('kubejs:lightning_trigger', Text.translate('kubejs.tooltip.lightning_trigger').gray())

    event.add('mmcr:atmospheric_collector_controller', Text.translate('kubejs.tooltip.atmospheric_collector').gray())

    event.add('mmcr:atmospheric_diffuser_controller', Text.translate('kubejs.tooltip.atmospheric_diffuser').gray())
    event.add('mmcr:atmospheric_diffuser_controller', Text.translate('kubejs.tooltip.atmospheric_diffuser.gases.1').red())
    event.add('mmcr:atmospheric_diffuser_controller', Text.translate('kubejs.tooltip.atmospheric_diffuser.gases.2').blue())
    event.add('mmcr:atmospheric_diffuser_controller', Text.translate('kubejs.tooltip.atmospheric_diffuser.gases.3').aqua())
    event.add('mmcr:atmospheric_diffuser_controller', Text.translate('kubejs.tooltip.atmospheric_diffuser.gases.4').yellow())
    event.add('mmcr:atmospheric_diffuser_controller', Text.translate('kubejs.tooltip.atmospheric_diffuser.gases.5').gold())
    event.add('mmcr:atmospheric_diffuser_controller', Text.translate('kubejs.tooltip.atmospheric_diffuser.gases.6').lightPurple())
    event.add('mmcr:atmospheric_diffuser_controller', Text.translate('kubejs.tooltip.atmospheric_diffuser.range', 8).gray())

    event.add('mmcr:chemical_reactor_controller', Text.translate('kubejs.tooltip.chemical_reactor').gray())
    event.add('mmcr:chemical_reactor_controller', Text.translate('kubejs.tooltip.chemical_reactor.range').gray())
})