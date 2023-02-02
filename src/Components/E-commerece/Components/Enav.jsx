/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState,useEffect } from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { Searchbar } from '../../../Store/Slices/EshopSlice';

const Enav = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [inputSearch,setInputSearch]=useState('')

  const dispatch=useDispatch()

  const { cartProducts,SearchData } = useSelector(state => state.Eshop)

  useEffect(() => {
    onSubmitForm()
  }, [])
  
  const onValueChange=(e)=>{
    setInputSearch(e.target.value)
    dispatch(Searchbar(inputSearch))
  }
  const onSubmitForm=()=>{
    dispatch(Searchbar(inputSearch))
  }
  

  console.log(SearchData);

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-1 text-black">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <div className='w-[500px] flex justify-between '>
            <NavLink className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase  text-black" href='#none' >
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-black logonameextra"><span className='text-[#DC0000] mr-[10px] text-[20px] logoname'>
                E</span>Shop</span>
            </NavLink>

            <div className="font-sans text-black bg-white flex items-center justify-center">
              <div className="border rounded overflow-hidden flex">
              <div>
                <input type="text" className="px-4 py-2 outline-none" placeholder="Search..." value={inputSearch} onChange={onValueChange} />
                </div>
                <button className="flex items-center justify-center px-4 border-l" type='submit' onClick={onSubmitForm}>
                  Go
                </button>
              </div>
            </div>
          </div>

            <button className="lg:text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)} >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div className={"lg:flex flex-grow items-center" + (navbarOpen ? " flex" : " hidden")} id="example-navbar-danger" >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item ">
                <NavLink className="px-3 py-2 flex items-center text-xs uppercase font-bold text-red-400 leading-snug hover:opacity-75" to='/Eshop' >
                  <i className="fa-solid fa-house text-lg leading-lg text-red-400  opacity-75 Eshoplogo2"></i><span className="ml-2 subnavitems">Home</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75" to='#none'>
                  <i className="fa-solid fa-shirt text-lg leading-lg opacity-75 Eshoplogo3"></i><span className="ml-2 subnavitems">Products</span>
                </NavLink>
              </li>

              <li className="nav-item relative">
                <NavLink className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75" to='/Eshop/Cart'>
                  <i className="fa-solid fa-cart-shopping text-lg leading-lg opacity-75  Eshoplogo4"></i><span className="mr-1 top-[3%] left-[20%] lg:left-[25%] absolute Eshopcart5">{cartProducts && cartProducts.length}</span>
                  <span className="ml-2 mr-1 subnavitems">Cart</span>
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

export default Enav
