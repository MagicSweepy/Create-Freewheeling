ServerEvents.recipes(event => {
    event.remove({ id: 'neoecoae:cryotheum' })
    event.remove({ id: 'neoecoae:cryotheum_crystal' })

    event.recipes.create.compacting(Fluid.of('kubejs:cosmic_water', 500), 'neoecoae:cryotheum_crystal').superheated()
})