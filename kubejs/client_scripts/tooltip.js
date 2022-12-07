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

    ];
    creative.forEach(items => {
        grayTooltip(items, 'Creative, unobtainable!');
    });

    //===== construction wand tooltip =====//
    aquaTooltip('constructionwand:stone_wand', `Builder's wand Renewal! Shift-scroll to set mode.`);
    aquaTooltip('constructionwand:iron_wand', `Builder's wand Renewal! Shift-scroll to set mode.`);
    aquaTooltip('constructionwand:diamond_wand', `Builder's wand Renewal! Shift-scroll to set mode.`);
    aquaTooltip('constructionwand:infinity_wand', `Builder's wand Renewal! Shift-scroll to set mode.`);

})