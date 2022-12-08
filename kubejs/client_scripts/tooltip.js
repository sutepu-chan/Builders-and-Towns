ItemEvents.tooltip(e => {
    let colors = ['white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray', 'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black']

    //===== tooltip function=====//
    let formattedTooltip = (colour, item, tooltip) => {
        e.add(item, '');
        let line = '';
        tooltip.split(' ').forEach(word => {
            line.length == 0 ? line = word : line += ` ${word}`;
            if (line.length > 40) {
                e.add(item, Text.of(line)[colour]());
                line = '';
            };
        });
        if (line.length > 0) e.add(item, Text.of(line)[colour]());
        e.add(item, '');
    };
    let darkBlueTooltip = (item, tooltip) => formattedTooltip('darkBlue', item, tooltip);
    let darkGreenTooltip = (item, tooltip) => formattedTooltip('darkGreen', item, tooltip);
    let darkAquaTooltip = (item, tooltip) => formattedTooltip('darkAqua', item, tooltip);
    let darkRedTooltip = (item, tooltip) => formattedTooltip('darkRed', item, tooltip);
    let darkPurpleTooltip = (item, tooltip) => formattedTooltip('darkPurple', item, tooltip);
    let goldTooltip = (item, tooltip) => formattedTooltip('gold', item, tooltip);
    let grayTooltip = (item, tooltip) => formattedTooltip('gray', item, tooltip);
    let darkGrayTooltip = (item, tooltip) => formattedTooltip('darkGray', item, tooltip);
    let blueTooltip = (item, tooltip) => formattedTooltip('blue', item, tooltip);
    let greenTooltip = (item, tooltip) => formattedTooltip('green', item, tooltip);
    let aquaTooltip = (item, tooltip) => formattedTooltip('aqua', item, tooltip);
    let redTooltip = (item, tooltip) => formattedTooltip('red', item, tooltip);
    let lightPurpleTooltip = (item, tooltip) => formattedTooltip('lightPurple', item, tooltip);
    let yellowTooltip = (item, tooltip) => formattedTooltip('yellow', item, tooltip);
    let whiteTooltip = (item, tooltip) => formattedTooltip('white', item, tooltip);
    //===== creative =====//
    let creative = [
        'mtr:resource_pack_creator',
        'mtr:bridge_creator_3',
        'mtr:bridge_creator_5',
        'mtr:bridge_creator_7',
        'mtr:bridge_creator_9',
        'mtr:tunnel_creator_4_3',
        'mtr:tunnel_creator_4_5',
        'mtr:tunnel_creator_4_7',
        'mtr:tunnel_creator_4_9',
        'mtr:tunnel_creator_5_3',
        'mtr:tunnel_creator_5_5',
        'mtr:tunnel_creator_5_7',
        'mtr:tunnel_creator_5_9',
        'mtr:tunnel_creator_6_3',
        'mtr:tunnel_creator_6_5',
        'mtr:tunnel_creator_6_7',
        'mtr:tunnel_creator_6_9',
        'mtr:tunnel_wall_creator_4_3',
        'mtr:tunnel_wall_creator_4_5',
        'mtr:tunnel_wall_creator_4_7',
        'mtr:tunnel_wall_creator_4_9',
        'mtr:tunnel_wall_creator_5_3',
        'mtr:tunnel_wall_creator_5_5',
        'mtr:tunnel_wall_creator_5_7',
        'mtr:tunnel_wall_creator_5_9',
        'mtr:tunnel_wall_creator_6_3',
        'mtr:tunnel_wall_creator_6_5',
        'mtr:tunnel_wall_creator_6_7',
        'mtr:tunnel_wall_creator_6_9',
        'mtr:cable_car_node_station',
    ];
    creative.forEach(items => {
        grayTooltip(items, 'Creative, unobtainable!');
    });

    //===== construction wand =====//
    aquaTooltip('constructionwand:stone_wand', `Builder's wand Renewal! Shift-scroll to set mode.`);
    aquaTooltip('constructionwand:iron_wand', `Builder's wand Renewal! Shift-scroll to set mode.`);
    aquaTooltip('constructionwand:diamond_wand', `Builder's wand Renewal! Shift-scroll to set mode.`);
    aquaTooltip('constructionwand:infinity_wand', `Builder's wand Renewal! Shift-scroll to set mode.`);

    //===== car =====//
    grayTooltip('car:oilmill', 'Convert Canola in Oil');
    grayTooltip('car:blastfurnace', 'Convert Wood Logs into Methanol');
    grayTooltip('car:generator', 'Generate FE using BioDiesel');
    grayTooltip('car:dynamo', 'Generate FE by rotating crank on top');
    grayTooltip('car:crank', 'Use in Dynamo in FE generation');
    grayTooltip('car:tank', 'Store 16,000mB fluid. Retain fluid when broken.');
    grayTooltip('car:cable', 'Energy Pipe');
    grayTooltip('car:methanol_bucket', 'Convert Oil and Methanol into Canola Methanol Mix');
    grayTooltip('car:split_tank', 'Convert Canola Methanol Mix into Glycerin and Bio Diesel');
    grayTooltip('car:glycerin_bucket', 'Completely useless');
    grayTooltip('car:gas_station', 'Fill nearby vehicles using Bio Diesel');
})