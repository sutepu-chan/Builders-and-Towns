REIEvents.groupEntries(e => {
    let colors = ['white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray', 'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black'];
    //===== spawn eggs =====//
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
        e.groupItems(`kubejs:rei_groups/${name.toLowerCase().replace(" ", "_")}`, name, colorArray(whiteItem));
    }
    groupItems('Wool', `minecraft:white_wool`);
    groupItems('Terracotta', `minecraft:white_terracotta`);
    groupItems('Stained Glass', `minecraft:white_stained_glass`);
    groupItems('Stained Glass Pane', `minecraft:white_stained_glass_pane`);
    groupItems('Concrete', `minecraft:white_concrete`);
    groupItems('Concrete Cowder', `minecraft:white_concrete_powder`);
    groupItems('Carpet', `minecraft:white_carpet`);
    groupItems('Shulker Box', `minecraft:white_shulker_box`);
    groupItems('Bed', `minecraft:white_bed`);
    groupItems('Banner', `minecraft:white_banner`);
    groupItems('Candle', `minecraft:white_candle`);
    groupItems('Connecting Stained Glass', `connectedglass:borderless_glass_white`);
    groupItems('Clear Stained Glass', `connectedglass:clear_glass_white`);
    groupItems('Scratched Stained Glass', `connectedglass:scratched_glass_white`);
    groupItems('Tinted Connecting Stained Glass', `connectedglass:tinted_borderless_glass_white`);
    groupItems('Connecting Stained Glass Pane', `connectedglass:borderless_glass_white_pane`);
    groupItems('clear stained glass pane', `connectedglass:clear_glass_white_pane`);
    groupItems('Scratched Stained Glass Pane', `connectedglass:scratched_glass_white_pane`);
    groupItems('Color Bricks Extra', `domum_ornamentum:white_brick_extra`);
    groupItems('Color Floating Carpet', `domum_ornamentum:white_floating_carpet`);
    groupItems('Curtain', `mcwwindows:white_curtain`);
    groupItems('Transporter Body', `car:white_transporter_body`);
    groupItems('SUV Body', `car:white_suv_body`);
    groupItems('Sport Body', `car:white_sport_body`);
    groupItems('Container', `car:white_container`);
    groupItems('Tank Container', `car:white_tank_container`);
    groupItems('Lamp', `mcwlights:white_lamp`);
    groupItems('Ceiling Light', `mcwlights:white_ceiling_light`);
    groupItems('Paper Lamp', `mcwlights:white_paper_lamp`);
    groupItems('Mosaic Glass', 'mcwwindows:white_mosaic_glass');
    groupItems('Mosaic Glass Pane', 'mcwwindows:white_mosaic_glass_pane');

    e.groupItemsByTaag('kubejs:rei_groups/glazed_terracotta', 'Terracotta', 'minecolonies:glazed_terracotta');

})