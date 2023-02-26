const mongoose = require('mongoose')

const pedidoSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    date: {
        type: String,
        required: [true, 'Por favor teclea un valor']     
    },
    paid: {
        type: String,
        required: [true, 'Por favor teclea un valor']     
    },
    sent: {
        type: String,
        required: [true, 'Por favor teclea un valor']     
    },
    mail: {
        type: String,
        required: [true, 'Por favor teclea un valor']     
    },
    guide: {
        type: String,
        required: [true, 'Por favor teclea un valor']     
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('Pedido', pedidoSchema)