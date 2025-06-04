-- AlterTable
CREATE SEQUENCE mpost_id_seq;
ALTER TABLE "mPost" ALTER COLUMN "id" SET DEFAULT nextval('mpost_id_seq');
ALTER SEQUENCE mpost_id_seq OWNED BY "mPost"."id";

-- CreateTable
CREATE TABLE "tLike" (
    "id" SERIAL NOT NULL,
    "user_id" TEXT NOT NULL,
    "post_id" INTEGER NOT NULL,

    CONSTRAINT "tLike_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tLike_user_id_post_id_key" ON "tLike"("user_id", "post_id");

-- AddForeignKey
ALTER TABLE "tLike" ADD CONSTRAINT "tLike_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "mUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tLike" ADD CONSTRAINT "tLike_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "mPost"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
