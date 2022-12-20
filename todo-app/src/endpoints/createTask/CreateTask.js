import React from "react"
import { Button, Div, Input, Main } from "./StyleCreateTask";


 export const CreateTask = ({onchangeNewtask,addTask,newTask}) =>{ 

    return (
        <Main>
            <form onSubmit={addTask}>
               <Div>
                    <Input
                        type={"text"}
                        onChange={onchangeNewtask}
                        name={"newTask"}
                        value={newTask}
                        placeholder={"Create task"}
                        required
                    />
                    <Button>add Task</Button>
               </Div>
            </form>
        </Main>
    )
    

 };