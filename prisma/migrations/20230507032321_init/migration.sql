-- CreateTable
CREATE TABLE `Users` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `created_At` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_At` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Posts` (
    `id` VARCHAR(191) NOT NULL,
    `users_Id` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Posts` ADD CONSTRAINT `Posts_users_Id_fkey` FOREIGN KEY (`users_Id`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
