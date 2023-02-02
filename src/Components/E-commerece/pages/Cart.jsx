import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector ,useDispatch } from 'react-redux'
import { removeProduct,AddQuantity,removeQuantity } from '../../../Store/Slices/EshopSlice'

const Cart = () => {
    const {cartProducts}=useSelector(state=>state.Eshop)
    const Navigate = useNavigate()
    const dispatch=useDispatch()

    let price=0
    cartProducts.map((x)=>price+=(x.price*x.Qty))

    let Quantity=0
    cartProducts.map((x)=>Quantity+=x.Qty)

    const remove=(id)=>{
        dispatch(removeProduct(id))
    }

    const QtyIncrement=(id)=>{
        dispatch(AddQuantity(id))
    }

    const QtyDecrement=(id)=>{
        dispatch(removeQuantity(id))
    }

    


    return (
        <div>
            <div className="h-screen bg-[#f1e2f7]">
                <div className="py-12">


                    <div className="max-w-[80%] mx-auto bg-white shadow-lg rounded-lg  md:max-w-5xl ">
                        <div className="md:flex ">
                            <div className="w-full p-4 px-5 py-5">

                                <div className="md:grid md:grid-cols-3 gap-2 ">

                                    <div className="col-span-2 p-5">

                                        <h1 className="text-xl font-medium ">Shopping Cart</h1>

                                      { cartProducts && cartProducts.map((x)=>{
                                        return (

                                            <div className="flex justify-between items-center mt-6 pt-6" key={x.id}>
                                            <div className="flex  items-center">
                                                <img src={x.image} width="60" className="rounded " alt='img' />

                                                <div className="flex flex-col ml-3">
                                                    <span className="md:text-md font-medium">{x.title}</span>
                                                    <span className="text-xs font-light text-gray-400">{x.category}</span>

                                                </div>


                                            </div>

                                            <div className="flex justify-center items-center">

                                                <div className="pr-8 flex cursor-pointer ">
                                                    <button onClick={()=>QtyDecrement(x.id)}><span className="font-semibold">-</span></button>
                                                    <button className="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2">{x.Qty}</button>
                                                    <button onClick={()=>QtyIncrement(x.id)}><span className="font-semibold">+</span></button>
                                                </div>

                                                <div className="pr-8 ">

                                                    <span className="text-xs font-medium">₹{x.price}</span>
                                                </div>
                                                <div>
                                                <button onClick={()=>remove(x.id)}>
                                                    <i className="fa fa-close text-xs font-medium" ></i>
                                                    </button>
                                                </div>

                                            </div>

                                        </div>

                                        )
                                      })
                                        
                                        }

                                        <div className="flex justify-between items-center mt-6 pt-6 border-t mb-8 lg:mb-0">
                                            <div className="flex items-center cursor-pointer" onClick={() => Navigate('/Eshop')}>
                                                <i className="fa fa-arrow-left text-sm pr-2"></i>
                                                <span className="text-md  font-medium text-blue-500">Continue Shopping</span>
                                            </div>

                                            <div className="flex justify-center items-end">
                                                <span className="text-sm font-medium text-gray-400 mr-1">Subtotal:</span>
                                                <span className="text-lg font-bold text-gray-800 "> ${price&& (price.toFixed(2))} </span>

                                            </div>

                                        </div>


                                    </div>


                                    <div className="flex flex-col max-w-[90%] p-6 space-y-4 divide-y sm:w-96 sm:p-10 divide-gray-700 dark:bg-gray-900 dark:text-gray-100 rounded overflow-visible">
                                        <h2 className="text-2xl font-semibold">Order items</h2>
                                        <div className="pt-4 space-y-2">
                                            <div>
                                                <div className="flex justify-between">
                                                    <span>Subtotal</span>
                                                    <span>${price&& (price.toFixed(2))} </span>
                                                </div>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Quantity</span>
                                                <span>{Quantity}</span>
                                            </div>
                                        </div>
                                        <div className="pt-4 space-y-2">
                                            <div className="flex justify-between">
                                                <span>Service fee</span>
                                                <span>$0.50</span>
                                            </div>
                                            <div className="flex flex-col">
                                                <div className="flex justify-between">
                                                    <span>Delivery fee</span>
                                                    <span>$4.00</span>
                                                </div>
                                            </div>
                                            <div className="space-y-6">
                                                <div className="flex justify-between">
                                                    <span>Total</span>
                                                    <span className="font-semibold">${price&& (price.toFixed(2))}</span>
                                                </div>
                                                <button type="button" className="w-full py-2 font-semibold border rounded dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400">Go to checkout</button>
                                            </div>
                                        </div>
                                    </div>

                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
