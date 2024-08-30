/* generamos un ejemplo cuando le soliciten

algo al servidor por el método GET **/



const express = require('express');

const router = express.Router();

const productCtrl = require('../controllers/controllers');

router.get('/', productCtrl.getProducts); // Rutas más limpias (obtener Products)

router.post('/', productCtrl.createProduct); //guardar

router.get('/:id', productCtrl.getProductById); // obtiene un único producto');

router.patch('/:id', productCtrl.updateProduct); //Actualizar datos (uno a la vez')

router.delete('/:id', productCtrl.deleteProduct);


module.exports = router;