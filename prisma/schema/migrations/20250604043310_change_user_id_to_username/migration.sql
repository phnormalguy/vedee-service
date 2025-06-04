/*
  Warnings:

  - You are about to drop the column `user_id` on the `mUser` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[username]` on the table `mUser` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `username` to the `mUser` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "mUser_user_id_key";

-- AlterTable
ALTER TABLE "mUser" DROP COLUMN "user_id",
ADD COLUMN     "username" TEXT NOT NULL,
ALTER COLUMN "num_follower" SET DEFAULT 0,
ALTER COLUMN "num_following" SET DEFAULT 0;

-- CreateIndex
CREATE UNIQUE INDEX "mUser_username_key" ON "mUser"("username");
