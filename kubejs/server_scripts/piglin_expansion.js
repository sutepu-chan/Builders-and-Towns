ServerEvents.recipes(e => {
    e.remove({ output: 'piglin_expansion:basalt_quadratiles' });
    e.shaped('4x piglin_expansion:basalt_quadratiles', ['bb', 'bb'], {
        b: 'minecraft:polished_basalt'
    }).id(`kubejs:piglin_expansion/basalt_quadratiles`);

    e.remove({ output: 'piglin_expansion:basalt_quadratiles_slab' });
    e.shaped('6x piglin_expansion:basalt_quadratiles_slab', ['aaa'], {
        a: 'piglin_expansion:basalt_quadratiles',
    }).id(`kubejs:piglin_expansion/basalt_quadratiles_slab`);

    e.remove({ output: 'piglin_expansion:chiseled_basalt_quadratiles_slab' });
    e.shaped('6x piglin_expansion:chiseled_basalt_quadratiles_slab', ['aaa'], {
        a: 'piglin_expansion:chiseled_basalt_quadratiles',
    }).id(`kubejs:piglin_expansion/chiseled_basalt_quadratiles_slab`);

    e.remove({ output: 'piglin_expansion:gilded_basalt_quadratiles_slab' });
    e.shaped('6x piglin_expansion:gilded_basalt_quadratiles_slab', ['aaa'], {
        a: 'piglin_expansion:gilded_basalt_quadratiles',
    }).id(`kubejs:piglin_expansion/gilded_basalt_quadratiles_slab`);

    e.shaped('4x piglin_expansion:golden_stick', ['G', 'G'], {
        G: 'minecraft:gold_ingot'
    }).id(`kubejs:piglin_expansion/golden_stick`);
});