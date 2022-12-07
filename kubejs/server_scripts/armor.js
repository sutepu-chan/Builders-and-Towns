PlayerEvents.tick(e => {
    const { headArmorItem, chestArmorItem, legsArmorItem, feetArmorItem } = e.player;
    //e.player.potionEffects.add(effect, duration(ticks), level (-1), durability)
    if (e.player.level.time%100 == 0) {
        if (headArmorItem.id === 'oresabovediamonds:netherite_opal_helmet'
        && chestArmorItem.id === 'oresabovediamonds:netherite_opal_chestplate'
        && legsArmorItem.id === 'oresabovediamonds:netherite_opal_leggings'
        && feetArmorItem.id === 'oresabovediamonds:netherite_opal_boots') {
            e.player.potionEffects.add('night_vision', 400, 0);
            e.player.potionEffects.add('regeneration', 400, 0);
            e.player.potionEffects.add('absorption', 400, 2);
            e.player.potionEffects.add('luck', 400, 4);
            e.player.potionEffects.add('speed', 400, 1);
            e.player.potionEffects.add('resistance', 400, 2);
            e.player.potionEffects.add('fire_resistance', 400, 2);
            e.player.potionEffects.add('water_breathing', 400, 2);
            e.player.potionEffects.add('strength', 400, 2);
        };
    };
});