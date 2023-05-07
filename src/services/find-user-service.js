const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class findUserService {
    async findUser(id) {
        try {
            const findUserInDatabase = await prisma.users.findUnique({
                where: {
                    id: id
                }
            })
            return findUserInDatabase;
        } catch (error) {
            console.error(error);
        }
    }
}

module.exports = new findUserService();