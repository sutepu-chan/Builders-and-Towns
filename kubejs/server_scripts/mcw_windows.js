ServerEvents.recipes(e => {
    //fixing recipe error by author
    let windowCrafting = (coreIngredients) => {
        coreIngredients.forEach(coreIngre => {
            e.remove({ id: `mcwwindows:${coreIngre}_window` });
            e.shaped(`mcwwindows:${coreIngre}_window`, ['zzz', 'zcz', 'zzz'], {
                z: 'mcwwindows:window_base',
                c: `minecraft:${coreIngre}`
            }).id(`kubejs:mcwwindows/${coreIngre}_window`);

            e.remove({ id: `mcwwindows:${coreIngre}_window2` });
            e.shaped(`mcwwindows:${coreIngre}_window2`, ['xxx', 'xcx', 'xxx'], {
                x: 'mcwwindows:window_centre_bar_base',
                c: `minecraft:${coreIngre}`
            }).id(`kubejs:mcwwindows/${coreIngre}_window2`);

            e.remove({ id: `mcwwindows:${coreIngre}_four_window` });
            e.shaped(`mcwwindows:${coreIngre}_four_window`, ['xzx', 'zcz', 'xzx'], {
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
    
});