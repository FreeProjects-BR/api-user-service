-- CreateTable
CREATE TABLE "User" (
    "id" UUID NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL,
    "email" VARCHAR(80) NOT NULL,
    "name" VARCHAR(80) NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT false,
    "code" INTEGER NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "resetPasswordToken" VARCHAR(255),
    "resetPasswordSentAt" TIMESTAMP(3),
    "rememberCreateAt" TIMESTAMP(3),
    "lastPasswordUpdate" TIMESTAMP(6),
    "passwordExpiration" TIMESTAMP(6),
    "failedLoginAttempts" INTEGER DEFAULT 0,
    "lockoutTime" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_code_key" ON "User"("code");

-- CreateIndex
CREATE INDEX "User_email_idx" ON "User"("email");
