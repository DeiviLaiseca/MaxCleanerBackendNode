const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    product: String,
    mark: String,
    price: String,
    details: String,
    characters: String
}, { versionKey: false });

module.exports = mongoose.model('Product', productSchema);