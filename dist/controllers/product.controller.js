"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProductById = exports.updateProductById = exports.getProducts = exports.addProduct = void 0;
const product_model_1 = require("../models/product.model");
const addProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, description, quantity, imageUrl } = req.body;
        const product = yield product_model_1.ProductModel.findOne({ title });
        if (product) {
            return res.status(409).json({
                message: 'Product already exists',
                success: false
            });
        }
        const newProduct = new product_model_1.ProductModel({
            title,
            description,
            quantity,
            imageUrl
        });
        yield newProduct.save();
        return res.status(201).json({
            message: 'Product created successfully',
            success: true
        });
    }
    catch (err) {
        next(err);
    }
});
exports.addProduct = addProduct;
const getProducts = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    try {
        let { page, limit } = req.query;
        limit = ((_a = parseInt(limit)) !== null && _a !== void 0 ? _a : 50);
        const currentPage = ((_b = parseInt(page)) !== null && _b !== void 0 ? _b : 1) - 1;
        const skip = currentPage * ((_c = parseInt(limit)) !== null && _c !== void 0 ? _c : 50);
        const products = yield product_model_1.ProductModel.find({}).sort('-createdAt').limit(limit).skip(skip);
        return res.status(200).json({
            message: 'Product list fetched successfully',
            success: true,
            data: products
        });
    }
    catch (err) {
        next(err);
    }
});
exports.getProducts = getProducts;
const updateProductById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.productId;
        const product = yield product_model_1.ProductModel.findById(productId);
        if (!product) {
            return res.status(404).json({
                message: 'Product not exists',
                success: false
            });
        }
        yield product_model_1.ProductModel.findByIdAndUpdate(productId, { $set: Object.assign({}, req.body) });
        return res.status(200).json({
            message: 'Product updated successfully',
            success: true
        });
    }
    catch (err) {
        next(err);
    }
});
exports.updateProductById = updateProductById;
const deleteProductById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.params.productId;
        const product = yield product_model_1.ProductModel.findById(productId);
        if (!product) {
            return res.status(404).json({
                message: 'Product is already deleted or not exists',
                success: false
            });
        }
        yield product_model_1.ProductModel.findByIdAndDelete(productId);
        return res.status(200).json({
            message: 'Product deleted successfully',
            success: true
        });
    }
    catch (err) {
        next(err);
    }
});
exports.deleteProductById = deleteProductById;
