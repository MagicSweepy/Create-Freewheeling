MMCREvents.server(event => {
    const api = event.getAPI()
    event.createStructure("kubejs:large_crusher")
        .pattern("AAA XXXXXXX", "BBB XXXXXXX", "DDD XXXXXXX")
        .pattern("AAA XXXXXXX", "BBB E     E", "DDD X F F X")
        .pattern("AAA XXXXXXX", "BBBGE     E", "DDD X F F X")
        .pattern("XXX XXXXXXX", "XXX E     E", "    X F F X")
        .pattern("XXX XXXXXXX", "XCXGE     E", " H  X F F X")
        .pattern("    XXXXXXX", "    E     E", "    X F F X")
        .pattern("    XXXXXXX", "    XXXXXXX", "    XXXXXXX")
        .set('X', api.anyOf(
            api.block('create:brass_casing'),
            api.tag('mmcr:item_input_ports'),
            api.tag('mmcr:item_output_ports'),
            api.tag('mmcr:neoforge_energy_input_ports'),
            api.block('mmcr:parallel_controller_normal'), // 4
            api.block('mmcr:parallel_controller_plus'), // 16
            api.block('mmcr:parallel_controller_reinforced'))) // 64
        .set('A', api.state('createaddition:modular_accumulator[bottom=true,top=false]'))
        .set('B', api.state('createaddition:modular_accumulator[bottom=false,top=false]'))
        .set('D', api.state('createaddition:modular_accumulator[bottom=false,top=true]'))
        .set('E', api.block('create_connected:empty_fan_catalyst'))
        .set('F', api.state('create:crushing_wheel[axis=z]'))
        .set('G', api.anyOf(
            api.state('create:encased_chain_drive[axis=x,axis_along_first=false,part=none]'),
            api.state('createcasing:brass_encased_chain_drive[axis=x,axis_along_first=false,part=none]'),
            api.state('createcasing:copper_encased_chain_drive[axis=x,axis_along_first=false,part=none]'),
            api.state('createcasing:railway_encased_chain_drive[axis=x,axis_along_first=false,part=none]'),
            api.state('createcasing:creative_encased_chain_drive[axis=x,axis_along_first=false,part=none]'),
            api.state('createcasing:industrial_iron_encased_chain_drive[axis=x,axis_along_first=false,part=none]'),
            api.state('createcasing:weathered_iron_encased_chain_drive[axis=x,axis_along_first=false,part=none]'),
            api.state('createcasing:zinc_encased_chain_drive[axis=x,axis_along_first=false,part=none]'),
            api.state('createcasing:shadow_steel_encased_chain_drive[axis=x,axis_along_first=false,part=none]'),
            api.state('createcasing:refined_radiance_encased_chain_drive[axis=x,axis_along_first=false,part=none]')))
        .set('H', api.state('createimp:redstone_link_router[facing=south]'))
        .controller('C')
        .build()
})
