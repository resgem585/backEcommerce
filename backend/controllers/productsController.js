const asyncHandler = require('express-async-handler')

const Product = require('../models/productsModel')

const getProduct = asyncHandler(async (req, res) => {
    const product = await Product.find()

    res.status(200).json(product)
})

const setProduct = asyncHandler(async (req, res) => {

    if (req.user.role.toLowerCase() !=="admin" ) {
        res.status(401)
        throw new Error('Acceso no Autorizado')
    }
    if (!req.body.product_name || !req.body.description || !req.body.price || !req.body.category || !req.body.brand || !req.body.sku) {

        res.status(400)
        throw new Error('Producto no registrado, verifica tus datos')
    }
/*     if (product.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('Acceso no Autorizado')
    }
 */

    const product = await Product.create({
        product_name: req.body.product_name,
        description: req.body.description,
        price: req.body.price,
        category:  req.body.category,
        brand: req.body.brand,
        sku: req.body.sku,
    })

    res.status(201).json(product)
})

const updateProduct = asyncHandler(async (req, res) => {

    if (req.user.role.toLowerCase() !=="admin" ) {
        res.status(401)
        throw new Error('Acceso no Autorizado')
    }

    const product = await Product.findById(req.params.id)

    if (!product) {
        res.status(400)
        throw new Error('Producto no encontrado')
    }
 /*     if (product.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('Acceso no Autorizado')
    }
 */
    const updateProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).json(updateProduct)
})

const deleteProduct = asyncHandler(async (req, res) => {

    if (req.user.role.toLowerCase() !=="admin" ) {
        res.status(401)
        throw new Error('Acceso no Autorizado')
    }

    const product = await Product.findById(req.params.id)

    if (!product) {
        res.status(400)
        throw new Error('Producto no encontrado')
    }
        //verificamos que el user de la tarea sea igual al user del token
  /*   if (product.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('Acceso no Autorizado')
    } */
    //const deletedTarea = await Tarea.findByIdAndDelete(req.params.id)
    await product.remove()

    res.status(200).json(req.params.id)
})

module.exports = {
    getProduct,
    setProduct,
    updateProduct,
    deleteProduct
}