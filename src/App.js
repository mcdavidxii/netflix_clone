import React from 'react'
import Landing from './screens/Landing'
import Login from './screens/Login';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"


function App() {
    const user = null;
  return (
    <div className='app'>
        <Router>
            {!user ? (
                <Login/>
            ):(
                <Routes>  
                    <Route exact path='/' element={<Landing/>}/>
                </Routes>
            )}
            
        </Router>
    </div>
  )
}

export default App