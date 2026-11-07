ServerEvents.recipes(event => {
    let postBuilder = PostBuilder.create()
    let contextualBuilder = ContextualBuilder.create()

    event.remove({ id: 'ae2:charger/charged_certus_quartz_crystal' })
    event.remove({ id: 'createaddition:compat/ae2/charged_certus_quartz' })

    event.recipes.lychee.lightning_channeling(
        [ SizedIngredientWrapper.of('ae2:certus_quartz_crystal') ],
        [ postBuilder.dropItem('ae2:charged_certus_quartz_crystal')])

    event.remove({ id: 'ae2:inscriber/certus_quartz_dust' })
    event.remove({ id: 'ae2:inscriber/fluix_dust' })
    event.remove({ id: 'ae2:inscriber/ender_dust' })
    event.remove({ id: 'ae2:inscriber/sky_stone_dust' })

    event.remove({ id: 'ae2:network/blocks/inscribers' })
    event.shaped('ae2:inscriber',
    [
        'APA',
        'XCX',
        'AOA'
    ],
    {
        C: 'mmcr:basic_casing',
        P: '#create:presses',
        O: 'create_connected:control_chip',
        X: 'kubejs:fluix_coil',
        A: '#c:plates/aluminum'
    })

    event.recipes.create.cutting('kubejs:diamond_sheet', 'minecraft:diamond')
    event.recipes.create.cutting('kubejs:certus_quartz_sheet', 'ae2:certus_quartz_crystal')
    event.recipes.create.cutting('kubejs:certus_quartz_sheet', 'ae2:charged_certus_quartz_crystal')
    event.recipes.create.cutting('kubejs:fluix_sheet', 'ae2:fluix_crystal')

    event.remove({ id: 'ae2:network/blocks/controller' })
    event.shaped('4x ae2:controller',
    [
        'SXS',
        'ACA',
        'SOS'
    ],
    {
        C: 'create:shadow_steel_casing',
        X: 'ae2:engineering_processor',
        O: 'kubejs:fluix_coil',
        S: 'ae2:smooth_sky_stone_block',
        A: 'kubejs:tungsten_rod'
    })

    event.remove({ id: 'ae2:network/blocks/storage_drive' })
    event.shaped('ae2:drive',
    [
        'PXP',
        'GCG',
        'PXP'
    ],
    {
        P: '#c:plates/aluminum',
        G: '#ae2:glass_cable',
        X: 'ae2:engineering_processor',
        C: 'mmcr:basic_casing'
    })

    event.remove({ id: 'ae2:network/blocks/crystal_processing_growth_accelerator' })
    event.shaped('ae2:growth_accelerator',
    [
        'PXP',
        'GBG',
        'PXP'
    ],
    {
        P: '#c:plates/fluix',
        G: 'ae2:quartz_glass',
        X: '#ae2:glass_cable',
        B: 'ae2:fluix_block'
    })

    event.remove({ id: 'ae2:network/blocks/pattern_providers_interface' })
    event.shaped('ae2:pattern_provider',
    [
        'PXP',
        'ACB',
        'PWP'
    ],
    {
        C: 'create:stock_ticker',
        A: 'ae2:annihilation_core',
        B: 'ae2:formation_core',
        W: '#ae2:glass_cable',
        X: 'ae2:calculation_processor',
        P: '#c:plates/refined_radiance'
    })

    event.remove({ id: 'ae2:network/blocks/interfaces_interface' })
    event.shaped('ae2:interface',
    [
        'PXP',
        'ACB',
        'PWP'
    ],
    {
        A: 'ae2:annihilation_core',
        B: 'ae2:formation_core',
        C: 'create:package_frogport',
        W: '#ae2:glass_cable',
        X: 'ae2:engineering_processor',
        P: '#c:plates/refined_radiance'
    })

    event.remove({ id: 'ae2:network/crafting/molecular_assembler' })
    event.shaped('ae2:molecular_assembler',
    [
        'PGP',
        'ACB',
        'PWP'
    ],
    {
        C: 'create:mechanical_crafter',
        W: '#ae2:glass_cable',
        P: '#c:plates/refined_radiance',
        A: 'ae2:annihilation_core',
        B: 'ae2:formation_core',
        G: 'ae2:quartz_glass'
    })

    event.remove({ id: 'ae2:network/parts/import_bus' })
    event.shaped('ae2:import_bus',
    [
        '   ',
        ' A ',
        'PFP'
    ],
    {
        A: 'ae2:annihilation_core',
        F: 'create:brass_funnel',
        P: '#c:plates/certus_quartz'
    })

    event.remove({ id: 'ae2:network/parts/export_bus' })
    event.shaped('ae2:export_bus',
    [
        '   ',
        'PAP',
        ' F '
    ],
    {
        F: 'create:brass_funnel',
        P: '#c:plates/certus_quartz',
        A: 'ae2:formation_core'
    })

    event.remove({ id: 'ae2:tools/network_memory_card' })
    event.shaped('ae2:memory_card',
    [
        '   ',
        'XPP',
        'ARA'
    ],
    {
        X: 'ae2:calculation_processor',
        P: '#c:plates/aluminum',
        A: '#c:plates/electrum',
        R: 'kubejs:integrated_circuit'
    })

    event.remove({ id: 'ae2:materials/basiccard' })
    event.shaped('4x ae2:basic_card',
    [
        'AP ',
        'RXP',
        'AP '
    ],
    {
        A: '#c:plates/electrum',
        P: '#c:plates/aluminum',
        X: 'ae2:calculation_processor',
        R: 'kubejs:integrated_circuit'
    })

    event.remove({ id: 'ae2:materials/advancedcard' })
    event.shaped('4x ae2:advanced_card',
    [
        'AP ',
        'RXP',
        'AP '
    ],
    {
        A: '#c:plates/diamond',
        P: '#c:plates/aluminum_alloy',
        X: 'ae2:calculation_processor',
        R: 'kubejs:integrated_circuit'
    })
})