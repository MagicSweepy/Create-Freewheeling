ServerEvents.tags('block', event => {
    event.add('create:wrench_pickup', 'sophisticatedstorage:tank')
    event.add('create:wrench_pickup', 'sophisticatedstorage:copper_tank')
    event.add('create:wrench_pickup', 'sophisticatedstorage:iron_tank')
    event.add('create:wrench_pickup', 'sophisticatedstorage:gold_tank')
    event.add('create:wrench_pickup', 'sophisticatedstorage:diamond_tank')
    event.add('create:wrench_pickup', 'sophisticatedstorage:netherite_tank')
})

ServerEvents.recipes(event => {
    event.remove({ id: 'sophisticatedstorage:tank' })
    event.shaped('sophisticatedstorage:tank',
    [
        'PQP',
        'GFG',
        'PQP'
    ],
    {
        F: '#create:fluid_tanks',
        P: '#c:plates/iron',
        Q: '#c:plates/brass',
        G: 'minecraft:glass'
    })
})