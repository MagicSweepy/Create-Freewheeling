ServerEvents.recipes(event => {
    event.remove({ id: 'extendedae:entro_crystal' })
    event.recipes.create.milling('extendedae:entro_dust', 'extendedae:entro_crystal')
    event.recipes.create.crushing('extendedae:entro_dust', 'extendedae:entro_crystal')
})