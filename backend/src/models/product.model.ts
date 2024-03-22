import { Schema, Document, model } from 'mongoose'

export interface IProduct {
    title: string
    description: string
    quantity: number
    imageUrl: string
}

export interface ProductDocument extends Document, IProduct { }

const productSchema = new Schema<ProductDocument>({
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    quantity: { type: Number, required: true },
    imageUrl: { type: String, required: true, trim: true }
},
    {
        timestamps: true
    })

export const ProductModel = model<ProductDocument>('product', productSchema)