import React, { useState,useContext } from 'react'
import cartdata  from '../utils/cartdata';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';
import { Link } from 'react-router-dom';
// import { CartContext } from '../utils/cartcontext';

function ProductPagecard({productPagecardData}) {
    //const { cartCount, setCartCount } = useContext(cartdata);
      const  dispatch = useDispatch();
    //const { addItemToCart } = useContext(CartContext);
    //const[cartCount,setCartCount] = useState(0)
   const handleAddItemCart = (productPagecardData)=>{
        
     // Dispatch action --> 
     dispatch(addItem(productPagecardData))
     // console.log("productPagedata",productPagecardData)

   }

    //console.log('cartcount',cartCount);

  return (
     <div  className=" px-3 mt-3 d-flex justify-content-around">
    <div className="card" style={{ width: "18rem" }}>
    <img src={productPagecardData.image} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{productPagecardData.title}</h5>
      <p className="card-text">{productPagecardData.description}</p>
      </div>
        <Link to = '/cart'>
       <button className="btn btn-primary" onClick = {()=>handleAddItemCart(productPagecardData)}>Add To Cart</button>
       </Link>
    </div>
  </div>

)
}

export default ProductPagecard