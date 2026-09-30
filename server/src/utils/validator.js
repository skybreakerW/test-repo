
const isValidName = (name) => {
    return name.length >= 3 && name.length <= 18
}

const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

const isValidPassword = (password) => {
    return (
        typeof password === "string" && password.length >= 8 && password.length <= 128
    )
}

export {
    isValidName,
    isValidEmail,
    isValidPassword
}