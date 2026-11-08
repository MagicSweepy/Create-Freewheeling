MMCREvents.server(event => {
    const api = event.getAPI()
    event.createStructure('kubejs:bio_chamber')
        .pattern("  XSX  ", "  AAA  ", "  AAA  ", "  AAA  ", "  XXX  ")
        .pattern(" XBBBX ", " X   X ", " X   X ", " X   X ", " XBBBX ")
        .pattern("XBBDBBX", "A     A", "A     A", "A     A", "XBBDBBX")
        .pattern("XBDDDBX", "A     A", "A     A", "A     A", "XBDDDBX")
        .pattern("XBBDBBX", "A     A", "A     A", "A     A", "XBBDBBX")
        .pattern(" XBBBX ", " X   X ", " X   X ", " X   X ", " XBBBX ")
        .pattern("  XCX  ", "  AAA  ", "  AAA  ", "  AAA  ", "  XUX  ")
        .set('X', api.anyOf(
            api.block('mmcr:basic_casing'),
            api.tag('mmcr:item_input_ports'),
            api.tag('mmcr:item_output_ports'),
            api.tag('mmcr:fluid_input_ports'),
            api.tag('mmcr:fluid_output_ports'),
            api.tag('mmcr:neoforge_energy_input_ports'),
            api.block('mmcr:parallel_controller_normal'), // 4
            api.block('mmcr:parallel_controller_plus'), // 16
            api.block('mmcr:parallel_controller_reinforced'), // 64
            api.block('mmcr:parallel_controller_pro'), // 256
            api.block('mmcr:factory_controller')))
        .set('U', api.anyOf(
            api.block('mmcr:basic_casing'),
            api.block('mmcr:upgrade_bus_reinforced'))) // 6
        .set('A', api.block('ae2:quartz_vibrant_glass'))
        .set('B', api.block('neoecoae:cryogenic_aluminum_alloy_casing'))
        .set('D', api.block('neoecoae:aluminum_alloy_casing'))
        .set('S', api.smartInterface())
        .controller('C')
        .build()
})
