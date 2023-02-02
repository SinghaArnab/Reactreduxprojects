import {createSlice} from '@reduxjs/toolkit'
import {v4 as uuidV4} from 'uuid'

const todoSlice=createSlice({
    name:"Todo",
    initialState:{
        todo:[],
        updateData:{}
    },
    reducers:{
        Addtodo: (state,action)=>{
            const newTodo={
                id:uuidV4(),
                todoText:action.payload,
                completed:false
            }
            state.todo.push(newTodo)
        },
       
        DeleteTodo: (state,action)=>{
            const FilteredTodo=state.todo.filter((x)=>x.id !==action.payload)
            state.todo=FilteredTodo
        },

        todoUpdate:(state,action)=>{
            const upadtetodo=state.todo.find((x)=>x.id===action.payload)
            state.updateData=upadtetodo
        },

        updateTodos:(state,action)=>{
            const newData=state.todo.find((x)=>x.id===state.updateData.id)
            newData.todoText=action.payload
        },

        taskDone:(state,action)=>{
            const done=state.todo.find((x)=>x.id===action.payload)
            done.completed=!done.completed

        }
    }
})


export default todoSlice.reducer

export const {Addtodo,DeleteTodo,todoUpdate,updateTodos,taskDone}=todoSlice.actions