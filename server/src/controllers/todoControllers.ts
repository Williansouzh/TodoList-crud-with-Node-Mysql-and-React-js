import { Request, Response } from "express";
import { Task } from "../models/Task";

export const showTasks =  async (req: Request, res: Response)=>{
    try {

        console.log("conectado ao banco de dados!!");

        let list = await Task.findAll()
        res.json({
            list
        })
    } catch (error) {
        console.log("erro ao concetcar com banco de dados: ", error)
    }
};   

export const showCompletedTasks = async (req: Request, res: Response)=>{
    let completedTaks = await Task.findAll({
        where: {
            done: true
        }
    })
    res.json({
        completedTaks
    })
}
export const showPedingTasks = async (req: Request, res: Response)=>{
    let peddingTasks = await Task.findAll({
        where: {
            done: false
        }
    })
    res.json({
        peddingTasks
    })
}

export const createTask =  async (req: Request, res: Response)=>{
    let {taskTitle} = req.body
    let newTask = await Task.create({
        taskTitle: taskTitle
    });
    res.json({
        resposta: req.body
    })
};  
export const updateTask =  async (req: Request, res: Response)=>{
    let {id} = req.params;
    let {done} = req.body;
    let editTask = await Task.findByPk(id);
    
    if(editTask){
        editTask.done = done
        editTask.taskTitle = "updated"
        await editTask.save()
    }
    res.json({
        editTask    
    })
};  
export const removeTask =  async (req: Request, res: Response)=>{
    let {id} = req.params;

    let delTask = await Task.destroy({
        where: {id:id}
    })

    res.json({
        delTask
    })
};  