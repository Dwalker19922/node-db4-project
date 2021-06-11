const express = require('express')
const recipesRouter = require("./recipes/recipes-router")
server = express()
server.use(express.json())
server.use("/api/recipes",recipesRouter)
server.get("/",async(req, res) => {
try {
    res.json({success: true})
} catch (error) {
    res.json({error: error.message})
}
})
module.exports=server