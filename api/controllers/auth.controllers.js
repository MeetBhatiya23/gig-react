import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import uploadOnCloudinary from "../utils/cloudinary.utils.js";

export const registerUser = async (req, res) => {
    console.log("hello", req.body)
    try {

        if (req.body.username === "" || req.body.email === "" || req.body.password === "") {
            return res.status(400).send("All fields are required");
        }
        if (req.body.password.length < 6) {
            return res.status(400).send("Password must be at least 6 characters long");
        }
        if (req.body.username.length < 3) {
            return res.status(400).send("Username must be at least 3 characters long");
        }
        if (req.body.username.length > 20) {
            return res.status(400).send("Username must be at most 20 characters long");
        }
        if (req.body.password.length > 20) {
            return res.status(400).send("Password must be at most 20 characters long");
        }
        if (req.body.username.includes(" ") || req.body.email.includes(" ")) {
            return res.status(400).send("cannot contain spaces !");
        }
        const hash = await bcrypt.hashSync(req.body.password, 5);
        console.log("superman-----", req.file);
        const avtarLocalPath = req.files?.img[0]?.path

        const avatar = await uploadOnCloudinary(avtarLocalPath)

        const newUser = new User({
            ...req.body,
            img: avatar.url || "https://i.pinimg.com/564x/0a/60/ec/0a60ec5a85a0a41668931aec5521015b.jpg",
            password: hash,
        });

        await newUser.save();
        res.status(201).send("User has been created");

    } catch (error) {
        res.status(500).send("Something went wrong");

    }
}
export const loginUser = async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username })
        if (!user) return res.status(404).send("User Not found !")

        const isCorrect = await bcrypt.compareSync(req.body.password, user.password)
        if (!isCorrect) return res.status(404).send("wrong password or username")

        const token = await jwt.sign({
            id: user._id,
            isSeller: user.isSeller
        },
            process.env.JWT_SECREAT_KEY
        );
        const { password, ...info } = user._doc
        res.cookie("userToken", token, { httpOnly: true }).status(200).send(info)

    } catch (error) {
        return res.status(500).send("something went wrong !")
    }
}
export const logOutUser = (req, res) => {
    res.clearCookie("userToken", { sameSite: "none", secure: true })
        .send("logOutUser auth !");
}