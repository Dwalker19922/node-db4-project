const express = require("express")
const recipes = express()
const getRecipeById=require("./recipes-model")
recipes.get("/:recipe_id",(req,res,next)=>{
getRecipeById(req.params.recipe_id)
.then((recipies)=>{
    res.json(recipies)
})
.catch((err)=>{
res.status(500).json({message:err.message})
    })

})
module.exports=recipes