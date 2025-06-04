/*
  Warnings:

  - Added the required column `email` to the `mUser` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "mUser" ADD COLUMN     "email" TEXT NOT NULL;
