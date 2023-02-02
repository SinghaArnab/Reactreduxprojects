import {configureStore} from '@reduxjs/toolkit'
import counterSlice from './Slices/CounterSlice'
import EshopSlice from './Slices/EshopSlice'
import todoSlice from './Slices/TodoSlice'


const store=configureStore({
    reducer:{
        counter:counterSlice,
        Todo:todoSlice,
        Eshop:EshopSlice
    }
})

export default store