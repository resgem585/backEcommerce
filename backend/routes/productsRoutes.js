const express = require('express')
const router = express.Router()
const { getProduct, setProduct, updateProduct, deleteProduct } = require('../controllers/productsController')
const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getProduct).post(protect, setProduct)
router.route('/:id').delete(protect, deleteProduct).put(protect, updateProduct)


module.exports = router