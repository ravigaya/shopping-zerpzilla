import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ProductPagecard from './ProductPagecard';

function ProductPage() {
const[productpageData,setProductpageData] = useState([]);
const { id } = useParams();
console.log(' iam in fucking page')
useEffect(()=>{
    fetchProductPageData();
    console.log(productpageData)
},[])

const fetchProductPageData = async ()=> {
    const data = await fetch(`https://fakestoreapi.com/products/${id}`);
    const json = await data.json();
    console.log('this is product page',json)
    setProductpageData(json);
}

return (
    
    <ProductPagecard productPagecardData={productpageData}/>

 )
}
export default ProductPage