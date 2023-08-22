import { PrismaClient } from '@prisma/client'
import { error } from 'console'
import { Request, Response, response } from 'express'

const prisma = new PrismaClient() // creacion instancia de prisma 

const getCategorias = async (req:Request, res:Response)=>{

    try{
        const result = await prisma.categorias.findMany();
        res.status(200).json(result)
    }catch{
        console.log("Se presento un error", error)
        res.status(500).json(error)
    }
}

const getCategoria = async (req: Request, res: Response)=>{
    const {id} = req.params
    try{
        const result = await prisma.categorias.findUnique({
        where: { id: parseInt(id)} 
        })
        res.status(200).json(result);
    }catch(error){
        console.log("Se presento un error", error)
        res.status(500).json(error)
    }
}

const postCategoria = async (req:Request, res:  Response)=>{
    try {
        const result = await prisma.categorias.create({data: req.body})
        res.status(200).json(result)
    } catch (error) {
        console.log("Se presento un error", error)
        res.status(500).json(error)
    }
}

const putCategoria = async (req:Request, res: Response)=>{
    const {id}=req.params
    const {body}=req
    
    try {
        const result= await prisma.categorias.update({where: {id: parseInt(id)},data:body})
        res.status(200).json(result)
    } catch (error) {
        console.log("Se presento un error", error)
        res.status(500).json(error)
    }
}

const deleteCategoria = async (req:Request, res: Response)=>{
    const {id} = req.params
    try {
        const result= await prisma.categorias.delete({
            where:{id: parseInt(id)}
        })
        res.status(200).json(result)
    } catch (error) {
        console.log("Se presento un error", error);
        res.status(500).json(error)        
    }
}

export{
    getCategorias,
    getCategoria,
    postCategoria,
    putCategoria,
    deleteCategoria
}