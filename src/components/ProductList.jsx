import React, { useEffect,useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import  './card.css'
import { product_URL } from '../utils/constant'
import Shimmer from './Shimmer'
import { useProductInfo} from '../utils/useProductInfo'
import  ItemList  from './ItemList';
import Searchbar from './Searchbar'

//import { ItemList } from './ItemList'
const ProductList = () => {
  const{id} = useParams()

  const {category} = useParams();
  console.log('This product list of ',category);
   
  const[productlist,setProductlist] = useState([]);
  const[filteredProductList,setFilteredProductList] = useState();

  useEffect(()=>{
    fetchProductlist();
  },[])

  const fetchProductlist = async ()=>{
    const productListData =  await fetch(`https://fakestoreapi.com/products/category/${category}`)

    const json = await productListData.json();

    console.log(`This is ${category} json` ,json)
    setProductlist(json);
  }
  console.log(productlist)
    

    const handleSearch = (searchQuery) => {
    const filteredList = productlist.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProductList(filteredList);
  };
  console.log('filteredProductList',filteredProductList);

  return  (
    <>
    <div className='py-2 px-3 mx-3 my-4'>
    <Searchbar onClick={handleSearch}/>
      
    </div>
      {
      productlist.map((element, index) => (
            <div className='px-3'>
            <Link to={`/product/${element.id}`} key={element.id}>
            {/* <Link to={`/products12`} key={element.id}> */}
               <ItemList productItemData={element}/>
            </Link>
        </div>
      ))}
      

    </>
    
     )
}

export default ProductList