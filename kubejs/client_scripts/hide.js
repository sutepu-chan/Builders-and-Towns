REIEvents.hideItems(e => {
    //===== global disable =====//
    global.recipe_disable.forEach(item => {
        e.hide(item);
    });

    let libraryMods = [
        '@theoneprobe',
        '@itemfilters',
    ];
    libraryMods.forEach(a => {
        e.hide(a);
    });
});