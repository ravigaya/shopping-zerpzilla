import React from "react"
import {product_URL} from './constant'
import { useState,useEffect } from "react"

 export const useProductInfo = (id)=>{

    const[productDetails,setProductDetails] = useState('');
    
    useEffect(()=>{
        fetchProductData();
        console.log('productDetails',productDetails.title);
       },[])

       const fetchProductData = async ()=>{
        const data = await fetch(product_URL+id);
        const json = await data.json();
        setProductDetails(json);
    }

 return productDetails;
}

//export default useProductInfo;