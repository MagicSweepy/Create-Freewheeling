MMCREvents.server(event => {
    const api = event.getAPI()
    event.createStructure('kubejs:lightning_processor')
        .pattern("   X   ", "       ", "       ", "       ", "       ")
        .pattern("   X   ", "   A   ", "   A   ", "   A   ", "       ")
        .pattern("  XXX  ", "  XXX  ", "  XXX  ", "  XXX  ", "       ")
        .pattern("XXXXXXX", " AXBXA ", " AXBXA ", " AXXXA ", "   C   ")
        .pattern("  XXX  ", "  XXX  ", "  XXX  ", "  XXX  ", "       ")
        .pattern("   X   ", "   A   ", "   A   ", "   A   ", "       ")
        .pattern("   X   ", "       ", "       ", "       ", "       ")
        .set('X', api.anyOf(
            api.block('create:shadow_steel_casing'),
            api.tag('mmcr:item_input_ports'),
            api.tag('mmcr:item_output_ports'),
            api.tag('mmcr:fluid_input_ports'),
            api.tag('mmcr:neoforge_energy_input_ports'),
            api.block('mmcr:parallel_controller_normal'), // 4
            api.block('mmcr:parallel_controller_plus'), // 16
            api.block('mmcr:parallel_controller_reinforced'), // 64
            api.block('mmcr:parallel_controller_pro'), // 256
            api.block('mmcr:factory_controller'))) 
        .set('A', api.anyOf(
            api.block('neoecoae:energized_crystal_block'),
            api.block('neoecoae:energized_fluix_crystal_block'),
            api.block('neoecoae:energized_superconductive_block')))
        .set('B', api.block('ae2:fluix_block'))
        .controller('C')
        .build()
})
