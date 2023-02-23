/*
  Warnings:

  - Added the required column `dateExpired` to the `Inventory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dateIn` to the `Inventory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `storageMethod` to the `Inventory` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Ingredient" ALTER COLUMN "roomTemp" DROP NOT NULL,
ALTER COLUMN "fridgeOpened" DROP NOT NULL,
ALTER COLUMN "fridgeUnopened" DROP NOT NULL,
ALTER COLUMN "freezer" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Inventory" ADD COLUMN     "dateExpired" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "dateIn" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "storageMethod" TEXT NOT NULL;
