-- DropIndex
DROP INDEX `Category_name_slug_key` ON `Category`;

-- AlterTable
ALTER TABLE `Category` MODIFY `slug` VARCHAR(191) NULL;
