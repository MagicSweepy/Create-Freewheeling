StartupEvents.registry('fluid', event => {
    event.create('ethylene').tint(0xFFE2E0).tag('c:ethylene').type(type => type
      .renderType(3)
      .stillTexture('kubejs:block/thin_fluid_still')
      .flowingTexture('kubejs:block/thin_fluid_flow')
      .fallDistanceModifier(0))

    event.create('sulfuric_acid').tint(0xF9E250).tag('c:sulfuric_acid').type(type => type
      .renderType(3)
      .stillTexture('kubejs:block/thin_fluid_still')
      .flowingTexture('kubejs:block/thin_fluid_flow')
      .fallDistanceModifier(0))
})