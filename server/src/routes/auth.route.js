import express from "express";
import { login, signup } from "../controllers/auth.controller.js"
import { loginRateLimit } from "../middlewares/limiter.middleware.js";

const router = express.Router()

router.post("/signup", signup)
router.post("/login", loginRateLimit, login)

export default router