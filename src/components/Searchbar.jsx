import React from 'react'
import { useState } from 'react'



function Searchbar({onClick}) {

   const[query,setQuery] = useState('');

   const handleInputSearch = (event)=>{
      const value = event.target.value;    
       setQuery(value);
        // onChange(value); 
        console.log(value);            
   }

   const handleClick = ()=>{
          onClick(setQuery)
   }
    
  return (
<>

    <form className="d-flex" role="search">
          <input className="form-control me-2" style={{ maxWidth: '200px' }} type="search" placeholder="Search Product" aria-label="Search" onChange ={handleInputSearch} value ={query} />
          <button className="btn btn-outline-success" type="submit" onClick={handleClick} >Search</button>
     </form>

</>
  
  )
}

export default Searchbar