ServerEvents.recipes(e => {
    //fixing recipe conflicts
    e.remove({id: 'nourished_nether:basalt_bricks_recipe'});
    e.shaped('8x nourished_nether:basalt_bricks', ['BBB', 'B B', 'BBB'], {
        B: 'piglin_expansion:basalt_quadratiles'
    });
    
})