import React from 'react'
import ReactDOM from 'react-dom/client'
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
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';
import AuthProvider from './Component/Provider/AuthProvider';
import PrivateRoute from './PrivateRoute';
import Nike from './Component/Nike/Nike';
import Gucci from './Component/Gucci/Gucci';
import Zara from './Component/Zara/Zara';
import HM from './Component/H & M/HM';
import Lavis from './Component/Lavis/Lavis';
import Adidas from './Component/Adidas/adidas';
import UpdateProduct from './Component/UpdateProduct/UpdateProduct';
import Details from './Component/Details/Details';



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
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/nike',
        element: <Nike></Nike>,
         loader :() => fetch('http://localhost:5000/fashion')
      },
      {
        path: '/gucci',
        element: <Gucci></Gucci>,
         loader :() => fetch('http://localhost:5000/fashion')
      },
      {
        path: '/zara',
        element: <Zara></Zara>,
         loader :() => fetch('http://localhost:5000/fashion')
      },
      {
        path:'/adidas',
        element: <Adidas></Adidas>,
        loader :() => fetch('http://localhost:5000/fashion')
      },
      {
        path: '/h&m',
        element: <HM></HM>,
        loader :() => fetch('http://localhost:5000/fashion')
      },
      {
        path:'/levis',
        element: <Lavis></Lavis>,
        loader :() => fetch('http://localhost:5000/fashion')

      },
      {
        path:'/updateProduct/:id',
        element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
        loader :({params}) => fetch(`http://localhost:5000/fashion/${params.id}`)

      },
      {
        path: '/details/:id',
        element:<PrivateRoute><Details></Details></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/fashion')
      },
      {
        path: '/myCart',
        element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/cart')  
      },
      
      
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
