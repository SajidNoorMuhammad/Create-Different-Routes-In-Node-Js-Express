import express from 'express'

const router = express.Router();

const users = [
    {
        fullName: "Sajid",
        email: "sajid@gmail.com"
    }
]

router.get("/", (req, res) => {
    const { fullName, email } = req.body;
    users.push({ fullName, email, id: users.length + 1 });
    res.status(201).json({
        error: false,
        data: users,
        msg: "User Added Successfully"
    })
})