import { Schema, Document, model } from 'mongoose'

export interface IUser {
    firstName: string
    lastName: string
    email: string
    password: string
}

export interface UserDocument extends Document, IUser { }

const userSchema = new Schema<UserDocument>({
    firstName: { type: String, required: true, lowercase: true, trim: true },
    lastName: { type: String, required: false, lowercase: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true, trim: true },
},
    {
        timestamps: true
    })

export const UserModel = model<UserDocument>('user', userSchema)