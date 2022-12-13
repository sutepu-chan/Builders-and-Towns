ServerEvents.recipes(e => {
    let ores = [
        'oresabovediamonds:amethyst_ore',
        'oresabovediamonds:deepslate_amethyst_ore',
        'oresabovediamonds:nether_amethyst_ore',
        'oresabovediamonds:end_amethyst_ore',
        'oresabovediamonds:black_opal_ore',
        'oresabovediamonds:deepslate_black_opal_ore',
        'oresabovediamonds:nether_black_opal_ore',
        'oresabovediamonds:end_black_opal_ore'
    ];
    ores.forEach(ore => {
        e.remove({ input: ore });
    });
    let smeltingids = [
        'oresabovediamonds:smelting_amethyst',
        'oresabovediamonds:smelting_black_opal',
        'oresabovediamonds:smelting_amethyst2',
        'oresabovediamonds:smelting_black_opal2'
    ];
    smeltingids.forEach(smeltingid => {
        e.remove({ id: smeltingid });
    });
    let compatSmelting = (ingredient, result) => {
        e.smelting(result, ingredient).id(`kubejs:smelting/${result.replace(':', '/')}`);
        e.blasting(result, ingredient).id(`kubejs:blasting/${result.replace(':', '/')}`);
    };
    compatSmelting([
        'oresabovediamonds:amethyst_ore',
        'oresabovediamonds:deepslate_amethyst_ore',
        'oresabovediamonds:nether_amethyst_ore',
        'oresabovediamonds:end_amethyst_ore'
    ], 'oresabovediamonds:amethyst');
    compatSmelting([
        'oresabovediamonds:black_opal_ore',
        'oresabovediamonds:deepslate_black_opal_ore',
        'oresabovediamonds:nether_black_opal_ore',
        'oresabovediamonds:end_black_opal_ore'
    ], 'oresabovediamonds:black_opal');
});