import express from 'express'
//importar controladores
import{
    getClientes,
    getCliente,
    postCliente,
    putCliente,
    deleteCliente,
    checkClientes
} from '../../controllers/clientes' 
import { updateDateMiddleware } from '../../middleware/updateDate'

const router = express.Router()

//end points 
router.post("/check",[updateDateMiddleware,checkClientes]),
router.get("/",[updateDateMiddleware,getClientes]),
router.get("/:id",[updateDateMiddleware,getCliente]),
router.post("/",[updateDateMiddleware,postCliente]),
router.put("/:id",[updateDateMiddleware,putCliente]),
router.delete("/:id",[updateDateMiddleware,deleteCliente])

export default router