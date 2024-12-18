import createError from "../utils/createError.utils.js";
import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
const verifyToken = async (req, res, next) => {
    const token = req.cookies.userToken
    if (!token) return next(createError(401, "unauthorized User !"))
    jwt.verify(token, process.env.JWT_SECREAT_KEY, async (err, payload) => {
        if (err) return res.status(401).send("Token is not valid!")
        req.userId = payload.id
        req.isSeller = payload.isSeller
    })
    next()
};

export default verifyToken