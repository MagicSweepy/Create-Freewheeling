ServerEvents.recipes(event => {
    event.recipes.create.mixing(
        [ '4x createnuclear:thorium_dust', '8x neoecoae:iron_dust', '16x createnuclear:coal_dust' ],
        [ 'kubejs:depleted_fusion_rod', Fluid.of('minecraft:water', 1000) ]).superheated()
})