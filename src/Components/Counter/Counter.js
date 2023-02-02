import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../../Store/Slices/CounterSlice'

const Counter = () => {
  const state = useSelector(state => state.counter)
  const dispatch = useDispatch()
  console.log(state);
  const [input, setInput] = useState()

  useEffect(() => {
    if (state) {
      setInput(state.counterValue)
    }
  }, [state])

  return (
    <div className='flex justify-center items-center min-h-[91.2vh] max-w-[100%] bg-slate-400 relative counterBack'>

      <h1 className='text-[50px] font-semibold text-black mb-5 absolute top-[5%] CounterText '>Counter</h1> 

        <div className='flex justify-center items-center min-h-[20%] max-w-[60%] flex-col  sm:flex-row  gap-3'>
        <button className='h-[50px] w-[250px] bg-green-500 text-center text-[30px] font-mono ' onClick={() => dispatch(increment())}>Increment</button>

        <input className='h-[50px] w-[250px] bg-slate-900 text-white text-center text-[30px] font-semibold' value={input} onChange={(e) => setInput(e.target.value)} />

        <button className='h-[50px] w-[250px] bg-red-500 text-center text-[30px] font-mono' onClick={() => dispatch(decrement())}>Decrement</button>

      </div>

    </div>
  )
}

export default Counter
