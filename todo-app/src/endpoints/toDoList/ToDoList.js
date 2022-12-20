import React from "react";
import { Input1 } from "../../home/StyledHome";
import { Input } from "../createTask/StyleCreateTask";
import { Div, Main } from "./StyleToDoList";


export const ToDoList = ({ filteredTodos,toggleTask, deleteTask}) => { 
   

    return (
        <Main>
            {filteredTodos.length> 0 ? filteredTodos.map((todo) =>{
                const toggleTasks = () =>{
                  return  toggleTask(todo.id)
                }
                   return(
                    <Div key={todo.id}>
                        <Input1
                        type={'checkbox'}
                        checked={todo.complete}
                        onChange={toggleTasks}
                        />
                        <div>
                            {todo.task}
                        </div>

                        <div>
                            <button onClick={()=>{deleteTask(todo.id)}} > Deletar </button>
                        </div>
                    </Div>
                ) 
            }):<p>No task created</p>}
        </Main>
    )

}