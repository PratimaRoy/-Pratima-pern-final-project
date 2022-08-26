// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";


import NavBar from "./Components/Nav";
import Cart from "./Components/Cart"
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import Show from "./Pages/Show";
import New from "./Pages/New";
import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";


function App(){
  const [cartItems, setCartItems] = useState([]);
  // const [total, setTotal] = useState(0);

  const handleAddToCart = (product) =>{
    setCartItems([...cartItems, product])
    console.log(cartItems)
  }


  return(
    <div className="App">
      
        <Nav/>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Index />} />
            <Route path="/products/new" element={<New />} />
            <Route exact path="/products/:id" element={<Show handleAddToCart={handleAddToCart}/>} />
            <Route path="/products/:id/edit" element={<Edit />} />
            <Route path="/cart" element={<Cart cartItems={cartItems}/>}/>
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
        
      

    </div>
  )
}

export default App;