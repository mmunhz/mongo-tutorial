const mongoose = require('mongoose')
const { Schema } = mongoose

const Product = mongoose.model(
    'Product',
    new Schema({
        name: { type: String, require: true },
        image: { type: String, required: false },
        price: { type: Number, require: true },
        description: { type: String, required: true },
    })
)

module.exports = Product
