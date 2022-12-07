ServerEvents.recipes(e => {
    e.remove({ id: 'phantasm:pream_door_recipe' });
    e.shaped('phantasm:pream_door', ['PP','PP','PP'], {
        P: 'phantasm:pream_planks'
    }).id(`kubejs:phantasm/pream_door`);
});