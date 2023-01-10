REIEvents.information(e => {
    //===== car =====//
    //e.add(String, String, Array);
    e.add('car:canola_cake', 'Canola Cake', ['A side product obtained from putting Canola into Oil Mill.']);
    e.add('car:canola_oil_bucket', 'Canola Oil', ['Obtained by putting Canol into Oil Mill.']);
    e.add('car:methanol_bucket', 'Methanol', ['Obtained by putting wood logs into Blast Furnace.']);
    e.add('car:canola_methanol_mix_bucket', 'Canol Methanol Mix', ['Obtained by piping Oil and Methanol into Backmix Reactor.']);
    e.add('car:glycerin_bucket', 'Glycerin', ['Obtained by piping Canola Methanol Mix into Split Tank.']);
    e.add('car:bio_diesel_bucket', 'Biodiesel', ['Obtained by piping Canola Methanol Mix into Split Tank.'])
    e.add('car:canola_seeds', 'Canola Seeds', ['Obtained by breaking the grass.']);

    //===== bossominium =====//
    let bossItemInfo = (item, title, boss) => {
        e.add(item, title, [`Obtain by defeating ${boss}.`]);
    };
    bossItemInfo('bossominium:eye_of_the_badlands', 'Eye of the Badlands', 'Badland Colossal');
    bossItemInfo('bossominium:golden_shard', 'Golden Shard', 'Crypt Mummy');
    bossItemInfo('bossominium:ritual_prism', 'Ritual Prism', 'Cultisager');
    bossItemInfo('bossominium:all_seeing_crystal', 'All Seeing Crystal', 'End Stone Sentinel');
    bossItemInfo('bossominium:forest_core', 'Forest Core', 'Forest Guardian');
    bossItemInfo('bossominium:hells_fur', 'Hells Fur', 'Hell Hound');
    bossItemInfo('bossominium:netherrack_vein', 'Netherrack Vein', 'Netherrack Heart');
    bossItemInfo('bossominium:ruin_totem', 'Ruin Totem', 'Ruin');
    bossItemInfo('bossominium:bone_air_rune', 'Bone Air Rune',  'Skelenado');
    bossItemInfo('bossominium:skelenado_chest_chestplate', 'Skelenado Chest Chestplate',  'Skelenado'); 
    bossItemInfo('bossominium:soul_eye', 'Soul Eye', 'Soul Reaper');
    bossItemInfo('bossominium:village_ectoplasm', 'Village Ectoplasm', 'Vengeful Trader');
});