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
import {Inventry} from './components/Inventry.jsx'
import { CreateInventry } from './components/CreateInventry.jsx'
import UpdateInventry from './components/UpdateInventry.jsx'
import DeleteInventry from './components/DeleteInventry.jsx'

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
        path: "/cart",
        element: <Cart/>
      },
      {
        path: "/product/:id",
        element: <ProductPage/>,
      },
      {
        path: "/inventry",
        element: <Inventry/>,
      },
      {
        path: "/creteinventory",
        element: <CreateInventry/>,
      },
      {
        path: "/updateinventry/:id",
        element:<UpdateInventry/>,
      },
      {
        path: "/deleteinventry/:id",
        element: <DeleteInventry/>,
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
