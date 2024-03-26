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
exports.login = exports.registerUser = void 0;
const user_model_1 = require("../models/user.model");
const token_service_1 = require("../services/token.service");
const bcrypt = require("bcryptjs");
const registerUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { firstName, lastName, email, password } = req.body;
        const user = yield user_model_1.UserModel.findOne({ email });
        if (user) {
            return res.status(409).json({
                message: 'Account already exists',
                success: false
            });
        }
        //TODO: Implement hashing of password
        const saltRounds = 10;
        const hashedPassword = yield bcrypt.hash(password, saltRounds);
        const newUser = new user_model_1.UserModel({
            firstName,
            lastName,
            email,
            password: hashedPassword
        });
        yield newUser.save();
        const token = yield (0, token_service_1.generateToken)(newUser);
        return res.status(201).json({
            message: 'Account created successfully',
            success: true,
            data: { token }
        });
    }
    catch (err) {
        next(err);
    }
});
exports.registerUser = registerUser;
const login = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = yield user_model_1.UserModel.findOne({ email });
        if (!user) {
            return res.status(404).json({
                message: 'Account not exists',
                success: false
            });
        }
        //TODO: check hash password comparison
        const validate = bcrypt.compare(password, user.password);
        if (!validate) {
            return res.status(403)
                .json({
                message: "wrong password! try again.."
            });
        }
        const token = yield (0, token_service_1.generateToken)(user);
        return res.status(200).json({
            message: 'LoggedIn successfully',
            success: true,
            data: { token }
        });
    }
    catch (err) {
        next(err);
    }
});
exports.login = login;
