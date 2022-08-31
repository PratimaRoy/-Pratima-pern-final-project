const express = require("express");
const {
  getAllProducts,
  getOneProduct,
  deleteProduct,
  postNewProduct,
  updateProduct,
} = require("../queries/products.js");

//const { checkImage, checkProductName } = require("../validation/productCheck");

//sub routes
const products = express.Router();
//show route
//get an individual product with given id
products.get("/:id", async (req, res) => { 
  const { productId } = req.params;
console.log(productId)
  try {
    const allProducts = await getOneProduct(productId); 
    console.log(allProducts);
    if (allProducts.received === 0) {
      res.status(404).json({ success: false, payload: "not found" });
    } else {
      res.status(200).json({ success: true, payload: allProducts });
    }
  } catch (err) {
    res.status(404).send(`No such product available with id of ${productId}`);

  }
});

//delete route
//delete individual snack with given id
products.delete("/:productId", async (req, res) => {
  const { productId  } = req.params;

  try {
    const deletedProduct = await deleteProduct(productId );
    res.status(200).json({ success: true, payload: deleteProduct });
  } catch (error) {
    res.status(404).json({ success: false, payload: { id: undefined } });
  }
});

//index route
//get all snacks
products.get("/", async (req, res) => {
  try {
    const allProducts = await getAllProducts();
    res.status(200).json({ success: true, payload: allProducts });
  } catch (error) {
    res.status(404).json({ sucess: false });
    console.log(error)
  }
});

//new route
//add a snack into the database
products.post("/", async (req, res) => {
  //const newProduct = req.body;

  try {
    const postedProduct = await postNewProduct(req.body);
    console.log(req.body)
    console.log(postedProduct)
    //use postedProduct[0] because postNewProduct will return an array and
    //the postedProduct[0] is the snack added into the database
    res.status(200).json({ success: true, payload: postedProduct });
  } catch (error) {
    console.log(error);
    res.status(404).json({ success: false });
    //const newProduct = await createProduct(body);
  



  }
});

//edit route
//edit a snack inside the database
products.put("/:productId", async (req, res) => {
  const { productId } = req.params;

  try {
    const updatedProduct = await updateTheProduct(req.body, productId);
    res.status(200).json({ success: true, payload: updateProduct });
  } catch (error) {
    console.log(error);
    res.status(404).json({ success: false });
  }
});
















// products.get("/:id", async (req, res) => {
//   const { id } = req.params;
//   try {
//     const product = await getOneProduct(id);
//     if(product.id){
//       res.status(200).json(product);
//     } else {
//       res.status(500).json({ error: "Product not found" });
//     }
//   } catch (err) {
//     return err;
//   }
// });

// products.put("/:id", async(req,res)=>{
//   const { id } = req.params;
//   const { body } = req;
//   const updatedProduct = await updateProduct(id, body);
//   if(updatedProduct.id){
//     console.log(updatedProduct)
//       res.status(200).json(updatedProduct);
//   } else {
//       res.status(404).json({error: "Product not Found"});
//   }
// });

// products.post("/", async (req,res) =>{
//     const { body } = req;
//     try{
//         if(!body.name){
//             res.status(422).json({error: "Please include product name"});
//             return
//         }
//         if(!body.image){
//             body.image = "https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png"
//         }

//         const newProduct = await createProduct(body);
//         if(newProduct.id){
//             res.status(200).json(newProduct);
//         } else {
//             res.status(500).json({error: "Product creation error"}) 
//         }
//     } catch (err){
//         return err;
//     }
// });

// products.delete("/:id", async (req,res)=>{
//     const { id } = req.params;
//     const deletedProduct = await deleteProduct(id);
//     if(deletedProduct.id){
//         res.status(200).json(deletedProduct);
//     } else {
//         res.status(404).json({error: "Product not found"});
//     }
// });



module.exports = products;