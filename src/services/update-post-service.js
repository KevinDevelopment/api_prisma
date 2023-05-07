const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class updatePostService {
    async updatePost(id, descricao) {
        try {
            const updatePostInDatabase = await prisma.posts.update({
                where: {
                    id
                },
                data: {
                    descricao
                }
            })
        } catch (error) {
            
        }
    }
}

module.exports = new updatePostService();