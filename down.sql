-- DropForeignKey
ALTER TABLE "public"."tb_penghuni" DROP CONSTRAINT "tb_penghuni_penghuni_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."tb_pegawai" DROP CONSTRAINT "tb_pegawai_pegawai_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."tb_permintaan_pemeliharaan" DROP CONSTRAINT "tb_permintaan_pemeliharaan_penghuni_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."tb_permintaan_pemeliharaan" DROP CONSTRAINT "tb_permintaan_pemeliharaan_pegawai_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."tb_keluhan_penghuni" DROP CONSTRAINT "tb_keluhan_penghuni_penghuni_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."tb_keluhan_penghuni" DROP CONSTRAINT "tb_keluhan_penghuni_employee_fkey";

-- DropForeignKey
ALTER TABLE "public"."tb_pembayaran" DROP CONSTRAINT "tb_pembayaran_penghuni_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."tb_pembayaran" DROP CONSTRAINT "tb_pembayaran_pegawai_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."tb_pembayaran" DROP CONSTRAINT "tb_pembayaran_tagihan_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."tb_pengumuman" DROP CONSTRAINT "tb_pengumuman_pegawai_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."tb_perjanjian_sewa" DROP CONSTRAINT "tb_perjanjian_sewa_penghuni_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."tb_tagihan" DROP CONSTRAINT "tb_tagihan_pegawai_id_fkey";

-- DropIndex
DROP INDEX "public"."tb_pengguna_username_key";

-- DropIndex
DROP INDEX "public"."tb_penghuni_penghuni_id_key";

-- DropIndex
DROP INDEX "public"."tb_pegawai_pegawai_id_key";

-- DropIndex
DROP INDEX "public"."tb_perjanjian_sewa_penghuni_id_key";

-- AlterTable
ALTER TABLE "public"."tb_pengguna" DROP COLUMN "username";

-- AlterTable
ALTER TABLE "public"."tb_penghuni" DROP CONSTRAINT "tb_penghuni_pkey",
DROP COLUMN "penghuni_id",
ADD COLUMN     "resident_id" UUID NOT NULL,
ADD CONSTRAINT "tb_penghuni_pkey" PRIMARY KEY ("resident_id");

-- AlterTable
ALTER TABLE "public"."tb_pegawai" DROP CONSTRAINT "tb_pegawai_pkey",
DROP COLUMN "pegawai_id",
ADD COLUMN     "employee_id" UUID NOT NULL,
ADD CONSTRAINT "tb_pegawai_pkey" PRIMARY KEY ("employee_id");

-- AlterTable
ALTER TABLE "public"."tb_permintaan_pemeliharaan" DROP COLUMN "pegawai_id",
DROP COLUMN "penghuni_id",
ADD COLUMN     "employee_id" UUID,
ADD COLUMN     "resident_id" UUID NOT NULL;

-- AlterTable
ALTER TABLE "public"."tb_keluhan_penghuni" DROP COLUMN "penghuni_id",
ADD COLUMN     "resident_id" UUID NOT NULL;

-- AlterTable
ALTER TABLE "public"."tb_pembayaran" DROP COLUMN "pegawai_id",
DROP COLUMN "penghuni_id",
DROP COLUMN "tagihan_id",
ADD COLUMN     "bill_id" UUID NOT NULL,
ADD COLUMN     "employee_id" UUID,
ADD COLUMN     "resident_id" UUID NOT NULL;

-- AlterTable
ALTER TABLE "public"."tb_pengumuman" DROP COLUMN "lampiran_pengumuman",
DROP COLUMN "pegawai_id",
ADD COLUMN     "employeeId" UUID NOT NULL,
ADD COLUMN     "konten_pengumuman" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."tb_perjanjian_sewa" DROP COLUMN "penghuni_id",
ADD COLUMN     "resident_id" UUID NOT NULL;

-- AlterTable
ALTER TABLE "public"."tb_tagihan" DROP COLUMN "pegawai_id",
ADD COLUMN     "employee_id" UUID NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "tb_penghuni_resident_id_key" ON "public"."tb_penghuni"("resident_id" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "tb_pegawai_employee_id_key" ON "public"."tb_pegawai"("employee_id" ASC);

-- CreateIndex
CREATE UNIQUE INDEX "tb_perjanjian_sewa_resident_id_key" ON "public"."tb_perjanjian_sewa"("resident_id" ASC);

-- AddForeignKey
ALTER TABLE "public"."tb_keluhan_penghuni" ADD CONSTRAINT "tb_keluhan_penghuni_employee_fkey" FOREIGN KEY ("employee") REFERENCES "public"."tb_pegawai"("employee_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."tb_keluhan_penghuni" ADD CONSTRAINT "tb_keluhan_penghuni_resident_id_fkey" FOREIGN KEY ("resident_id") REFERENCES "public"."tb_penghuni"("resident_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."tb_pegawai" ADD CONSTRAINT "tb_pegawai_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "public"."tb_pengguna"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."tb_pembayaran" ADD CONSTRAINT "tb_pembayaran_bill_id_fkey" FOREIGN KEY ("bill_id") REFERENCES "public"."tb_tagihan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."tb_pembayaran" ADD CONSTRAINT "tb_pembayaran_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "public"."tb_pegawai"("employee_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."tb_pembayaran" ADD CONSTRAINT "tb_pembayaran_resident_id_fkey" FOREIGN KEY ("resident_id") REFERENCES "public"."tb_penghuni"("resident_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."tb_penghuni" ADD CONSTRAINT "tb_penghuni_resident_id_fkey" FOREIGN KEY ("resident_id") REFERENCES "public"."tb_pengguna"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."tb_pengumuman" ADD CONSTRAINT "tb_pengumuman_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "public"."tb_pegawai"("employee_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."tb_perjanjian_sewa" ADD CONSTRAINT "tb_perjanjian_sewa_resident_id_fkey" FOREIGN KEY ("resident_id") REFERENCES "public"."tb_penghuni"("resident_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."tb_permintaan_pemeliharaan" ADD CONSTRAINT "tb_permintaan_pemeliharaan_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "public"."tb_pegawai"("employee_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."tb_permintaan_pemeliharaan" ADD CONSTRAINT "tb_permintaan_pemeliharaan_resident_id_fkey" FOREIGN KEY ("resident_id") REFERENCES "public"."tb_penghuni"("resident_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."tb_tagihan" ADD CONSTRAINT "tb_tagihan_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "public"."tb_pegawai"("employee_id") ON DELETE RESTRICT ON UPDATE CASCADE;

