StartupEvents.registry('item', e => {
    e.create('avaritia:infinity_sword', 'sword')
        .tier('netherite')
        .attackDamageBaseline(16777216)
        .speedBaseline(16777216)
        .displayName("Sword of Cosmos")
        .rarity('epic')
        .maxDamage(10000000);
    e.create('avaritia:ultimate_stew')
        .maxStackSize(64)
        .displayName("Ultimate Stew")
        .rarity('epic')
        .food(food => {
            food
                .hunger(100)
                .saturation(1)
                .alwaysEdible()
                .eaten(ctx => {//runs code upon consumption
                    ctx.player.tell('Powaaaaaa!!!');
                });
        });
    e.create('avaritia:cosmic_meatballs')
        .maxStackSize(64)
        .displayName("Cosmic Meatballs")
        .rarity('epic')
        .food(food => {
            food
                .hunger(100)
                .saturation(1)
                .alwaysEdible()
                .eaten(ctx => {//runs code upon consumption
                    ctx.player.tell('Powaaaaaa!!!');
                });
        });
    e.create('avaritia:endest_pearl')
        .maxStackSize(64)
        .rarity('epic')
        .displayName('Endest Pearl');
    e.create('avaritia:infinity_ingot')
        .maxStackSize(64)
        .rarity('epic')
        .displayName('Infinity Ingot');
    e.create('avaritia:infinity_catalyst')
        .maxStackSize(64)
        .rarity('epic')
        .displayName('Infinity Catalyst');


});