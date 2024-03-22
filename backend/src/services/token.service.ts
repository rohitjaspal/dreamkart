import { sign, verify } from 'jsonwebtoken'
import { UserDocument } from '../models/user.model'
import { environment } from '../config/environment'

export const generateToken = async ({ _id, firstName, lastName, email }: UserDocument) => {
    const payload = { _id, firstName, lastName, email }
    const token = await sign(payload, environment.JWT_TOKEN_SECRET_KEY, { expiresIn: '1d' })
    return token
} 