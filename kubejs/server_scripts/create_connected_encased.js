ServerEvents.recipes(event => {
    // #region Parallel Gearboxes & Vertical Parallel Gearboxes

    event.remove('create_connected_encased:crafting/parallel_gearboxs/andesite_manual_only')
    event.remove('create_connected_encased:deploying/parallel_gearboxs/andesite')

    resetParallelGearboxRecipes('brass')
    resetParallelGearboxRecipes('copper')
    resetParallelGearboxRecipes('railway')
    resetParallelGearboxRecipes('creative')
    resetParallelGearboxRecipes('industrial_iron')
    resetParallelGearboxRecipes('weathered_iron')
    resetParallelGearboxRecipes('zinc')

    function resetParallelGearboxRecipes(variant) {
        var pgearbox = 'create_connected_encased:' + variant + '_parallel_gearbox'
        var vgearbox = 'create_connected_encased:' + variant + '_vertical_parallel_gearbox'
        var gearbox = 'createcasing:' + variant + '_gearbox'
        event.remove({ output: pgearbox })
        event.shapeless(pgearbox, [ gearbox, '#create:large_cogwheels' ])
        event.shapeless(pgearbox, vgearbox)
    }

    // #endregion

    // #region Six Way Gearboxes & Vertical Six Way Gearboxes

    event.remove('create_connected_encased:crafting/six_way_gearboxs/andesite_manual_only')
    event.remove('create_connected_encased:deploying/six_way_gearboxs/andesite')

    resetSixWayGearboxRecipes('brass', 'create:brass_casing')
    resetSixWayGearboxRecipes('copper', 'create:copper_casing')
    resetSixWayGearboxRecipes('railway', 'create:railway_casing')
    resetSixWayGearboxRecipes('creative', 'createcasing:creative_casing')
    resetSixWayGearboxRecipes('industrial_iron', 'create:industrial_iron_block')
    resetSixWayGearboxRecipes('weathered_iron', 'create:weathered_iron_block')
    resetSixWayGearboxRecipes('zinc', 'createcasing:zinc_casing')

    function resetSixWayGearboxRecipes(variant, input) {
        var sgearbox = 'create_connected_encased:' + variant + '_six_way_gearbox'
        var vgearbox = 'create_connected_encased:' + variant + '_vertical_six_way_gearbox'
        var pgearbox = 'create_connected_encased:' + variant + '_parallel_gearbox'
        var gearbox = 'createcasing:' + variant + '_gearbox'

        event.remove({ output: sgearbox })
        event.shaped(sgearbox,
        [
            'HG ',
            'GCG',
            ' GH'
        ],
        {
            C: input,
            H: '#create:large_cogwheels',
            G: '#create:cogwheels'
        })

        event.shapeless(sgearbox, [ gearbox, '#create:large_cogwheels', '#create:large_cogwheels' ])
        event.shapeless(sgearbox, [ pgearbox, '#create:large_cogwheels' ])
        event.shapeless(sgearbox, vgearbox)
    }

    // #endregion

    // #region Shear Pins

    event.remove({ output: 'create_connected:shear_pin' })
    event.recipes.create.cutting('create_connected:shear_pin', 'create:shaft')

    resetShearPinRecipes('brass', 'createcasing:brass_shaft')
    resetShearPinRecipes('copper', 'createcasing:copper_shaft')
    resetShearPinRecipes('zinc', 'createcasing:zinc_shaft')

    resetShearPinRecipes('oak', 'createcasing:oak_shaft')
    resetShearPinRecipes('birch', 'createcasing:birch_shaft')
    resetShearPinRecipes('jungle', 'createcasing:jungle_shaft')
    resetShearPinRecipes('acacia', 'createcasing:acacia_shaft')
    resetShearPinRecipes('dark_oak', 'createcasing:dark_oak_shaft')
    resetShearPinRecipes('mangrove', 'createcasing:mangrove_shaft')
    resetShearPinRecipes('cherry', 'createcasing:cherry_shaft')
    resetShearPinRecipes('bamboo', 'createcasing:bamboo_shaft')
    resetShearPinRecipes('crimson', 'createcasing:crimson_shaft')
    resetShearPinRecipes('warped', 'createcasing:warped_shaft')
    resetShearPinRecipes('spruce', 'createcasing:spruce_shaft')

    function resetShearPinRecipes(variant, input) {
        var shear_pin = 'create_connected_encased:' + variant + '_shear_pin'
        event.remove({ output: shear_pin })
        event.recipes.create.cutting(shear_pin, input)
    }

    // #endregion
})