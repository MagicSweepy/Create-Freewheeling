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
})