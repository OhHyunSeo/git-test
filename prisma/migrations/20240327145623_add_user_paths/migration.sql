-- CreateTable
CREATE TABLE "UserPath" (
    "userPathId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),
    "creatorId" INTEGER NOT NULL,

    CONSTRAINT "UserPath_pkey" PRIMARY KEY ("userPathId")
);

-- CreateTable
CREATE TABLE "_ParticipatingUserPaths" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ParticipatingUserPaths_AB_unique" ON "_ParticipatingUserPaths"("A", "B");

-- CreateIndex
CREATE INDEX "_ParticipatingUserPaths_B_index" ON "_ParticipatingUserPaths"("B");

-- AddForeignKey
ALTER TABLE "UserPath" ADD CONSTRAINT "UserPath_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParticipatingUserPaths" ADD CONSTRAINT "_ParticipatingUserPaths_A_fkey" FOREIGN KEY ("A") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ParticipatingUserPaths" ADD CONSTRAINT "_ParticipatingUserPaths_B_fkey" FOREIGN KEY ("B") REFERENCES "UserPath"("userPathId") ON DELETE CASCADE ON UPDATE CASCADE;
