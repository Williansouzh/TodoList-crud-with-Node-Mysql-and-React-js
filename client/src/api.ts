import axios from 'axios';
import { taskType } from './types/TasksType';
const axiosInstance = axios.create({
    baseURL: 'http://localhost:3333',
    headers: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
      }
});

export const api = {
    seeAllTasks: async () =>{
        let response = await axiosInstance.get('/todo');
        return response.data.list
    },
    seePeddingTasks: async ()=>{
        let response = await axiosInstance.get('/todopeding')
        return response.data.peddingTasks
    },
    seeCompletedTasks: async ()=>{
        let response = await axiosInstance.get('/todocompleted')
        return response.data.completedTaks
    },
    deleteTask:(id:string)=>{
        axiosInstance.delete(`/todo/${id}`)
    },
    createTask: async (task:string)=>{
        axiosInstance.post('/todo', {
            taskTitle:task
        })
    },
    updateTask: async (id:string, done: boolean)=>{
        axiosInstance.put(`/todo/${id}`, {
            done:  done
        })
    }
}