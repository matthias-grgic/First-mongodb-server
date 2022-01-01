import mongoose from "mongoose"

const itemSchema = new mongoose.Schema({
    name: String,
    type: String,
    price: Number,
    amount: Number,
})

const Item = mongoose.model("Item", itemSchema)

export default Item
