import React from 'react'
// import { useForm } from 'react-hook-form';

const AddNewToDo=({addtodo,newToDo,setNewToDo,updateId,setUpdateId})=> { //props addtodo

 // const { register, handleSubmit, formState: { errors } } = useForm();
 // const onSubmit = data => console.log(data);

    const handleSubmitt=(e)=> {
      //console.log(data)
       e.preventDefault();
        addtodo(newToDo) //call function and pass todos data that user will type in the form 
        setNewToDo('')  // to clear the form becuse previous added data remains there 

    }
    const setFieldsEmpty=()=>
    {
      setUpdateId('')
      setNewToDo('')
    }
  return (
    <form className='form' onSubmit={handleSubmitt} >
      {/*call setState and set the form input to the todos  */}

        <input type='text' value={newToDo} id='todo' className='input-field' onChange={(e)=>setNewToDo(e.target.value)} ></input> 
        <input type="submit"></input>
        {updateId && <button
						className="back"
						onClick={()=>setFieldsEmpty()}
						type="button">
						Cancel
          </button>}
    </form>
  )
}
export default AddNewToDo;