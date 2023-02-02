import React, { useState } from 'react'
import { Outlet, NavLink } from 'react-router-dom'

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-[#263159]">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <NavLink className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" href='#none' >
              Redux-Toolkit
            </NavLink>
            <button className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)} >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div className={"lg:flex flex-grow items-center" + (navbarOpen ? " flex" : " hidden")} id="example-navbar-danger" >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item subnavitems">
                <NavLink className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" to='/' >
                  <i className="fa-solid fa-hourglass-half text-lg leading-lg text-white"></i><span className="ml-2">Counter</span>
                </NavLink>
              </li>
              <li className="nav-item subnavitems">
                <NavLink className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" to='Todo'>
                  <i className="fa-solid fa-calendar-day text-lg leading-lg text-white"></i><span className="ml-2">Todo</span>
                </NavLink>
              </li>
              <li className="nav-item subnavitems">
                <NavLink className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" to='Eshop'>
                  <i className="fa-solid fa-calendar-day text-lg leading-lg text-white "></i><span className="ml-2">E-shop</span>
                </NavLink>
              </li>

            </ul>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
}

export default Navbar