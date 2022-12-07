ServerEvents.recipes(e => {
    let colors = ['white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray', 'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black'];
    //fixing recipe error by author
    let windowCrafting = (coreIngredients) => {
        coreIngredients.forEach(coreIngre => {

            e.remove({ id: `mcwwindows:${coreIngre}_window` });
            e.shaped(`8x mcwwindows:${coreIngre}_window`, ['zzz', 'zcz', 'zzz'], {
                z: 'mcwwindows:window_base',
                c: `minecraft:${coreIngre}`
            }).id(`kubejs:mcwwindows/${coreIngre}_window`);

            e.remove({ id: `mcwwindows:${coreIngre}_window2` });
            e.shaped(`8x mcwwindows:${coreIngre}_window2`, ['xxx', 'xcx', 'xxx'], {
                x: 'mcwwindows:window_centre_bar_base',
                c: `minecraft:${coreIngre}`
            }).id(`kubejs:mcwwindows/${coreIngre}_window2`);

            e.remove({ id: `mcwwindows:${coreIngre}_four_window` });
            e.shaped(`8x mcwwindows:${coreIngre}_four_window`, ['xzx', 'zcz', 'xzx'], {
                x: 'mcwwindows:window_centre_bar_base',
                z: 'mcwwindows:window_base',
                c: `minecraft:${coreIngre}`
            }).id(`kubejs:mcwwindows/${coreIngre}_four_window`);
        });
    };
    windowCrafting([
        'dark_prismarine',
        'prismarine',
        'blackstone',
        'andesite',
        'stone',
        'diorite',
        'granite'
    ]);
    colors.forEach(color => {
        e.remove({ id: `mcwwindows:${color}_mosaic_glass` });
        e.shaped(`8x mcwwindows:${color}_mosaic_glass`, ['GGG', 'GWG', 'GGG'], {
            G: `minecraft:${color}_stained_glass`,
            W: `minecraft:${color}_wool`,
        }).id(`kubejs:mcwwindows/${color}_mosaic_glass`);
    });
});