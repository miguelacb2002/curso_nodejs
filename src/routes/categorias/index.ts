import express from 'express'
//importar controladores
import{
    getCategorias,
    getCategoria,
    postCategoria,
    putCategoria,
    deleteCategoria
} from '../../controllers/categorias' 
import { updateDateMiddleware } from '../../middleware/updateDate'

const router = express.Router()

//end points 
router.get("/",[updateDateMiddleware,getCategorias]),
router.get("/:id",[updateDateMiddleware,getCategoria]),
router.post("/",[updateDateMiddleware,postCategoria]),
router.put("/:id",[updateDateMiddleware,putCategoria]),
router.delete("/:id",[updateDateMiddleware,deleteCategoria])

export default router