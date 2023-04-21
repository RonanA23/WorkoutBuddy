
import './App.css';
import Navbar from './Components/Navbar';
import Register from './Components/Register';
import Ticket from './Components/Ticket';
import {BrowserRouter as Router,Routes,Route, Navigate} from 'react-router-dom'
import LoginPage from './Pages/Login';
import Home from './Pages/Home';
import { useDispatch, useSelector } from 'react-redux';
import RegisterPage from './Pages/RegisterPage';
import { useEffect } from 'react';
import { addAuth } from './API/authSlice';

function App() {
  const {user}=useSelector((state)=>state.auth)
  const dispatch=useDispatch()
  const person=JSON.parse(localStorage.getItem('user'))

 // const count=useSelector((state)=>state.userSlice.value)
useEffect(()=>{

  const person=JSON.parse(localStorage.getItem('user'))

  if(person){
    dispatch(addAuth(person))

    
  }

},[])
 
  return (
    <div className="App">
     
      <Router>
      <Navbar/>
      <p>{user?.name}</p>
      <div className='bg-gray-200 h-[1000px] mt-[-35px]'>
      <Routes>
        <Route path='/' element={person ? <Home/> :<Navigate to='/register'/>}/>
        <Route path='/register' element={!person ?<RegisterPage/>:<Navigate to='/'/>}/>
        <Route path='/login' element={!person ?<LoginPage/>:<Navigate to='/'/>}/>
        
        {/*<Route path='/restricted' element={count?.name > 0 ?<Restricted/>:<Navigate to='/register'/>}/>*/}
      </Routes>

      </div>
    
     

      </Router>

    
      
    </div>
  );
}

export default App;
