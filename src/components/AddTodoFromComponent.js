import React from 'react'
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'

const AddTodoFromComponent=()=> {

  const TodoValidateSchema=yup.object().shape({
    todo:yup.string().required('Can not be empty')
  })


  const {register,handleSubmit,formState:{errors}}=useForm({
    resolver:yupResolver(TodoValidateSchema)
  })

    const[todo,setTodo]=useState([]);
   
    const onSubmit=(data,e)=>{
      e.preventDefault()
      console.log(data)
      localStorage.setItem('todo',todo)
      setTodo('')

    }
  return (
      <div>
          <h1>Please add your todo to push to the todo list</h1>
      <form className='form' onSubmit={handleSubmit(onSubmit)}  >
       
        <input name='todo' {...register('todo')} value={todo} type='text' placeholder='Enter new todo ' onChange={(e)=>{setTodo(e.target.value)}}/>{errors.todo&&<p>{errors.todo?.message}</p>}
        <button type='submit'>Add todo</button>
     </form>
      </div>
  
  )
}
export default AddTodoFromComponent;