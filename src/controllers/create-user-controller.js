const createUserService = require("../services/create-user-service");

class createUserController {

    async createUser(req, res) {
        const { name, email } = req.body

        if (!name || !email) {
            return res.status(406).json({
                status: "error",
                message: "invalid data"
            })
        }

        const createNewUser = await createUserService.createUser(name, email);

        if (res.status(200)) {
            return res.status(200).json({
                status: "success",
                message: "insert user sussessfully"
            })
        }

        if (!res.status(200)) {
            return res.status(500).json({
                status: "error",
                message: "could not insert"
            })
        }

    }

}

module.exports = new createUserController();