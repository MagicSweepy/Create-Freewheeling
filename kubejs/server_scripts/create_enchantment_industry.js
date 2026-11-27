ServerEvents.recipes(event => {
    event.remove({ id: 'create_enchantment_industry:item_application/experience_hatch' })
    event.custom({
        type: 'create:item_application',
        ingredients: [
            {
                item: 'fluidlogistics:fluid_hatch'
            },
            {
                item: 'create:experience_block'
            }
        ],
        results: [
            {
                id: 'create_enchantment_industry:experience_hatch'
            }
        ]
    })
})