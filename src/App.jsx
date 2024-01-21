import React from "react";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import About from "./pages/About";
import Contact from "./pages/Contact";
import Success from "./pages/Success";
import { useSelector } from "react-redux";



const App = () => {
  const user = useSelector((state)=>state.user.currentUser)
  return (
  <>
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:category" element={<ProductList />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/success" element={<Success />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={user ? <Navigate to="/" />: <Login/>}> 
            </Route>
                <Route path="/register"  element={user ? <Navigate  to="/" /> : <Register/>}>
            </Route>
          </Routes>
     </Router>
  </>
  )
}

export default App