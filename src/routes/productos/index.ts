import express from 'express'
//importar controladores
import{
    getProductos,
    getProducto,
    postProducto,
    putProducto,
    deleteProducto
} from '../../controllers/productos' 
import { updateDateMiddleware } from '../../middleware/updateDate'

const router = express.Router()

//end points 
router.get("/",[updateDateMiddleware,getProductos]),
router.get("/:id",[updateDateMiddleware,getProducto]),
router.post("/",[updateDateMiddleware,postProducto]),
router.put("/:id",[updateDateMiddleware,putProducto]),
router.delete("/:id",[updateDateMiddleware,deleteProducto])

export default router