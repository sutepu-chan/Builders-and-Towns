ServerEvents.recipes(e => {
    //===== function =====//
    let shapedSurround = (colorItem, dye, array) => {
        e.shaped(Item.of(colorItem, 8), ['CCC', 'CDC', 'CCC'], {
            D: `#forge:dyes/${dye}`,
            C: array
        }).id(`kubejs:${colorItem.replace(':', '/')}`);
    };

});