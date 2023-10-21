import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import Login from './Components/Login/Login.jsx';
import AddProduct from './Components/AddProduct/AddProduct.jsx';
import MyCart from './Components/MyCart/MyCart.jsx';
import SignUp from './Components/SignUp/SignUp.jsx';
import BrandNameCards from './Components/BrandNameCards/BrandNameCards.jsx';
import BrandDetails from './Components/BrandDetails/BrandDetails.jsx';
import ContextProvider from './ContextProvider/ContextProvider.jsx';
import ErrorPage from './ErrorPage/ErrorPage.jsx';
import AddSlider from './Component2/AddSlider.jsx';
import ProductDetails from './Component2/ProductDetails/ProductDetails.jsx';
import PrivateRoute from './Component2/PrivateRoute/PrivateRoute.jsx';
import UpdateProduct from './Component2/UpdateProduct/UpdateProduct.jsx';







const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/addProduct',
        element: <PrivateRoute><AddProduct /></PrivateRoute>
      },
      {
        path: '/myCart',
        element:<PrivateRoute><MyCart /></PrivateRoute>
      },
      {
        path: '/signUp',
        element: <SignUp />
      },
      {
        path: '/brandName',
        loader: () => fetch('/data.json'),
        element: <BrandNameCards />
      },
      {
        path: '/brandName/brandDetails/:brand',
        element: <BrandDetails></BrandDetails>
        /* loader: () => fetch('https://tasty-eats-hub-server-51lgk2gqk-sopon.vercel.app/brandDetails') */
      },
      {
        path: '/addSlider',
        element: <PrivateRoute><AddSlider></AddSlider></PrivateRoute>
      },
      {
        path: '/details/:id',
        element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>
      },
      {
        path:'/updateProduct',
        element:<PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>
      }
      
       


    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>,
)

