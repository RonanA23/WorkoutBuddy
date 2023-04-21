import {createSlice} from '@reduxjs/toolkit'

export const authSlice=createSlice({
    name:'authSlice',
    initialState:{
      value:{}},
    reducers:{
        addAuth:(state,action)=>{
            state.value=action.payload},
        removeAuth:(state,action)=>{
            state.value=null}}})
           
export const {addAuth,removeAuth} = authSlice.actions
//export const selectItems=(state)=>state.userSlice.value
export default authSlice.reducer
//to select
// watch the name!!!
//const {value}=useSelector((state)=>state.counter)