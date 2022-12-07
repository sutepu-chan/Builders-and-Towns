ServerEvents.recipes(e => {
    //===== Vanilla QoL Recipe =====//
    e.shapeless('4x minecraft:clay_ball', 'minecraft:clay').id(`kubejs:minecraft/decompress/clay`);
    e.shapeless('4x minecraft:quartz', 'minecraft:quartz_block').id(`kubejs:minecraft/decompress/quartz`);
    e.shapeless('9x minecraft:melon_slice', 'minecraft:melon').id(`kubejs:minecraft/decompress/melon`);
    e.shapeless('9x minecraft:honeycomb', 'minecraft:honeycomb_block').id('kubejs:minecraft/decompress/honeycomb');
    e.shapeless('4x minecraft:nether_wart', 'minecraft:nether_wart_block').id(`kubejs:minecraft/decompress/nether_wart`);
    e.shapeless('minecraft:blaze_rod', '2x minecraft:blaze_powder').id('kubejs:minecraft/compress/blaze_powder');
    e.shaped('16x minecraft:stick', ['L', 'L'], {
        'L': '#minecraft:logs'
    }).id(`kubejs:minecraft/sticks`);

    e.shaped('3x minecraft:glass', ['GGG', 'G G', 'GGG',], {
        G: 'minecraft:glass_pane'
    });

    e.shaped('4x minecraft:ladder', ['S S', 'SPS', 'S S'], {
        S: '#forge:rods/wooden',
        P: '#minecraft:planks'
    });
    
    e.shaped('minecraft:hopper', ['ILI', 'ILI', ' I '], {
        L: '#minecraft:logs',
        I: '#forge:ingots/iron'
    });
})
