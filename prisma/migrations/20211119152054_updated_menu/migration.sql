/*
  Warnings:

  - Added the required column `pageId` to the `MenuCategory` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "MenuCategory" ADD COLUMN     "pageId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "CareerApplicants" (
    "id" SERIAL NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "cv" TEXT NOT NULL,
    "CareerId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CareerToCareerApplicant" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CareerToCareerApplicant_AB_unique" ON "_CareerToCareerApplicant"("A", "B");

-- CreateIndex
CREATE INDEX "_CareerToCareerApplicant_B_index" ON "_CareerToCareerApplicant"("B");

-- AddForeignKey
ALTER TABLE "CareerApplicants" ADD FOREIGN KEY ("CareerId") REFERENCES "career"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MenuCategory" ADD FOREIGN KEY ("pageId") REFERENCES "pages"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CareerToCareerApplicant" ADD FOREIGN KEY ("A") REFERENCES "career"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CareerToCareerApplicant" ADD FOREIGN KEY ("B") REFERENCES "CareerApplicants"("id") ON DELETE CASCADE ON UPDATE CASCADE;
