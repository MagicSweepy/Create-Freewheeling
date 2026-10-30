MMCREvents.server(event => {
    const api = event.getAPI()
    event.createStructure("kubejs:large_rolling_mill")
        .pattern("XXXXX", "     ", "     ", "     ", "     ")
        .pattern("XXXXX", " A A ", " A A ", " A A ", " A A ")
        .pattern("XXXXX", "     ", " E E ", "     ", " E E ")
        .pattern("XXXXX", "     ", " E E ", "     ", " E E ")
        .pattern("XXXXX", "     ", " E E ", "     ", " E E ")
        .pattern("XXXXX", "     ", " E E ", "     ", " E E ")
        .pattern("XXXXX", " A A ", " A A ", " A A ", " A A ")
        .pattern("XXCXX", "     ", "     ", "     ", "     ")
        .set('X', api.anyOf(
            api.block('createcasing:zinc_casing'),
            api.block('mmcr:item_input_bus'),
            api.block('mmcr:item_output_bus'),
            api.block('mmcr:parallel_controller_normal'),
            api.block('mmcr:parallel_controller_plus'),
            api.block('mmcr:parallel_controller_reinforced')))
        .set('A', api.anyOf(
            api.state('create:encased_chain_drive[axis=z,axis_along_first=false]'),
            api.state('createcasing:brass_encased_chain_drive[axis=z,axis_along_first=false]'),
            api.state('createcasing:copper_encased_chain_drive[axis=z,axis_along_first=false]'),
            api.state('createcasing:railway_encased_chain_drive[axis=z,axis_along_first=false]'),
            api.state('createcasing:creative_encased_chain_drive[axis=z,axis_along_first=false]'),
            api.state('createcasing:industrial_iron_encased_chain_drive[axis=z,axis_along_first=false]'),
            api.state('createcasing:weathered_iron_encased_chain_drive[axis=z,axis_along_first=false]'),
            api.state('createcasing:zinc_encased_chain_drive[axis=z,axis_along_first=false]'),
            api.state('createcasing:shadow_steel_encased_chain_drive[axis=z,axis_along_first=false]'),
            api.state('createcasing:refined_radiance_encased_chain_drive[axis=z,axis_along_first=false]'),
            api.block('mmcr:create_stress_input_interface')))
        .set('E', api.block('createnuclear:reactor_casing'))
        .controller('C')
        .build()
})
