import mongoose from "mongoose"
import express from "express"
import Item from "./models/shop.models.js"
import { getItems, getItemsId, postItems, putItems, deleteItems } from "./controller/shop.controller.js"

//CREATE EXPRESS SERVER
const server = express()

//DATABASE
mongoose.connect("mongodb://localhost:27017/christmas-shop")

//MIDDLEWARE
server.use(express.json())

//ROUTES
server.get("/shopList", getItems)

//ROUTE-GET
server.get("/shopList/:shopListId", getItemsId)

//ROUTE-POST
server.post("/shopList", postItems)

//ROUTE-PUT
server.put("/shopList/:shopListId", putItems)

//ROUTE-DELETE
server.delete("/shopList/:shopListId", deleteItems)

//STARTING SERVER
server.listen(3000, () => console.log("Server is running"))
