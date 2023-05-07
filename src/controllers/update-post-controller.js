const updatePostService = require("../services/update-post-service");

class updatePostcontroller {
    async updatePost(req, res) {
        const { id, descricao } = req.body;

        if(!id || !descricao) {
            return res.status(406).json({
                status: "ok",
                message: "invalid data"
            })
        }

        const updatePostInDatabase = await updatePostService.updatePost(id, descricao);

        return res.status(200).json({
            status: "ok",
            message: "updated post successfully"
        })

    }
}

module.exports = new updatePostcontroller();