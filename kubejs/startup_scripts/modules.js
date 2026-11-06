MMCREvents.startup(event => {
    const api = event.getAPI()

    const register = (id, modifiers) => {
        event.registerModifier(`kubejs:${id}`, api.modifierDefinition(modifiers))
        event.registerModifierItem(`kubejs:${id}`, `kubejs:${id}`)
    }

    register('speed_module_mk1', [
        api.modifier('duration', 'input', 0.96, 'multiply', false),
        api.modifier('energy', 'input', 1.08, 'multiply', false)
    ])
    register('speed_module_mk2', [
        api.modifier('duration', 'input', 0.93, 'multiply', false),
        api.modifier('energy', 'input', 1.15, 'multiply', false)
    ])
    register('speed_module_mk3', [
        api.modifier('duration', 'input', 0.90, 'multiply', false),
        api.modifier('energy', 'input', 1.25, 'multiply', false)
    ])

    register('productivity_module_mk1', [
        api.modifier('output', 'output', 1.04, 'multiply', false),
        api.modifier('duration', 'input', 1.05, 'multiply', false),
        api.modifier('energy', 'input', 1.10, 'multiply', false)
    ])
    register('productivity_module_mk2', [
        api.modifier('output', 'output', 1.06, 'multiply', false),
        api.modifier('duration', 'input', 1.08, 'multiply', false),
        api.modifier('energy', 'input', 1.15, 'multiply', false)
    ])
    register('productivity_module_mk3', [
        api.modifier('output', 'output', 1.08, 'multiply', false),
        api.modifier('duration', 'input', 1.12, 'multiply', false),
        api.modifier('energy', 'input', 1.22, 'multiply', false)
    ])

    register('efficiency_module_mk1', [
        api.modifier('energy', 'input', 0.96, 'multiply', false)
    ])
    register('efficiency_module_mk2', [
        api.modifier('energy', 'input', 0.93, 'multiply', false)
    ])
    register('efficiency_module_mk3', [
        api.modifier('energy', 'input', 0.90, 'multiply', false)
    ])
})
