import {createSlice} from '@reduxjs/toolkit'

export const counterSlice=createSlice({
    name:'userSlice',
    initialState:{
      value:[]},
    reducers:{
        setItems:(state,action)=>{
            state.value=action.payload},
        addItem:(state,action)=>{
            state.value=[action.payload,...state.value]},
        removeItem:(state,action)=>{        
            const itemId=action.payload
            const newValues=state.value.filter(item=>{
            return item._id !==itemId})
            state.value=newValues            
          }}})
            

        
        
export const {setItems,addItem,removeItem} = counterSlice.actions
//export const selectItems=(state)=>state.userSlice.value
export default counterSlice.reducer
//to select
// watch the name!!!
//const {value}=useSelector((state)=>state.counter)