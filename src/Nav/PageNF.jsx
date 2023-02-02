import React from 'react'
import { Link } from 'react-router-dom'


const PageNF = () => {
  return (

    <div className='mainconPNF'>
      <div className='bodyPNF'>
      <img  className='imgpagenotfound' src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=740&t=st=1670142902~exp=1670143502~hmac=d1415f56f9c59e6f4c003acfae9b8e966e7d1567f823eea3ba4b1a81281d9e74"alt="" />
      <Link to='/' className='pnfbutton'>Go to homepage</Link>
      </div>
       {/* <h2 className='flex justify-center text-center bg-red-400'>This Page Not Found</h2> */}
      
    </div>
  )
}

export default PageNF