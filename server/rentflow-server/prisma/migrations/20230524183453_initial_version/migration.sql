-- CreateEnum
CREATE TYPE "EnumBillCategory" AS ENUM ('Electricity', 'Gas', 'Insurance', 'Maintenance', 'Mortgage', 'PropertyTax', 'Water', 'Repairs', 'Ltb', 'Other');

-- CreateTable
CREATE TABLE "User" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "firstName" TEXT,
    "id" TEXT NOT NULL,
    "lastName" TEXT,
    "password" TEXT NOT NULL,
    "roles" JSONB NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "username" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Property" (
    "city" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "id" TEXT NOT NULL,
    "postalCode" TEXT NOT NULL,
    "streetName" TEXT NOT NULL,
    "streetNumber" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Property_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Nest" (
    "id" TEXT NOT NULL,
    "isOccupied" BOOLEAN NOT NULL,
    "isUnit" BOOLEAN NOT NULL,
    "name" TEXT NOT NULL,
    "propertyIdId" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Nest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bill" (
    "amount" DOUBLE PRECISION NOT NULL,
    "category" "EnumBillCategory" NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "description" TEXT,
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nestIdId" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Bill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tenant" (
    "email" TEXT,
    "firstname" TEXT NOT NULL,
    "id" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "nestIdId" TEXT NOT NULL,
    "phone" TEXT,
    "sin" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Tenant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rent" (
    "amount" DOUBLE PRECISION NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "id" TEXT NOT NULL,
    "nestIdId" TEXT NOT NULL,
    "tenantIdId" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Rent_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- AddForeignKey
ALTER TABLE "Nest" ADD CONSTRAINT "Nest_propertyIdId_fkey" FOREIGN KEY ("propertyIdId") REFERENCES "Property"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bill" ADD CONSTRAINT "Bill_nestIdId_fkey" FOREIGN KEY ("nestIdId") REFERENCES "Nest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tenant" ADD CONSTRAINT "Tenant_nestIdId_fkey" FOREIGN KEY ("nestIdId") REFERENCES "Nest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rent" ADD CONSTRAINT "Rent_nestIdId_fkey" FOREIGN KEY ("nestIdId") REFERENCES "Nest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rent" ADD CONSTRAINT "Rent_tenantIdId_fkey" FOREIGN KEY ("tenantIdId") REFERENCES "Tenant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
