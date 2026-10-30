MMCREvents.server(event => {
    const api = event.getAPI()
    event.createStructure("kubejs:large_assembler")
        .pattern(" AAXXXXXX", " BBXXXXXX", " BBXXXXXX", " DDXXXXX ")
        .pattern("XAAEFFFGE", "XBBE    E", "XBBEHHHIE", " DDXEEEX ")
        .pattern("XXXEFFFGE", "X XE    E", "XXXEHHHIE", "   XEEEX ")
        .pattern("XXXXXXXXX", "XCXXJJJJX", "XXXXJJJJX", " K XXXXX ")
        .set('X', api.anyOf(
            api.block('create:railway_casing'),
            api.block('mmcr:item_input_bus'),
            api.block('mmcr:item_output_bus'),
            api.block('mmcr:fluid_input_hatch'),
            api.block('mmcr:energy_input_hatch'),
            api.block('mmcr:parallel_controller_normal'),
            api.block('mmcr:parallel_controller_plus'),
            api.block('mmcr:parallel_controller_reinforced')))
        .set('A', api.state('createaddition:modular_accumulator[bottom=true,top=false]'))
        .set('B', api.state('createaddition:modular_accumulator[bottom=false,top=false]'))
        .set('D', api.state('createaddition:modular_accumulator[bottom=false,top=true]'))
        .set('E', api.block('rubberworks:rubber_sheet_block'))
        .set('F', api.anyOf(
            api.state('create:depot'),
            api.state('createcasing:brass_depot'),
            api.state('createcasing:copper_depot'),
            api.state('createcasing:railway_depot'),
            api.state('createcasing:creative_depot'),
            api.state('createcasing:industrial_iron_depot'),
            api.state('createcasing:weathered_iron_depot'),
            api.state('createcasing:zinc_depot'),
            api.state('createcasing:shadow_steel_depot'),
            api.state('createcasing:refined_radiance_depot')))
        .set('G', api.anyOf(
            api.state('create:basin[facing=down]'),
            api.state('fluidlogistics:copper_basin[facing=down]')))
        .set('H', api.anyOf(
            api.state('create:deployer[axis_along_first=true,facing=down]'),
            api.state('createcasing:brass_deployer[axis_along_first=true,facing=down]'),
            api.state('createcasing:copper_deployer[axis_along_first=true,facing=down]'),
            api.state('createcasing:railway_deployer[axis_along_first=true,facing=down]'),
            api.state('createcasing:creative_deployer[axis_along_first=true,facing=down]'),
            api.state('createcasing:industrial_iron_deployer[axis_along_first=true,facing=down]'),
            api.state('createcasing:weathered_iron_deployer[axis_along_first=true,facing=down]'),
            api.state('createcasing:zinc_deployer[axis_along_first=true,facing=down]'),
            api.state('createcasing:shadow_steel_deployer[axis_along_first=true,facing=down]'),
            api.state('createcasing:refined_radiance_deployer[axis_along_first=true,facing=down]')))
        .set('I', api.anyOf(
            api.state('create:spout'),
            api.state('createcasing:andesite_spout'),
            api.state('createcasing:brass_spout'),
            api.state('createcasing:zinc_spout')))
        .set('J', api.block('createnuclear:reinforced_glass'))
        .set('K', api.state('createimp:redstone_link_router[facing=south]'))
        .controller('C')
        .build()
})