const express = require('express')
const router = express.Router()
const { getProdPedido, setProdPedido, updateProdPedido, deleteProdPedido } = require('../controllers/productosPedidosController')
const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getProdPedido).post(protect, setProdPedido)
router.route('/:id').delete(protect, deleteProdPedido).put(protect, updateProdPedido)


module.exports = router