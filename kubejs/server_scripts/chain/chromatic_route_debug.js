ServerEvents.commandRegistry(event => {
    const Commands = Java.loadClass('net.minecraft.commands.Commands')
    const DYES = ['red', 'yellow', 'blue', 'brown', 'white', 'black']

    const canonicalPair = (a, b) => DYES.indexOf(a) < DYES.indexOf(b) ? a + '_' + b : b + '_' + a

    const storedAnswer = server => {
        const data = server.persistentData
        return {
            round: data.getInt('chromatic_round'),
            a: data.getString('chromatic_a'),
            b: data.getString('chromatic_b')
        }
    }

    const rollAnswer = server => {
        const data = server.persistentData
        const i = Math.floor(Math.random() * DYES.length)
        let j = Math.floor(Math.random() * (DYES.length - 1))
        if (j >= i) j++
        data.putString('chromatic_a', DYES[i])
        data.putString('chromatic_b', DYES[j])
        data.putInt('chromatic_round', data.getInt('chromatic_round') + 1)
    }

    const report = ctx => {
        const source = ctx.source
        const answer = storedAnswer(source.server)
        if (!answer.a || !answer.b) {
            source.sendSystemMessage(Text.gray('Required to check first to generate answer (execute reroll for new roll)'))
            return 1
        }
        source.sendSystemMessage(Text.gold('round ' + answer.round))
        source.sendSystemMessage(Text.gray('answer: ' + answer.a + ' + ' + answer.b))
        source.sendSystemMessage(Text.gray('item: kubejs:chorium_' + canonicalPair(answer.a, answer.b)))
        return 1
    }

    const reroll = ctx => {
        const source = ctx.source
        rollAnswer(source.server)
        const answer = storedAnswer(source.server)
        source.sendSystemMessage(Text.gold('reroll round ' + answer.round))
        source.sendSystemMessage(Text.gray('answer: ' + answer.a + ' + ' + answer.b))
        source.sendSystemMessage(Text.gray('pair item: kubejs:chorium_' + canonicalPair(answer.a, answer.b)))
        return 1
    }

    const chromaticRoute = Commands.literal('chromatic_route')
        .requires(source => source.hasPermission(2))
        .executes(report)
        .then(Commands.literal('reroll').executes(reroll))
        .build()

    const debug = Commands.literal('debug').then(chromaticRoute).build()

    let kubejsNode = null
    try {
        kubejsNode = event.dispatcher.getRoot().getChild('kubejs')
    } catch (rootError) {
        console.warn('Failed to read kubejs command tree: ' + rootError)
    }

    if (kubejsNode) {
        kubejsNode.addChild(debug)
    } else {
        event.register(Commands.literal('kubejs').then(debug))
    }
})
