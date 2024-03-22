import { Request, Response, NextFunction } from 'express'
import { IProduct, ProductModel } from '../models/product.model'


export const addProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const { title, description, quantity, imageUrl }: IProduct = req.body

        const product = await ProductModel.findOne({ title })

        if (product) {
            return res.status(409).json({
                message: 'Product already exists',
                success: false
            })
        }

        const newProduct = new ProductModel({
            title,
            description,
            quantity,
            imageUrl
        })

        await newProduct.save()

        return res.status(201).json({
            message: 'Product created successfully',
            success: true
        })


    }
    catch (err) {
        next(err)
    }
}

export const getProducts = async (req: Request, res: Response, next: NextFunction) => {
    try {

        let { page, limit }: any = req.query
        limit = (parseInt(limit) ?? 50)
        const currentPage = (parseInt(page) ?? 1) - 1
        const skip = currentPage * (parseInt(limit) ?? 50)

        const products = await ProductModel.find({}).sort('-createdAt').limit(limit).skip(skip)

        return res.status(200).json({
            message: 'Product list fetched successfully',
            success: true,
            data: products
        })


    }
    catch (err) {
        next(err)
    }
}

export const updateProductById = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const productId = req.params.productId

        const product = await ProductModel.findById(productId)

        if (!product) {
            return res.status(404).json({
                message: 'Product not exists',
                success: false
            })
        }

        await ProductModel.findByIdAndUpdate(productId, { $set: { ...req.body } })

        return res.status(200).json({
            message: 'Product updated successfully',
            success: true
        })


    }
    catch (err) {
        next(err)
    }
}

export const deleteProductById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const productId = req.params.productId

        const product = await ProductModel.findById(productId)

        if (!product) {
            return res.status(404).json({
                message: 'Product is already deleted or not exists',
                success: false
            })
        }

        await ProductModel.findByIdAndDelete(productId)
        return res.status(200).json({
            message: 'Product deleted successfully',
            success: true
        })
    }
    catch (err) {
        next(err)
    }
}