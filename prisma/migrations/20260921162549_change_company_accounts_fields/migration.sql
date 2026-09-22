/*
  Warnings:

  - You are about to drop the column `address` on the `company_accounts` table. All the data in the column will be lost.
  - You are about to drop the column `logo` on the `company_accounts` table. All the data in the column will be lost.
  - You are about to drop the `Profile` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[email]` on the table `company_accounts` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `company_accounts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `company_accounts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `jobs` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_id_user_fkey";

-- AlterTable
ALTER TABLE "company_accounts" DROP COLUMN "address",
DROP COLUMN "logo",
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "jobs" ADD COLUMN     "location" TEXT NOT NULL;

-- DropTable
DROP TABLE "Profile";

-- CreateTable
CREATE TABLE "profiles" (
    "id" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "skills" TEXT[],
    "id_user" TEXT NOT NULL,
    "bio" TEXT,
    "cv" VARCHAR(255),
    "portfolio" VARCHAR(255),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "profiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "company_profiles" (
    "id" TEXT NOT NULL,
    "companyId" TEXT NOT NULL,
    "address" VARCHAR(255),
    "logo" VARCHAR(255),
    "bio" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "company_profiles_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "profiles_id_user_key" ON "profiles"("id_user");

-- CreateIndex
CREATE UNIQUE INDEX "company_profiles_companyId_key" ON "company_profiles"("companyId");

-- CreateIndex
CREATE UNIQUE INDEX "company_accounts_email_key" ON "company_accounts"("email");

-- AddForeignKey
ALTER TABLE "profiles" ADD CONSTRAINT "profiles_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "company_profiles" ADD CONSTRAINT "company_profiles_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "company_accounts"("id") ON DELETE CASCADE ON UPDATE CASCADE;
