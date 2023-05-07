const updateUserService = require("../services/update-user-service");

class updateUserController {
    async updateUser(req, res) {
        const { id, name, email } = req.body;

        if(!id || !name || !email) {
            return res.status(406).json({
                status: "error",
                message: "invalid data"
            })
        }

        const updateUserInDatabase = await updateUserService.updateUser(id, name, email);

        return res.status(200).json({
            status: "ok",
            message: "altered user succesfully"
        })
    }
}