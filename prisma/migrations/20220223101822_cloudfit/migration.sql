/*
  Warnings:

  - You are about to drop the column `pageId` on the `MenuCategory` table. All the data in the column will be lost.
  - You are about to drop the column `accronym` on the `roles` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `roles` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "MenuCategory" DROP CONSTRAINT "MenuCategory_pageId_fkey";

-- DropIndex
DROP INDEX "roles.accronym_unique";

-- AlterTable
ALTER TABLE "MenuCategory" DROP COLUMN "pageId",
ADD COLUMN     "sorter" INTEGER;

-- AlterTable
ALTER TABLE "career" ADD COLUMN     "category" TEXT;

-- AlterTable
ALTER TABLE "pages" ADD COLUMN     "menuId" INTEGER,
ADD COLUMN     "slug" TEXT;

-- AlterTable
ALTER TABLE "roles" DROP COLUMN "accronym",
DROP COLUMN "description",
ADD COLUMN     "isActivated" INTEGER NOT NULL DEFAULT 1;

-- CreateTable
CREATE TABLE "contactUs" (
    "id" SERIAL NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT,
    "country" TEXT,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),

    PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "pages" ADD FOREIGN KEY ("menuId") REFERENCES "SubCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;
