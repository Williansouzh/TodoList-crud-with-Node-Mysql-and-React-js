import express, { urlencoded } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import cors from 'cors';
import todoRouter from './routes/todoRoutes'
const server = express()
dotenv.config()
server.use(cors())
server.use(express.static(path.join(__dirname, '../public')));
server.use(urlencoded({extended: true}));


server.use(todoRouter)
server.use((req, res)=>{
    res.json({
        error: "rota não encontrada"
    })
})

server.listen(process.env.PORT, ()=>{
    console.log("rodando servidor na porta:", process.env.PORT)
})