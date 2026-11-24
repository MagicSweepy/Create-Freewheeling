AvaritiaEvents.singularity(event => {
    // #region Create

    event.register('avaritia:zinc', s => { s
        .setDisplayName('singularity.avaritia.zinc')
        .setColors(0xB7E6BF, 0x30534D)
        .setCount(1000)
        .setTimeCost(200)
        .setIngredient(Ingredient.of('create:zinc_ingot'))
        .setEnabled(true)
        .setRecipeEnabled(true)
    })

    event.register('avaritia:andesite_alloy', s => { s
        .setDisplayName('singularity.avaritia.andesite_alloy')
        .setColors(0xC7C8B8, 0x4A5350)
        .setCount(1000)
        .setTimeCost(200)
        .setIngredient(Ingredient.of('create:andesite_alloy'))
        .setEnabled(true)
        .setRecipeEnabled(true)
    })

    event.register('avaritia:brass', s => { s
        .setDisplayName('singularity.avaritia.brass')
        .setColors(0xFCE892, 0x97593C)
        .setCount(1000)
        .setTimeCost(200)
        .setIngredient(Ingredient.of('create:brass_ingot'))
        .setEnabled(true)
        .setRecipeEnabled(true)
    })

    event.register('avaritia:rose_quartz', s => { s
        .setDisplayName('singularity.avaritia.rose_quartz')
        .setColors(0xF44471, 0xC63163)
        .setCount(1000)
        .setTimeCost(200)
        .setIngredient(Ingredient.of('create:polished_rose_quartz'))
        .setEnabled(true)
        .setRecipeEnabled(true)
    })

    event.register('avaritia:chromatic_compound', s => { s
        .setDisplayName('singularity.avaritia.chromatic_compound')
        .setColors(0x7F5068, 0x3E2938)
        .setCount(1000)
        .setTimeCost(200)
        .setIngredient(Ingredient.of('create:chromatic_compound'))
        .setEnabled(true)
        .setRecipeEnabled(true)
    })

    event.register('avaritia:shadow_steel', s => { s
        .setDisplayName('singularity.avaritia.shadow_steel')
        .setColors(0x5F5D6A, 0x140E29)
        .setCount(1000)
        .setTimeCost(200)
        .setIngredient(Ingredient.of('create:shadow_steel'))
        .setEnabled(true)
        .setRecipeEnabled(true)
    })

    event.register('avaritia:refined_radiance', s => { s
        .setDisplayName('singularity.avaritia.refined_radiance')
        .setColors(0xFFFEFF, 0xE1DEEF)
        .setCount(1000)
        .setTimeCost(200)
        .setIngredient(Ingredient.of('create:refined_radiance'))
        .setEnabled(true)
        .setRecipeEnabled(true)
    })

    event.register('avaritia:cardboard', s => { s
        .setDisplayName('singularity.avaritia.cardboard')
        .setColors(0xECC599, 0x82613A)
        .setCount(1000)
        .setTimeCost(200)
        .setIngredient(Ingredient.of('create:cardboard'))
        .setEnabled(true)
        .setRecipeEnabled(true)
    })

    event.register('avaritia:experience', s => { s
        .setDisplayName('singularity.avaritia.experience')
        .setColors(0xADFFBD, 0x559175)
        .setCount(1000)
        .setTimeCost(200)
        .setIngredient(Ingredient.of('create:experience_block'))
        .setEnabled(true)
        .setRecipeEnabled(true)
    })

    event.register('avaritia:industrial_iron', s => { s
        .setDisplayName('singularity.avaritia.industrial_iron')
        .setColors(0x484747, 0x343337)
        .setCount(1000)
        .setTimeCost(200)
        .setIngredient(Ingredient.of('create:industrial_iron_block'))
        .setEnabled(true)
        .setRecipeEnabled(true)
    })

    // #endregion

    // #region Create: Encased

    event.register('avaritia:chorium', s => { s
        .setDisplayName('singularity.avaritia.chorium')
        .setColors(0xB58BB5, 0x633B63)
        .setCount(1000)
        .setTimeCost(200)
        .setIngredient(Ingredient.of('createcasing:chorium_ingot'))
        .setEnabled(true)
        .setRecipeEnabled(true)
    })

    // #endregion
  
    // #region Create: Nuclear

    event.register('avaritia:uranium', s => { s
        .setDisplayName('singularity.avaritia.uranium')
        .setColors(0xE1F223, 0x346A04)
        .setCount(1000)
        .setTimeCost(200)
        .setIngredient(Ingredient.of('createnuclear:uranium_powder'))
        .setEnabled(true)
        .setRecipeEnabled(true)
    })

    event.register('avaritia:thorium', s => { s
        .setDisplayName('singularity.avaritia.thorium')
        .setColors(0x00D8FC, 0x005454)
        .setCount(1000)
        .setTimeCost(200)
        .setIngredient(Ingredient.of('createnuclear:thorium_ingot'))
        .setEnabled(true)
        .setRecipeEnabled(true)
    })

    // #endregion

    // #region Create: Enchantment Industry

    event.register('avaritia:super_experience', s => { s
        .setDisplayName('singularity.avaritia.super_experience')
        .setColors(0xEAFFFF, 0x3B97E6)
        .setCount(1000)
        .setTimeCost(200)
        .setIngredient(Ingredient.of('create_enchantment_industry:super_experience_block'))
        .setEnabled(true)
        .setRecipeEnabled(true)
    })

    // #endregion

    // #region Create: Rubberworks

    event.register('avaritia:rubber', s => { s
        .setDisplayName('singularity.avaritia.rubber')
        .setColors(0x58544D, 0x0D0C0B)
        .setCount(1000)
        .setTimeCost(200)
        .setIngredient(Ingredient.of('rubberworks:rubber_sheet'))
        .setEnabled(true)
        .setRecipeEnabled(true)
    })

    // #endregion

    // #region Applied Energistics 2

    event.register('avaritia:certus_quartz', s => { s
        .setDisplayName('singularity.avaritia.certus_quartz')
        .setColors(0x88B9EC, 0x3B5E7E)
        .setCount(1000)
        .setTimeCost(200)
        .setIngredient(Ingredient.of('ae2:certus_quartz_crystal'))
        .setEnabled(true)
        .setRecipeEnabled(true)
    })

    event.register('avaritia:fluix', s => { s
        .setDisplayName('singularity.avaritia.fluix')
        .setColors(0x57387B, 0x141223)
        .setCount(1000)
        .setTimeCost(200)
        .setIngredient(Ingredient.of('ae2:fluix_crystal'))
        .setEnabled(true)
        .setRecipeEnabled(true)
    })

    event.register('avaritia:silicon', s => { s
        .setDisplayName('singularity.avaritia.silicon')
        .setColors(0x34414E, 0x191B26)
        .setCount(1000)
        .setTimeCost(200)
        .setIngredient(Ingredient.of('ae2:silicon'))
        .setEnabled(true)
        .setRecipeEnabled(true)
    })

    event.register('avaritia:sky_stone', s => { s
        .setDisplayName('singularity.avaritia.sky_stone')
        .setColors(0x282A28, 0x292E2B)
        .setCount(1000)
        .setTimeCost(200)
        .setIngredient(Ingredient.of('ae2:sky_stone_block'))
        .setEnabled(true)
        .setRecipeEnabled(true)
    })

    // #endregion

    // #region Extended AE

    event.register('avaritia:entro_crystal', s => { s
        .setDisplayName('singularity.avaritia.entro_crystal')
        .setColors(0x03B798, 0x036573)
        .setCount(1000)
        .setTimeCost(200)
        .setIngredient(Ingredient.of('extendedae:entro_crystal'))
        .setEnabled(true)
        .setRecipeEnabled(true)
    })

    // #endregion 

    // #region Neo ECO AE Extension

    event.register('avaritia:tungsten', s => { s
        .setDisplayName('singularity.avaritia.tungsten')
        .setColors(0x67654D, 0x393529)
        .setCount(1000)
        .setTimeCost(200)
        .setIngredient(Ingredient.of('neoecoae:tungsten_ingot'))
        .setEnabled(true)
        .setRecipeEnabled(true)
    })

    event.register('avaritia:aluminum_alloy', s => { s
        .setDisplayName('singularity.avaritia.aluminum_alloy')
        .setColors(0xDBDCE0, 0x4C4C66)
        .setCount(1000)
        .setTimeCost(200)
        .setIngredient(Ingredient.of('neoecoae:aluminum_alloy_ingot'))
        .setEnabled(true)
        .setRecipeEnabled(true)
    })

    event.register('avaritia:black_tungsten_alloy', s => { s
        .setDisplayName('singularity.avaritia.black_tungsten_alloy')
        .setColors(0x2F2F2F, 0x191B26)
        .setCount(1000)
        .setTimeCost(200)
        .setIngredient(Ingredient.of('neoecoae:black_tungsten_alloy_ingot'))
        .setEnabled(true)
        .setRecipeEnabled(true)
    })

    event.register('avaritia:energized_crystal', s => { s
        .setDisplayName('singularity.avaritia.energized_crystal')
        .setColors(0x79EEFC, 0x265F94)
        .setCount(1000)
        .setTimeCost(200)
        .setIngredient(Ingredient.of('neoecoae:energized_crystal'))
        .setEnabled(true)
        .setRecipeEnabled(true)
    })

    event.register('avaritia:energized_fluix', s => { s
        .setDisplayName('singularity.avaritia.energized_fluix')
        .setColors(0x9541E5, 0x171134)
        .setCount(1000)
        .setTimeCost(200)
        .setIngredient(Ingredient.of('neoecoae:energized_fluix_crystal'))
        .setEnabled(true)
        .setRecipeEnabled(true)
    })

    event.register('avaritia:crystal', s => { s
        .setDisplayName('singularity.avaritia.crystal')
        .setColors(0xFCFCFC, 0x686C86)
        .setCount(1000)
        .setTimeCost(200)
        .setIngredient(Ingredient.of('neoecoae:crystal_ingot'))
        .setEnabled(true)
        .setRecipeEnabled(true)
    })

    event.register('avaritia:energized_superconductive', s => { s
        .setDisplayName('singularity.avaritia.energized_superconductive')
        .setColors(0xBAF3FC, 0x5C78CA)
        .setCount(1000)
        .setTimeCost(200)
        .setIngredient(Ingredient.of('neoecoae:energized_superconductive_ingot'))
        .setEnabled(true)
        .setRecipeEnabled(true)
    })

    event.register('avaritia:cryotheum', s => { s
        .setDisplayName('singularity.avaritia.cryotheum')
        .setColors(0x4DC8D8, 0x135876)
        .setCount(1000)
        .setTimeCost(200)
        .setIngredient(Ingredient.of('neoecoae:cryotheum_crystal'))
        .setEnabled(true)
        .setRecipeEnabled(true)
    })

    // #endregion

    // #region KubeJS

    event.register('avaritia:plastic', s => { s
        .setDisplayName('singularity.avaritia.plastic')
        .setColors(0xCFB7B6, 0x5F5453)
        .setCount(1000)
        .setTimeCost(200)
        .setIngredient(Ingredient.of('kubejs:plastic_ingot'))
        .setEnabled(true)
        .setRecipeEnabled(true)
    })

    // #endregion
})