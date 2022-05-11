import React from 'react'
import ToDoList from './ToDoList';

const ViewToDo=()=> {
  return (
    <div className='ui raised very padded text container segment' style={{marginTop:'80px'}}>
      <ToDoList/>
    </div>
  )
}
export default ViewToDo;