import  * as C from './styles';
import { AiFillDelete } from "react-icons/ai";
type TaskType = {
    id: any
    delHandle: (e:any)=>void
    title: string
    done?:  boolean
    donehandle: (e:any)=>void
}
export const Task = ({title, done,donehandle, id, delHandle}: TaskType)=>{
    return(
        <C.TaskContainer>
            <input id={id} className='checkInput' defaultChecked checked={done} 
            onChange={donehandle}type="checkbox" />
            <h3>{title}</h3>
            <AiFillDelete 
                className="iconDelete"
                id={id} 
                onClick={delHandle}  />
        </C.TaskContainer>
    )
}