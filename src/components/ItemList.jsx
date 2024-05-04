 import React from "react";

 const ItemList = (props) => {
  console.log("product item ------------", props.productItem);
  return (
    <>
     <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src=''class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">title</h5>
        <p class="card-text">text</p>
        <p class="card-text"><small class="text-body-secondary">Description</small></p>
      </div>
    </div>
  </div>
</div> 
      <p>This is Accordian List</p>
        <div>{props.productItem.description}</div>;
    </>
  );
};
export default ItemList