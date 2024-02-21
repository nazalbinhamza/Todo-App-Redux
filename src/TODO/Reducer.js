import { createSlice } from "@reduxjs/toolkit";



const todoReducer = createSlice({
    name: "todo",
    initialState:[],
    reducers:{
        addTodo: (state,action) => {
            state.push({ id: state.length + 1, task: action.payload})
        },
        editTodo: (state,action) => {
            return state.map((item)=> item.id === action.payload ? {...item, edit: true} : item)
        },
        updateTodo: (state,action) => {
            return state.map((item)=> item.id === action.payload.id ? {id:item.id, task: action.payload.task,edit: false}: item)
        },
        deleteTodo: (state,action) => {
            return state.filter((item)=> item.id !== action.payload)
        }
    }
})
export const {addTodo,editTodo,updateTodo,deleteTodo} = todoReducer.actions;
export default todoReducer.reducer