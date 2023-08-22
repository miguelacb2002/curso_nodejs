/*
  Warnings:

  - You are about to drop the column `apeliidos` on the `Clientes` table. All the data in the column will be lost.
  - You are about to drop the column `clave` on the `Clientes` table. All the data in the column will be lost.
  - You are about to drop the column `no_documento` on the `Clientes` table. All the data in the column will be lost.
  - You are about to drop the column `tipo_documento` on the `Clientes` table. All the data in the column will be lost.
  - You are about to drop the column `nombres` on the `Productos` table. All the data in the column will be lost.
  - You are about to drop the column `precio_compra` on the `Productos` table. All the data in the column will be lost.
  - You are about to drop the column `precio_venta` on the `Productos` table. All the data in the column will be lost.
  - You are about to drop the column `apeliidos` on the `Usuarios` table. All the data in the column will be lost.
  - Added the required column `apellidos` to the `Clientes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `noDocumento` to the `Clientes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipoDocumento` to the `Clientes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `clienteId` to the `Pedidos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nombre` to the `Productos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `precioCompra` to the `Productos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `precioVenta` to the `Productos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `apellidos` to the `Usuarios` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Clientes" DROP COLUMN "apeliidos",
DROP COLUMN "clave",
DROP COLUMN "no_documento",
DROP COLUMN "tipo_documento",
ADD COLUMN     "apellidos" TEXT NOT NULL,
ADD COLUMN     "noDocumento" TEXT NOT NULL,
ADD COLUMN     "tipoDocumento" TEXT NOT NULL,
ALTER COLUMN "direccion" DROP NOT NULL,
ALTER COLUMN "notas" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Pedidos" ADD COLUMN     "clienteId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Productos" DROP COLUMN "nombres",
DROP COLUMN "precio_compra",
DROP COLUMN "precio_venta",
ADD COLUMN     "nombre" TEXT NOT NULL,
ADD COLUMN     "precioCompra" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "precioVenta" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "Usuarios" DROP COLUMN "apeliidos",
ADD COLUMN     "apellidos" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Pedidos" ADD CONSTRAINT "Pedidos_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Clientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
