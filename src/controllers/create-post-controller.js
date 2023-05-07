const createPostService = require("../services/create-post-service");

class createPostController {
    async createPost(req, res) {
        const { descricao, userId } = req.body;

        if (!descricao || !userId) {
            return res.status(406).json({
                status: "error",
                message: "invalid data"
            })
        }

        const insertPost = await createPostService.createPost(userId, descricao);

        return res.status(200).json({
            status: "ok",
            message: "insert post successfully"
        })
    }
}

module.exports = new createPostController();