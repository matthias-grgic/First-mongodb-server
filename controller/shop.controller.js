import Item from "../models/shop.models.js"

const getItems = async (req, res) => {
    //Sammlung der Items
    const items = await Item.find()
    res.json(items)
}

const getItemsId = async (req, res) => {
    const itemId = req.params.itemId
    const foundItem = await Item.findById(itemId)
    res.json(foundItem)
}

const postItems = async (req, res) => {
    const shoppingList = new Item({
        name: req.body.name,
        type: req.body.type,
        price: req.body.price,
        amount: req.body.amount,
    })
    try {
        const result = await shoppingList.save()
        console.log(result)
        res.json("done")
    } catch (error) {
        res.json(error)
    }
}

const putItems = async (req, res) => {
    const itemId = req.params.itemId
    const Item = req.body

    const result = await Item.findByIdAndUpdate(itemId, Item, {
        returnDocument: "after",
    })
    res.json(result)
}

const deleteItems = async (req, res) => {
    const itemId = req.params.itemId
    try {
        const result = await Item.findByIdAndDelete(dinoId)
        if (result) {
            res.json({ status: "Successfully deleted." })
        } else {
            res.json({ status: "Could not find id / Item." })
        }
    } catch (error) {
        res.json({ status: "Check if something is wrong." })
    }
}

export { getItems, getItemsId, postItems, putItems, deleteItems }
