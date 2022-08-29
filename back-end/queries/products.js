const db = require("../db/dbConfig.js");
//const check rating and views here








const getAllProducts = async () => {
  try {
    const allProducts = await db.any("SELECT * FROM products");
    console.log("return from database", allProducts)
    return allProducts;
  } catch (err) {
    return err;
  }
};

const getOneProduct = async (productId) => {
  try {
    const oneProduct = await db.one("SELECT * FROM products WHERE id=$1", productId);
    return oneProduct;
  } catch (err) {
    return err;
  }
};
//add product into a database
const postNewProduct = async (product) => {
  let { name, description,color, price, rating, featured, image } = product;
  //determine the check rating and review boolean I think
  const checkRating = confirmRating({ name, description,color, price, rating, featured, image });
  if (checkRating === true || checkRating === false) {
    is_checkRating = checkRating;
  }
    try{
        const newProduct = await db.any("INSERT INTO products(name, image, description, color, price, rating, featured) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *",
        [product.name, product.image, product.description, product.color, product.price, product.rating, product.featured]);
        return newProduct;
    } catch (err) {
        return err;
    }
};

const updateProduct = async (product, productId) => {
  let { name, description,color, price, rating, featured, image } = product;
  //determine the check rating and review boolean I think
  const checkRating = confirmRating({ name, description,color, price, rating });
  if (checkRating === true || checkRating === false) {
    is_checkRating = checkRating;
  }

    try{
        const updatedProduct = await db.one("UPDATE products SET name=$1, image=$2, description=$3, color=$4, price=$5, rating=$6, featured=$7 WHERE id=$8 RETURNING *",
        [product.name, product.image, product.description, product.color, product.price, product.rating, product.featured, id]);
        return updatedProduct;
    } catch (err) {
        return err;
    }
}

const deleteProduct = async (productId) => {
  try {
    const deletedProduct = await db.one("DELETE FROM products WHERE id=$1 RETURNING *", productId);
    return deletedProduct;
  } catch (err) {
    return err;
  }
};

module.exports = { getAllProducts, getOneProduct, deleteProduct, postNewProduct, updateProduct };