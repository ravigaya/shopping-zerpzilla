import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'



function UpdateInventry() {

const {id} = useParams();
const navigate = useNavigate()
     const[value,setValue] = useState({
        name: '',
        brand : '',
        price: '',
        description :''

     })
     

     const fetchData = async()=>{

      const data =  await fetch(`http://localhost:3000/products/${id}`) 
      const json = await data.json();
      console.log('update Json',json)
      setValue(json)
     }
      
     console.log("updateValue", value)
     useEffect(()=>{
        fetchData();
     },[])

     

     const handleUpdate = async (event) => {
      event.preventDefault(); // Prevent default form submission behavior
  
      try {
          const response = await axios.put(`http://localhost:3000/products/${id}`,value);
          console.log(response);
          navigate('/inventry'); // Navigate to the desired route upon successful form submission
      } catch (error) {
          console.error('Error:', error);
      }
  };

  return (
    
<div className='createInventoryc d-flex justify-content-space-around '>
  <form className='d-flex flex-column w-50 vh-100 align-item-center justify-content-center bg-zinc-500 px-8'>

    <label> update Items </label>
  <div className="form-group">
    <label htmlFor="exampleFormControlInput1">Name</label>
    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Name" value={value.name}   onChange={(e)=>setValue({...value,name:e.target.value})}/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleFormControlInput1">Brand</label>
    <input type="text" className="form-control" id="exampleFormControlInput2" placeholder="Brand" value={value.brand} onChange={(e)=>setValue({...value,brand:e.target.value})} />
  </div>
  <div className="form-group">
    <label htmlFor="exampleFormControlInput1">Price</label>
    <input type="Number" className="form-control" id="exampleFormControlInput3" placeholder="price" value={value.price} onChange={(e)=>setValue({...value,price:e.target.value})} />
  </div>

  <div className="form-group">
    <label htmlFor="exampleFormControlTextarea1">Description</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" value={value.description} rows="3" onChange={(e)=>setValue({...value,description:e.target.value})}></textarea>
  </div>
  <button className='btn btn-success ' onClick={handleUpdate}>Update</button>
</form>

</div>


  )
}

export default UpdateInventry