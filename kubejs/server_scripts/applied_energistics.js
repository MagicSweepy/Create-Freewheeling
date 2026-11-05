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


})