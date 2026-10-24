// Referenced: https://www.mcmod.cn/post/6789.html

let $RegisterItemDecorationsEvent = Java.loadClass('net.neoforged.neoforge.client.event.RegisterItemDecorationsEvent')
let incompletedIngredient = Ingredient.of('#kubejs:incompleted_items')
 
NativeEvents.onEvent($RegisterItemDecorationsEvent, event => {
    let decorator = (guiGraphics, font, stack, x, y) => {
        if (!incompletedIngredient.test(stack))
            return false
 
        let assembly = stack.get('create:sequenced_assembly')
        if (!assembly)
            return false
 
        let progress = assembly.progress()
        let maxBarWidth = 13
 
        let barWidth = Math.floor(progress * maxBarWidth)
        if (barWidth <= 0 && progress > 0)
            barWidth = 1
 
        let bgY = y + 13
        let guiOverlay = Java.loadClass('net.minecraft.client.renderer.RenderType').guiOverlay()
        guiGraphics.fill(guiOverlay, x + 2, bgY, x + 15, bgY + 2, 0xFF << 24)
 
        if (barWidth > 0) {
            let r = Math.floor(255 + (70  - 255) * progress)
            let g = Math.floor(192 + (255 - 192) * progress)
            let b = Math.floor(116 + (224 - 116) * progress)
 
            let color = (0xFF << 24) | (r << 16) | (g << 8) | b
 
            guiGraphics.fill(guiOverlay, x + 2, bgY, x + 2 + barWidth, bgY + 1, color)
        }
 
        return true
    }
 
    let allItemIds = Item.getTypeList()
    for (let id of allItemIds) {
        event.register(id, decorator)
    }
})