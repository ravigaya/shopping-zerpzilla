import axios from 'axios';
import React, { useState,useEffect } from 'react'
import { useParams,Link, Navigate, useNavigate } from 'react-router-dom';

export function InventryTable({inventryData}) {
  
  const[productData,setProductData] = useState([])
  const navigate =   useNavigate();
  const fetchProduct = async ()=>{
      const data = await fetch('http://localhost:3000/products')
      const json = await data.json();
      console.log("inventryProduct",json);
      setProductData(json);
  }
  console.log("Hi Here",productData);
  //const id = useParams(id)
  useEffect(()=>{
      fetchProduct();
  },[])
  
  const handleDelete = async (id)=>{
    if (window.confirm('Are you sure you want to delete this item?')){
      try{
        const response =  await axios.delete(`http://localhost:3000/products/${id}`)
        console.log(response)
        window.location.reload();

        navigate('/inventry');
      }
      

        catch(error){
          console.error(error)
      }
    
    }
    
      
    

    console.log(id)
  }


  return (

    <>
    
    <table className="table table-hover">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Brand</th>
      <th scope="col">Price</th>
      
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {

      productData.map((data, i) => (
        <tr key={data.id}>
          <td>{data.id}</td>
          <td>{data.name}</td>
          <td>{data.brand}</td>
          <td>{data.price}</td>
      
          <td className='d-flex p-10'>
            <Link to={`/updateinventry/${data.id}`} >
               <button className='btn btn-primary ml-3'>Update</button>
            </Link>
           
            <button className='btn btn-secondary' onClick={()=>{handleDelete(`${data.id}`)}}>Delete</button>
          </td>
        </tr>
      ))
    }
    
    
      
  </tbody>
  
</table>

    </>
  )
}

