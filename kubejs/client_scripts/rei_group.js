REIEvents.group(e => {
    //groupItemsByTag(id, name, tag)
    /*
    groupItemsIf(id, name, item => {
        condition
    })
    */
    //groupFluidsByTag(id, name, fluid)
    //===== color variants =====//
    e.groupItems('kubejs:minecraft/wools', 'Vanilla Wools', [
        /minecraft:.+_wool/
    ]);
    e.groupItems('kubejs:minecraft/beds', 'Beds', [
        /minecraft:.+_bed/
    ]);
    e.groupItems('kubejs:minecraft/banners', 'Banners', [
        /minecraft:.+_banner/
    ]);
    e.groupItems('kubejs:minecraft/concrete_powders', 'Concrete Powderes', [
        /minecraft:.+_concrete_powder/
    ]);
    e.groupItems('kubejs:minecraft/concretes', 'Concretes', [
        /minecraft:.+_concrete/
    ]);
    e.groupItems('kubejs:minecraft/carpets', 'Carpets', [
        /minecraft:.+_carpet/
    ]);
    e.groupItems('kubejs:minecraft/stained_glass', 'Stained Glass', [
        /minecraft:.+_stained_glass/
    ]);
    e.groupItems('kubejs:minecraft/stained_glass_panes', 'Stained Glass Plane', [
        /minecraft:.+_stained_glass_pane/
    ]);
    //===== wood variants =====//
    e.groupItems('kubejs:miencraft/signs', 'Signs', [
        /minecraft:.+_sign/
    ]);
    //===== ignoreNBT =====//
    const useNbt = ["potion", "splash_potion", "tipped_arrow", "lingering_potion"];

    useNbt.forEach(id => {
        const item = Item.of(id);
        const { namespace, path } = Utils.id(item.id);
        e.groupSameItem(`kubejs:rei_groups/${namespace}/${path}`, item.getName(), item);
    });
});