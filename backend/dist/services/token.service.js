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
exports.generateToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const environment_1 = require("../config/environment");
const generateToken = (_a) => __awaiter(void 0, [_a], void 0, function* ({ _id, firstName, lastName, email }) {
    const payload = { _id, firstName, lastName, email };
    const token = yield (0, jsonwebtoken_1.sign)(payload, environment_1.environment.JWT_TOKEN_SECRET_KEY, { expiresIn: '1d' });
    return token;
});
exports.generateToken = generateToken;
