import { useDispatch, useSelector } from "react-redux"
import { addAuth } from "../API/authSlice"
import { setItems } from "../API/userSlice"
//import { useNavigate } from "react-router-dom"

export const useLogout=()=>{
    //const navigate=useNavigate()
    const dispatch=useDispatch()
    //const {value}=useSelector((state)=>state.counter)
    const logout=()=>{  
    localStorage.removeItem('user')
  

    dispatch(addAuth({}))
    dispatch(setItems([]))
    
    }
    return {logout}
}
