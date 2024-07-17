const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
	name: String,
	title: String,
    image:String,
    link:String,
})

module.exports = mongoose.model("Product", productSchema)