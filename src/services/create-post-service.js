const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class createPostService {

    async createPost(userId, descricao) {
        try {
            const insertPost = await prisma.posts.create({
                data: {
                    descricao,
                    Users: {
                        connect: {
                            id: userId
                        }
                    }
                }
            })
        } catch (error) {
            console.error(error);
        }
    }

}

module.exports = new createPostService();