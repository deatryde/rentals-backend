/*
  Warnings:

  - You are about to drop the `bookmarks` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "bookmarks" DROP CONSTRAINT "bookmarks_userId_fkey";

-- DropTable
DROP TABLE "bookmarks";

-- CreateTable
CREATE TABLE "rentals" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "address" TEXT,
    "size" INTEGER NOT NULL,
    "rooms" TEXT NOT NULL,
    "rent" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "rentals_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "rentals" ADD CONSTRAINT "rentals_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
