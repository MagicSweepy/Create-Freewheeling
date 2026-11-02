ServerEvents.recipes(event => {
    event.remove({ id: 'createnuclear:crafting/enriched_soul_soil' })

    event.recipes.create.pressing('kubejs:steel_sheet', 'createnuclear:steel_ingot')

    event.remove({ id: 'createnuclear:mechanical_crafting/reactor_controller' })
    event.recipes.create.mechanical_crafting('createnuclear:reactor_controller',
    [
        'PMP',
        'SCS',
        'POP'
    ],
    {
        C: 'createnuclear:reactor_casing',
        O: 'create:content_observer',
        M: 'create:precision_mechanism',
        P: 'kubejs:steel_sheet',
        S: 'kubejs:steel_rod'
    })

    event.remove({ id: 'createnuclear:mechanical_crafting/reactor_core' })
    event.recipes.create.mechanical_crafting('2x createnuclear:reactor_core',
    [
        'PSSSP',
        'SQLQS',
        'SQCQS',
        'SQMQS',
        'PSSSP'
    ],
    {
        C: 'createnuclear:reactor_casing',
        P: 'kubejs:steel_sheet',
        Q: 'createnuclear:graphene',
        S: 'kubejs:steel_rod',
        L: 'create_optical:rose_quartz_catalyst_coil',
        M: 'create:precision_mechanism'
    })

    event.remove({ id: 'createnuclear:mechanical_crafting/reactor_frame' })
    event.recipes.create.deploying('createnuclear:reactor_frame', [ 'createnuclear:reactor_casing', 'createnuclear:reinforced_glass' ])

    event.remove({ id: 'createnuclear:mechanical_crafting/reactor_cooler' })
    event.recipes.create.filling('createnuclear:reactor_cooler', [ 'createnuclear:reactor_frame', Fluid.of('createnuclear:nitrogen', 100) ])

    event.remove({ id: 'createnuclear:deploying/reactor_rod_input_from_hopper_and_reactor_casing' })
    event.recipes.create.deploying('createnuclear:reactor_rod_input', [ 'createnuclear:reactor_casing', 'create:chute' ])

    event.remove({ id: 'createnuclear:mechanical_crafting/reactor_alarm' })
    event.recipes.create.deploying('createnuclear:reactor_alarm', [ 'createnuclear:reactor_casing', 'minecraft:note_block' ])

    event.remove({ id: 'createnuclear:mixing/liquid_nitrogen' })
    event.recipes.create.mixing(Fluid.of('createnuclear:nitrogen', 100), [ 'createnuclear:cooled_nitrogen_concentrate', 'neapolitan:ice_cubes' ])

    event.remove({ id: 'createnuclear:crafting/reactor_blueprint_item' })
    event.shapeless('createnuclear:reactor_blueprint_item', [ 'create:empty_schematic', '#c:plates/steel' ])

    event.remove({ id: 'createnuclear:crushing/raw_copper' })
    event.remove({ id: 'createnuclear:crushing/raw_zinc' })
    event.remove({ id: 'create:crushing/lead_ore' })

    event.recipes.create.crushing([
        'create:crushed_raw_lead',
        CreateItem.of('create:crushed_raw_lead', 0.75),
        CreateItem.of('create:experience_nugget', 0.75),
        CreateItem.of('minecraft:cobblestone', 0.12)
    ], 'createnuclear:lead_ore')

    event.recipes.create.crushing([
        '2x create:crushed_raw_lead',
        CreateItem.of('create:crushed_raw_lead', 0.25),
        CreateItem.of('create:experience_nugget', 0.75),
        CreateItem.of('minecraft:cobbled_deepslate', 0.12)
    ], 'createnuclear:deepslate_lead_ore')

    event.recipes.create.crushing([
        '9x create:crushed_raw_lead',
        CreateItem.of('9x create:experience_nugget', 0.75)
    ], 'createnuclear:raw_lead_block')

    event.remove({ id: 'create:crushing/uranium_ore' })

    event.recipes.create.crushing([
        'create:crushed_raw_uranium',
        CreateItem.of('create:crushed_raw_uranium', 0.75),
        CreateItem.of('create:experience_nugget', 0.75),
        CreateItem.of('minecraft:cobblestone', 0.12)
    ], 'createnuclear:uranium_ore')

    event.recipes.create.crushing([
        '2x create:crushed_raw_uranium',
        CreateItem.of('create:crushed_raw_uranium', 0.25),
        CreateItem.of('create:experience_nugget', 0.75),
        CreateItem.of('minecraft:cobbled_deepslate', 0.12)
    ], 'createnuclear:deepslate_uranium_ore')

    event.recipes.create.crushing([
        '9x create:crushed_raw_uranium',
        CreateItem.of('9x create:experience_nugget', 0.75)
    ], 'createnuclear:raw_uranium_block')
})