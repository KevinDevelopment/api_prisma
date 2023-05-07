const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class findPostService {
    async findPosts(id) {
        try {
            const findPostinDatabase = await prisma.posts.findMany({
                where:{
                    id
                }
            })
            return findPostinDatabase;
        } catch (error) {
            console.error(error);
        }
    }
}

module.exports = new findPostService();