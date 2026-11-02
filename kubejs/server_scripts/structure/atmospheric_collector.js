MMCREvents.server(event => {
    const api = event.getAPI()
    event.createStructure('kubejs:atmospheric_collector')
        .pattern("AAA", "BDB", "XXX")
        .pattern("AAA", "DBD", "XXX")
        .pattern("ACA", "BDB", "XXX")
        .set('X', api.anyOf(
            api.block('create:item_drain'),
            api.block('createcasing:andesite_item_drain'),
            api.block('createcasing:brass_item_drain'),
            api.block('createcasing:zinc_item_drain')))
        .set('A', api.anyOf(
            api.block('create:copper_casing'),
            api.tag('mmcr:fluid_output_ports')))
        .set('B', api.anyOf(
            api.state('create:fluid_tank[bottom=true,shape=plain,top=true]'),
            api.state('createcasing:andesite_fluid_tank[bottom=true,shape=plain,top=true]'),
            api.state('createcasing:brass_fluid_tank[bottom=true,shape=plain,top=true]'),
            api.state('createcasing:zinc_fluid_tank[bottom=true,shape=plain,top=true]')))
        .set('D', api.anyOf(
            api.state('create:fluid_tank[bottom=true,shape=window,top=true]'),
            api.state('createcasing:andesite_fluid_tank[bottom=true,shape=window,top=true]'),
            api.state('createcasing:brass_fluid_tank[bottom=true,shape=window,top=true]'),
            api.state('createcasing:zinc_fluid_tank[bottom=true,shape=window,top=true]')))
        .controller('C')
        .build()
})
