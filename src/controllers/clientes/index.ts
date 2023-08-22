import { PrismaClient } from '@prisma/client'
import { error } from 'console'
import { Request, Response, response } from 'express'

const prisma = new PrismaClient() // creacion instancia de prisma 

const getClientes = async (req:Request, res:Response)=>{

    try{
        const result = await prisma.clientes.findMany();
        res.status(200).json(result)
    }catch{
        console.log("Se presento un error", error)
        res.status(500).json(error)
    }
}

const getCliente = async (req: Request, res: Response)=>{
    const {id} = req.params
    try{
        const result = await prisma.clientes.findUnique({
        where: { id: parseInt(id)} 
        })
        res.status(200).json(result);
    }catch(error){
        console.log("Se presento un error", error)
        res.status(500).json(error)
    }
}

const postCliente = async (req:Request, res:  Response)=>{
    try {
        const result = await prisma.clientes.create({data: req.body})
        res.status(200).json(result)
    } catch (error) {
        console.log("Se presento un error", error)
        res.status(500).json(error)
    }
}

const putCliente = async (req:Request, res: Response)=>{
    const {id}=req.params
    const {body}=req
    
    try {
        const result= await prisma.clientes.update({where: {id: parseInt(id)},data:body})
        res.status(200).json(result)
    } catch (error) {
        console.log("Se presento un error", error)
        res.status(500).json(error)
    }
}

const deleteCliente = async (req:Request, res: Response)=>{
    const {id} = req.params
    try {
        const result= await prisma.clientes.delete({
            where:{id: parseInt(id)}
        })
        res.status(200).json(result)
    } catch (error) {
        console.log("Se presento un error", error);
        res.status(500).json(error)        
    }
}

export{
    getClientes,
    getCliente,
    postCliente,
    putCliente,
    deleteCliente
}