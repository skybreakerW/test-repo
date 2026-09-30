import rateLimit from "express-rate-limit"

const loginRateLimit = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 5,

    message: "Too many attempts. Please try again later."
})


export {
    loginRateLimit,
}