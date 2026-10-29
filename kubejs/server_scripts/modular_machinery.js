
ServerEvents.recipes(event => {
    event.remove({ id: 'mmcr:modularium' })

    event.remove({ id: 'mmcr:basic_casing' })
    event.recipes.create.deploying('mmcr:basic_casing', [ 'create:railway_casing', 'neoecoae:aluminum_ingot' ])
})