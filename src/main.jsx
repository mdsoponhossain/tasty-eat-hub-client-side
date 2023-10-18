import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {  createBrowserRouter, RouterProvider,} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import Login from './Components/Login/Login.jsx';
import AddProduct from './Components/AddProduct/AddProduct.jsx';
import MyCart from './Components/MyCart/MyCart.jsx';
import SignUp from './Components/SignUp/SignUp.jsx';
import BrandNameCards from './Components/BrandNameCards/BrandNameCards.jsx';

 




const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/addProduct',
        element:<AddProduct/>
      },
      {
        path:'/myCart',
        element:<MyCart/>
      },
      {
        path:'/signUp',
        element:<SignUp/>
      },
      {
        path:'/brandName',
        loader:()=>fetch('/data.json') ,
        element:<BrandNameCards/>
       
       
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router={router} />
  </React.StrictMode>,
)
