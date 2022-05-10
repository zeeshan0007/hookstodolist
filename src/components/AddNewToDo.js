import React, { useState } from 'react'

const AddNewToDo=({addtodo})=> { //props addtodo

    const [todos,setTodo]=useState('');

    const handleSubmit=(e)=> {
        e.preventDefault();
        addtodo(todos) //call function and pass todos data that user will type in the form 
        setTodo('')  // to clear the form becuse previous added data remains there 

    }
  return (
    <form onSubmit={handleSubmit}>
      {/*call setState and set the form input to the todos  */}
        <input type='text' value={todos} id='todo' onChange={(e)=>setTodo(e.target.value)} ></input> 
        <input className="btn btn-primary" type='submit'/>
    </form>
  )
}
export default AddNewToDo;
