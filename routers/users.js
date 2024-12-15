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

router.get("/:id", (req, res) => {
    const user = users.find((data) => data.id == req.params.id)

    if (!user) return
    res.status(404).json({
        error: true,
        data: null,
        msg: "User Not Found"
    })
    res.status(200).json({
        error: false,
        data: user,
        msg: "User Found Successfully"
    })
})