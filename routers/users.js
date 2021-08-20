const { Router } = require('express');
const User = require('../models').user;
const Image = require('../models').image

const router = new Router();

router.get("/", async(req, res, next) => {
    try {
        const user = await User.findAll({
            attributes: { exclude: ["password"] },
            include: [Image],
            order: [[Image, "createdAt", "DESC"]],
        });

        res.status(200).send({ message: "ok", user });
    } catch (error) {
        next(error);
    }
})

router.get("/:id", async(req, res, next) => {
    const { id } = req.params;

    console.log(id);
    if (isNaN(parseInt(id))) {
        return res.status(400).send({ message: "id is not a number" });
    }

    const user = await User.findByPk(id, {
        attributes: { exclude: ["password"] },
        include: [Image],
        order: [[Image, "createdAt", "DESC"]],
    })

    if (user === null) {
        res.status(400).send({ message: "user not found" });
    }

    res.status(200).send({ message: "ok", user });
})

module.exports = router;