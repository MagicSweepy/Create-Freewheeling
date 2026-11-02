StartupEvents.registry('fluid', event => {
    const fluidOf = (id, color, tag) => event.create(id).tint(color).tag(tag).type(type => type
        .renderType(3)
        .stillTexture('kubejs:block/thin_fluid_still')
        .flowingTexture('kubejs:block/thin_fluid_flow')
        .fallDistanceModifier(0))

    fluidOf('ethylene', 0xFFE2E0, 'c:ethylene')
    fluidOf('sulfuric_acid', 0xF9E250, 'c:sulfuric_acid')
    fluidOf('air', 0xBFD8E6, 'kubejs:atmospheric_air')
    fluidOf('nether_air', 0xE0A080, 'kubejs:atmospheric_air')
    fluidOf('end_air', 0xC7A8E8, 'kubejs:atmospheric_air')
    fluidOf('hot_air', 0xFF7040, 'kubejs:environmental_gas')
    fluidOf('cold_air', 0x9FE8FF, 'kubejs:environmental_gas')
    fluidOf('humid_air', 0x4F9FE8, 'kubejs:environmental_gas')
    fluidOf('dry_air', 0xD8C9A0, 'kubejs:environmental_gas')
    fluidOf('acidic_air', 0xC8E040, 'kubejs:environmental_gas')
    fluidOf('alkaline_air', 0x50E0A0, 'kubejs:environmental_gas')
})