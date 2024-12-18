import express from "express";
import { deleteuser } from "../controllers/user.controllers.js";
import verifyToken from "../middleware/jwt.middleware.js";

const router = express.Router();

router.delete("/delete/:id", verifyToken, deleteuser);

export default router;
