import React, { useEffect, useState } from 'react'
import { InventryTable } from './InventryTable';
import { Link } from 'react-router-dom';

 export function Inventry() {
    
    // const[productData,setProductData] = useState([])
    // const fetchProduct = async ()=>{
    //     const data = await fetch('http://localhost:3000/products')
    //     const json = await data.json();
    //     console.log("inventryProduct",json);
    //     setProductData(json);
    // }
    // console.log("Hi Here",productData);

    // useEffect(()=>{
    //     fetchProduct();
    // },[])


  return (
    <>
    <div className=' d-flex flex-column '>

             <div className='d-flex justify-content-evenly mt-3 '>
                    <h3>List of Items in Stock</h3> 
                    <Link to='/creteinventory'>
                    <button className='btn btn-success px-10 ml-3'> Create + </button> 
                    </Link>
                                        
            </div>  
            <div className='d-flex flex-column justify-content-center'>
          
                 <InventryTable/>
      
                </div>    
              
            
            <div>Inventry</div>

    </div>
    </>
  
  )
}

