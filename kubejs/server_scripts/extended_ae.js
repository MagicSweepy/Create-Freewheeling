ServerEvents.recipes(event => {
    event.remove({ id: 'extendedae:entro_crystal' })
    event.recipes.create.milling('extendedae:entro_dust', 'extendedae:entro_crystal')
    event.recipes.create.crushing('extendedae:entro_dust', 'extendedae:entro_crystal')
    
    event.remove({ id: 'extendedae:inscriber/concurrent_print' })
    event.remove({ id: 'extendedae:inscriber/concurrent_process' })
    event.recipes.create.cutting('kubejs:entro_sheet', 'extendedae:entro_crystal')
})