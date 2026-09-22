/*
  Warnings:

  - You are about to drop the column `full_name` on the `Profile` table. All the data in the column will be lost.
  - Added the required column `full_name` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "full_name";

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "full_name" TEXT NOT NULL;
