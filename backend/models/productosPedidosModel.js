const mongoose = require('mongoose')

const pPedidosSchema = mongoose.Schema({
    IdPedido: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Pedido'
    },
    IdProducto: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Producto'
    },
    cantidad: {
        type: String,
        required: [true, 'Por favor teclea un valor']     
    },
    precio: {
        type: String,
        required: [true, 'Por favor teclea un valor']     
    },
    importe: {
        type: String,
        required: [true, 'Por favor teclea un valor']     
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('ProdPedido', pPedidosSchema)