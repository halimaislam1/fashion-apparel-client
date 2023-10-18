import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/LayOut/Root.jsx';
import ErrorPage from './Component/ErrorPage/ErrorPage.jsx';
import AddProduct from './Component/AddProduct/AddProduct.jsx';
import Home from './Component/Home/Home.jsx';
import MyCart from './Component/MyCart/MyCart';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/addproduct',
        element: <AddProduct></AddProduct>
      },
      {
        path: '/mycart',
        element: <MyCart></MyCart>
      },
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
