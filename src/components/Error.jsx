
import React from 'react'
import {useRouteError} from 'react-router-dom'

 const Error =()=> {
  const err = useRouteError();
  console.log("This is error",err.data)
   // console.log(resdata.restaurant_name)
  return (
    
    <>
    <div>       
        <div>OOPs!!! : 
        <h4>{err.data}</h4>

          
        </div>


     </div>
    </>
  )
}

export default Error;