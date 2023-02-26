const asyncHandler = require('express-async-handler')

const prodPedido = require('../models/productosPedidosModel')

const getProdPedido = asyncHandler(async (req, res) => {
    const pPedido = await prodPedido.find()

    res.status(200).json(pPedido)
})

const setProdPedido = asyncHandler(async (req, res) => {

    if (req.user.role.toLowerCase() !=="admin" ) {
        res.status(401)
        throw new Error('Acceso no Autorizado')
    }
    if (!req.body.IdPedido ||!req.body.IdProducto || !req.body.cantidad || !req.body.precio || !req.body.importe) {

        res.status(400)
        throw new Error('Producto del pedido no encontrado, verifica tus datos')
    }

    const pPedido = await prodPedido.create({
        IdPedido: req.body.IdPedido,
        IdProducto: req.body.IdProducto, 
        cantidad: req.body.cantidad,
        precio: req.body.precio,
        importe: req.body.importe
    })

    res.status(201).json(pPedido)
})

const updateProdPedido = asyncHandler(async (req, res) => {

    if (req.user.role.toLowerCase() !=="admin" ) {
        res.status(401)
        throw new Error('Acceso no Autorizado')
    }

    const pPedido = await prodPedido.findById(req.params.id)

    if (!pPedido) {
        res.status(400)
        throw new Error('Producto del pedido no encontrado')
    }
 /*     if (item.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('Acceso no Autorizado')
    } */

    const updateProdPedido = await prodPedido.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).json(updateProdPedido)
})

const deleteProdPedido = asyncHandler(async (req, res) => {

    if (req.user.role.toLowerCase() !=="admin" ) {
        res.status(401)
        throw new Error('Acceso no Autorizado')
    }

    const pPedido = await prodPedido.findById(req.params.id)

    if (!pPedido) {
        res.status(400)
        throw new Error('Producto del pedido no encontrado')
    }
        //verificamos que el user de la tarea sea igual al user del token
  /*   if (item.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('Acceso no Autorizado')
    } */
    //const deletedTarea = await Tarea.findByIdAndDelete(req.params.id)
    await pPedido.remove()

    res.status(200).json(req.params.id)
})

module.exports = {
    getProdPedido,
    setProdPedido,
    updateProdPedido,
    deleteProdPedido
}