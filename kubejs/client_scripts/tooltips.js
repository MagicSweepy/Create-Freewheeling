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

    const DYES = ['red', 'yellow', 'blue', 'brown', 'white', 'black']

    const halfIds = []
    const pairIds = []

    DYES.forEach(dye => { halfIds.push('kubejs:chorium_' + dye) })

    for (let i = 0; i < DYES.length; i++) {
        for (let j = i + 1; j < DYES.length; j++) {
            pairIds.push('kubejs:chorium_' + DYES[i] + '_' + DYES[j])
        }
    }

    event.add(halfIds, Text.translate('kubejs.tooltip.chorium_half').gray())
    event.add(pairIds, Text.translate('kubejs.tooltip.chorium_dyed').gray())
    event.add('create:chromatic_compound', Text.translate('kubejs.tooltip.chromatic_compound.dyed.1').gray())
    event.add('create:chromatic_compound', Text.translate('kubejs.tooltip.chromatic_compound.dyed.2').gray())

    event.add('kubejs:speed_module_mk1', [
        Text.translate('kubejs.tooltip.module.duration_mul', '§f0.96').gray(),
        Text.translate('kubejs.tooltip.module.energy_mul', '§e1.08').gray(),
        Text.translate('kubejs.tooltip.module.hint').darkGray() ])

    event.add('kubejs:speed_module_mk2', [
        Text.translate('kubejs.tooltip.module.duration_mul', '§f0.93').gray(),
        Text.translate('kubejs.tooltip.module.energy_mul', '§e1.15').gray(),
        Text.translate('kubejs.tooltip.module.hint').darkGray() ])

    event.add('kubejs:speed_module_mk3', [
        Text.translate('kubejs.tooltip.module.duration_mul', '§f0.90').gray(),
        Text.translate('kubejs.tooltip.module.energy_mul', '§e1.25').gray(),
        Text.translate('kubejs.tooltip.module.hint').darkGray() ])

    event.add('kubejs:productivity_module_mk1', [
        Text.translate('kubejs.tooltip.module.output_mul', '§d1.04').gray(),
        Text.translate('kubejs.tooltip.module.duration_mul', '§f1.05').gray(),
        Text.translate('kubejs.tooltip.module.energy_mul', '§e1.10').gray(),
        Text.translate('kubejs.tooltip.module.hint').darkGray() ])

    event.add('kubejs:productivity_module_mk2', [
        Text.translate('kubejs.tooltip.module.output_mul', '§d1.06').gray(),
        Text.translate('kubejs.tooltip.module.duration_mul', '§f1.08').gray(),
        Text.translate('kubejs.tooltip.module.energy_mul', '§e1.15').gray(),
        Text.translate('kubejs.tooltip.module.hint').darkGray() ])

    event.add('kubejs:productivity_module_mk3', [
        Text.translate('kubejs.tooltip.module.output_mul', '§d1.08').gray(),
        Text.translate('kubejs.tooltip.module.duration_mul', '§f1.12').gray(),
        Text.translate('kubejs.tooltip.module.energy_mul', '§e1.22').gray(),
        Text.translate('kubejs.tooltip.module.hint').darkGray() ])

    event.add('kubejs:efficiency_module_mk1', [
        Text.translate('kubejs.tooltip.module.energy_mul', '§e0.96').gray(),
        Text.translate('kubejs.tooltip.module.hint').darkGray() ])

    event.add('kubejs:efficiency_module_mk2', [
        Text.translate('kubejs.tooltip.module.energy_mul', '§e0.93').gray(),
        Text.translate('kubejs.tooltip.module.hint').darkGray() ])

    event.add('kubejs:efficiency_module_mk3', [
        Text.translate('kubejs.tooltip.module.energy_mul', '§e0.90').gray(),
        Text.translate('kubejs.tooltip.module.hint').darkGray() ])
})
