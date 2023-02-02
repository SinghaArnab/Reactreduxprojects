import React from 'react'
import { useState,useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { Addtodo,DeleteTodo,todoUpdate ,updateTodos,taskDone} from '../../Store/Slices/TodoSlice'

const Todo = () => {
    const state=useSelector(state=>state.Todo)
    const dispatch=useDispatch()

    const [input,setInput]=useState('')
    const [update,setUpdate]=useState(false)
    const [updateTodo,setUpdateTodo]=useState(null)

    useEffect(() => {

        setUpdateTodo(state.updateData.todoText)
 
    }, [state.updateData.todoText])
    

    const formSubmit=(e)=>{
        e.preventDefault()
        dispatch(Addtodo(input))
        setInput("")
    }

    console.log(state);

    const deleteTodo=(id)=>{
        dispatch(DeleteTodo(id))
    }

    const updatetodo=(id)=>{
        dispatch(todoUpdate(id))
        setUpdate(true)
        setUpdateTodo(state.updateData.todoText)
    }

    const handelChange=(e)=>{
        setUpdateTodo(e.target.value)    
    }

    const updateBtn=()=>{
        dispatch(updateTodos(updateTodo))
        setUpdate(false)
    }

    const complete=(id)=>{
        dispatch(taskDone(id))
    }



    return (
        <div className='min-h-[91.2vh] w-[100%] bg-[#417D7A] flex  justify-start items-center flex-col pt-[20%] md:pt-[0%] p-2 mb-[10%] md:mb-[0%] '>

            <h1 className='text-[50px] font-semibold text-yellow-300 mb-5'>To DO List</h1> 
        { update  ?
            <div className='min-h-[30%] w-[90%] md:w-[50%] bg-yellow-200 flex justify-between items-center flex-col md:flex-row p-2'>
                <input className='text-black font-mono text-[30px] w-[99%] md:w-[80%] outline-none' name='todoText' value={updateTodo || ""} onChange={handelChange} />
                <div className='flex justify-center items-center w-[100%] sm:w-[20%] gap-1'>
                    <button className='h-[40px] md:[110px] w-[50%] md:w-[45%] bg-green-500 text-white hover:bg-blue-300' type='submit' onClick={()=>updateBtn()} >Update</button>
                    <button className='h-[40px] md:[110px] w-[50%] md:w-[45%] bg-red-500 text-white hover:bg-blue-300' type='submit' onClick={()=>setUpdate(false)}>cancel</button>
                </div>
            </div>
        :

            <form className='min-h-[30%] w-[90%] md:w-[50%] bg-yellow-200 flex justify-between items-center flex-col md:flex-row p-2' onSubmit={formSubmit}>
                <input className='text-black font-mono text-[30px] w-[99%] md:w-[80%] outline-none' name='todoText' value={input} onChange={(e)=>setInput(e.target.value)}/>
                <button className='h-[40px] md:[110px] w-[100%] md:w-[20%] bg-violet-500 text-white hover:bg-blue-300' type='submit'>Save</button>
            </form>
        }

        {  state && state.todo.map((x,index)=>{
                return (
                    <div className=' mt-6 bg-white p-1 rounded-md text-gray-500 shadow-lg w-[90%] sm:w-[50%] flex justify-between items-center flex-row' key={x.id} >
                    <h1 className={`text-black font-mono text-[30px] ${x.completed ? 'line-through': 'no-underline'} overflow-auto `}>{index+1}. <span>{x.todoText}</span></h1>
                    <div className=' h-[102px] md:h-[50px] w-[33%] md:w-[18%] flex justify-center items-center flex-col md:flex-row'>
                        <button className='h-[50px] min-w-[10%] text-yellow-400 text-[25px] md:pl-2' onClick={()=>complete(x.id)}><i className="fa-regular fa-circle-check"></i></button>
                        <button className='h-[50px] min-w-[10%] text-pink-600  text-[25px] md:pl-2' onClick={()=>updatetodo(x.id)}><i className="fa-regular fa-pen-to-square"></i></button>
                        <button className='h-[50px] min-w-[10%] text-red-600 text-[25px] md:pl-2' onClick={()=>deleteTodo(x.id)}><i className="fa-solid fa-trash"></i></button>
                    </div>
                </div>
                )
                
            })
                       
        }
        </div>
    )
}

export default Todo
