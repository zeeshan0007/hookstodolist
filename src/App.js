import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import NavBar from './components/NavBar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom"


import Contact from './components/Contact'
import Home from './components/Home'
import ViewToDo from './components/ViewToDo';

function App() {
  return (
    <div>
        <Router>
        <div className='app'>
          <NavBar/>
          <Routes>
            <Route exact path='/home' element={ <Home/> }/> 
            <Route path='/viewtodo' element={<ViewToDo/>}/>
            <Route path='/contact' element={<Contact/>}/>
          </Routes>
        </div>
    </Router>
    
    </div>
  );
}

export default App;
