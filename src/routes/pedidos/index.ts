import express from 'express'
//importar controladores
import{
    getPedidos,
    getPedido,
    postPedido,
    putPedido,
    deletePedido
} from '../../controllers/pedidos' 
import { updateDateMiddleware } from '../../middleware/updateDate'

const router = express.Router()

//end points 
router.get("/",[updateDateMiddleware,getPedidos]),
router.get("/:id",[updateDateMiddleware,getPedido]),
router.post("/",[updateDateMiddleware,postPedido]),
router.put("/:id",[updateDateMiddleware,putPedido]),
router.delete("/:id",[updateDateMiddleware,deletePedido])

export default router