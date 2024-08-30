// const mongoose = require('mongoose');
// const express = require('express');
// const bodyParse = require('body-parser');

// const app = express();

// mongoose.connect('mongodb://127.0.0.1:27017/MaxCleanerDB')
//     .then(() => console.log('¡Conectado!'))
//     .catch((error) => console.log('Error en la conexión: ' + error))

// const productSchema = mongoose.Schema({
//     id: String,
//     product: String,
//     mark: String,
//     price: String,
//     details: String,
//     characters: String
// }, { versionKey: false })

// const ProductModel = mongoose.model('products', productSchema)

// //Mostrar
// const showProducts = async() => {
//     const products = await ProductModel.find()
//     console.log(products);
// }

// //showProducts();

// //Crear
// const productCreator = async(product) => {
//     const newProduct = new ProductModel(product);
//     const result = await newProduct.save();
//     console.log(result);
// }

// //productCreator();

// //Actulizar
// const productUpdate = async(id) => {
//     const updateProduct = await ProductModel.updateOne({ id: id }, {
//         $set: {
//             product: 'holamundo',
//         }
//     })
// }

// //productUpdate('hola')

// //Borrar
// const productDelete = async(id) => {
//     const deleteProduct = await ProductModel.deleteOne({ _id: id })
//     console.log(deleteProduct);
// }

// //productDelete('66c54fde0a6b5f5fda2a1267')

// app.get('/', (req, res) => {
//     res.json({ response: 'success' });
// });

// app.listen(3000, () => {
//     console.log('Servidor conectado');
// });