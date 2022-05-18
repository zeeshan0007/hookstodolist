import React, { useState,useEffect } from 'react'
import AddNewToDo from './AddNewToDo';

const ToDoList=()=> {

    
   const [todos,setTodos]= useState(
  
    [
        {id:1, text: 'Buy Milk', done: true },
		{id:2, text: 'Dentist at 5pm', done: false },
		{id:3, text: 'Go to Gym', done: false },
    ],

    )
    const[updateId,setUpdateId]=useState("");
    const[newToDo,setNewToDo]=useState("");
    const items = localStorage.getItem('todo');

    useEffect(() => {
        const items = localStorage.getItem('todo');
        if (items) {
            setTodos([
                ...todos,//get the previous objects in the useState
               {id:getTime(), text:items,done:false}
            ]);        }
      },[items])

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
        }
        if(updateId !==""){
            //console.log('first')
            const update=todos.filter(item=>item.id===updateId);
				update[0].text=newToDo
					const tst= todos.map((item,index) => {
					if(item.id === todos) {
							return update[0];
						}
						return item;
					})
				  setTodos(tst)
                  setUpdateId("")
                  setNewToDo("")
        }else{
            setTodos([
                ...todos,//get the previous objects in the useState
               {id:getTime(), text:text,done:false}
            ]);
        }
      
    };
    const handleUpdate=(id)=>{
        debugger;
        const todoValues=todos;
        //console.log(todoValues)
        const updateValue=todoValues.filter(item=>item.id===id)
        //console.log(updateValue)
        setUpdateId(id)
        console.log(updateId)
        setNewToDo(updateValue[0].text)
        console.log(newToDo)


    }
    const handleDelete=(id)=>{
        console.log(id);
        
         const updatedTodos = todos.filter((t) => {
             return t.id !== id
         });
         
        setTodos(updatedTodos);
    }
     const toggleComplete=(id)=>{
        let updatedTodos = [...todos].map((todo) => {
          if (todo.id === id) {
            todo.completed = !todo.completed;
          }
          return todo;
        });
        setTodos(updatedTodos);
    }
    const moveUp=(index)=>{
        console.log(index)
            if(index===0){
                console.log(todos)
                let oldData =todos
                
                oldData.push(oldData.splice(index, 1)[0]);
                console.log(oldData)
                setTodos([...oldData])
    
            }else 
            if(index > 0) {
                let oldData = todos
                debugger;
                console.log(oldData)
                let temp = oldData[index]//clicked object wwill be here 
                console.log(temp)
                console.log(oldData[index-1])
                oldData[index] = oldData[index-1]
                console.log(oldData)
                oldData[index-1]=temp
                console.log(oldData)
                setTodos([...oldData])
                }
            
        
        }
	
    const moveDown=(index)=>{
		var i=todos.length-1
		if (index === i)
		{
			console.log('move is called', i)
			let oldData = todos
			// oldData.push(oldData.unshift(index, 1)[0]);
			let lastVal=oldData.splice(i)
			console.log(lastVal)
			let data=oldData.unshift(...lastVal)
			console.log(data)
			setTodos([...oldData])
		}
		else if(index < todos.length-1){
			let oldData = todos
			let temp = oldData[index]
			oldData[index] = oldData[index+1]
			oldData[index+1]=temp
			console.log(oldData)
			
			setTodos([...oldData])
        }
	}
  return (
    <div className="container">
			<div className="row">
        <AddNewToDo addtodo={addTodo} newToDo={newToDo} setNewToDo={setNewToDo} updateId={updateId} setUpdateId={setUpdateId}/>
      
        <ul>
        {todos.map((todo,index)=>{
            return(
                <div key={todo.id}>
                    <li key={todo.id}>
                        {todo.text}
                    </li> 
                    <button onClick={() => handleDelete(todo.id)} className="btn btn-danger btn-sm">Delete</button>
                    <input
                        type="checkbox"
                        id="completed"
                        checked={todo.completed}
                        onChange={() => toggleComplete(todo.id)}
                    />
                    <div className='btndiv'>
                    <button className='btn1' onClick={()=>{handleUpdate(todo.id)}}>Update</button>
                    <button className='btn1' onClick={()=>{moveUp(index)}}>moveUp</button>
                    <button className='btn1' onClick={()=>{moveDown(index)}}>moveDown</button>
                    </div>
                </div>
                
            )
            })}
        </ul>
        
    </div>
    </div>
  )
}
export default ToDoList;