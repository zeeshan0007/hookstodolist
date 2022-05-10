import React, { useState } from 'react'
import AddNewToDo from './AddNewToDo';

const ToDoList=()=> {
    
   const [todos,setTodos]= useState(
    [

        {id:1, text: 'Buy Milk', done: true },
		{id:2, text: 'Dentist at 5pm', done: false },
		{id:3, text: 'Go to Gym', done: false },

    ]
    )
  const  getTime=()=> {
        let d = new Date();
        var n = d.getTime();
        return n;
      }
    //console.log(todos);
    const addTodo=(text)=>{
        if(text===''){
            alert('cannot assign empty value')
            return
        }else{
            setTodos([
                ...todos,//get the previous objects in the useState
               {id:getTime(), text:text,done:false}
            ]);
        }
      
    };
    const handleDelete=(id)=> {
        console.log(id);
        
         const updatedTodos = todos.filter((t) => {
             return t.id !== id
         });
         
        setTodos([updatedTodos]);
     }
  return (
    <div className="container">
			<div className="row">
        <AddNewToDo addtodo={addTodo}/>
        <ul>
        {todos.map((todo)=>{
            return(
                <div key={todo.id}>
                    <li key={todo.id}>
                        {todo.text}
                    </li> 
                    <button onClick={() => handleDelete(todo.id)} className="btn btn-danger btn-sm">Delete</button>
                </div>
                
            )
            })}
        </ul>
        
    </div>
    </div>
  )
}
export default ToDoList;