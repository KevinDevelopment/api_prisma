const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class deleteUserService {
    async deleteUser(id) {
        try {
            const deletePosts = prisma.posts.deleteMany({
                where:{
                    users_Id: id
                }
            })

            const deleteUser = prisma.users.delete({
                where: {
                    id
                }
            })
            
            const transaction = await prisma.$transaction([deletePosts, deleteUser]);
            return transaction;
        } catch (error) {
            console.error(error);
        }
    }
}

module.exports = new deleteUserService();