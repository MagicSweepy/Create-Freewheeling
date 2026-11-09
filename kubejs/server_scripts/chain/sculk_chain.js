ServerEvents.recipes(event => {
    event.recipes.create.filling('minecraft:echo_shard', [ 'minecraft:amethyst_shard', Fluid.of('createendergateway:active_ender_solution', 100) ])
})