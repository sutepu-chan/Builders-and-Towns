//priority: 100
let colors = ['white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray', 'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black'];

let modifyShaped = (e, result, count, pattern, ingredients) => {
    e.remove({ output: result, type: 'minecraft:crafting_shaped' });
    e.shaped(Item.of(result, count), pattern, ingredients).id(`kubejs:shaped/${result.replace(':', '/')}`);
};
let modifyShapeless = (e, result, count, ingredients) => {
    e.remove({ output: result, type: 'minecraft:crafting_shapeless' });
    e.shapeless(Item.of(result, count), ingredients).id(`kubejs:shapeless/${result.replace(':', '/')}`);
};
let modifySmelt = (e, result, ingredients) => {
    e.remove({ output: result, type: 'minecraft:smelting' });
    e.smelting(result, ingredients).id(`kubejs:smelting/${result.replace(':', '/')}`);
};
let removeRecipeByID = (e, recipes) => {
    recipes.forEach(recipe => {
        e.remove({ id: recipe });
    });
};
let removeRecipeByOutput = (e, recipes) => {
    recipes.forEach(recipe => {
        if (Array.isArray(recipe)) {
            e.remove({ type: recipe[1], output: recipe[0] });
        } else {
            e.remove({ output: recipe });
        };
    });
};
let removeRecipeByInput = (e, recipes) => {
    recipes.forEach(recipe => {
        if (Array.isArray(recipe)) {
            e.remove({ type: recipe[1], input: recipe[0] });
        } else {
            e.remove({ input: recipe });
        };
    });
};