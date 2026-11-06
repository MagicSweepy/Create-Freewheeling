MMCREvents.server(event => {
    const api = event.getAPI()
    event.createStructure('kubejs:chemical_reactor')
        .pattern("XXX", "XSX", "XXX")
        .pattern("XXX", "A A", "XXX")
        .pattern("XUX", "XCX", "XXX")
        .set('X', api.anyOf(
            api.block('mmcr:basic_casing'),
            api.tag('mmcr:item_input_ports'),
            api.tag('mmcr:item_output_ports'),
            api.tag('mmcr:fluid_input_ports'),
            api.tag('mmcr:fluid_output_ports'),
            api.tag('mmcr:neoforge_energy_input_ports'),
            api.block('mmcr:parallel_controller_normal'), // 4
            api.block('mmcr:parallel_controller_plus'), // 16
            api.block('mmcr:parallel_controller_reinforced'))) // 64
        .set('U', api.anyOf(
            api.block('mmcr:basic_casing'),
            api.block('mmcr:upgrade_bus_reinforced'))) // 6
        .set('S', api.smartInterface())
        .set('A', api.block('ae2:quartz_glass'))
        .controller('C')
        .build()
})
