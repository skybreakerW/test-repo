import express from "express"

const app = express()
app.use(express.json())

app.use("/api/health", (req, res) => {
    res.status(200).json({
        status: "ok",
        message: "API is running"
    })
})

export default app 