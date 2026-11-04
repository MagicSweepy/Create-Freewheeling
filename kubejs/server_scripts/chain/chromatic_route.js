ServerEvents.recipes(event => {
    const DYES = ['red', 'yellow', 'blue', 'brown', 'white', 'black']

    const BASE = 'createcasing:chorium_ingot'
    const PRODUCT = 'create:chromatic_compound'
    const URANIUM = 'createnuclear:uranium'
    const URANIUM_MB = 144

    const ATTUNED = 'kubejs:chorium_attuned'

    const halfId = dye => 'kubejs:chorium_' + dye
    const dyeId = dye => 'minecraft:' + dye + '_dye'

    const canonicalPair = (a, b) => DYES.indexOf(a) < DYES.indexOf(b) ? a + '_' + b : b + '_' + a
    const pairId = (a, b) => 'kubejs:chorium_' + canonicalPair(a, b)

    const withId = (recipe, id) => {
        try {
            return recipe.id(id)
        } catch (err) {
            console.warn('Cannot allocate recipe id, allocate "' + id + '" as id automatically')
            return recipe
        }
    }

    const custom = (json, id) => {
        try {
            event.custom(json).id(id)
        } catch (err) {
            console.warn('Failed to register recipes with id "' + id + '", ' + err)
        }
    }

    event.remove({ output: PRODUCT })

    // 1
    DYES.forEach(dye => {
        withId(event.recipes.create.mixing(
            halfId(dye),
            [BASE, dyeId(dye)]
        ), 'kubejs:chromatic_route/stage1_' + dye)
    })

    // 2
    DYES.forEach(first => {
        DYES.forEach(second => {
            if (first === second) return
            withId(event.recipes.create.mixing(
                pairId(first, second),
                [halfId(first), dyeId(second)]
            ), 'kubejs:chromatic_route/stage2_' + first + '_' + second)
        })
    })

    // 3A
    withId(event.recipes.create.filling(
        PRODUCT,
        [ATTUNED, Fluid.of(URANIUM, URANIUM_MB)]
    ), 'kubejs:chromatic_route/filling_attuned')

    // 3B
    DYES.forEach(first => {
        DYES.forEach(second => {
            if (first === second) return
            if (canonicalPair(first, second) !== first + '_' + second) return
            withId(event.recipes.create.filling(
                BASE,
                [pairId(first, second), Fluid.of(URANIUM, URANIUM_MB)]
            ), 'kubejs:chromatic_route/filling_reject_' + first + '_' + second)
        })
    })

    DYES.forEach(dye => {
        withId(event.recipes.create.filling(
            BASE,
            [halfId(dye), Fluid.of(URANIUM, URANIUM_MB)]
        ), 'kubejs:chromatic_route/filling_reject_half_' + dye)
    })

    // 4
    custom({
        type: 'lychee:item_inside',
        item_in: '#kubejs:chorium_pairs',
        block_in: 'minecraft:water',
        time: 1,
        post: [
            { type: 'custom', id: 'chromatic_judge' },
            'prevent_default'
        ]
    }, 'kubejs:chromatic_route/judge')

    // 5
    DYES.forEach(dye => {
        custom({
            type: 'lychee:item_inside',
            item_in: halfId(dye),
            block_in: 'minecraft:water',
            time: 1,
            post: [
                { type: 'drop_item', id: BASE },
                { type: 'drop_item', id: dyeId(dye) }
            ]
        }, 'kubejs:chromatic_route/wash_' + dye)
    })
})
