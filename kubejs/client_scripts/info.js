REIEvents.information(e => {
    let colors = ['white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray', 'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black'];
    //===== waystone =====//
    e.addItem('waystones:return_scroll', 'Return to your previous waystone.');
    e.addItem('waystones:bound_scroll', 'RC to bind to a waystone. Hold RC to teleport to the binded waystone.');
    e.addItem('waystones:warp_scroll', 'Allows you to teleport to any activated waystone.');
    e.addItem('waystones:attuned_shard', 'Obtain by placing warp plate down. Place A attuned shard from A warp plate into B warp plate, and place B attuned shard into A warp plate creates a bi-directional teleportation.');

    //===== car =====//
    e.addItem('car:canola_cake', 'A side product obtained from putting Canola into Oil Mill.');
    e.addItem('car:canola_oil_bucket', 'Obtained by putting Canol into Oil Mill.');
    e.addItem('car:methanol_bucket', 'Obtained by putting wood logs into Blast Furnace.');
    e.addItem('car:canola_methanol_mix_bucket', 'Obtained by piping Oil and Methanol into Backmix Reactor.');
    e.addItem('car:glycerin_bucket', 'Obtained by piping Canola Methanol Mix into Split Tank.');
    e.addItem('car:bio_diesel_bucket', 'Obtained by piping Canola Methanol Mix into Split Tank.')
    e.addItem('car:canola_seeds', 'Obtained by breaking the grass.');

    //===== bossominium =====//
    let bossItemInfo = (item, boss) => {
        e.addItem(item, `Obtain by defeating ${boss}.`);
    };
    bossItemInfo('bossominium:eye_of_the_badlands', 'Badland Colossal');
    bossItemInfo('bossominium:golden_shard', 'Crypt Mummy');
    bossItemInfo('bossominium:ritual_prism', 'Cultisager');
    bossItemInfo('bossominium:all_seeing_crystal', 'End Stone Sentinel');
    bossItemInfo('bossominium:forest_core', 'Forest Guardian');
    bossItemInfo('bossominium:hells_fur', 'Hell Hound');
    bossItemInfo('bossominium:netherrack_vein', 'Netherrack Heart');
    bossItemInfo('bossominium:netherrack_vein', 'Ruin');
    bossItemInfo(['bossominium:bone_air_rune', 'bossominium:skelenado_chest_chestplate'], 'Skelenado');
    bossItemInfo('bossominium:soul_eye', 'Soul Reaper');
    bossItemInfo('bossominium:village_ectoplasm', 'Vengeful Trader');

    //===== color variants =====//
    colors.forEach(color => {
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
            e.addItem(colorVariant, 'I can be crafted with any colors of dye!');
        });
    });
});