import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom"


import SignUpForm from './components/SignUpForm'
import Home from './components/Home'
import ViewToDo from './components/ViewToDo';
import AddTodoFromComponent from './components/AddTodoFromComponent';

function App() {
  return (
    <div>
        <Router>
        <div className='app'>
          <Home/>
          <Routes>
            <Route path='/viewtodo' element={<ViewToDo/>}/>
            <Route path='/addtodo' element={<AddTodoFromComponent/>}/>
            <Route path='/signupform' element={<SignUpForm/>}/>
          </Routes>
        </div>
    </Router>
    
    </div>
  );
}

export default App;
