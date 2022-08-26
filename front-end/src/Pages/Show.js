import ProductDetails from "../Components/ProductDetails.js"

function Show({handleAddToCart}){

    return(
        <div className="Show">
            <h2>Show Products</h2>
            <ProductDetails handleAddToCart={handleAddToCart}/>
        </div>
    );
}

export default Show;