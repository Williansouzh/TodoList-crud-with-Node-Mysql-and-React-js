import React, { HtmlHTMLAttributes, InputHTMLAttributes, useEffect, useState } from 'react';
import * as C from './styles'
import { Button } from './components/button';
import { Task } from './components/task';
import { api } from './api';
import { taskType } from './types/TasksType';
import axios from 'axios'
import { stringify } from 'querystring';
import { InputType } from 'zlib';
function App() {
  //states
  const [tasks, setTasks] = useState<taskType[]>([])
  const [newTask, setNewTask] = useState('')
  //functions 

  useEffect(() =>{
    updateScreen()
  }, [])

  const updateScreen = async ()=>{
    setTasks(await api.seeAllTasks())
  };
  const updateTask = async (id:any)=>{
    let task = {
      id: id.target.id,
      done: id.target.checked
    }
    await api.updateTask(task.id, task.done)
    updateScreen()
  }
  const addTask = async ()=>{
    await api.createTask(newTask).then(async()=>{
      setNewTask("");
      setTasks(await api.seeAllTasks())
      updateScreen()
    })
  }
  const seeAllTasks = async ()=>{
    await api.seeAllTasks().then(response=>setTasks(response)).then(()=>console.log(tasks))
  };  
  const seePeddingTasks = async ()=>{
    api.seePeddingTasks().then(response=>setTasks(response));
    setTasks(await api.seePeddingTasks())
  };
  const seeCompletedTasks = async ()=>{
    api.seeCompletedTasks().then(response=>setTasks(response));
    setTasks(await api.seeCompletedTasks())
  };
  const deleteTask = async (id:any)=>{
    api.deleteTask(id.target.id);
    setTasks(await api.seeAllTasks());
    updateScreen()
  };
  return (
    <C.Container>
      <form onSubmit={addTask}>
        <input 
          className='newTaskInput'
          type='text'
          value={newTask}
          onChange={(e)=>setNewTask(e.target.value)}
          placeholder='Add new task'
          name='newTask'
        />
      </form>
      
      <nav>
        <div className='navButtons'>
          <Button text='All' onclickHandle={seeAllTasks}/>
          <Button text='Pending' onclickHandle={seePeddingTasks}/>
          <Button text='Completed' onclickHandle={seeCompletedTasks}/>
        </div>
          <Button emphasis text='Create task' onclickHandle={addTask}/>
      </nav>
      <hr />
      {tasks  && 
        <C.TaskListContainer>
          {tasks.map((task, index)=>(
            <Task 
              id={task.id}
              title={task.taskTitle}
              done={task.done}
              key={index}
              delHandle={deleteTask}
              donehandle={updateTask}
            />
          ))}
        </C.TaskListContainer>
      }
    </C.Container>
  );
}

export default App;
