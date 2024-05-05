import React from 'react'
import { useState } from 'react'



function Searchbar({onChange}) {

   const[query,setQuery] = useState('');


   const handleInputSearch = (event)=>{
      const value = event.target.value;    
       setQuery(value);
         onChange(value); 
        console.log(value)
            
   }
    
  return (
<>

    <form className="d-flex" role="search">
          <input className="form-control me-2" style={{ maxWidth: '200px' }} type="search" placeholder="Search" aria-label="Search" onChange ={handleInputSearch} value ={query} />
          <button className="btn btn-outline-success" type="submit">Search</button>
     </form>

</>
  
  )
}

export default Searchbar