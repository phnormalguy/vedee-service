/*
  Warnings:

  - Added the required column `url` to the `mPost` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "mPost" ADD COLUMN     "url" TEXT NOT NULL;
