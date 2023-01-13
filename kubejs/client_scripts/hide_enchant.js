REIEvents.hide('item', e => {
    // script by arzadu
    // major kudos to juh9870, Lexxie Raven Black, EnigmaQuip, and Pie (Jerry Rig Everything) in the KubeJS discord for helping me out
    let enchants = {};
    e.getAllIngredients().forEach(e => {
        let item = Item.of(e);
        if (item.getId() !== 'minecraft:enchanted_book') return;
        let nbt = item.getNbt();
        for (let enchant of nbt.StoredEnchantments) {
            enchants[enchant.id] = Math.max(enchants[enchant.id] || 0, enchant.lvl);
        }
    });

    for(const enchantId in enchants) {
        for (const i = 1; i < enchants[enchantId]; i++) {
            e.hide(Item.of('minecraft:enchanted_book').enchant(enchantId, i))
        }
    };
});