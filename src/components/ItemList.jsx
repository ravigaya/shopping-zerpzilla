 import React from "react";
import ProductList from "./ProductList";

 const ItemList = ({productItemData}) => {
 // console.log("product item ------------", props.productItemData);
  return (
    <>
        
         <div className="productList">
                
                <div className="card mb-3" >
            <div className="row g-0">
                <div className="col-md-4">
                <img src= {productItemData.image} className="card-img-top card-img img-fluid px-2 py-2"  alt="..."/>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{productItemData.title}</h5>
                    <p className="card-text">{productItemData.price}</p>
                  <p className="card-text"><small className="text-body-secondary">{productItemData.Description}</small></p> 
                </div>
                </div>
            </div>
            </div> 

            </div>
    </>
  );
};
export default ItemList