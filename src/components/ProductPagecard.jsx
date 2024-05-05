import React from 'react'

function ProductPagecard({productPagecardData}) {

    console.log(productPagecardData);

  return (
     <div  className=" px-3 mt-3 d-flex justify-content-around">
    <div className="card" style={{ width: "18rem" }}>
    <img src={productPagecardData.image} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{productPagecardData.title}</h5>
      <p className="card-text">{productPagecardData.description}</p>
      </div>
      <a href="#" className="btn btn-primary"> - Add To Cart +</a>
    </div>
  </div>

)
}

export default ProductPagecard