ServerEvents.tags('block', event => {
    event.add('create:wrench_pickup', 'avaritia:neutron_collector')
    event.add('create:wrench_pickup', 'avaritia:dense_neutron_collector')
    event.add('create:wrench_pickup', 'avaritia:denser_neutron_collector')
    event.add('create:wrench_pickup', 'avaritia:densest_neutron_collector')
    event.add('create:wrench_pickup', 'avaritia:neutron_compressor')
    event.add('create:wrench_pickup', 'avaritia:dense_neutron_compressor')
    event.add('create:wrench_pickup', 'avaritia:denser_neutron_compressor')
    event.add('create:wrench_pickup', 'avaritia:densest_neutron_compressor')
    event.add('create:wrench_pickup', 'avaritia:extreme_smithing_table')
    event.add('create:wrench_pickup', 'avaritia:extreme_anvil')
    event.add('create:wrench_pickup', 'avaritia:tesseract')
    event.add('create:wrench_pickup', 'avaritia:sculk_crafting_table')
    event.add('create:wrench_pickup', 'avaritia:nether_crafting_table')
    event.add('create:wrench_pickup', 'avaritia:extreme_crafting_table')
})

ServerEvents.recipes(event => {
    event.remove({ output: 'minecraft:sculk' })
    event.remove({ output: 'minecraft:echo_shard' })

    event.recipes.create.mechanical_crafting('avaritia:double_compressed_crafting_table',
    [
        'CCCCCCCCC',
        'CCCCCCCCC',
        'CCCCCCCCC',
        'CCCCCCCCC',
        'CCCCCCCCC',
        'CCCCCCCCC',
        'CCCCCCCCC',
        'CCCCCCCCC',
        'CCCCCCCCC'
    ],
    {
        C: 'minecraft:crafting_table'
    })

    event.remove({ output: 'avaritia:sculk_crafting_table' })
    event.recipes.create.mechanical_crafting('avaritia:sculk_crafting_table',
    [
        'QAQ',
        'XCX',
        'QBQ'
    ],
    {
        C: 'avaritia:double_compressed_crafting_table',
        X: 'kubejs:sculk_vitamin',
        A: 'minecraft:sculk_shrieker',
        B: 'minecraft:sculk_catalyst',
        Q: 'minecraft:echo_shard'
    })

    event.remove({ id: 'avaritia:blaze_cube' })
    event.remove({ id: 'avaritia:endest_pearl' })

    event.remove({ output: 'avaritia:diamond_lattice' })
    event.recipes.create.mechanical_crafting('4x avaritia:diamond_lattice',
    [
        'P     P',
        ' PH HP ',
        ' HQCQH ',
        '  CXC  ',
        ' HQCQH ',
        ' PH HP ',
        'P     P'
    ],
    {
        X: 'neoecoae:crystal_matrix',
        P: 'kubejs:diamond_sheet',
        Q: 'kubejs:energized_certus_quartz_sheet',
        H: 'extendedae:entro_ingot',
        C: 'neoecoae:cryotheum_crystal'
    })

    event.remove({ id: 'avaritia:crystal_matrix_ingot_normal' })
})