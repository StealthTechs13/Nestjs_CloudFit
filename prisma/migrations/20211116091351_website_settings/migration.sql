-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "PERMISSIONS" ADD VALUE 'CAN_CREATE_PAGE';
ALTER TYPE "PERMISSIONS" ADD VALUE 'CAN_EDIT_PAGE';
ALTER TYPE "PERMISSIONS" ADD VALUE 'CAN_DELETE_PAGE';

-- CreateTable
CREATE TABLE "websiteSettings" (
    "id" SERIAL NOT NULL,
    "logo" TEXT,
    "favicon" TEXT,
    "banner" TEXT,
    "metaDescription" TEXT,
    "keywords" TEXT,
    "Author" TEXT,
    "privacyPolicy" TEXT,
    "legal" TEXT,
    "termsAndConditions" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "career" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "requirements" TEXT NOT NULL,
    "responsibilities" TEXT NOT NULL,
    "benefits" TEXT NOT NULL,
    "seoTitle" TEXT,
    "slug" TEXT,
    "metaDescription" TEXT,
    "status" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Client" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" INTEGER NOT NULL DEFAULT 1,
    "logo" TEXT NOT NULL,
    "status" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
);
