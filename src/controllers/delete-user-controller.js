const deleteUserService = require("../services/delete-user-service");

class deleteUserController {
    async deleteUser(req, res) {
        const { id } = req.params;

        if(!id) {
            return res.status(406).json({
                status: "error",
                message: "invalida data"
            })
        }

        const deleteUserInDatabase = await deleteUserService.deleteUser(id);

        return res.status(200).json({
            status: "ok",
            message: "deleted user successfully"
        })
    }
}

module.exports = new deleteUserController();