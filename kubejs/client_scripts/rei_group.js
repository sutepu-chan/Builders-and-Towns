REIEvents.groupEntries(e => {
    let colors = ['white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray', 'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black'];
    //===== spawn eggs =====//
    e.groupItems('kubejs:rei_groups/spawn_eggs', 'Spawn Eggs', [
        /spawn_egg/,
        'barbarianegg',
        'barbarcheregg',
        'barbchiefegg',
        'pirateegg',
        'piratearcheregg',
        'piratecaptainegg',
        'mummyegg',
        'mummyarcheregg',
        'pharaoegg',
        'shieldmaidenegg',
        'norsemenarcheregg',
        'norsemenchiefegg',
        'amazonegg',
        'amazonspearmanegg',
        'amazonchiefegg',
        'mercegg',
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
    groupItems('Sharestones', 'waystones:white_sharestone');

    e.groupItemsByTag('kubejs:rei_groups/glazed_terracotta', 'Terracotta', 'minecolonies:glazed_terracotta');

    //===== wood variants =====//
    let woodTypes = [
        'oak',
        'spruce',
        'birch',
        'jungle',
        'acacia',
        'dark_oak',
        'mangrove',
        'crimson',
        'warped',
    ];
    //trapdoors
    let trapdoorTypes = [
        'barn',
        'barred',
        'beach',
        'cottage',
        'four_panel',
        'glass',
        'mystic',
        'paper',
        'tropical',
        'swamp',
        'bamboo',
    ];
    woodTypes.forEach(woodType => {
        let temp = [];
        trapdoorTypes.forEach(trapdoorType => {
            temp.push(`mcwtrpdoors:${woodType}_${trapdoorType}_trapdoor`);
        });
        e.groupItems(
            `kubejs:rei_groups/mcwtrpdoors/${woodType}`,
            'Macaw\'s ' + woodType.charAt(0).toUpperCase() + woodType.slice(1) + ' Trapdoors',
            temp
        );
        if (woodType === 'oak') {
            trapdoorTypes.push('classic');
        }
    });
    //fence
    let fenceTypes = [
        'picket_fence',
        'stockade_fence',
        'horse_fence',
        'wired_fence',
        'highley_gate',
        'pyramid_gate',
    ];
    woodTypes.forEach(woodType => {
        let temp = [];
        fenceTypes.forEach(fenceType => {
            temp.push(`mcwfences:${woodType}_${fenceType}`);
        });
        e.groupItems(
            `kubejs:rei_groups/mcwfences/${woodType}`,
            'Macaw\'s ' + woodType.charAt(0).toUpperCase() + woodType.slice(1) + ' Fence',
            temp
        );
    });
    //furniture
    let furnitureTypes = [
        'wardrobe',
        'modern_wardrobe',
        'double_wardrobe',
        'bookshelf',
        'bookshelf_cupboard',
        'drawer',
        'double_drawer',
        'bookshelf_drawer',
        'lower_bookshelf_drawer',
        'large_drawer',
        'lower_triple_drawer',
        'triple_drawer',
        'desk',
        'covered_desk',
        'modern_desk',
        'table',
        'end_table',
        'coffee_table',
        'glass_table',
        'chair',
        'modern_chair',
        'striped_chair',
        'stool_chair',
        'counter',
        'drawer_counter',
        'double_drawer_counter',
        'cupboard_counter',
    ];
    woodTypes.forEach(woodType => {
        let temp = [];
        furnitureTypes.forEach(furnitureType => {
            temp.push(`mcwfurnitures:${woodType}_${furnitureType}`);
            temp.push(`mcwfurnitures:stripped_${woodType}_${furnitureType}`);
        });
        e.groupItems(
            `kubejs:rei_groups/mcwfurnitures/${woodType}`,
            'Macaw\'s ' + woodType.charAt(0).toUpperCase() + woodType.slice(1) + ' Furnitures',
            temp
        );
    });

    //===== nbt items =====//
    const useNbt = [
        'doggytalents:dog_bed'
    ];
    useNbt.forEach(id => {
        const item = Item.of(id);
        const { namespace, path } = Utils.id(item.id);
        e.groupSameItem(`kubejs:rei_groups/${namespace}/${path}`, item.name, item);
    });

    //===== additional lights =====//
    let lightTypes = [
        ['al_torch', 'Altorch'],
        ['standing_torch_s', 'Short Standing Torch'],
        ['standing_torch_l', 'Long Standing Torch'],
        ['fire_pit_s', 'Short Fire Pit'],
        ['fire_pit_l', 'Long Fire Pit'],
    ];
    let materialTypes = [
        'cobblestone',
        'mossy_cobblestone',
        'stone',
        'stone_bricks',
        'mossy_stone_bricks',
        'smooth_stone',
        'sandstone',
        'end_stone',
        'end_stone_bricks',
        'nether_bricks',
        'red_nether_bricks',
        'blackstone',
        'glass',
        'iron_block',
        'gold_block',
        'diamond_block',
        'packed_ice',
        'pink_wool',
        'magenta_wool',
    ];
    lightTypes.forEach(lightType => {
        let temp = [];
        materialTypes.forEach(materialType => {
            temp.push(`additonal_lights:${lightType[1]}_${materialType}`);
        });
        e.groupItems(`kubejs:rei_groups/additonal_lights/${lightType[1]}`, lightType[2], temp);
    });
})