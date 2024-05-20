import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export function CreateInventry() {

     const navigate = useNavigate()
     const[value,setValue] = useState({
        name: '',
        brand : '',

        price: '',
        description :''

     })
       console.log('value',value)
      
    
    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission behavior
    
        try {
            const response = await axios.post('http://localhost:3000/products', value);
            console.log(response);
            navigate('/inventry'); // Navigate to the desired route upon successful form submission
        } catch (error) {
            console.error('Error:', error);
        }
    };
    

  return (
   
  
<div className='createInventory  '>
<form className='d-flex flex-column'>

    <label> Add Items </label>
  <div className="form-group">
    <label htmlFor="exampleFormControlInput1">Name</label>
    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Name" onChange={(e)=>setValue({...value,name:e.target.value})}/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleFormControlInput1">Brand</label>
    <input type="text" className="form-control" id="exampleFormControlInput2" placeholder="Brand" onChange={(e)=>setValue({...value,brand:e.target.value})} />
  </div>
  <div className="form-group">
    <label htmlFor="exampleFormControlInput1">Price</label>
    <input type="Number" className="form-control" id="exampleFormControlInput3" placeholder="price" onChange={(e)=>setValue({...value,price:e.target.value})} />
  </div>

  <div className="form-group">
    <label htmlFor="exampleFormControlTextarea1">Description</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e)=>setValue({...value,description:e.target.value})}></textarea>
  </div>
  <button className='btn btn-success' onClick={handleSubmit}>Submit</button>
</form>

</div>

  )
}

//export default CreateInventry