import React from "react";


export const ToDoList = ({ filteredTodos,toggleTask, deleteTask}) => { 
   

    return (
        <main>
            {filteredTodos.map((todo) =>{
                const toggleTasks = () =>{
                  return  toggleTask(todo.id)
                }
                   return(
                    <div key={todo.id}>
                        <input
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
                    </div>
                ) 
            })}
        </main>
    )

}