ServerEvents.recipes(event => {
    event.remove({ id: 'create_integrated_farming:crafting/vacuum_harvester' })
    event.shapeless('create_integrated_farming:vacuum_harvester', [ '#create:harvesters', '#create:encased_fans', 'create:brass_casing', 'create:chute' ])
})