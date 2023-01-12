ServerEvents.recipes(e => {
    //temp fix for recipe conflicts
    e.remove({ id: 'mcwtrpdoors:mangrove_bamboo_trapdoor' });
    e.shaped('mcwtrpdoors:mangrove_bamboo_trapdoor', ['P', 'B', 'P'], {
        P: 'minecraft:mangrove_planks',
        B: 'mcwtrpdoors:print_bamboo'
    }).id(`kubejs:mcwtrpdoors/mangrove_bamboo_trapdoor`);
})