-- CreateTable
CREATE TABLE "mUser" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "display_name" TEXT NOT NULL,
    "num_follower" INTEGER NOT NULL,
    "folower_id" JSONB NOT NULL,
    "num_following" INTEGER NOT NULL,
    "follwing_id" JSONB NOT NULL,

    CONSTRAINT "mUser_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "mUser_user_id_key" ON "mUser"("user_id");
