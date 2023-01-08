REIEvents.groupEntries(e => {
    let colors = ['white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray', 'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black'];

    e.groupItems('kubejs:rei_groups/spawn_eggs', 'Spawn Eggs', [
        /spawn_egg/,
    ]);
    //===== color variants =====//
    function colorArray(whiteItem) {
        let colorVariants = [];
        colors.forEach(color => {
            colorVariants.push(whiteItem.replace("white", color))
        });
        return colorVariants;
    }
    let groupItems = (name, whiteItem) => {
        e.groupItems(`kubejs:rei_groups/${name.replace(" ", "_")}`, name, colorArray(whiteItem));
    }
    groupItems('wool', `minecraft:white_wool`);
    groupItems('terracotta', `minecraft:white_terracotta`);
    groupItems('stained glass', `minecraft:white_stained_glass`);
    groupItems('stained glass pane', `minecraft:white_stained_glass_pane`);
    groupItems('concrete', `minecraft:white_concrete`);
    groupItems('concrete powder', `minecraft:white_concrete_powder`);
    groupItems('carpet', `minecraft:white_carpet`);
    groupItems('shulker box', `minecraft:white_shulker_box`);
    groupItems('bed', `minecraft:white_bed`);
    groupItems('banner', `minecraft:white_banner`);
    groupItems('candle', `minecraft:white_candle`);
    groupItems('connecting stained glass', `connectedglass:borderless_glass_white`);
    groupItems('clear stained glass', `connectedglass:clear_glass_white`);
    groupItems('scratched stained glass', `connectedglass:scratched_glass_white`);
    groupItems('tinted connecting stained glass', `connectedglass:tinted_borderless_glass_white`);
    groupItems('connecting stained glass pane', `connectedglass:borderless_glass_white_pane`);
    groupItems('clear stained glass pane', `connectedglass:clear_glass_white_pane`);
    groupItems('scratched stained glass pane', `connectedglass:scratched_glass_white_pane`);
    groupItems('color bricks extra', `domum_ornamentum:white_brick_extra`);
    groupItems('color floating carpet', `domum_ornamentum:white_floating_carpet`);
    groupItems('curtain', `mcwwindows:white_curtain`);
    groupItems('transporter body', `car:white_transporter_body`);
    groupItems('suv body', `car:white_suv_body`);
    groupItems('sport body', `car:white_sport_body`);
    groupItems('container', `car:white_container`);
    groupItems('tank container', `car:white_tank_container`);
    groupItems('lamp', `mcwlights:white_lamp`);
    groupItems('ceiling light', `mcwlights:white_ceiling_light`);
    groupItems('paper lamp', `mcwlights:white_paper_lamp`);

})