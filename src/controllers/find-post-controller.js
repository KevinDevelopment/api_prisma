const findPostService = require("../services/find-post-service");

class findPostController {
    async findPost(req, res) {
        const { id } = req.body;
        
        const findPostinDatabase = await findPostService.findPosts(id);

        return res.status(200).json({
            status: "ok",
            findPostinDatabase
        })

    }
}

module.exports = new findPostController();