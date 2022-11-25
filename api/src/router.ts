import path from 'node:path';
import { Router } from 'express';
import multer from 'multer';

import { createCategory } from './app/useCases/categories/createCategory';
import { listCategories } from './app/useCases/categories/listCategories';
import { createProduct } from './app/useCases/products/createProduct';
import { listProducts } from './app/useCases/products/listProducts';
import { listProductsByCategory } from './app/useCases/categories/listProductsByCategory';
import { listOrders } from './app/useCases/orders/listOrders';
import { createOrder } from './app/useCases/orders/createOrder';
import { changeOrderStatus } from './app/useCases/orders/changeOrderStatus';
import { cancelOrder } from './app/useCases/orders/cancelOrder';
import { deleteProduct } from './app/useCases/products/deleteProduct';
import { deleteCategory } from './app/useCases/categories/deleteCategory';

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, '..', 'uploads'));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    },
  })
});

// List categories
router.get('/categories', listCategories);

// Create Category
router.post('/categories', createCategory);

// Delete Category
router.delete('/categories/:categoryId', deleteCategory);

// List Products
router.get('/products', listProducts);

// Create Product
router.post('/products', upload.single('image'), createProduct);

// Delete Products
router.delete('/products/:productId', deleteProduct);

// Get products by category
router.get('/categories/:categoryId/products', listProductsByCategory);

// List Orders
router.get('/orders', listOrders);

// Create Order
router.post('/orders', createOrder);

// Change order status
// PUT => Alteração completa
// PATCH => Alteração parcial (funciona como se fosse um put, mas altera alguns elementos)
router.patch('/orders/:orderId', changeOrderStatus);

// Delete/cancel order
router.delete('/orders/:orderId', cancelOrder);
