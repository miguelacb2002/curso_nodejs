import { PrismaClient } from '@prisma/client'
import { error } from 'console'
import { Request, Response, response } from 'express'

const prisma = new PrismaClient() // creacion instancia de prisma 

const getPedidos = async (req:Request, res:Response)=>{
    try{
        const result = await prisma.pedidos.findMany({include:{
            cliente:true, 
            items:{include:{producto:true}}
        }});
        res.status(200).json(result)
    }catch{
        console.log("Se presento un error", error)
        res.status(500).json(error)
    }
}

const getPedido = async (req: Request, res: Response)=>{
    const {id} = req.params
    try{
        const result = await prisma.pedidos.findUnique({
        where: { id: parseInt(id)},
        include: {
            cliente:true,
            items:{include:{producto:true}}
        }
        })
        res.status(200).json(result);
    }catch(error){
        console.log("Se presento un error", error)
        res.status(500).json(error)
    }
}

const postPedido = async (req:Request, res:  Response)=>{
    try {
        const result = await prisma.pedidos.create({data: req.body})
        res.status(200).json(result)
    } catch (error) {
        console.log("Se presento un error", error)
        res.status(500).json(error)
    }
}

const putPedido = async (req:Request, res: Response)=>{
    const {id}=req.params
    const {body}=req
    
    try {
        const result= await prisma.pedidos.update({where: {id: parseInt(id)},data:body})
        res.status(200).json(result)
    } catch (error) {
        console.log("Se presento un error", error)
        res.status(500).json(error)
    }
}

const deletePedido = async (req:Request, res: Response)=>{
    const {id} = req.params
    try {
        const result= await prisma.pedidos.delete({
            where:{id: parseInt(id)}
        })
        res.status(200).json(result)
    } catch (error) {
        console.log("Se presento un error", error);
        res.status(500).json(error)        
    }
}

export{
    getPedidos,
    getPedido,
    postPedido,
    putPedido,
    deletePedido
}