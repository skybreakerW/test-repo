import express from "express";

const router = express.Router()

router.get("/signup", (req, res) => {
    res.status(200).json({
        message: "Sab changa si in signup"
    })
})

export default router