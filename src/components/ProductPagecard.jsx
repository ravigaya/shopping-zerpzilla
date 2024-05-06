import React, { useState,useContext } from 'react'
import cartdata  from '../utils/cartdata';
// import { CartContext } from '../utils/cartcontext';

function ProductPagecard({productPagecardData}) {
    const { cartCount, setCartCount } = useContext(cartdata);

    //const { addItemToCart } = useContext(CartContext);
    //const[cartCount,setCartCount] = useState(0)

   const handleClick = ()=>{
        console.log('cart button is clicked')
          setCartCount(cartCount+1);
   }

    console.log('cartcount',cartCount);

  return (
     <div  className=" px-3 mt-3 d-flex justify-content-around">
    <div className="card" style={{ width: "18rem" }}>
    <img src={productPagecardData.image} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{productPagecardData.title}</h5>
      <p className="card-text">{productPagecardData.description}</p>
      </div>
       <button className="btn btn-primary" onClick={handleClick}>Add To Cart</button>
    </div>
  </div>

)
}

export default ProductPagecard