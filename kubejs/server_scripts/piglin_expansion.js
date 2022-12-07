ServerEvents.recipes(e => {
    e.remove({ output: 'piglin_expansion:basalt_quadratiles' });
    e.shaped('piglin_expansion:basalt_quadratiles', ['bb', 'bb'], {
        b: 'minecraft:polished_basalt'
    }).id(`kubejs:piglin_expansion/basalt_quadratiles`);

    e.remove({ output: 'piglin_expansion:basalt_quadratiles_slab' });
    e.shaped('piglin_expansion:basalt_quadratiles_slab', ['aaa'], {
        a: 'piglin_expansion:basalt_quadratiles',
    }).id(`kubejs:piglin_expansion/basalt_quadratiles_slab`);

    e.remove({ output: 'piglin_expansion:chiseled_basalt_quadratiles_slab' });
    e.shaped('piglin_expansion:chiseled_basalt_quadratiles_slab', ['aaa'], {
        a: 'piglin_expansion:chiseled_basalt_quadratiles',
    }).id(`kubejs:piglin_expansion/chiseled_basalt_quadratiles_slab`);
    
    e.remove({ output: 'piglin_expansion:gilded_basalt_quadratiles_slab' });
    e.shaped('piglin_expansion:gilded_basalt_quadratiles_slab', ['aaa'], {
        a: 'piglin_expansion:gilded_basalt_quadratiles',
    }).id(`kubejs:piglin_expansion/gilded_basalt_quadratiles_slab`);
});