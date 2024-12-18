import express from "express"
import { loginUser, logOutUser, registerUser } from "../controllers/auth.controllers.js";
import { upload } from "../middleware/multer.middleware.js";
const router = express.Router();

router.post("/register", upload.single('img'), registerUser)
router.post("/login", loginUser)
router.post("/logOut", logOutUser)

export default router