REIEvents.hide('item', e => {
    let libItems = [
        '@theoneprobe',
        '@structure_gel',
        '@itemfilters',
        '@ftbquests',
    ]
    libItems.forEach(libItem => {
        e.hide(libItem);
    });

    let frostedFriendItems = [
        'frosted_friends:snow_chest_1',
        'frosted_friends:snow_chest_2',
        'frosted_friends:snow_head_basic_1',
        'frosted_friends:snow_head_classic_1',
        'frosted_friends:snow_head_golem',
        'frosted_friends:snow_head_christmas',
        'frosted_friends:snow_head_top_hat',
        'frosted_friends:frosted_friends_logo',
        'frosted_friends:snow_base',
        'frosted_friends:snow_head_basic_2',
        'frosted_friends:snow_head_basic_3',
        'frosted_friends:snow_head_classic_2',
        'frosted_friends:snow_head_classic_3',
        'frosted_friends:snow_head_golem_2',
        'frosted_friends:snow_head_golem_3',
        'frosted_friends:snow_head_christmas_2',
        'frosted_friends:snow_head_christmas_3',
        'frosted_friends:snow_head_top_hat_2',
        'frosted_friends:snow_head_top_hat_3',
        'frosted_friends:snow_head_1',
        'frosted_friends:snow_base_1',
        'frosted_friends:snow_base_2',
        'frosted_friends:snow_head_basic_helmet',
        'frosted_friends:snow_head_classic_helmet',
        'frosted_friends:snow_head_golem_1_helmet',
        'frosted_friends:snow_head_christmas_1_helmet',
        'frosted_friends:snow_head_top_hat_1_helmet',
        'frosted_friends:snow_body_without_arm_chestplate',
        'frosted_friends:snow_body_chestplate',
        'frosted_friends:snowman_projectile',
    ];
    frostedFriendItems.forEach(frostedFriendItem => {
        e.hide(frostedFriendItem);
    });
})