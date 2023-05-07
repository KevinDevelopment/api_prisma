const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class createUserService {
    async createUser(name, email) {
        try {
            const insertNewUser = await prisma.users.create({
                data: {
                    name,
                    email
                }
            })
        } catch (error) {
            console.error(error);
        }
    }

}

module.exports = new createUserService();