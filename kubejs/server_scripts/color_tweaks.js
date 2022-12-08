ServerEvents.recipes(e => {
    let colors = ['white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray', 'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black'];
    //===== function =====//
    let shapedSurround = (colorItem, dye, array) => {
        e.shaped(Item.of(colorItem, 8), ['CCC', 'CDC', 'CCC'], {
            D: `#forge:dyes/${dye}`,
            C: array
        }).id(`kubejs:${colorItem.replace(':', '/')}_from_dye`);
    };
    //===== recipe removal =====//
    colors.forEach(color => {
        if (color !== 'white') {
            e.remove({ id: `minecraft:${color}_wool` });
            e.remove({ id: `minecraft:${color}_bed_from_white_bed` });
            e.remove({ id: `minecraft:${color}_carpet_from_white_carpet` });
        };
    });
    //===== interconversion =====//
    colors.forEach(a => {
        //array initialise
        let wool = [];
        let bed = [];
        let terracotta = [];
        let glass = [];
        let glass_pane = [];
        let concrete = [];
        let concrete_powder = [];
        let carpet = [];
        let shulker_box = [];
        let banner = [];
        let candle = [];
        let connecting_glass = [];
        let connecting_glass_pane = [];
        let clear_glass = [];
        let clear_glass_pane = [];
        let scratched_glass = [];
        let scratched_glass_pane = [];
        let tined_glass = [];
        let brick_extra = [];
        let floating_carpet = [];
        let curtain = [];
        let sharestone = [];
        let transporter_body = [];
        let suv_body = [];
        let sport_body = [];
        let container = [];
        let tank_container = [];
        let lamp = [];
        let ceiling_light = [];
        let paper_lamp = [];
        colors.forEach(b => {
            //add specific color items into array
            if (a !== b) {
                wool.push(`minecraft:${b}_wool`);
                bed.push(`minecraft:${b}_bed`);
                terracotta.push(`minecraft:${b}_terracotta`);
                glass.push(`minecraft:${b}_stained_glass`);
                glass_pane.push(`minecraft:${b}_stained_glass_pane`);
                concrete.push(`minecraft:${b}_concrete`);
                concrete_powder.push(`minecraft:${b}_concrete_powder`);
                carpet.push(`minecraft:${b}_carpet`);
                shulker_box.push(`minecraft:${b}_shulker_box`);
                banner.push(`minecraft:${b}_banner`);
                candle.push(`minecraft:${b}_candle`);
                connecting_glass.push(`connectedglass:borderless_glass_${b}`);
                connecting_glass_pane.push(`connectedglass:borderless_glass_${b}_pane`);
                clear_glass.push(`connectedglass:clear_glass_${b}`);
                clear_glass_pane.push(`connectedglass:clear_glass_${b}_pane`);
                scratched_glass.push(`connectedglass:scratched_glass_${b}`);
                scratched_glass_pane.push(`connectedglass:scratched_glass_${b}_pane`);
                tined_glass.push(`connectedglass:tinted_borderless_glass_${b}`);
                brick_extra.push(`domum_ornamentum:${b}_brick_extra`);
                floating_carpet.push(`domum_ornamentum:${b}_floating_carpet`);
                curtain.push(`mcwwindows:${b}_curtain`);
                sharestone.push(`waystones:${b}_sharestone`);
                transporter_body.push(`car:${b}_transporter_body`);
                suv_body.push(`car:${b}_suv_body`);
                sport_body.push(`car:${b}_sport_body`);
                container.push(`car:${b}_container`);
                tank_container.push(`car:${b}_tank_container`);
                lamp.push(`mcwlights:${b}_lamp`);
                ceiling_light.push(`mcwlights:${b}_ceiling_light`);
                paper_lamp.push(`mcwlights:${b}_paper_lamp`);
            }
        })
        //add recipes using arrays
        e.shapeless(`minecraft:${a}_wool`, [`#forge:dyes/${a}`, wool]).id(`kubejs:minecraft/${a}_wool_from_dye`);
        e.shapeless(`minecraft:${a}_bed`, [`#forge:dyes/${a}`, bed]).id(`kubejs:minecraft/${a}_bed_from_dye`);
        shapedSurround(`minecraft:${a}_terracotta`, a, terracotta);
        shapedSurround(`minecraft:${a}_stained_glass`, a, glass);
        shapedSurround(`minecraft:${a}_stained_glass_pane`, a, glass_pane);
        shapedSurround(`minecraft:${a}_concrete`, a, concrete);
        shapedSurround(`minecraft:${a}_concrete_powder`, a, concrete_powder);
        shapedSurround(`minecraft:${a}_carpet`, a, carpet);
        e.shapeless(`minecraft:${a}_shulker_box`, [`#forge:dyes/${a}`, shulker_box]).id(`kubejs:minecraft/${a}_shulker_box_from_dye`);
        e.shapeless(`minecraft:${a}_banner`, [`#forge:dyes/${a}`, banner]).id(`kubejs:minecraft/${a}_banner_from_dye`);
        e.shapeless(`minecraft:${a}_candle`, [`#forge:dyes/${a}`, candle]).id(`kubejs:minecraft/${a}_candle_from_dye`);
        shapedSurround(`connectedglass:borderless_glass_${a}`, a, connecting_glass);
        shapedSurround(`connectedglass:borderless_glass_${a}_pane`, a, connecting_glass_pane);
        shapedSurround(`connectedglass:clear_glass_${a}`, a, clear_glass);
        shapedSurround(`connectedglass:clear_glass_${a}_pane`, a, clear_glass_pane);
        shapedSurround(`connectedglass:scratched_glass_${a}`, a, scratched_glass);
        shapedSurround(`connectedglass:scratched_glass_${a}_pane`, a, scratched_glass_pane);
        shapedSurround(`connectedglass:tinted_borderless_glass_${a}`, a, tined_glass);
        shapedSurround(`domum_ornamentum:${a}_brick_extra`, a, brick_extra);
        shapedSurround(`domum_ornamentum:${a}_floating_carpet`, a, floating_carpet);
        e.shapeless(`mcwwindows:${a}_curtain`, [`#forge:dyes/${a}`, curtain]).id(`kubejs:mcwwindows/${a}_curtain_from_dye`);
        e.shapeless(`waystones:${a}_sharestone`, [`#forge:dyes/${a}`, sharestone]).id(`kubejs:waystones/${a}_sharestone_from_dye`);
        e.shapeless(`car:${a}_transporter_body`, [`#forge:dyes/${a}`, transporter_body]).id(`kubejs:car/${a}_transporter_body_from_dye`);
        e.shapeless(`car:${a}_suv_body`, [`#forge:dyes/${a}`, suv_body]).id(`kubejs:car/${a}_suv_body_from_dye`);
        e.shapeless(`car:${a}_sport_body`, [`#forge:dyes/${a}`, sport_body]).id(`kubejs:car/${a}_sport_body_from_dye`);
        e.shapeless(`car:${a}_container`, [`#forge:dyes/${a}`, container]).id(`kubejs:car/${a}_container_from_dye`);
        e.shapeless(`car:${a}_tank_container`, [`#forge:dyes/${a}`, tank_container]).id(`kubejs:car/${a}_tank_container_from_dye`);
        e.shapeless(`mcwlights:${a}_lamp`, [`#forge:dyes/${a}`, lamp]).id(`kubejs:mcwlights/${a}_lamp_from_dye`);
        e.shapeless(`mcwlights:${a}_ceiling_light`, [`#forge:dyes/${a}`, ceiling_light]).id(`kubejs:mcwlights/${a}_ceiling_light_from_dye`);
        e.shapeless(`mcwlights:${a}_paper_lamp`, [`#forge:dyes/${a}`, paper_lamp]).id(`kubejs:mcwlights/${a}_paper_lamp_from_dye`);     
    });
});