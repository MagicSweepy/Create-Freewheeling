const CHROMATIC_ROUTE_DYES = ['red', 'yellow', 'blue', 'brown', 'white', 'black']

const $LootContextParams = Java.loadClass('net.minecraft.world.level.storage.loot.parameters.LootContextParams')

const chromaticData = server => server.persistentData

const rollAnswer = server => {
    const data = chromaticData(server)
    const i = Math.floor(Math.random() * CHROMATIC_ROUTE_DYES.length)
    let j = Math.floor(Math.random() * (CHROMATIC_ROUTE_DYES.length - 1))
    if (j >= i)
        j++
    data.putString('chromatic_a', CHROMATIC_ROUTE_DYES[i])
    data.putString('chromatic_b', CHROMATIC_ROUTE_DYES[j])
    data.putInt('chromatic_round', data.getInt('chromatic_round') + 1)
}

const currentAnswer = server => {
    const data = chromaticData(server)
    if (!data.contains('chromatic_a'))
        rollAnswer(server)
    return [data.getString('chromatic_a'), data.getString('chromatic_b')]
}

const itemIdOf = stack => {
    try {
        return String(stack.id)
    } catch (idError) {
        try {
            return String(stack.getItem())
        } catch (itemError) {
            return ''
        }
    }
}

const pairOf = stack => {
    const id = itemIdOf(stack)
    const prefix = 'kubejs:chorium_'
    if (id.indexOf(prefix) !== 0)
        return null
    const parts = id.substring(prefix.length).split('_')
    if (parts.length !== 2)
        return null
    if (CHROMATIC_ROUTE_DYES.indexOf(parts[0]) < 0 || CHROMATIC_ROUTE_DYES.indexOf(parts[1]) < 0)
        return null
    return parts
}

const samePair = (x, y) => {
    if (!x || !y)
        return false
    const a = [String(x[0]), String(x[1])]
    const b = [String(y[0]), String(y[1])]
    return (a[0] === b[0] && a[1] === b[1]) || (a[0] === b[1] && a[1] === b[0])
}

const judgeRead = ctx => {
    let entity = null
    let slotStack = null
    try {
        entity = ctx.get(LycheeContextKey.LOOT_PARAMS).get($LootContextParams.THIS_ENTITY)
    } catch (lootError) {
        console.warn('Failed to read item: ' + lootError)
    }
    if (entity) {
        return { stack: entity.getItem(), entity: entity }
    }
    try {
        slotStack = ctx.getItem(0)
    } catch (slotError) {
        console.warn('Failed to read contextural item: ' + slotError)
    }
    if (slotStack) {
        return { stack: slotStack, entity: null }
    }
    return null
}

const judgeWrite = (ctx, found, stack) => {
    if (found.entity) {
        found.entity.setItem(stack)
    } else {
        ctx.setItem(0, stack)
    }
}

LycheeEvents.customAction('chromatic_judge', event => {
    event.applyFunc = (recipe, ctx, times) => {
        let level = null
        let found = null
        let judged = false
        let answer = null
        let dyePair = null

        try {
            level = ctx.get(LycheeContextKey.LEVEL)
            found = judgeRead(ctx)
            if (!found) {
                console.error('Failed to get pending check item')
                return
            }

            dyePair = pairOf(found.stack)
            answer = currentAnswer(level.server)
            judged = !!dyePair && samePair(dyePair, answer)

            judgeWrite(ctx, found, Item.of(judged ? 'kubejs:chorium_attuned' : 'createcasing:chorium_ingot'))
        } catch (judgeError) {
            console.error('Failed to check item: ' + judgeError)
            return
        }

        if (judged) {
            try {
                rollAnswer(level.server)
            } catch (rollError) {
                console.error('Failed to roll new route: ' + rollError)
            }
        }
    }
    event.cancel()
})
