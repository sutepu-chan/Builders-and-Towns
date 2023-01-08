REIEvents.group(e => {
    let colors = ['white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray', 'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black'];
    //===== color variants =====//
    let groupItems = (name, colorVariants) => {
        let temp = [];
        colors.forEach(color => {
            temp.push(colorVariants);
        });
        e.groupItems(`kubejsLrei_groups/${name.replace(' ', '_')}`, name, temp);
    }
    groupItems('wool', `minecraft:${color}_wool`);
    groupItems('terracotta', `minecraft:${color}_terracotta`);
    groupItems('stained glass', `minecraft:${color}_stained_glass`);
    groupItems('stained glass pane', `minecraft:${color}_stained_glass_pane`);
    groupItems('concrete', `minecraft:${color}_concrete`);
    groupItems('concrete powder', `minecraft:${color}_concrete_powder`);
    groupItems('carpet', `minecraft:${color}_carpet`);
    groupItems('shulker box', `minecraft:${color}_shulker_box`);
    groupItems('bed', `minecraft:${color}_bed`);
    groupItems('banner', `minecraft:${color}_banner`);
    groupItems('candle', `minecraft:${color}_candle`);
    groupItems('connecting stained glass', `connectedglass:borderless_glass_${color}`);
    groupItems('clear stained glass', `connectedglass:clear_glass_${color}`);
    groupItems('scratched stained glass', `connectedglass:scratched_glass_${color}`);
    groupItems('tinted connecting stained glass', `connectedglass:tinted_borderless_glass_${color}`);
    groupItems('connecting stained glass pane', `connectedglass:borderless_glass_${color}_pane`);
    groupItems('clear stained glass pane', `connectedglass:clear_glass_${color}_pane`);
    groupItems('scratched stained glass pane', `connectedglass:scratched_glass_${color}_pane`);
    groupItems('color bricks extra', `domum_ornamentum:${color}_brick_extra`);
    groupItems('color floating carpet', `domum_ornamentum:${color}_floating_carpet`);
    groupItems('curtain', `mcwwindows:${color}_curtain`);
    groupItems('transporter body', `car:${color}_transporter_body`);
    groupItems('suv body', `car:${color}_suv_body`);
    groupItems('sport body', `car:${color}_sport_body`);
    groupItems('container', `car:${color}_container`);
    groupItems('tank container', `car:${color}_tank_container`);
    groupItems('lamp', `mcwlights:${color}_lamp`);
    groupItems('ceiling light', `mcwlights:${color}_ceiling_light`);
    groupItems('paper lamp', `mcwlights:${color}_paper_lamp`);
})