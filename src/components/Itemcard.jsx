import React from 'react'
import './card.css'
export  function Itemcard({title, price, description,image}) {

   // console.log(resdata.restaurant_name)
  return (
    <>
    {/* <div className='card-image'>       
        <div className='product-title'>Title :
        <p>{title}</p>
        </div>
        <h4 className='product-price'>$ :
        <p>{price}</p></h4>  
        <h4 className='product-description'>Description :<h6>{description}</h6></h4>
     </div> */}
<div className='col-md-4'>
<div style={{ width: '18rem' }} className='card' >
  <img src={image} className="card-img img-fluid px-2 py-2" alt='...' />
  <div className="card-body badge text-bg-secondary px-2 "  style={{ textDecoration: 'none', color: 'inherit' }}>
    <h5 className="card-title">{title}</h5>
    <p className="card-title">${price}</p>
  </div>
</div>
</div>

    </>
  )
}


// Higher Order Component  :-  
// take Restaurant card as input return enhanced card 

 export const TopChoiceProduct = (Restaurantcard)=>{

  return (props)=>{
    return(
      <div>
      <label className='badge text-bg-secondary'>Top Choice</label>
      <Restaurantcard {...props}/>
    </div>

    )
    
  }
}
