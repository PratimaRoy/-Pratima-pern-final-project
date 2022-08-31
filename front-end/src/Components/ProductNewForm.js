import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./ProductNewForm.css";


const API = process.env.REACT_APP_API_URL;

function ProductNewForm() {
  const [product, setProduct] = useState({
    name: "",
    image: "",
    description: "",
    color: "",
    price: 0,
    rating: 0,
    featured: false,
  });

  const navigate = useNavigate();

  const addNewProduct = (newProduct) => {
    axios
      .post(`${API}/products/`, newProduct)
      .then(() => {
        navigate("/products");
      })
      .catch((error) => console.error("catch", error));
  };

  const handleTextChange = (event) => {
    setProduct({ ...product, [event.target.id]: event.target.value });
  };

  const handeleSubmit = (event) => {
    event.preventDefault();
    addNewProduct(product);
  };

  return (
    <header className="ring" id="ring">
      <section className="form">
        <p>Create a new product of your choice and we will order the best jewelry for you!</p>
        <ul>
          <li>Choose any price you desire</li>
          <li>Rate from 1-5 of the product</li>
        </ul>
        <form onSubmit={handeleSubmit}>
          <div>
            <label htmlFor="name">Name: </label>
            <input
              id="name"
              value={product.name}
              type="text"
              onChange={handleTextChange}
              required
            ></input>
          </div>
          <br />
          <div>
            <label htmlFor="image">Image: </label>
            <input
              id="image"
              value={product.image}
              type="text"
              onChange={handleTextChange}
              required
            ></input>
          </div>
          <br />
          <div>
            <label htmlFor="price">Price: </label>
            <input
              id="price"
              value={product.price}
              type="number"
              onChange={handleTextChange}
              required
            ></input>
          </div>
          <br />
          <div>
            <label htmlFor="rating">Rating: </label>
            <input
              id="rating"
              value={product.rating}
              type="number"
              onChange={handleTextChange}
              required
            ></input>
          </div>
          <br />
          {/* <div>
            <label htmlFor="content">Content: </label>
            <input
              id="content"
              value={product.content}
              type="number"
              onChange={handleTextChange}
              required
            ></input>
          </div> */}
          <br />
          <input type="submit" value="Create New Product" />
        </form>
        <button type="button">
          <Link to="/products">Back</Link>
        </button>
      </section>
    </header>
  );
}







//   const handleTextChange = (event) => {
//     setProduct({ ...product, [event.target.id]: event.target.value });
//   };

//   const handleCheckboxChange = () => {
//     setProduct({ ...product, featured: !product.featured });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     axios
//       .post(API + "/products", product)
//       .then((res) => {
//         navigate("/products");
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   return (
//     <div className="form-container">
//       <Box component="form" onSubmit={handleSubmit}>
//         <FormControl margin="dense">
//           <InputLabel htmlFor="name">Name</InputLabel>
//           <OutlinedInput
//             required
//             id="name"
//             value={product.name}
//             label="Name"
//             type="text"
//             onChange={handleTextChange}
//             placeholder="Name of product"
//           />
//         </FormControl>
//         <FormControl margin="dense">
//           <InputLabel htmlFor="image">Image</InputLabel>
//           <OutlinedInput
//             id="image"
//             type="text"
//             label="Image"
//             value={product.image}
//             onChange={handleTextChange}
//           />
//         </FormControl>
//         <FormControl margin="dense">
//           <InputLabel htmlFor="description">Description</InputLabel>
//           <OutlinedInput
//             id="description"
//             type="text"
//             label="Description"
//             value={product.description}
//             onChange={handleTextChange}
//           />
//         </FormControl>
//         <FormControl margin="dense">
//           <InputLabel htmlFor="color">Color</InputLabel>
//           <OutlinedInput
//             id="color"
//             type="text"
//             label="Color"
//             onChange={handleTextChange}
//             value={product.color}
//             placeholder="color"
//           />
//         </FormControl>
//         <FormControl margin="dense">
//           <InputLabel htmlFor="price">Price</InputLabel>
//           <OutlinedInput
//             id="price"
//             value={product.price}
//             label="Price"
//             type="number"
//             onChange={handleTextChange}
//             placeholder="Price"
//           />
//         </FormControl>
//         <FormControl margin="dense">
//           <InputLabel htmlFor="rating">Rating</InputLabel>
//           <OutlinedInput
//             id="rating"
//             value={product.rating}
//             label="Rating"
//             type="number"
//             onChange={handleTextChange}
//             placeholder="rating"
//           />
//         </FormControl>
//         <br />
//         <FormControlLabel
//           control={<Checkbox />}
//           label="Featured"
//           onChange={handleCheckboxChange}
//         />
//         <br />
//         <Button
//           variant="outlined"
//           type="submit"
//           sx={{
//             borderRadius: 35,
//             borderColor: "#E30B5C",
//             backgroundColor: "#E30B5C",
//             color: "white",
//           }}
//         >
//           Submit
//         </Button>
//       </Box>
//     </div>
//   );
// }

export default ProductNewForm;