/*
  Warnings:

  - Made the column `address` on table `company_profiles` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "company_profiles" ALTER COLUMN "address" SET NOT NULL;
