import { Link } from "react-router-dom";
import "./Product.css";
function Product({ product }) {
  console.log(product)
  return (
    <div className="product">
        <img src={product.image} alt={product.name} />
      <Link to={`/products/${product.id}`}>
        <h4>{product.name}</h4>
      </Link>
    </div>
  
  );
}

export default Product;