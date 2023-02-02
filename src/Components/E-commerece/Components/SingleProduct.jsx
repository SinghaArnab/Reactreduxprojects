import React,{useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import {AddProduct,singleProducts } from '../../../Store/Slices/EshopSlice'
import { fetchProduct } from '../../../Store/Slices/EshopSlice';


const SingleProduct = () => {

  const { singleProduct  } = useSelector(state => state.Eshop)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { ProductId } = useParams()
  console.log(ProductId);
  console.log(singleProduct);

  const Datafetch= async()=>{
    await dispatch(fetchProduct())
    await dispatch(singleProducts(ProductId))
  }
 
  useEffect(() => {
    Datafetch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, [])


  const addtocartbtn = (x) => {
    dispatch(AddProduct(x))
}


  return (

    <>
    
{  
  singleProduct &&

    <div className='min-h-[80vh] w-[100%] flex justify-center items-center'>
      <div className='min-h-[80vh] w-[50%] flex justify-center items-center'>


        <div className="show h-[80%] w-[60%] flex flex-col justify-center items-center ">
          <div className="h-[60vh]"><img src={singleProduct.image} alt="" className='h-[100%] object-cover' /></div>

        </div>


      </div>
      <div className='min-h-[80vh] w-[50%] flex justify-center items-center flex-col'>
        <div className=" h-[10%] text-black m-1 text-[30px]">{singleProduct.title} </div>
        <div className=" h-[10%] text-black m-1 text-[20px]">{singleProduct.description} </div>
        <div className=" h-[10%] text-black m-1 text-[20px]">Category: {singleProduct.category}</div>
        <div className=" h-[10%] text-black m-1 text-[30px]">Option</div>
        <div className='flex flex-row'>
          <button className='w-[150px] h-[35px] bg-red-400 text-white m-3 shoppingbtn1' onClick={() => addtocartbtn(singleProduct)} >Add to Cart</button>
          <div className="back"><button className='bg-black text-white m-3  h-[35px] w-[150px] hover:bg-[crimson]' onClick={() => navigate("/Eshop")}>Back</button></div>
        </div>

      </div>
    </div> 
    }

    </>
  )
}

export default SingleProduct
