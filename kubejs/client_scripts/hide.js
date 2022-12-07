JEIEvents.hideItems(e => {
    let colors = ['white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray', 'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black']
    //global disable
    global.recipe_disable.forEach(item => {
        e.hide(item);
    });
    libraryMods = [
        '@theoneprobe'
    ];
    libraryMods.forEach(a => {
        e.hide(a);
    });
});