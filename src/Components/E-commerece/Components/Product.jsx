/* eslint-disable array-callback-return */
/* eslint-disable no-redeclare */
/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { fetchProduct } from '../../../Store/Slices/EshopSlice';
import { AddProduct, singleProducts } from '../../../Store/Slices/EshopSlice';
import { STATUS } from '../../../Store/Slices/EshopSlice';

const Product = () => {
    const {Data, status, serchQuery } = useSelector(state => state.Eshop)
    console.log(status);

    const navigate = useNavigate()
    const dispatch = useDispatch()


    // if (serchQuery.length>0){
    //     var Filteed = Data.filter((x)=>x.category.toLowerCase() === serchQuery.toLowerCase().trim())
    // }
    // else{
    //     var Filteed = Data
    // }
        
     
    useEffect(() => {
        dispatch(fetchProduct())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [serchQuery.length])

    const addtocartbtn = (x) => {
        dispatch(AddProduct(x))
    }

    const SingleProduct = (id) => {

        dispatch(singleProducts(id))
        navigate(`/Eshop/${id}`)
    }


        return (
            <>
                {status === STATUS.LOADING ?
                    <div className='flex justify-center items-center'>
            <div id="wrapper">
                <div id="corpus"></div>
                <div id="spinner"></div>
            </div>
            <div id="text">&nbsp;Loading ...</div>
        </div>
                    :
                    <div className='flex justify-center items-center bg-[#f1e2f7] min-h-[86.5vh]'>

                        <div className='grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-[90%] mb-10'>
                            {Data && Data.filter((x)=>{
                                if(serchQuery===''){
                                    return x
                                }else if (x.category.toLowerCase().includes(serchQuery.toLowerCase())||x.title.toLowerCase().includes(serchQuery.toLowerCase())){
                                    console.log('hello gg')
                                    return x
                                }
                            }).map((x) => {
                                return (

                                    <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto EshopPdroduct pb-4 bg-white cartProduct " key={x.id}>
                                        <div className='Product_img_tab'>
                                            <img src={x.image} alt="img" width="200" height="200" />
                                        </div>
                                        <h4 className="mt-2 text-lg font-medium text-gray-700 dark:text-black">{x.title}</h4>
                                        <p className="text-blue-500">${x.price}</p>

                                        <div className='flex justify-around items-center flex-row w-full '>
                                            <button className='flex items-center justify-center w-[40%] px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700 ' onClick={() => addtocartbtn(x)} > <i className="fa-solid fa-cart-shopping text-lg leading-lg opacity-75 Eshoplogo4"></i> Add to Cart</button>
                                            <button className='flex items-center justify-center w-[45%] px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700' onClick={() => SingleProduct(x.id)}>🛍️ Learn More</button>
                                        </div>
                                    </div>

                                )
                            })

                            }

                        </div>
                    </div>
                }

            </>
        )
    }


export default Product
