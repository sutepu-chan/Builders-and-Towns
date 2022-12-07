REIEvents.hideItems(e => {
    let colors = ['white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray', 'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black']
    //global disable
    global.recipe_disable.forEach(item => {
        e.hide(item);
    });
    
    utils.listOf([
        //library items
        Item.of('ftblibrary:fluid_container').ignoreNBT(),
        'kubejs:dummy_fluid_item',
    ]).forEach(a => {
        e.hide(a);
    });

    
});