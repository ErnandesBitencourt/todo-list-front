import React, { useEffect, useState } from "react";
import { CreateTask } from "../endpoints/createTask/CreateTask";
import { ToDoList } from "../endpoints/toDoList/ToDoList";
import { ToDoListFilters } from "../endpoints/toDoListFilters/ToDoListFilters";
import {v4 as uuidv4 } from 'uuid'
import { Div, Footer, H1, Header, Main, MainCreateTask, MainTodoList } from "./StyledHome";

const LOCAL_STORAGE_KEY = 'TodoAPP'

export const Home = () => { 
  const [todos, setTodos] = useState([]);
  const [filterPages,setFilterPages]  = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [newTask,setNewTask]= useState([]) 
  const [ count , seTCount] = useState(false)
  const [changeColor, setChangeColor] = useState(true)  

//change color // 
const buttonChangeColor = () => {
    if(changeColor===true){
       return setChangeColor(!true)
    }else return setChangeColor(true)
}; 

useEffect(()=>{
    const todosStored = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(todosStored){
        return setTodos(todosStored),
        setFilterPages("all"),
        setFilteredTodos(todosStored);
    }
},[]);

useEffect(()=>{
    if(todos.length !==0 ){
        return   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
    }
},[todos])

//beautiful with controlled input
const onchangeNewtask = (e) =>{
    return  setNewTask(e.target.value)
}

// create new task
const addTask = (e) =>{
    e.preventDefault();
   if(newTask.length > 0){
    return setTodos([...todos, {id:uuidv4(), task:newTask, complete: false}]);
   }else{
        alert("it is necessary to write a task")
   }
};

//dealing with the complete or incomplete task.
const toggleTask = (id) =>{
    const newTask = [...todos];
    const selecteTask = todos.find(todo => todo.id === id);
    selecteTask.complete = !selecteTask.complete
   return setTodos(newTask);
};

// clear complete tasks
const clearCompleteTasks = () => {
    const remainingTask = todos.filter(todo => !todo.complete);
   return setTodos(remainingTask);
};

// delete task by clicking the button
const deleteTask = (id) => {
    const remainingTask =  todos.filter(todo => todo.id !== id);
    return  setTodos(remainingTask)
};

//count of all task incomplete
const countTaskIncomplete = () => {
    const count = todos.filter(todo => !todo.complete);
     return count.length === 1 ?  `1 item left Active` : `${count.length} items left Active` ;
};
const countTaskcomplete = () => {
    const count = todos.filter(todo => todo.complete);
     return count.length === 1 ?  `1 item left completed` : `${count.length} items left completed` ;
};

// change lis displayed based on filter 

const filterList =  () => {
    if(filterPages === "all"){
        return  setFilteredTodos(todos),seTCount(false);
    };
    if(filterPages === "active"){
        const activeTasks = todos.filter(todo => !todo.complete);
        return  setFilteredTodos(activeTasks),seTCount(false);
    };
    if(filterPages ==='completed'){
        const completedTask = todos.filter(todo => todo.complete)
        return  setFilteredTodos(completedTask),seTCount(true);
    };  
};
useEffect(() => {
    return  filterList();
  }, [todos, filterPages])


return (
   <Main  changeColor ={changeColor}>
        <Div changeColor={changeColor}>
            <Header>
                <H1>T o d o</H1> <button onClick={()=>buttonChangeColor()} changeColor ={changeColor} >Mudar cor</button>
            </Header>
            <MainCreateTask changeColor ={changeColor} >
                <CreateTask
                onchangeNewtask={onchangeNewtask}
                addTask={addTask}
                newTask={newTask}
                    />
            </MainCreateTask>
            <MainTodoList  changeColor ={changeColor} >
                <ToDoList
                filteredTodos={filteredTodos}
                toggleTask={toggleTask}
                deleteTask={deleteTask}
                />
                
                <Footer changeColor ={changeColor} >
                    <ToDoListFilters
                        count  = {count}
                        countTaskcomplete ={countTaskcomplete }
                        countTaskIncomplete={countTaskIncomplete}
                        setFilterPages={setFilterPages}
                        clearCompleteTasks={clearCompleteTasks}
                    />
                 </Footer>
            </MainTodoList>
            
        </Div>
   </Main>
)

};