ServerEvents.loaded(event => {
    if (globalThis.Atmosphere)
        globalThis.Atmosphere.reset()
})
