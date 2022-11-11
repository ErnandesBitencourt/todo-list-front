import React from "react";


export const ToDoListFilters = ({countTaskIncomplete,setFilterPages,clearCompleteTasks,countTaskcomplete,count }) => {
 const filterpages = (filter) => {
   setFilterPages(filter);
 };
    return(
        <main>
            <p>{count ? countTaskcomplete(): countTaskIncomplete()}</p>
            <footer>
                <button onClick={()=>filterpages('all')} > all </button>
                <button onClick={()=>filterpages('active')}> active </button>
                <button onClick={()=>filterpages('completed')}> completed </button>
            </footer>
            <button onClick={()=>{clearCompleteTasks()}} >Clear Completed</button>
        </main>

    )
}