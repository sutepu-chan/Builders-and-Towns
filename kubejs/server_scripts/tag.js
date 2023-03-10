//priority: 99
ServerEvents.tags('item', e => {
    e.add('minecraft:logs_unstripped', /^.+:(?!stripped_).+_log$/);
    e.add('minecraft:logs_stripped', /^.+:(?=stripped_).+_log$/);
    e.add('minecraft:leaves', ['phantasm:pream_leaves'])
    e.add('mtr:rail_connector_two_way', ['mtr:rail_connector_20', 'mtr:rail_connector_40', 'mtr:rail_connector_60', 'mtr:rail_connector_80', 'mtr:rail_connector_120', 'mtr:rail_connector_160', 'mtr:rail_connector_200', 'mtr:rail_connector_300']);
    e.add('mtr:rail_connector_one_way', ['mtr:rail_connector_20_one_way', 'mtr:rail_connector_40_one_way', 'mtr:rail_connector_60_one_way', 'mtr:rail_connector_80_one_way', 'mtr:rail_connector_120_one_way', 'mtr:rail_connector_160_one_way', 'mtr:rail_connector_200_one_way', 'mtr:rail_connector_300_one_way']);
    e.add('mtr:rail_connector', ['#mtr:rail_connector_two_way', '#mtr:rail_connector_one_way']);
    e.add('mtr:platforms', ['mtr:platform', 'mtr:platform_indented', 'mtr:platform_na_1', 'mtr:platform_na_1_indented', 'mtr:platform_na_2', 'mtr:platform_na_2_indented', 'mtr:platform_uk_1', 'mtr:platform_uk_1_indented']);
    e.add('forge:shovels', /.+:.+_shovel/);
    e.add('forge:pickaxes', /.+:.+_pickaxe/);
    e.add('forge:axes', /.+:.+_axe/);
    e.add('forge:hoes', /.+:.+_hoe/);
    e.add('forge:swords', /.+:.+_sword/);

    //===== legendary tooltips =====//
    e.add('legendarytooltips:upgradednetherite_tools', [
        '#upgradednetherite:upgraded_netherite_sword',
        '#upgradednetherite:upgraded_netherite_bow',
        '#upgradednetherite:upgraded_netherite_crossbow',
        '#upgradednetherite:upgraded_netherite_pickaxe',
        '#upgradednetherite:upgraded_netherite_shovel',
        '#upgradednetherite:upgraded_netherite_axe',
        '#upgradednetherite:upgraded_netherite_shield',
        '#upgradednetherite:upgraded_netherite_helmet',
        '#upgradednetherite:upgraded_netherite_chestplate',
        '#upgradednetherite:upgraded_netherite_leggings',
        '#upgradednetherite:upgraded_netherite_boots',
        '#upgradednetherite:upgraded_netherite_horse_armor',
        'upgradednetherite:corrupt_upgraded_netherite_sword',
        'upgradednetherite:corrupt_upgraded_netherite_bow',
        'upgradednetherite:corrupt_upgraded_netherite_crossbow',
        'upgradednetherite:corrupt_upgraded_netherite_pickaxe',
        'upgradednetherite:corrupt_upgraded_netherite_shovel',
        'upgradednetherite:corrupt_upgraded_netherite_axe',
        'upgradednetherite:corrupt_upgraded_netherite_shield',
        'upgradednetherite:corrupt_upgraded_netherite_helmet',
        'upgradednetherite:corrupt_upgraded_netherite_chestplate',
        'upgradednetherite:corrupt_upgraded_netherite_leggings',
        'upgradednetherite:corrupt_upgraded_netherite_boots',
        'upgradednetherite:corrupt_upgraded_netherite_horse_armor',

    ]);
    e.add('legendarytooltips:upgradednetherite_items', [
        'upgradednetherite:gold_upgraded_netherite_ingot',
        'upgradednetherite:fire_upgraded_netherite_ingot',
        'upgradednetherite:ender_upgraded_netherite_ingot',
        'upgradednetherite:water_upgraded_netherite_ingot',
        'upgradednetherite:wither_upgraded_netherite_ingot',
        'upgradednetherite:poison_upgraded_netherite_ingot',
        'upgradednetherite:phantom_upgraded_netherite_ingot',
        'upgradednetherite:feather_upgraded_netherite_ingot',
        'upgradednetherite:corrupt_upgraded_netherite_ingot',
        'upgradednetherite:echo_upgraded_netherite_ingot',
        'upgradednetherite:gold_essence',
        'upgradednetherite:fire_essence',
        'upgradednetherite:ender_essence',
        'upgradednetherite:water_essence',
        'upgradednetherite:wither_essence',
        'upgradednetherite:poison_essence',
        'upgradednetherite:phantom_essence',
        'upgradednetherite:feather_essence',
        'upgradednetherite:corrupt_essence',
        'upgradednetherite:echo_essence',
        'upgradednetherite:corrupt_upgraded_netherite_ingot',
        'upgradednetherite:corrupt_essence',
    ]);
    e.add('legendarytooltips:diamond_items', [
        'minecraft:diamond_block',
        'minecraft:diamond',
        'minecraft:diamond_sword',
        'minecraft:diamond_shovel',
        'minecraft:diamond_pickaxe',
        'minecraft:diamond_axe',
        'minecraft:diamond_hoe',
        'minecraft:diamond_helmet',
        'minecraft:diamond_chestplate',
        'minecraft:diamond_leggings',
        'minecraft:diamond_boots',
        'minecraft:diamond_horse_armor',
        'easypaxellite:diamond_paxel',
        'xtraarrows:diamond_arrow',
        'xtraarrows:diamond_explosive_arrow',
        'xtraarrows:diamond_lightning_arrow',
        'xtraarrows:diamond_torch_arrow',
        'xtraarrows:diamond_slime_arrow',
        'xtraarrows:diamond_ender_arrow',
        'xtraarrows:diamond_tracking_arrow',
        'xtraarrows:diamond_vexing_arrow',
        'xtraarrows:diamond_soul_torch_arrow',
        'xtraarrows:diamond_redstone_torch_arrow',
        'xtraarrows:diamond_atlantean_arrow',
        'xtraarrows:diamond_arrowhead',
        'chunkloaders:ultimate_chunk_loader',
        'constructionwand:diamond_wand',
        'mob_catcher:diamond_mob_catcher',
        'stalwart_dungeons:diamond_hammer',
    ]);
    e.add('legendarytooltips:netherite_items', [
        'minecraft:netherite_block',
        'minecraft:netherite_ingot',
        'minecraft:netherite_sword',
        'minecraft:netherite_shovel',
        'minecraft:netherite_pickaxe',
        'minecraft:netherite_axe',
        'minecraft:netherite_hoe',
        'minecraft:netherite_helmet',
        'minecraft:netherite_chestplate',
        'minecraft:netherite_leggings',
        'minecraft:netherite_boots',
        'davespotioneering:netherite_gauntlet',
        'easypaxellite:netherite_paxel',
        'easypaxellite:netherite_paxel_ingot',
        'upgradednetherite:netherite_bow',
        'upgradednetherite:netherite_crossbow',
        'upgradednetherite:netherite_shield',
        'upgradednetherite:netherite_horse_armor',
        'xtraarrows:netherite_arrow',
        'xtraarrows:netherite_explosive_arrow',
        'xtraarrows:netherite_lightning_arrow',
        'xtraarrows:netherite_torch_arrow',
        'xtraarrows:netherite_slime_arrow',
        'xtraarrows:netherite_ender_arrow',
        'xtraarrows:netherite_tracking_arrow',
        'xtraarrows:netherite_vexing_arrow',
        'xtraarrows:netherite_soul_torch_arrow',
        'xtraarrows:netherite_redstone_torch_arrow',
        'xtraarrows:netherite_atlantean_arrow',
        'xtraarrows:netherite_arrowhead',
        'constructionwand:infinity_wand',
        'mob_catcher:netherite_mob_catcher',
        'stalwart_dungeons:netherite_hammer',
    ]);
    e.add('legendarytooltips:gold_items', [
        'minecraft:raw_gold_block',
        'minecraft:gold_block',
        'minecraft:raw_gold',
        'minecraft:gold_ingot',
        'minecraft:golden_sword',
        'minecraft:golden_shovel',
        'minecraft:golden_pickaxe',
        'minecraft:golden_axe',
        'minecraft:golden_hoe',
        'minecraft:golden_helmet',
        'minecraft:golden_chestplate',
        'minecraft:golden_leggings',
        'minecraft:golden_boots',
        'minecraft:golden_apple',
        'minecraft:golden_carrot',
        'minecraft:golden_horse_armor',
        'bossominium:golden_dagger',
        'bossominium:angelic_golden_sword',
        'easypaxellite:golden_paxel',
        'minecolonies:golden_bread',
        'xtraarrows:golden_arrow',
        'xtraarrows:golden_explosive_arrow',
        'xtraarrows:golden_lightning_arrow',
        'xtraarrows:golden_torch_arrow',
        'xtraarrows:golden_slime_arrow',
        'xtraarrows:golden_ender_arrow',
        'xtraarrows:golden_tracking_arrow',
        'xtraarrows:golden_vexing_arrow',
        'xtraarrows:golden_soul_torch_arrow',
        'xtraarrows:golden_redstone_torch_arrow',
        'xtraarrows:golden_atlantean_arrow',
        'xtraarrows:golden_arrowhead',
        'chunkloaders:ultimate_chunk_loader',
        'constructionwand:core_angel',
        'constructionwand:core_destruction',
        'stalwart_dungeons:golden_hammer',
    ]);
    e.add('legendarytooltips:amethyst', [
        'oresabovediamonds:amethyst',
        'oresabovediamonds:amethyst_sword',
        'oresabovediamonds:amethyst_pickaxe',
        'oresabovediamonds:amethyst_shovel',
        'oresabovediamonds:amethyst_axe',
        'oresabovediamonds:amethyst_hoe',
        'oresabovediamonds:amethyst_helmet',
        'oresabovediamonds:amethyst_chestplate',
        'oresabovediamonds:amethyst_leggings',
        'oresabovediamonds:amethyst_boots',
        'oresabovediamonds:amethyst_block',
        'oresabovediamonds:amethyst_ore',
        'oresabovediamonds:deepslate_amethyst_ore',
        'oresabovediamonds:nether_amethyst_ore',
    ]);
    e.add('legendarytooltips:black_opal', [
        'oresabovediamonds:black_opal',
        'oresabovediamonds:black_opal_sword',
        'oresabovediamonds:black_opal_pickaxe',
        'oresabovediamonds:black_opal_shovel',
        'oresabovediamonds:black_opal_axe',
        'oresabovediamonds:black_opal_hoe',
        'oresabovediamonds:black_opal_helmet',
        'oresabovediamonds:black_opal_chestplate',
        'oresabovediamonds:black_opal_leggings',
        'oresabovediamonds:black_opal_boots',
        'oresabovediamonds:black_opal_ore',
        'oresabovediamonds:deepslate_black_opal_ore',
        'oresabovediamonds:nether_black_opal_ore',
        'oresabovediamonds:end_black_opal_ore',
        'oresabovediamonds:black_opal_block',
    ]);
    e.add('legendarytooltips:netherite_black_opal', [
        'oresabovediamonds:netherite_opal_sword',
        'oresabovediamonds:netherite_opal_pickaxe',
        'oresabovediamonds:netherite_opal_shovel',
        'oresabovediamonds:netherite_opal_axe',
        'oresabovediamonds:netherite_opal_hoe',
        'oresabovediamonds:netherite_opal_helmet',
        'oresabovediamonds:netherite_opal_chestplate',
        'oresabovediamonds:netherite_opal_leggings',
        'oresabovediamonds:netherite_opal_boots',
    ]);
    e.add('legendarytooltips:stellium_items', [
        'phantasm:stellium_ingot',
        'phantasm:stellium_block',
        'phantasm:stellium_sword',
        'phantasm:stellium_pickaxe',
        'phantasm:stellium_axe',
        'phantasm:stellium_shovel',
        'phantasm:stellium_hoe',
        'phantasm:stellium_helmet',
        'phantasm:stellium_chestplate',
        'phantasm:stellium_leggings',
        'phantasm:stellium_boots',
    ]);
    e.add('legendarytooltips:flourish_food', [
        'minecraft:enchanted_golden_apple'
    ]);
    e.add('legendarytooltips:ender_items', [
        'minecraft:end_crystal',
        'minecraft:dragon_head'
    ]);
    e.add('legendarytooltips:boss_items', [
        'bossominium:eye_of_the_badlands',
        'bossominium:ritual_prism',
        'bossominium:golden_shard',
        'bossominium:all_seeing_crystal',
        'bossominium:the_golden_eye',
        'bossominium:hells_fur',
        'bossominium:forest_core',
        'bossominium:soul_eye',
        'bossominium:mossy_stone_tablet',
        'bossominium:bone_air_rune',
        'bossominium:skelenado_chest_chestplate',
        'bossominium:village_ectoplasm',
        'bossominium:dragon_essence',
        'minecraft:nether_star'
    ]);
    e.add('legendarytooltips:divinity', [
        'piglin_expansion:piglin_divinity_gem',
        'piglin_expansion:divinity_netherite_ingot',
        'piglin_expansion:piglin_divinity_essence',
        'piglin_expansion:piglin_divinity_staff',
    ]);

    //fixing project vibrant journey tags
    e.remove('minecraft:oak_logs', [
        'projectvibrantjourneys:birch_hollow_log',
        'projectvibrantjourneys:jungle_hollow_log',
        'projectvibrantjourneys:acacia_hollow_log',
        'projectvibrantjourneys:dark_oak_hollow_log',
    ]);
    e.remove('minecraft:spruce_logs', [
        'projectvibrantjourneys:oak_hollow_log',
        'projectvibrantjourneys:birch_hollow_log',
        'projectvibrantjourneys:jungle_hollow_log',
        'projectvibrantjourneys:acacia_hollow_log',
        'projectvibrantjourneys:dark_oak_hollow_log',
    ]);
    e.remove('minecraft:acacia_logs', [
        'projectvibrantjourneys:oak_hollow_log',
        'projectvibrantjourneys:birch_hollow_log',
        'projectvibrantjourneys:spruce_hollow_log',
        'projectvibrantjourneys:jungle_hollow_log',
        'projectvibrantjourneys:dark_oak_hollow_log',
    ]);
    e.remove('minecraft:birch_logs', [
        'projectvibrantjourneys:oak_hollow_log',
        'projectvibrantjourneys:spruce_hollow_log',
        'projectvibrantjourneys:jungle_hollow_log',
        'projectvibrantjourneys:acacia_hollow_log',
        'projectvibrantjourneys:dark_oak_hollow_log',
    ]);
    e.remove('minecraft:dark_oak_logs', [
        'projectvibrantjourneys:oak_hollow_log',
        'projectvibrantjourneys:birch_hollow_log',
        'projectvibrantjourneys:spruce_hollow_log',
        'projectvibrantjourneys:jungle_hollow_log',
        'projectvibrantjourneys:acacia_hollow_log',
    ]);
    e.remove('minecraft:jungle_logs', [
        'projectvibrantjourneys:oak_hollow_log',
        'projectvibrantjourneys:birch_hollow_log',
        'projectvibrantjourneys:spruce_hollow_log',
        'projectvibrantjourneys:acacia_hollow_log',
        'projectvibrantjourneys:dark_oak_hollow_log',
    ]);
});