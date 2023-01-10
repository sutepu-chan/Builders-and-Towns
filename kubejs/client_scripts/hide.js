REIEvents.hide('item', e => {
    let libItems = [
        '@vanilla_animations',
        '@theoneprobe',
        '@structure_gel'
    ]
    libItems.forEach(libItem => {
        e.hide(libItem);
    })
    
})