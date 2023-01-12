ServerEvents.recipes(e => {
    e.remove({ id: 'vinery:cherry_beam' });
    e.shaped('3x vinery:cherry_beam', ['L', 'P', 'L'], {
        L: 'vinery:old_cherry_log',
        P: 'vinery:cherry_planks'
    }).id(`kubejs:vinery/cherry_beam`);

    e.remove({ id: 'vinery:grapevine_stem' });
    e.shaped('4x vinery:grapevine_stem', ['U', 'S', 'U'], {
        U: '#minecraft:logs_unstripped',
        S: '#minecraft:logs_stripped'
    }).id(`kubejs:vinery/grapevine_stem`);

    e.replaceInput({ output: 'vinery:wine_rack_4' }, 'minecraft:iron_nugget', 'minecraft:gold_nugget');
})