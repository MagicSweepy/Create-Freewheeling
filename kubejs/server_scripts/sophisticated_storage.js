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