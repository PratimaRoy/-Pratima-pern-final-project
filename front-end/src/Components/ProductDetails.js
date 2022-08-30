import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./ProductDetails.css";

const API = process.env.REACT_APP_API_URL;

function ProductDetails({handleAddToCart}) {
  const [product, setProduct] = useState([]);
  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(API + "/products/" + id)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id, API]);

  const handleDelete = () => {
    axios
      .delete(API + "/products/" + id)
      .then((res) => {
        navigate("/products");
      })
      .catch((err) => {
        console.log(err);
      });
  };


  return (
    <div className="details-container">
      <div className="product-details productDetails">
        <div className="img-container">
        <h3>Name: {product.name} </h3>
          <img src={product.image} />
          {console.log(product.image)}
        </div>
        <div className="info-container">
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <span>${product.price}</span>
          <br />
          <button onClick={()=>handleAddToCart(product)} >Add to cart</button>
        </div>
      </div>
      <div className="showNavigation">
        <div>
          {/* <Link to={`/products`}> */}
            {/* <Button
              variant="outlined"
              type="submit"
              sx={{
                borderRadius: 35,
                borderColor: "#E30B5C",
                backgroundColor: "#E30B5C",
                color: "white",
              }}
            >
              Back
            </Button>
          </Link>
        </div>
        <div>
          <Link to={`/products/${product.id}/edit`}>
            <Button
              variant="outlined"
              type="submit"
              sx={{
                borderRadius: 35,
                borderColor: "#E30B5C",
                backgroundColor: "#E30B5C",
                color: "white",
              }}
            >
              Edit
            </Button>
          </Link>
        </div>
        <div>
          <Button
            onClick={handleDelete}
            variant="outlined"
            type="submit"
            sx={{
              borderRadius: 35,
              borderColor: "#E30B5C",
              backgroundColor: "#E30B5C",
              color: "white",
            }}
          >
            Delete
          </Button> */}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;