MMCREvents.server(event => {
    const api = event.getAPI()
    event.createStructure('kubejs:fusion_generator')
        .pattern("  XXXXX ", "  XZZZX ", "  XXXXX ")
        .pattern("  XZZZX ", "AXBBBBBY", "  XZZZX ")
        .pattern("  XXXXX ", "  XZCZX ", "  XXXXX ")
        .set('X', api.block('mmcr:basic_casing'))
        .set('Y', api.anyOf(
            api.block('mmcr:basic_casing'),
            api.anyOfEnergyOutput()))
        .set('Z', api.anyOf(
            api.block('mmcr:basic_casing'),
            api.anyOfItemInput(),
            api.anyOfItemOutput(),
            api.anyOfFluidInput()))
        .set('A', api.coupler())
        .set('B', api.block('createnuclear:reactor_core'))
        .controller('C')
        .build()
})
