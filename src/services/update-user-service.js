const { PrismaClient } =  require("@prisma/client");
const prisma = new PrismaClient();

class updateUserService {
    async updateUser(id, name, email) {
        try {
            const updateUserInDatabase = await prisma.users.update({
                where: {
                    id
                },
                data: {
                    name,
                    email
                }
            })
            return updateUserInDatabase;
        } catch (error) {
            console.error(error);
        }
    }
}

module.exports = new updateUserService();