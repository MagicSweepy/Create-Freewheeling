MMCREvents.server(event => {
    const api = event.getAPI()
    event.createStructure('kubejs:crystal_energy_storage')
        .pattern("XXDXX", "GGGGG", "GGGGG", "GGGGG", "XXXXX")
        .pattern("XXXXX", "GSSSG", "GSSSG", "GSSSG", "XXXXX")
        .pattern("XXXXX", "GSSSG", "GSSSG", "GSSSG", "XXXXX")
        .pattern("XXXXX", "GSSSG", "GSSSG", "GSSSG", "XXXXX")
        .pattern("XXCXX", "GGGGG", "GGGGG", "GGGGG", "XXXXX")
        .set('X', api.anyOf(
            api.block('create:refined_radiance_casing'),
            api.tag('mmcr:neoforge_energy_input_ports'),
            api.tag('mmcr:neoforge_energy_output_ports')))
        .set('G', api.block('ae2:quartz_glass'))
        .set('S', api.anyOf(
            api.block('ae2:quartz_block'),
            api.block('ae2:fluix_block'),
            api.block('neoecoae:energized_crystal_block'),
            api.block('neoecoae:energized_fluix_crystal_block'),
            api.block('neoecoae:energized_superconductive_block')))
        .set('D', api.dataStorage())
        .controller('C')
        .build()
})
