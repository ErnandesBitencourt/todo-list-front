import React from "react"

 export const CreateTask = ({onchangeNewtask,addTask,newTask}) =>{ 

    return (
        <main>
            <form onSubmit={addTask}>
               <div>
                    <input
                        type={"text"}
                        onChange={onchangeNewtask}
                        name={"newTask"}
                        value={newTask}
                    />
                    <button>add Task</button>
               </div>
            </form>
        </main>
    )
    

 };