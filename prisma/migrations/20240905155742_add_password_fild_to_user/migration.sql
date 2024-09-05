/*
  Warnings:

  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "failedLoginAttempts" INTEGER DEFAULT 0,
ADD COLUMN     "lastPasswordUpdate" TIMESTAMP(6),
ADD COLUMN     "lockoutTime" TIMESTAMP(3),
ADD COLUMN     "password" VARCHAR(255) NOT NULL,
ADD COLUMN     "passwordExpiration" TIMESTAMP(6),
ADD COLUMN     "rememberCreateAt" TIMESTAMP(3),
ADD COLUMN     "resetPasswordSentAt" TIMESTAMP(3),
ADD COLUMN     "resetPasswordToken" VARCHAR(255);
