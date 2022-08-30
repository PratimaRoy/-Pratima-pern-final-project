import axios from "axios";
import { useState, useEffect } from "react";
import Product from "../Components/Product.js";
import "./Products.css";
const API = process.env.REACT_APP_API_URL;
console.log(API)


function Products() {
  console.log(API)
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/products`)
      .then((res) => {
        console.log(res)
          setProducts(res.data.payload);
          console.log(res.data)
        })
        .catch((error) => console.log("get", error)
      )}, []);
      
  return (
    <div className="products-container">
      <div className="products">
        {products.map((product)=>{
          return <Product key={product.id} product={product} />
        })}
      </div>
    </div>
  )
  
}

export default Products;