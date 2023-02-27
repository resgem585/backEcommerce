const asyncHandler = require('express-async-handler')

const Pedido = require('../models/pedidosModel')

const getPedido = asyncHandler(async (req, res) => {
    const pedido = await Pedido.find()
   

    res.status(200).json(pedido)
})

const setPedido = asyncHandler(async (req, res) => {
    
    if (req.user.role.toLowerCase() !=="admin" ) {
        res.status(401)
        throw new Error('Acceso no Autorizado')
    }
    
    if (!req.body.date || !req.body.paid || !req.body.sent || !req.body.mail || !req.body.guide) {

        res.status(400)
        throw new Error('Pedido no registrado, verifica tus datos')
    }

    const pedido = await Pedido.create({
        user: req.user.id,
        date: req.body.date,
        paid: req.body.paid,
        sent: req.body.sent,
        mail:  req.body.mail,
        guide: req.body.guide
       
    })

    res.status(201).json(pedido)
})

const updatePedido = asyncHandler(async (req, res) => {
  
    if (req.user.role.toLowerCase() !=="admin" ) {
        res.status(401)
        throw new Error('Acceso no Autorizado')
    }

    const pedido = await Pedido.findById(req.params.id)

    if (!pedido) {
        res.status(400)
        throw new Error('Pedido no encontrado')
    }
   /*   if (pedido.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('Acceso no Autorizado')
    }
 */
    const updatePedido = await Pedido.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).json(updatePedido)
})

const deletePedido = asyncHandler(async (req, res) => {
   
    if (req.user.role.toLowerCase() !=="admin" ) {
        res.status(401)
        throw new Error('Acceso no Autorizado')
    }
    const pedido = await Pedido.findById(req.params.id)

    if (!pedido) {
        res.status(400)
        throw new Error('Pedido no encontrado')
    }
   
    await pedido.remove()

    res.status(200).json(req.params.id)
})

module.exports = {
    getPedido,
    setPedido,
    updatePedido,
    deletePedido
}