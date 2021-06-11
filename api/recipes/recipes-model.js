const db = require("../../data/dbConfig")

const tranformData = (data) => {

    const recipe = data[0]
    const { recipe_id, recipe_name, created_at } = recipe


    const pullIngredients = data.map(item => {
        const { ingredient_id, ingredient_name, quantity } = item
        const refined = ingredient_id === null ? null : {
            "ingredient_id": ingredient_id,
            "ingredient_name": ingredient_name,
            "quantity": quantity,
        }
        return refined
    })
    const filteredIngredients = pullIngredients.filter(item => { return item !== null })
    const pullSteps = data.map(item => {
        const { step_id, step_number, step_instruction } = item
        const refined = step_id === null ? null : {
            "step_id": step_id,
            "step_number": step_number,
            "step_instruction": step_instruction,
            "ingredients": [...filteredIngredients]
        }
        return refined
    })
    const filteredSteps = pullSteps.filter(item => { return item !== null })
    const objectOne = {
        "recipe_id": recipe_id,
        "recipe_name": recipe_name,
        "created_at": created_at,
        "instructions": [...filteredSteps]
    }
    return objectOne
}

const getRecipeById = async (recipe_id) => {
    const rows = db("recipes as r")
        .leftJoin("steps as s", "r.recipe_id", "s.recipe_id")
        .leftJoin("step_ingredients as si", "s.step_id", "si.step_id")
        .leftJoin("ingredients as i", "si.ingredient_id", "i.ingredient_id")
        .select("r.recipe_id", "recipe_name", "created_at", "s.step_id", "step_number", "step_instruction", "i.ingredient_id", "ingredient_name", "quantity")
        .where("r.recipe_id", recipe_id)
        const result = await rows
    const data= tranformData(result)
    return data
}
    

module.exports = getRecipeById
