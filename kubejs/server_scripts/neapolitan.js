ServerEvents.recipes(event => {
    event.replaceInput({ input: 'neapolitan:chocolate_bar' }, 'neapolitan:chocolate_bar', 'create:bar_of_chocolate')
    event.remove({ output: 'neapolitan:chocolate_bar' })

    event.replaceInput({ input: 'neapolitan:milk_bottle' }, 'neapolitan:milk_bottle', 'farmersdelight:milk_bottle')
    event.remove({ output: 'neapolitan:milk_bottle' })
})