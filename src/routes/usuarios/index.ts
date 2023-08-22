import express from 'express'
//importar controladores
import{
    getUsuarios,
    getUsuario,
    postUsuario,
    putUsuario,
    deleteUsuario
} from '../../controllers/usuarios' 
import { updateDateMiddleware } from '../../middleware/updateDate'

const router = express.Router()

//end points 
router.get("/",[updateDateMiddleware,getUsuarios]),
router.get("/:id",[updateDateMiddleware,getUsuario]),
router.post("/",[updateDateMiddleware,postUsuario]),
router.put("/:id",[updateDateMiddleware,putUsuario]),
router.delete("/:id",[updateDateMiddleware,deleteUsuario])

export default router