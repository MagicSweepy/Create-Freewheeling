ServerEvents.recipes(event => {
    var incomplete = 'kubejs:unfilled_cake_mechanism'
    event.recipes.create.sequenced_assembly([ 'kubejs:cake_mechanism' ], 'createaddition:cake_base_baked',
    [
        event.recipes.create.cutting(incomplete, incomplete),
        event.recipes.create.filling(incomplete, [ incomplete, Fluid.of('minecraft:milk', 250) ]),
        event.recipes.create.deploying(incomplete, [ incomplete, 'neapolitan:strawberries' ]),
        event.recipes.create.deploying(incomplete, [ incomplete, 'minecraft:sugar' ]),
        event.recipes.create.pressing(incomplete, incomplete)
    ])
    .transitionalItem(incomplete)
    .loops(1)

    var incomplete2 = 'kubejs:incomplete_lightning_trigger'
    event.recipes.create.sequenced_assembly([ 'kubejs:lightning_trigger' ], 'kubejs:aluminum_sheet',
    [
        event.recipes.create.deploying(incomplete, [ incomplete, 'kubejs:aluminum_rod' ]),
        event.recipes.create.deploying(incomplete, [ incomplete, 'minecraft:lightning_rod' ]),
        event.recipes.create.deploying(incomplete, [ incomplete, 'create_optical:zinc_coil' ]),
        event.recipes.create.deploying(incomplete, [ incomplete, 'kubejs:tungsten_sheet' ])
    ])
    .transitionalItem(incomplete2)
    .loops(1)

    event.recipes.create.milling('kubejs:zinc_dust', 'create:zinc_ingot')
    event.recipes.create.crushing('kubejs:zinc_dust', 'create:zinc_ingot')

    event.recipes.create.milling('kubejs:copper_dust', 'minecraft:copper_ingot')
    event.recipes.create.crushing('kubejs:copper_dust', 'minecraft:copper_ingot')
})

BlockEvents.rightClicked(event => {
    const { level, block, item } = event;

    if (item.id !== 'kubejs:lightning_trigger')
        return;

    if (block.id.endsWith('deployer'))
        return;

    level.spawnLightning(block.x, block.y, block.z, false);

    event.cancel();
});