const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
  /*   user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }, */
    product_name: {
        type: String,
        required: [true, 'Por favor teclea un valor']     
    },
    description: {
        type: String,
        required: [true, 'Por favor teclea un valor']     
    },
    price: {
        type: String,
        required: [true, 'Por favor teclea un valor']     
    },
    category: {
        type: String,
        required: [true, 'Por favor teclea un valor']     
    },
    brand: {
        type: String,
        required: [true, 'Por favor teclea un valor']     
    },
    sku: {
        type: String,
        required: [true, 'Por favor teclea un valor']     
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Product', productSchema)