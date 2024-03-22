"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = void 0;
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    quantity: { type: Number, required: true },
    imageUrl: { type: String, required: true, trim: true }
}, {
    timestamps: true
});
exports.ProductModel = (0, mongoose_1.model)('product', productSchema);
