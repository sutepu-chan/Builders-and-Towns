ServerEvents.recipes(e => {
    let items = [
        'cataclysm:chiseled_end_stone_bricks',
        'cataclysm:chiseled_purpur_block',
        'phantasm:smooth_obsidian_recipe',
    ];
    items.forEach(item => e.remove({ id: item }))
    let exchangeCrafting = (a, b) => {
        e.shapeless(a, b).id(`kubejs:conversion/${a.replace(':', '/')}`)
        e.shapeless(b, a).id(`kubejs:conversion/${b.replace(':', '/')}`)
    }
    exchangeCrafting('cataclysm:chiseled_end_stone_bricks', 'stalwart_dungeons:chiseled_end_stone_bricks');

    e.shaped('4x phantasm:smooth_obsidian', ['BB', 'BB'], {
        B: 'cataclysm:obsidian_bricks'
    });
    e.shaped('8x cataclysm:chiseled_purpur_block', ['SS', 'SS'], {
        S: 'minecraft:purpur_slab'
    })
});