-- CreateTable
CREATE TABLE "Highlight" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "votes" INTEGER NOT NULL DEFAULT 0,
    "storeId" INTEGER NOT NULL,

    CONSTRAINT "Highlight_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Highlight" ADD CONSTRAINT "Highlight_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "Store"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
