// Listen to player login event
PlayerEvents.logged_in(e => {
    // Check if player doesn't have "starting_items" stage yet
    if (!e.player.stages.has('starting_items')) {
        // Add the stage
        e.player.stages.add('starting_items');
        // Give some items to player
        e.player.give(Item.of('minecraft:paper', "{display:{Name:'{\"text\":\"Shift+Q to open Quest\"}'}}"));
    };
});