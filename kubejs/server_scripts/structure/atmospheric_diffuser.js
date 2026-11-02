MMCREvents.server(event => {
    const api = event.getAPI()
    event.createStructure('kubejs:atmospheric_diffuser')
        .pattern("X", "C", "A", "B")
        .set('X', api.anyOf(
            api.block('create:copper_casing'),
            api.tag('mmcr:fluid_input_ports')))
        .set('A', api.anyOf(
            api.block('create:fluid_tank'),
            api.block('createcasing:andesite_fluid_tank'),
            api.block('createcasing:brass_fluid_tank'),
            api.block('createcasing:zinc_fluid_tank'),
            api.block('create_connected:fluid_vessel'),
            api.block('create_connected_encased:andesite_fluid_vessel'),
            api.block('create_connected_encased:brass_fluid_vessel'),
            api.block('create_connected_encased:zinc_fluid_vessel')))
        .set('B', api.anyOf(
            api.state('create:mechanical_pump[facing=up]'),
            api.state('createcasing:andesite_mechanical_pump[facing=up]'),
            api.state('createcasing:brass_mechanical_pump[facing=up]'),
            api.state('createcasing:zinc_mechanical_pump[facing=up]')))
        .controller('C')
        .build()
})
