MMCREvents.server(event => {
    const api = event.getAPI()
    event.createStructure('kubejs:industrial_centrifuge')
        .pattern("       ", "  XUX  ", "       ")
        .pattern("  XAX  ", " B   B ", "  XAX  ")
        .pattern(" XDDDX ", "X     X", " XDDDX ")
        .pattern(" ADEDA ", "A  F  A", " ADEDA ")
        .pattern(" XDDDX ", "X     X", " XDDDX ")
        .pattern("  XAX  ", " B   B ", "  XAX  ")
        .pattern("       ", "  XCX  ", "       ")
        .set('X', api.anyOf(
            api.block('neoecoae:storage_casing'),
            api.block('mmcr:parallel_controller_normal'), // 4
            api.block('mmcr:parallel_controller_plus'), // 16
            api.block('mmcr:parallel_controller_reinforced'), // 64
            api.block('mmcr:parallel_controller_pro'), // 256
            api.block('mmcr:factory_controller')))
        .set('A', api.anyOf(
            api.block('neoecoae:large_integrated_working_station_casing'),
            api.tag('mmcr:neoforge_energy_input_ports')))
        .set('U', api.anyOf(
            api.state('neoecoae:large_integrated_working_station_casing'),
            api.block('mmcr:upgrade_bus_reinforced'))) // 6
        .set('B', api.block('extendedae:assembler_matrix_glass'))
        .set('D', api.block('neoecoae:crafting_casing'))
        .set('E', api.anyOf(
            api.block('neoecoae:computation_casing'),
            api.block('mmcr:create_stress_input_interface')))
        .set('F', api.block('neoecoae:cryogenic_aluminum_alloy_casing'))
        .controller('C')
        .build()
})
