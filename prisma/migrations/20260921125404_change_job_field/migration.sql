/*
  Warnings:

  - The values [PENDING,REVIEWING,ACCEPTED,REJECTED] on the enum `ApplicationStatus` will be removed. If these variants are still used in the database, this will fail.
  - Added the required column `type` to the `jobs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ApplicationStatus_new" AS ENUM ('Applied', 'Reviewing', 'Shortlisted', 'Rejected', 'Accepted');
ALTER TABLE "public"."applications" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "applications" ALTER COLUMN "status" TYPE "ApplicationStatus_new" USING ("status"::text::"ApplicationStatus_new");
ALTER TYPE "ApplicationStatus" RENAME TO "ApplicationStatus_old";
ALTER TYPE "ApplicationStatus_new" RENAME TO "ApplicationStatus";
DROP TYPE "public"."ApplicationStatus_old";
ALTER TABLE "applications" ALTER COLUMN "status" SET DEFAULT 'Applied';
COMMIT;

-- AlterTable
ALTER TABLE "applications" ALTER COLUMN "status" SET DEFAULT 'Applied';

-- AlterTable
ALTER TABLE "jobs" ADD COLUMN     "type" VARCHAR(20) NOT NULL;
