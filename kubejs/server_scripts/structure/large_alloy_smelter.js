MMCREvents.server(event => {
    const api = event.getAPI()
    event.createStructure("kubejs:large_alloy_smelter")
        .pattern(" XUX ", "     ", " AAA ", " XXX ", " XBX ", " XXX ", " AAA ")
        .pattern("XXXXX", " D D ", "AAAAA", "X   X", "XEEEX", "X   X", "AAAAA")
        .pattern("XXXXX", "     ", "AAAAA", "X E X", "FE EF", "X E X", "AAAAA")
        .pattern("XXXXX", " D D ", "AAAAA", "X   X", "XEEEX", "X   X", "AAAAA")
        .pattern(" XCX ", "  G  ", " AAA ", " XHX ", " XHX ", " XHX ", " AAA ")
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
            api.block('mmcr:upgrade_bus_normal'))) // 4
        .set('A', api.block('createnuclear:reactor_casing'))
        .set('B', api.anyOf(
            api.state('create:encased_chain_drive[axis=z,axis_along_first=true]'),
            api.state('createcasing:brass_encased_chain_drive[axis=z,axis_along_first=true]'),
            api.state('createcasing:copper_encased_chain_drive[axis=z,axis_along_first=true]'),
            api.state('createcasing:railway_encased_chain_drive[axis=z,axis_along_first=true]'),
            api.state('createcasing:creative_encased_chain_drive[axis=z,axis_along_first=true]'),
            api.state('createcasing:industrial_iron_encased_chain_drive[axis=z,axis_along_first=true]'),
            api.state('createcasing:weathered_iron_encased_chain_drive[axis=z,axis_along_first=true]'),
            api.state('createcasing:zinc_encased_chain_drive[axis=z,axis_along_first=true]'),
            api.state('createcasing:shadow_steel_encased_chain_drive[axis=z,axis_along_first=true]'),
            api.state('createcasing:refined_radiance_encased_chain_drive[axis=z,axis_along_first=true]'),
            api.block('mmcr:create_stress_input_interface')))
        .set('D', api.block('createnuclear:reactor_frame'))
        .set('E', api.block('create:copper_casing'))
        .set('F', api.anyOf(
            api.state('create:encased_chain_drive[axis=x,axis_along_first=true]'),
            api.state('createcasing:brass_encased_chain_drive[axis=x,axis_along_first=true]'),
            api.state('createcasing:copper_encased_chain_drive[axis=x,axis_along_first=true]'),
            api.state('createcasing:railway_encased_chain_drive[axis=x,axis_along_first=true]'),
            api.state('createcasing:creative_encased_chain_drive[axis=x,axis_along_first=true]'),
            api.state('createcasing:industrial_iron_encased_chain_drive[axis=x,axis_along_first=true]'),
            api.state('createcasing:weathered_iron_encased_chain_drive[axis=x,axis_along_first=true]'),
            api.state('createcasing:zinc_encased_chain_drive[axis=x,axis_along_first=true]'),
            api.state('createcasing:shadow_steel_encased_chain_drive[axis=x,axis_along_first=true]'),
            api.state('createcasing:refined_radiance_encased_chain_drive[axis=x,axis_along_first=true]'),
            api.block('mmcr:create_stress_input_interface')))
        .set('G', api.state('createimp:redstone_link_router[facing=south]'))
        .set('H', api.block('createnuclear:reinforced_glass'))
        .controller('C')
        .build()
})
