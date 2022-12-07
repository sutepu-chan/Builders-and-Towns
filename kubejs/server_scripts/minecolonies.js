ServerEvents.recipes(e => {
    e.shaped('structurize:caliper', [' G ', 'S S', 'I I'], {
        I: 'minecraft:iron_ingot',
        G: '#forge:gears/iron',
        S: '#forge:rods/wooden'
    }).id(`kubejs:structurize/caliper`);
    
    e.remove({ id: 'structurize:sceptergold' });
    e.shaped('structurize:sceptergold', [' C', 'S '], {
        C: '#minecraft:stone_crafting_materials',
        S: '#forge:rods/wooden'
    }).id(`kubejs:structurize/sceptergold`);

    e.remove({ id: 'structurize:sceptersteel' });
    e.shaped('structurize:sceptersteel', ['GC', 'S '], {
        C: '#forge:ingots/iron',
        G: 'structurize:sceptergold',
        S: '#forge:rods/wooden'
    }).id(`kubejs:structurize/sceptersteel`);
});