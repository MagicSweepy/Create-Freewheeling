ServerEvents.recipes(event => {
    let postBuilder = PostBuilder.create()
    let contextualBuilder = ContextualBuilder.create()

    event.remove({ id: 'ae2:charger/charged_certus_quartz_crystal' })
    event.remove({ id: 'createaddition:compat/ae2/charged_certus_quartz' })

    event.recipes.lychee.lightning_channeling(
        [ SizedIngredientWrapper.of('ae2:certus_quartz_crystal') ],
        [ postBuilder.dropItem('ae2:charged_certus_quartz_crystal')])
})