import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


export const STATUS=Object.freeze({
    IDEL:'idle',
    ERROR:'Error',
    LOADING:'loading',
})

const EshopSlice=createSlice({

    name:'Eshop',
    initialState:{
        Data:[],
        cartProducts:[],
        singleProduct:{},
        status:STATUS.IDEL,
        serchQuery:''
    },
    reducers:{

        AddProduct(state,action){

          const foundData=state.cartProducts.find((x)=>x.id===action.payload.id) 
          if (foundData){
             alert ("This Product is already in cart")
          }else{
             let NewProduct={...action.payload,Qty:1}
                state.cartProducts.push(NewProduct) 
          }
           
        },
         
        removeProduct(state,action){
            const filter=state.cartProducts.filter((x)=>x.id !== action.payload)
            state.cartProducts=filter
        },

        AddQuantity(state,action){
          const findData=state.cartProducts.find((x)=>x.id===action.payload)
           findData.Qty+=1
        },
        removeQuantity(state,action){
            const findData=state.cartProducts.find((x)=>x.id===action.payload)
            findData.Qty+=-1
         },

        singleProducts(state,action){
            const FindData=state.Data.find((x)=>x.id===parseInt(action.payload))
            state.singleProduct=FindData  
        },

        Searchbar(state,action){
            state.serchQuery=action.payload    
        }
    },

    extraReducers:(builder)=>{

        builder

        .addCase(fetchProduct.pending,(state,action)=>{
                state.status =STATUS.LOADING;
        })

        .addCase(fetchProduct.fulfilled,(state,action)=>{
            state.Data=action.payload
            state.status=STATUS.IDEL
        })

        .addCase(fetchProduct.rejected,(state,action)=>{
            state.status=STATUS.ERROR
        })
    }
})


export default EshopSlice.reducer

export const {AddProduct,removeProduct,AddQuantity,removeQuantity,singleProducts,Searchbar}=EshopSlice.actions


export const fetchProduct= createAsyncThunk('product/fetch' ,async()=>{
      const res = await fetch('https://fakestoreapi.com/products')
      const data= await res.json()
      return data
})