ServerEvents.recipes(event => {
    const api = MMCR.getAPI()
    new $MachineRecipeBuilderJS('kubejs:large_alternator/generate')
        .recipePool('kubejs:large_alternator')
        .addRequirement(api.stressInput(1024, 256))
        .oFEt(5760)
        .tickTime(20)
        .build()
})
