const findUserService = require("../services/find-user-service");

class findUserController {
    async findUser(req, res) {
        const { id } = req.params;

        if(!id) {
            return res.status(406).json({
                status: "error",
                message: "invalid data"
            })
        }

        const findUserInDatabase = await findUserService.findUser(id);

        return res.status(200).json({
            status: "ok",
            findUserInDatabase
        })
    }
}

module.exports = new findUserController();