-- CreateTable
CREATE TABLE "mPost" (
    "id" INTEGER NOT NULL,
    "title" TEXT,
    "post_ower" TEXT NOT NULL,
    "like_num" INTEGER NOT NULL DEFAULT 0,
    "post_owner" TEXT NOT NULL,

    CONSTRAINT "mPost_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "mPost_id_key" ON "mPost"("id");

-- AddForeignKey
ALTER TABLE "mPost" ADD CONSTRAINT "mPost_post_owner_fkey" FOREIGN KEY ("post_owner") REFERENCES "mUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
