ServerEvents.tags('item', event => {
    event.remove('c:plates', 'createcasing:zinc_sheet')
    event.remove('c:plates/zinc', 'createcasing:zinc_sheet')
})

ServerEvents.recipes(event => {
    event.replaceInput({ input: 'create:cogwheel' }, 'create:cogwheel', '#create:cogwheels')
    event.replaceInput({ input: 'create:large_cogwheel' }, 'create:large_cogwheel', '#create:large_cogwheels')
    event.replaceInput({ input: 'create:shaft' }, 'create:shaft', '#create:shafts')
    event.replaceInput({ input: 'create:fluid_pipe' }, 'create:fluid_pipe', '#create:fluid_pipes')
    event.replaceInput({ input: 'create:smart_fluid_pipe' }, 'create:smart_fluid_pipe', '#create:smart_fluid_pipes')
    event.replaceInput({ input: 'create:mechanical_pump' }, 'create:mechanical_pump', '#create:mechanical_pumps')
    event.replaceInput({ input: 'create:fluid_valve' }, 'create:fluid_valve', '#create:fluid_valves')
    event.replaceInput({ input: 'create:spout' }, 'create:spout', '#create:spouts')

    // #region Cogwheels

    event.remove({ output: 'create:cogwheel' })
    event.remove({ output: 'create:large_cogwheel' })

    event.shapeless('create:cogwheel', [ '#create:shafts', 'minecraft:spruce_planks' ])
    event.shapeless('create:large_cogwheel', [ '#create:shafts', 'minecraft:spruce_planks', 'minecraft:spruce_planks' ])
    event.shapeless('create:large_cogwheel', [ 'create:cogwheel', 'minecraft:spruce_planks' ])

    resetCogwheelRecipes('andesite', '#c:ingots/andesite_alloy')
    resetCogwheelRecipes('brass', '#c:ingots/brass')
    resetCogwheelRecipes('copper', '#c:ingots/copper')
    resetCogwheelRecipes('zinc', '#c:ingots/zinc')

    resetWoodCogwheelRecipes('oak')
    resetWoodCogwheelRecipes('birch')
    resetWoodCogwheelRecipes('jungle')
    resetWoodCogwheelRecipes('acacia')
    resetWoodCogwheelRecipes('dark_oak')
    resetWoodCogwheelRecipes('mangrove')
    resetWoodCogwheelRecipes('cherry')
    resetWoodCogwheelRecipes('bamboo')
    resetWoodCogwheelRecipes('crimson')
    resetWoodCogwheelRecipes('warped')

    function resetWoodCogwheelRecipes(variant) {
        resetCogwheelRecipes(variant, 'minecraft:' + variant + '_planks')
    }

    function resetCogwheelRecipes(variant, input) {
        var cogwheel = 'createcasing:' + variant + '_cogwheel'
        var large_cogwheel = 'createcasing:' + variant + '_large_cogwheel'
        event.remove({ output: cogwheel })
        event.remove({ output: large_cogwheel })

        event.shapeless(cogwheel, [ '#create:shafts', input ])
        event.shapeless(large_cogwheel, [ '#create:shafts', input, input ])
        event.shapeless(large_cogwheel, [ cogwheel, input ])
    }

    // #endregion

    // #region Shafts

    event.remove({ output: 'create:shaft' })
    event.shaped('8x create:shaft',
    [
        ' V ',
        ' V ',
        '   '
    ],
    {
        V: '#c:ingots/andesite_alloy'
    })

    event.recipes.create.cutting('6x create:shaft', 'create:andesite_alloy')

    resetShaftRecipes('brass', 'create:brass_ingot')
    resetShaftRecipes('copper', 'minecraft:copper_ingot')
    resetShaftRecipes('zinc', 'create:zinc_ingot')
    resetShaftRecipes('glass', 'minecraft:glass')

    resetWoodShaftRecipes('oak')
    resetWoodShaftRecipes('birch')
    resetWoodShaftRecipes('jungle')
    resetWoodShaftRecipes('acacia')
    resetWoodShaftRecipes('dark_oak')
    resetWoodShaftRecipes('mangrove')
    resetWoodShaftRecipes('cherry')
    resetWoodShaftRecipes('bamboo')
    resetWoodShaftRecipes('crimson')
    resetWoodShaftRecipes('warped')
    resetWoodShaftRecipes('spruce')

    function resetWoodShaftRecipes(variant) {
        resetShaftRecipes(variant, 'minecraft:' + variant + '_planks')
    }

    function resetShaftRecipes(variant, input) {
        var shaft = 'createcasing:' + variant + '_shaft'
        event.remove({ output: shaft })

        event.shaped('8x ' + shaft,
        [
            ' V ',
            ' V ',
            '   '
        ],
        {
            V: input
        })

        event.recipes.create.cutting('6x ' + shaft, input)
    }

    // #endregion

    // #region Fluid Pipes

    event.remove({ output: 'create:fluid_pipe' })
    event.shaped('4x create:fluid_pipe',
    [
        ' P ',
        ' I ',
        ' P '
    ],
    {
        I: '#c:ingots/copper',
        P: '#c:plates/copper'
    })

    event.shaped('4x create:fluid_pipe',
    [
        '   ',
        'PIP',
        '   '
    ],
    {
        I: '#c:ingots/copper',
        P: '#c:plates/copper'
    })

    event.remove({ output: 'create:smart_fluid_pipe' })
    event.shaped('create:smart_fluid_pipe',
    [
        ' P ',
        ' Q ',
        ' E '
    ],
    {
        P: '#c:plates/brass',
        Q: 'create:fluid_pipe',
        E: 'create:electron_tube'
    })

    resetFluidPipeRecipes('andesite', 'andesite_alloy')
    resetFluidPipeRecipes('brass', 'brass')
    resetFluidPipeRecipes('zinc', 'zinc')

    function resetFluidPipeRecipes(variant, input) {
        var pipe = 'createcasing:' + variant + '_fluid_pipe'
        var smart_pipe = 'createcasing:' + variant + '_smart_fluid_pipe'

        event.remove({ output: pipe })
        event.remove({ output: smart_pipe })
        event.shaped('4x ' + pipe,
        [
            ' P ',
            ' I ',
            ' P '
        ],
        {
            I: '#c:ingots/' + input,
            P: '#c:plates/' + input
        })

        event.shaped('4x ' + pipe,
        [
            '   ',
            'PIP',
            '   '
        ],
        {
            I: '#c:ingots/' + input,
            P: '#c:plates/' + input
        })

        event.shaped(smart_pipe,
        [
            ' P ',
            ' Q ',
            ' E '
        ],
        {
            P: '#c:plates/brass',
            Q: pipe,
            E: 'create:electron_tube'
        })
    }

    // #endregion

    // #region Mechanical Pumps

    event.remove({ output: 'create:mechanical_pump' })
    event.shapeless('create:mechanical_pump', ['create:fluid_pipe', '#create:cogwheels'])
    
    resetMechanicalPumpRecipes('andesite')
    resetMechanicalPumpRecipes('brass')
    resetMechanicalPumpRecipes('zinc')

    function resetMechanicalPumpRecipes(variant) {
        var pump = 'createcasing:' + variant + '_mechanical_pump'
        var pipe = 'createcasing:' + variant + '_fluid_pipe'
        event.remove({ output: pump })
        event.shapeless(pump, [pipe, '#create:cogwheels'])
    }

    // #endregion

    // #region Fluid Valves

    event.remove({ output: 'create:fluid_valve' })
    event.shapeless('create:fluid_valve', [ 'create:fluid_pipe', '#c:plates/iron' ])

    resetFluidValveRecipes('andesite')
    resetFluidValveRecipes('brass')
    resetFluidValveRecipes('zinc')

    function resetFluidValveRecipes(variant) {
        var valve = 'createcasing:' + variant + '_fluid_valve'
        var pipe = 'createcasing:' + variant + '_fluid_pipe'
        event.remove({ output: valve })
        event.shapeless(valve, [ pipe, '#c:plates/iron'])
    }

    // #endregion

    // #region Valve Handles

    event.remove({ id: 'create:crafting/kinetics/copper_valve_handle_from_other' })

    resetValveHandlerRecipes('andesite', 'andesite_alloy')
    resetValveHandlerRecipes('brass', 'brass')
    resetValveHandlerRecipes('zinc', 'zinc')

    function resetValveHandlerRecipes(variant, input) {
        event.shaped('createcasing:' + variant + '_valve_handle',
        [
            '   ',
            'PPP',
            ' I '
        ],
        {
            P: '#c:plates/' + input,
            I: 'create:andesite_alloy'
        })
    }

    // #endregion

    // #region Fluid Tanks & Vessels

    event.remove({ id: 'createcasing:crafting/fluid_tanks/copper_manual_only' })
    event.remove({ id: 'createcasing:deploying/fluid_tanks/copper' })

    event.remove({ id: 'create_connected_encased:crafting/fluid_vessels/copper_manual_only' })
    event.remove({ id: 'create_connected_encased:deploying/fluid_vessels/copper' })

    resetFluidTankVesselRecipes('andesite', 'andesite_alloy')
    resetFluidTankVesselRecipes('brass', 'brass')
    resetFluidTankVesselRecipes('zinc', 'zinc')

    function resetFluidTankVesselRecipes(variant, input) {
        var tank = 'createcasing:' + variant + '_fluid_tank'
        var vessel = 'create_connected_encased:' + variant + '_fluid_vessel'

        event.remove({ output: tank })
        event.remove({ output: vessel })
        event.shaped(tank,
        [
            ' P ',
            ' B ',
            ' P '
        ],
        {
            P: '#c:plates/' + input,
            B: '#c:barrels/wooden'
        })

        event.shapeless(tank, vessel)

        event.shaped(vessel,
        [
            '   ',
            'PBP',
            '   '
        ],
        {
            P: '#c:plates/' + input,
            B: '#c:barrels/wooden'
        })

        event.shapeless(vessel, tank)
    }

    // #endregion

    // #region Steam Engines

    resetSteamEngineRecipes('andesite')
    resetSteamEngineRecipes('brass')
    resetSteamEngineRecipes('zinc')

    function resetSteamEngineRecipes(variant) {
        var engine = 'createcasing:' + variant + '_steam_engine'
        var tank = 'createcasing:' + variant + '_fluid_tank'
        event.remove({ output: engine })
        event.shaped(engine,
        [
            'AG ',
            ' SR',
            ' T '
        ],
        {
            A: '#c:ingots/andesite_alloy',
            G: '#c:plates/gold',
            S: '#create:shafts',
            R: 'rubberworks:rubber_sheet',
            T: tank
        })
    }

    // #endregion

    // #region Item Drains

    resetItemDrainRecipes('andesite', 'create:andesite_casing')
    resetItemDrainRecipes('brass', 'create:brass_casing')
    resetItemDrainRecipes('zinc', 'createcasing:zinc_casing')

    function resetItemDrainRecipes(variant, input) {
        var drain = 'createcasing:' + variant + '_item_drain'
        var pipe = 'createcasing:' + variant + '_fluid_pipe'
        event.remove({ output: drain })
        event.shaped(drain,
        [
            ' B ',
            ' C ',
            ' P '
        ],
        {
            B: 'minecraft:iron_bars',
            C: input,
            P: pipe
        })
    }

    // #endregion

    // #region Spouts

    resetSpoutRecipes('andesite', 'create:andesite_casing')
    resetSpoutRecipes('brass', 'create:brass_casing')
    resetSpoutRecipes('zinc', 'createcasing:zinc_casing')

    function resetSpoutRecipes(variant, input) {
        var spout = 'createcasing:' + variant + '_spout'
        var pipe = 'createcasing:' + variant + '_fluid_pipe'
        event.remove({ output: spout })
        event.shaped(spout,
        [
            ' R ',
            ' C ',
            ' P '
        ],
        {
            R: 'rubberworks:rubber_sheet',
            C: input,
            P: pipe
        })
    }

    // #endregion

    // #region Hose Pulleys

    resetHosePulleyRecipes('andesite', 'create:andesite_casing')
    resetHosePulleyRecipes('brass', 'create:brass_casing')
    resetHosePulleyRecipes('zinc', 'createcasing:zinc_casing')

    function resetHosePulleyRecipes(variant, input) {
        var pulley = 'createcasing:' + variant + '_hose_pulley'
        var pipe = 'createcasing:' + variant + '_fluid_pipe'
        event.remove({ output: pulley })
        event.shaped(pulley,
        [
            ' C ',
            ' B ',
            ' P '
        ],
        {
            C: input,
            B: 'rubberworks:rubber_block',
            P: pipe
        })
    }

    // #endregion

    // #region Portable Interfaces

    resetItemInterfaceRecipes('brass', 'create:brass_casing')
    resetItemInterfaceRecipes('copper', 'create:copper_casing')
    resetItemInterfaceRecipes('railway', 'create:railway_casing')
    resetItemInterfaceRecipes('creative', 'createcasing:creative_casing')
    resetItemInterfaceRecipes('industrial_iron', 'create:industrial_iron_block')
    resetItemInterfaceRecipes('weathered_iron', 'create:weathered_iron_block')
    resetItemInterfaceRecipes('zinc', 'createcasing:zinc_casing')

    resetFluidInterfaceRecipes('andesite', 'create:andesite_casing')
    resetFluidInterfaceRecipes('brass', 'create:brass_casing')
    resetFluidInterfaceRecipes('zinc', 'createcasing:zinc_casing')

    function resetItemInterfaceRecipes(variant, input) {
        var item_interface = 'createcasing:' + variant + '_portable_storage_interface'
        event.remove({ output: item_interface })
        event.shaped(item_interface,
        [
            '   ',
            ' CH',
            '   '
        ],
        {
            C: input,
            H: 'create:chute'
        })
    }

    function resetFluidInterfaceRecipes(variant, input) {
        var fluid_interface = 'createcasing:' + variant + '_portable_fluid_interface'
        event.remove({ output: fluid_interface })
        event.shaped(fluid_interface,
        [
            '   ',
            'HC ',
            '   '
        ],
        {
            C: input,
            H: 'create:chute'
        })
    }

    // #endregion

    // #region Steam Whistles

    event.remove({ id: 'createcasing:crafting/steam_whistles/copper_manual_only' })
    event.remove({ id: 'createcasing:deploying/steam_whistles/copper' })

    resetSteamWhistleRecipes('andesite', '#c:ingots/andesite_alloy')
    resetSteamWhistleRecipes('brass', '#c:ingots/brass')
    resetSteamWhistleRecipes('zinc', '#c:ingots/zinc')

    function resetSteamWhistleRecipes(variant, input) {
        var whistle = 'createcasing:' + variant + '_steam_whistle'
        event.remove({ output: whistle })
        event.shaped(whistle,
        [
            ' P ',
            ' I ',
            '   '
        ],
        {
            P: '#c:plates/gold',
            I: input
        })
    }

    // #endregion

    // #region Gearboxes

    event.remove({ id: 'createcasing:crafting/gearboxes/andesite_manual_only' })
    event.remove({ id: 'createcasing:deploying/gearboxes/andesite' })

    resetGearboxRecipes('brass', 'create:brass_casing')
    resetGearboxRecipes('copper', 'create:copper_casing')
    resetGearboxRecipes('railway', 'create:railway_casing')
    resetGearboxRecipes('creative', 'createcasing:creative_casing')
    resetGearboxRecipes('industrial_iron', 'create:industrial_iron_block')
    resetGearboxRecipes('weathered_iron', 'create:weathered_iron_block')
    resetGearboxRecipes('zinc', 'createcasing:zinc_casing')

    function resetGearboxRecipes(variant, input) {
        var gearbox = 'createcasing:' + variant + '_gearbox'
        var vertical_gearbox = 'createcasing:vertical_' + variant + '_gearbox'
        event.remove({ output: gearbox })
        event.remove({ output: vertical_gearbox })
        event.shaped(gearbox,
        [
            ' G ',
            'GCG',
            ' G '
        ],
        {
            C: input,
            G: '#create:cogwheels'
        })

        event.shapeless(gearbox, vertical_gearbox)

        event.shaped(vertical_gearbox,
        [
            'G G',
            ' C ',
            'G G'
        ],
        {
            C: input,
            G: '#create:cogwheels'
        })

        event.shapeless(vertical_gearbox, gearbox)
    }

    // #endregion

    // #region Mechanical Presses

    event.remove({ id: 'createcasing:crafting/presses/andesite_manual_only' })
    event.remove({ id: 'createcasing:deploying/presses/andesite' })

    resetMechanicalPressRecipes('brass', 'create:brass_casing')
    resetMechanicalPressRecipes('copper', 'create:copper_casing')
    resetMechanicalPressRecipes('railway', 'create:railway_casing')
    resetMechanicalPressRecipes('creative', 'createcasing:creative_casing')
    resetMechanicalPressRecipes('industrial_iron', 'create:industrial_iron_block')
    resetMechanicalPressRecipes('weathered_iron', 'create:weathered_iron_block')
    resetMechanicalPressRecipes('zinc', 'createcasing:zinc_casing')

    function resetMechanicalPressRecipes(variant, input) {
        var press = 'createcasing:' + variant + '_press'
        event.remove({ output: press })
        event.shaped(press,
        [
            ' S ',
            ' C ',
            ' B '
        ],
        {
            C: input,
            S: '#create:shafts',
            B: '#c:storage_blocks/iron'
        })
    }

    // #endregion

    // #region Mechanical Mixers

    event.remove({ id: 'createcasing:crafting/mixers/andesite_manual_only' })
    event.remove({ id: 'createcasing:deploying/mixers/andesite' })

    resetMechanicalMixerRecipes('brass', 'create:brass_casing')
    resetMechanicalMixerRecipes('copper', 'create:copper_casing')
    resetMechanicalMixerRecipes('railway', 'create:railway_casing')
    resetMechanicalMixerRecipes('creative', 'createcasing:creative_casing')
    resetMechanicalMixerRecipes('industrial_iron', 'create:industrial_iron_block')
    resetMechanicalMixerRecipes('weathered_iron', 'create:weathered_iron_block')
    resetMechanicalMixerRecipes('zinc', 'createcasing:zinc_casing')

    function resetMechanicalMixerRecipes(variant, input) {
        var mixer = 'createcasing:' + variant + '_mixer'
        event.remove({ output: mixer })
        event.shaped(mixer,
        [
            ' G ',
            ' C ',
            ' W '
        ],
        {
            G: '#create:cogwheels',
            C: input,
            W: 'create:whisk'
        })
    }

    // #endregion

    // #region Depot

    event.remove({ id: 'createcasing:crafting/depots/andesite_manual_only' })
    event.remove({ id: 'createcasing:deploying/depots/andesite' })

    resetDepotRecipes('brass', 'create:brass_casing')
    resetDepotRecipes('copper', 'create:copper_casing')
    resetDepotRecipes('railway', 'create:railway_casing')
    resetDepotRecipes('creative', 'createcasing:creative_casing')
    resetDepotRecipes('industrial_iron', 'create:industrial_iron_block')
    resetDepotRecipes('weathered_iron', 'create:weathered_iron_block')
    resetDepotRecipes('zinc', 'createcasing:zinc_casing')

    function resetDepotRecipes(variant, input) {
        var depot = 'createcasing:' + variant + '_depot'
        event.remove({ output: depot })
        event.shapeless(depot, [ '#c:ingots/andesite_alloy', input ])
    }

    // #endregion

    // #region Encased Chain Drives & Cogwheels

    event.remove({ id: 'create_connected_encased:crafting/chain_cogwheels/andesite_manual_only' })
    event.remove({ id: 'create_connected_encased:deploying/chain_cogwheels/andesite' })

    resetChainDriveCogwheelRecipes('brass', 'create:brass_casing')
    resetChainDriveCogwheelRecipes('copper', 'create:copper_casing')
    resetChainDriveCogwheelRecipes('railway', 'create:railway_casing')
    resetChainDriveCogwheelRecipes('creative', 'createcasing:creative_casing')
    resetChainDriveCogwheelRecipes('industrial_iron', 'create:industrial_iron_block')
    resetChainDriveCogwheelRecipes('weathered_iron', 'create:weathered_iron_block')
    resetChainDriveCogwheelRecipes('zinc', 'createcasing:zinc_casing')

    function resetChainDriveCogwheelRecipes(variant, input) {
        var drive = 'createcasing:' + variant + '_encased_chain_drive'
        var cogwheel = 'create_connected_encased:' + variant + '_encased_chain_cogwheel'

        event.remove({ output: drive })
        event.remove({ output: cogwheel })

        event.shapeless(drive, [ input, '#c:chains' ])
        event.shapeless(cogwheel, [ drive, '#create:cogwheels' ])
    }

    // #endregion

    // #region Adjustable Chain Gearshifts

    event.remove({ id: 'createcasing:crafting/chain_gearshifts/andesite_manual_only' })
    event.remove({ id: 'createcasing:deploying/chain_gearshifts/andesite' })

    resetChainGearshiftRecipes('brass', 'create:brass_casing')
    resetChainGearshiftRecipes('copper', 'create:copper_casing')
    resetChainGearshiftRecipes('railway', 'create:railway_casing')
    resetChainGearshiftRecipes('creative', 'createcasing:creative_casing')
    resetChainGearshiftRecipes('industrial_iron', 'create:industrial_iron_block')
    resetChainGearshiftRecipes('weathered_iron', 'create:weathered_iron_block')
    resetChainGearshiftRecipes('zinc', 'createcasing:zinc_casing')

    function resetChainGearshiftRecipes(variant) {
        var drive = 'createcasing:' + variant + '_encased_chain_drive'
        var gearshift = 'createcasing:' + variant + '_adjustable_chain_gearshift'
        event.remove({ output: gearshift })
        event.shapeless(gearshift, [ drive, 'create:electron_tube' ])
    }

    // #endregion

    // #region Configurable Gearboxes

    event.remove({ id: 'createcasing:crafting/configurable_gearboxes/andesite_manual_only' })
    event.remove({ id: 'createcasing:deploying/configurable_gearboxes/andesite' })

    resetConfigurableGearboxRecipes('brass')
    resetConfigurableGearboxRecipes('copper')
    resetConfigurableGearboxRecipes('railway')
    resetConfigurableGearboxRecipes('creative')
    resetConfigurableGearboxRecipes('industrial_iron')
    resetConfigurableGearboxRecipes('weathered_iron')
    resetConfigurableGearboxRecipes('zinc')

    function resetConfigurableGearboxRecipes(variant) {
        var cgearbox = 'createcasing:' + variant + '_configurable_gearbox'
        var gearbox = 'createcasing:' + variant + '_gearbox'
        event.remove({ output: cgearbox })
        event.shaped(cgearbox,
        [
            ' G ',
            'GCG',
            ' G '
        ],
        {
            C: gearbox,
            G: '#create:large_cogwheels'
        })
    }

    // #endregion

    // #region Chain Conveyors

    event.remove({ id: 'createcasing:crafting/chain_conveyors/andesite_manual_only'})
    event.remove({ id: 'createcasing:deploying/chain_conveyors/andesite'})

    resetChainConveyorRecipes('brass', 'create:brass_casing')
    resetChainConveyorRecipes('copper', 'create:copper_casing')
    resetChainConveyorRecipes('railway', 'create:railway_casing')
    resetChainConveyorRecipes('creative', 'createcasing:creative_casing')
    resetChainConveyorRecipes('industrial_iron', 'create:industrial_iron_block')
    resetChainConveyorRecipes('weathered_iron', 'create:weathered_iron_block')
    resetChainConveyorRecipes('zinc', 'createcasing:zinc_casing')

    function resetChainConveyorRecipes(variant, input) {
        var conveyor = 'createcasing:' + variant + '_chain_conveyor'
        event.remove({ output: conveyor })
        event.shaped('2x ' + conveyor,
        [
            ' C ',
            'CGC',
            ' C '
        ],
        {
            C: input,
            G: '#create:large_cogwheels'
        })
    }

    // #endregion

    // #region Gearshifts & Inverted Gearshifts

    event.remove({ id: 'createcasing:crafting/gearshifts/andesite_manual_only' })
    event.remove({ id: 'createcasing:deploying/gearshifts/andesite' })

    event.remove({ id: 'create_connected_encased:crafting/inverted_gearshifts/andesite_manual_only' })
    event.remove({ id: 'create_connected_encased:deploying/inverted_gearshifts/andesite'})

    resetGearshiftRecipes('brass', 'create:brass_casing')
    resetGearshiftRecipes('copper', 'create:copper_casing')
    resetGearshiftRecipes('railway', 'create:railway_casing')
    resetGearshiftRecipes('creative', 'createcasing:creative_casing')
    resetGearshiftRecipes('industrial_iron', 'create:industrial_iron_block')
    resetGearshiftRecipes('weathered_iron', 'create:weathered_iron_block')
    resetGearshiftRecipes('zinc', 'createcasing:zinc_casing')

    function resetGearshiftRecipes(variant, input) {
        var gearshift = 'createcasing:' + variant + '_gearshift'
        var inverted_gearshift = 'create_connected_encased:' + variant + '_inverted_gearshift'
        event.remove({ output: gearshift })
        event.remove({ output: inverted_gearshift })

        event.shapeless(gearshift, [ input, '#create:cogwheels', '#c:dusts/redstone' ])
        event.shapeless(gearshift, inverted_gearshift)
        event.shapeless(inverted_gearshift, gearshift)
    }

    // #endregion

    // #region Clutches

    event.remove({ id: 'createcasing:crafting/clutches/andesite_manual_only' })
    event.remove({ id: 'createcasing:deploying/clutches/andesite' })

    event.remove({ id: 'createcasing:crafting/auto_clutches/andesite_manual_only' })
    event.remove({ id: 'createcasing:deploying/auto_clutches/andesite' })

    event.remove({ id: 'create_connected_encased:crafting/inverted_clutchs/andesite_manual_only' })
    event.remove({ id: 'create_connected_encased:deploying/inverted_clutchs/andesite' })

    event.remove({ id: 'create_connected_encased:crafting/overstress_clutchs/andesite_manual_only' })
    event.remove({ id: 'create_connected_encased:deploying/overstress_clutchs/andesite' })

    event.remove({ id: 'create_connected_encased:crafting/centrifugal_clutchs/andesite_manual_only' })
    event.remove({ id: 'create_connected_encased:deploying/centrifugal_clutchs/andesite' })

    event.remove({ id: 'create_connected_encased:crafting/freewheel_clutchs/andesite_manual_only' })
    event.remove({ id: 'create_connected_encased:deploying/freewheel_clutchs/andesite' })

    resetClutchRecipes('brass', 'create:brass_casing')
    resetClutchRecipes('copper', 'create:copper_casing')
    resetClutchRecipes('railway', 'create:railway_casing')
    resetClutchRecipes('creative', 'createcasing:creative_casing')
    resetClutchRecipes('industrial_iron', 'create:industrial_iron_block')
    resetClutchRecipes('weathered_iron', 'create:weathered_iron_block')
    resetClutchRecipes('zinc', 'createcasing:zinc_casing')

    function resetClutchRecipes(variant, input) {
        var clutch = 'createcasing:' + variant + '_clutch'
        var auto_clutch = 'createcasing:' + variant + '_automatic_clutch'
        var inverted_clutch = 'create_connected_encased:' + variant + '_inverted_clutch'
        var overstress_clutch = 'create_connected_encased:' + variant + '_overstress_clutch'
        var centrifugal_clutch = 'create_connected_encased:' + variant + '_centrifugal_clutch'
        var freewheel_clutch = 'create_connected_encased:' + variant + '_freewheel_clutch'

        event.remove({ output: clutch })
        event.shapeless(clutch, [ input, '#create:shafts', '#c:dusts/redstone' ])

        event.remove({ output: auto_clutch })
        event.shapeless(auto_clutch, [ input, '#create:shafts', 'create:electron_tube' ])

        event.remove({ output: inverted_clutch })
        event.shapeless(inverted_clutch, clutch)
        event.shapeless(clutch, inverted_clutch)

        event.remove({ output: overstress_clutch })
        event.shapeless(overstress_clutch, [ input, '#create:shafts', '#c:plates/iron', 'create:electron_tube' ])

        event.remove({ output: centrifugal_clutch })
        event.shapeless(centrifugal_clutch, [ input, '#create:shafts', '#c:plates/iron', 'create:speedometer' ])

        event.remove({ output: freewheel_clutch })
        event.shapeless(freewheel_clutch, [ input, '#create:shafts', '#c:plates/iron', '#create:cogwheels' ])
    }

    // #endregion

    // #region Deployers

    event.remove({ id: 'createcasing:crafting/deployers/andesite_manual_only' })
    event.remove({ id: 'createcasing:deploying/deployers/andesite' })

    resetDeployerRecipes('brass', 'create:brass_casing')
    resetDeployerRecipes('copper', 'create:copper_casing')
    resetDeployerRecipes('railway', 'create:railway_casing')
    resetDeployerRecipes('creative', 'createcasing:creative_casing')
    resetDeployerRecipes('industrial_iron', 'create:industrial_iron_block')
    resetDeployerRecipes('weathered_iron', 'create:weathered_iron_block')
    resetDeployerRecipes('zinc', 'createcasing:zinc_casing')

    function resetDeployerRecipes(variant, input) {
        var deployer = 'createcasing:' + variant + '_deployer'
        event.remove({ output: deployer })
        event.shaped(deployer,
        [
            ' E ',
            ' C ',
            ' H '
        ],
        {
            E: 'create:electron_tube',
            C: input,
            H: 'create:brass_hand'
        })
    }

    // #endregion

    // #region Encased Fans

    event.remove({ id: 'createcasing:crafting/encased_fans/andesite_manual_only' })
    event.remove({ id: 'createcasing:deploying/encased_fans/andesite' })

    resetEncasedFanRecipes('brass', 'create:brass_casing')
    resetEncasedFanRecipes('copper', 'create:copper_casing')
    resetEncasedFanRecipes('railway', 'create:railway_casing')
    resetEncasedFanRecipes('creative', 'createcasing:creative_casing')
    resetEncasedFanRecipes('industrial_iron', 'create:industrial_iron_block')
    resetEncasedFanRecipes('weathered_iron', 'create:weathered_iron_block')
    resetEncasedFanRecipes('zinc', 'createcasing:zinc_casing')

    function resetEncasedFanRecipes(variant, input) {
        var fan = 'createcasing:' + variant + '_encased_fan'
        event.remove({ output: fan })
        event.shaped(fan,
        [
            ' S ',
            ' C ',
            ' P '
        ],
        {
            S: '#create:shafts',
            C: input,
            P: 'create:propeller'
        })
    }

    // #endregion

    // #region Mechanical Harvesters

    event.remove({ id: 'createcasing:crafting/harvesters/andesite_manual_only' })
    event.remove({ id: 'createcasing:deploying/harvesters/andesite' })

    resetMechanicalHarvesterRecipes('brass', 'create:brass_casing')
    resetMechanicalHarvesterRecipes('copper', 'create:copper_casing')
    resetMechanicalHarvesterRecipes('railway', 'create:railway_casing')
    resetMechanicalHarvesterRecipes('creative', 'createcasing:creative_casing')
    resetMechanicalHarvesterRecipes('industrial_iron', 'create:industrial_iron_block')
    resetMechanicalHarvesterRecipes('weathered_iron', 'create:weathered_iron_block')
    resetMechanicalHarvesterRecipes('zinc', 'createcasing:zinc_casing')

    function resetMechanicalHarvesterRecipes(variant, input) {
        var harvester = 'createcasing:' + variant + '_mechanical_harvester'
        event.remove({ output: harvester })
        event.shaped(harvester,
        [
            'IPI',
            'IPI',
            ' C '
        ],
        {
            C: input,
            I: '#c:ingots/andesite_alloy',
            P: '#c:plates/iron'
        })
    }

    // #endregion

    // #region Mechanical Saws

    event.remove({ id: 'createcasing:crafting/saws/andesite_manual_only' })
    event.remove({ id: 'createcasing:deploying/saws/andesite' })

    resetMechanicalSawRecipes('brass', 'create:brass_casing')
    resetMechanicalSawRecipes('copper', 'create:copper_casing')
    resetMechanicalSawRecipes('railway', 'create:railway_casing')
    resetMechanicalSawRecipes('creative', 'createcasing:creative_casing')
    resetMechanicalSawRecipes('industrial_iron', 'create:industrial_iron_block')
    resetMechanicalSawRecipes('weathered_iron', 'create:weathered_iron_block')
    resetMechanicalSawRecipes('zinc', 'createcasing:zinc_casing')

    function resetMechanicalSawRecipes(variant, input) {
        var saw = 'createcasing:' + variant + '_mechanical_saw'
        event.remove({ output: saw })
        event.shaped(saw,
        [
            ' P ',
            'PIP',
            ' C '
        ],
        {
            C: input,
            P: '#c:plates/iron',
            I: '#c:ingots/iron'
        })
    }

    // #endregion

    // #region Mechanical Drills

    event.remove({ id: 'createcasing:crafting/drills/andesite_manual_only' })
    event.remove({ id: 'createcasing:deploying/drills/andesite' })

    resetMechanicalDrillRecipes('brass', 'create:brass_casing')
    resetMechanicalDrillRecipes('copper', 'create:copper_casing')
    resetMechanicalDrillRecipes('railway', 'create:railway_casing')
    resetMechanicalDrillRecipes('creative', 'createcasing:creative_casing')
    resetMechanicalDrillRecipes('industrial_iron', 'create:industrial_iron_block')
    resetMechanicalDrillRecipes('weathered_iron', 'create:weathered_iron_block')
    resetMechanicalDrillRecipes('zinc', 'createcasing:zinc_casing')

    function resetMechanicalDrillRecipes(variant, input) {
        var drill = 'createcasing:' + variant + '_mechanical_drill'
        event.remove({ output: drill })
        event.shaped(drill,
        [
            ' I ',
            'IJI',
            ' C '
        ],
        {
            C: input,
            I: '#c:ingots/andesite_alloy',
            J: '#c:ingots/iron'
        })
    }

    // #endregion

    // #region Mechanical Ploughs

    event.remove({ id: 'createcasing:crafting/ploughs/andesite_manual_only' })
    event.remove({ id: 'createcasing:deploying/ploughs/andesite' })

    resetMechanicalPloughRecipes('brass', 'create:brass_casing')
    resetMechanicalPloughRecipes('copper', 'create:copper_casing')
    resetMechanicalPloughRecipes('railway', 'create:railway_casing')
    resetMechanicalPloughRecipes('creative', 'createcasing:creative_casing')
    resetMechanicalPloughRecipes('industrial_iron', 'create:industrial_iron_block')
    resetMechanicalPloughRecipes('weathered_iron', 'create:weathered_iron_block')
    resetMechanicalPloughRecipes('zinc', 'createcasing:zinc_casing')

    function resetMechanicalPloughRecipes(variant, input) {
        var plough = 'createcasing:' + variant + '_mechanical_plough'
        event.remove({ output: plough })
        event.shaped(plough,
        [
            'PPP',
            'III',
            ' C '
        ],
        {
            C: input,
            I: '#c:ingots/andesite_alloy',
            P: '#c:plates/iron'
        })
    }

    // #endregion

    // #region Mechanical Rollers

    event.remove({ id: 'createcasing:crafting/rollers/andesite_manual_only' })
    event.remove({ id: 'createcasing:deploying/rollers/andesite' })

    resetMechanicalRollerRecipes('brass', 'create:brass_casing')
    resetMechanicalRollerRecipes('copper', 'create:copper_casing')
    resetMechanicalRollerRecipes('railway', 'create:railway_casing')
    resetMechanicalRollerRecipes('creative', 'createcasing:creative_casing')
    resetMechanicalRollerRecipes('industrial_iron', 'create:industrial_iron_block')
    resetMechanicalRollerRecipes('weathered_iron', 'create:weathered_iron_block')
    resetMechanicalRollerRecipes('zinc', 'createcasing:zinc_casing')

    function resetMechanicalRollerRecipes(variant, input) {
        var roller = 'createcasing:' + variant + '_mechanical_roller'
        event.remove({ output: roller })
        event.shaped(roller,
        [
            ' E ',
            ' C ',
            ' W '
        ],
        {
            E: 'create:electron_tube',
            C: input,
            W: 'create:crushing_wheel'
        })
    }

    // #endregion

    event.remove({ output: 'createcasing:zinc_sheet' })
    event.remove({ output: 'createcasing:recaser' })
})