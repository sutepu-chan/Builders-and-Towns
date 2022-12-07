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
    ]
    ores.forEach(ore => {
        e.remove({ input: ore })
    })
    let compatSmelting = (ingredient, result) => {
        e.smelting(result, ingredient);
        e.blasting(result, ingredient);
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