import express from 'express'
import categoriasRoutes from './categorias';
import clientesRoutes from './clientes';
import pedidosRoutes from './pedidos';
import productosRoutes from './productos';
import usuariosRoutes from './usuarios';

const router = express.Router()

//end points 
router.use("/categorias",categoriasRoutes)
router.use("/clientes",clientesRoutes)
router.use("/pedidos",pedidosRoutes)
router.use("/productos",productosRoutes)
router.use("/usuarios",usuariosRoutes)

export default router 