"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_routes_1 = __importDefault(require("./auth.routes"));
const product_controller_1 = require("../controllers/product.controller");
const router = (0, express_1.Router)();
router.use('/auth', auth_routes_1.default);
router.post('/product', product_controller_1.addProduct);
router.get('/product', product_controller_1.getProducts);
router.put('/product/:productId', product_controller_1.updateProductById);
router.delete('/product/:productId', product_controller_1.deleteProductById);
exports.default = router;
