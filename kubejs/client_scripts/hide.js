JEIEvents.hideItems(e => {
    let colors = ['white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray', 'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black'];
    //===== global disable =====//
    global.recipe_disable.forEach(item => {
        e.hide(item);
    });
    //===== color variants =====//
    colors.forEach(color => {
        if (color !== 'white') {
            let colorVariants = [
                `minecraft:${color}_wool`,
                `minecraft:${color}_terracotta`,
                `minecraft:${color}_stained_glass`,
                `minecraft:${color}_stained_glass_pane`,
                `minecraft:${color}_concrete`,
                `minecraft:${color}_concrete_powder`,
                `minecraft:${color}_carpet`,
                `minecraft:${color}_shulker_box`,
                `minecraft:${color}_bed`,
                `minecraft:${color}_banner`,
                `minecraft:${color}_candle`,
                `connectedglass:borderless_glass_${color}`,
                `connectedglass:clear_glass_${color}`,
                `connectedglass:scratched_glass_${color}`,
                `connectedglass:tinted_borderless_glass_${color}`,
                `connectedglass:borderless_glass_${color}_pane`,
                `connectedglass:clear_glass_${color}_pane`,
                `connectedglass:scratched_glass_${color}_pane`,
                `domum_ornamentum:${color}_brick_extra`,
                `domum_ornamentum:${color}_floating_carpet`,
                `mcwwindows:${color}_curtain`,
                `car:${color}_transporter_body`,
                `car:${color}_suv_body`,
                `car:${color}_sport_body`,
                `car:${color}_container`,
                `car:${color}_tank_container`,
                `mcwlights:${color}_lamp`,
                `mcwlights:${color}_ceiling_light`,
                `mcwlights:${color}_paper_lamp`,
                `waystones:${color}_sharestone`,
            ];
            colorVariants.forEach(colorVariant => {
                e.hide(colorVariant);
            });
        };
    });

    let libraryMods = [
        '@theoneprobe',
        '@itemfilters',
    ];
    libraryMods.forEach(a => {
        e.hide(a);
    });
});