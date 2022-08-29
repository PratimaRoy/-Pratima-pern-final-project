import { Link } from "react-router-dom";
import ring from "../assets/ring.png"
import "./Nav.css";

function Nav(){

    return(
        <nav>
            {/* //<h1 className="logo">Products</h1> */}
            <Link to="/" className="homeLink">Home</Link>
            <Link to="/products/new" className="newProductLink">New Product</Link>
        
            
            
                <Link to="/products" className="allProducts">Products</Link>
            

            
                <Link to="/cart" className="cart">Cart</Link>
            
        </nav>
    )
};




// function Nav() {
//     return (
//       <nav>
//         <h1 className="logo">Snacks</h1>
//         <Link to="/snacks/new" className="newSnackLink">
//           New Snack
//         </Link>
//         <Link to="/snacks" className="allSnacks">
//           All Snacks
//         </Link>
//         <Link to="/" className="homeLink">
//           Home
//         </Link>
//       </nav>
//     );
//   }
export default Nav;