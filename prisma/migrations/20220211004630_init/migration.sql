-- CreateEnum
CREATE TYPE "Category" AS ENUM ('X', 'Y', 'Z');

-- CreateTable
CREATE TABLE "loan" (
    "id" TEXT NOT NULL,
    "totalRequestedAmountCents" DOUBLE PRECISION NOT NULL,
    "category" "Category" NOT NULL,
    "expiresAt" TEXT NOT NULL,

    CONSTRAINT "loan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "investment" (
    "id" TEXT NOT NULL,
    "totalRequestedAmountCents" DOUBLE PRECISION NOT NULL,
    "loanId" TEXT NOT NULL,

    CONSTRAINT "investment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "marketplaceItem" (
    "id" TEXT NOT NULL,
    "totalRequestedAmount" DOUBLE PRECISION NOT NULL,
    "category" "Category" NOT NULL,
    "totalInvestmentAmount" DOUBLE PRECISION NOT NULL,
    "expiresAt" TEXT NOT NULL,

    CONSTRAINT "marketplaceItem_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "investment" ADD CONSTRAINT "investment_loanId_fkey" FOREIGN KEY ("loanId") REFERENCES "loan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
