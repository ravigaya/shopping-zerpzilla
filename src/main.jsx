import React, { Suspense, lazy } from 'react'
import 'bootstrap/dist/css/bootstrap.css' 
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import Help from './components/Help.jsx'
import Error from './components/Error.jsx'
import {
  createBrowserRouter,
  RouterProvider,Outlet
} from "react-router-dom";
import Body from './components/Body.jsx'
import ProductList from './components/ProductList.jsx'
import Cart from './components/Cart.jsx'
import Homepage from './components/Homepage.jsx'
import ProductPage from './components/ProductPage.jsx'


//import Myprofile from './components/Myprofile.jsx'
//import Travel from './components/Travel.jsx'

const Myprofile = lazy(()=>import('./components/Myprofile.jsx'))
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[

      {
        path: "/",
        element: <Homepage/>,
      },
      {
        path: "/products",
        element: <Homepage/>,
      },
      {
        path: "/cart",
        element: <Cart/>,
      },
      {
        path: "/myprofile",
        element: <Suspense fallback={<h3> I am loading</h3>}>   <Myprofile/> </Suspense> ,
      },
      {
        path: "/products/:category",
        element: <ProductList/>,
      },
      {
        path: "/product/:id",
        element: <ProductPage/>,
      },
    
    ],
    errorElement: <Error/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}/>

   
  </React.StrictMode>,
)
