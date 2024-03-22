import { Router } from 'express'
import authRoutes from './auth.routes'
import { addProduct, deleteProductById, getProducts, updateProductById } from '../controllers/product.controller'

const router = Router()

router.use('/auth', authRoutes)
router.post('/product', addProduct)
router.get('/product', getProducts)
router.put('/product/:productId', updateProductById)
router.delete('/product/:productId', deleteProductById)

export default router