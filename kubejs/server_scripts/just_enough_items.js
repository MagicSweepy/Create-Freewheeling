RecipeViewerEvents.removeEntriesCompletely('item', event => {
    event.remove('createcasing:zinc_sheet')
    event.remove('create_dragons_plus:fluid_hatch')
    event.remove('createdieselgenerators:wire_cutters')
    event.remove('createdieselgenerators:hammer')
})

RecipeViewerEvents.removeCategories(event => {
	event.remove('createdieselgenerators:wire_cutting')
    event.remove('createdieselgenerators:hammering')
})