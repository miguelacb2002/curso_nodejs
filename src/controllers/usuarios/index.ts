import { PrismaClient } from '@prisma/client'
import { error } from 'console'
import { Request, Response, response } from 'express'

const prisma = new PrismaClient() // creacion instancia de prisma 

const getUsuarios = async (req:Request, res:Response)=>{

    try{
        const result = await prisma.usuarios.findMany();
        res.status(200).json(result)
    }catch{
        console.log("Se presento un error", error)
        res.status(500).json(error)
    }
}

const getUsuario = async (req: Request, res: Response)=>{
    const {id} = req.params
    try{
        const result = await prisma.usuarios.findUnique({
        where: { id: parseInt(id)} 
        })
        res.status(200).json(result);
    }catch(error){
        console.log("Se presento un error", error)
        res.status(500).json(error)
    }
}

const postUsuario = async (req:Request, res:  Response)=>{
    try {
        const result = await prisma.usuarios.create({data: req.body})
        res.status(200).json(result)
    } catch (error) {
        console.log("Se presento un error", error)
        res.status(500).json(error)
    }
}

const putUsuario = async (req:Request, res: Response)=>{
    const {id}=req.params
    const {body}=req
    
    try {
        const result= await prisma.usuarios.update({where: {id: parseInt(id)},data:body})
        res.status(200).json(result)
    } catch (error) {
        console.log("Se presento un error", error)
        res.status(500).json(error)
    }
}

const deleteUsuario = async (req:Request, res: Response)=>{
    const {id} = req.params
    try {
        const result= await prisma.usuarios.delete({
            where:{id: parseInt(id)}
        })
        res.status(200).json(result)
    } catch (error) {
        console.log("Se presento un error", error);
        res.status(500).json(error)        
    }
}

export{
    getUsuarios,
    getUsuario,
    postUsuario,
    putUsuario,
    deleteUsuario
}