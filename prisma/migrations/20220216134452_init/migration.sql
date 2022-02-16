-- CreateEnum
CREATE TYPE "Category" AS ENUM ('X', 'Y', 'Z');

-- CreateTable
CREATE TABLE "Loan" (
    "id" TEXT NOT NULL,
    "totalRequestedAmountCents" DOUBLE PRECISION NOT NULL,
    "category" "Category" NOT NULL,
    "expiresAt" TEXT NOT NULL,

    CONSTRAINT "Loan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Investment" (
    "id" TEXT NOT NULL,
    "totalRequestedAmountCents" DOUBLE PRECISION NOT NULL,
    "loanId" TEXT NOT NULL,

    CONSTRAINT "Investment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MarketplaceItem" (
    "id" TEXT NOT NULL,
    "totalRequestedAmount" DOUBLE PRECISION NOT NULL,
    "category" "Category" NOT NULL,
    "totalInvestmentAmount" DOUBLE PRECISION NOT NULL,
    "expiresAt" TEXT NOT NULL,

    CONSTRAINT "MarketplaceItem_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Investment" ADD CONSTRAINT "Investment_loanId_fkey" FOREIGN KEY ("loanId") REFERENCES "Loan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
