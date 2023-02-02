import {createSlice} from '@reduxjs/toolkit'


const counterSlice=createSlice({
    name:"counter",
    initialState:{
        counterValue:0
    },
    reducers:{
        increment: (state)=>{
            state.counterValue +=1
        },

        decrement: (state)=>{
            state.counterValue -=1
        }
    }
})


export default counterSlice.reducer

export const {increment,decrement}=counterSlice.actions