//priority: 99
ServerEvents.tags('item', e => {
    e.add('minecraft:logs_unstripped', /^.+:(?!stripped_).+_log$/);
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
});