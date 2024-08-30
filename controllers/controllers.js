const Product = require('../models/products');

const productCtrl = {};

/**

* DEFINO LOS MÉTODOS */

//Obtener todos los product

productCtrl.getProducts = async(req, res) => {

    const product = await Product.find();

    res.json(product);

}

// Crear product

productCtrl.createProduct = async(req, res) => {

    const newProduct = new Product(req.body);

    await newProduct.save();

    res.json(newProduct);

}

//Conseguir un único Product

productCtrl.getProductById = async(req, res) => {

    const productUnic = await Product.findById(req.params.id);

    res.json(productUnic);

}

//Actualizar Product

productCtrl.updateProduct = async(req, res) => {

    const { id } = req.params;

    const productEdit = {

        mark: req.body.mark,
        product: req.body.product,
        details: req.body.details,
        price: req.body.price,
        characters: req.body.characters

    };

    await Product.findByIdAndUpdate(id, { $set: productEdit }, { new: true });

    res.json(productEdit);

}

// Eliminar Product

productCtrl.deleteProduct = async(req, res) => {

    await Product.findByIdAndDelete(req.params.id);

    res.json({ status: 'Product Eliminado' });

}

//exporto el módulo

module.exports = productCtrl;