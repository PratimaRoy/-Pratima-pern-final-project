import { Link } from "react-router-dom";
import ring from "../assets/ring.png"
import "./Nav.css";

function Nav(){

    return(
        <nav>
            <h1 className="logo">Products</h1>
            <Link to="/products/new" className="newProductLink"></Link>
            <div>
                <Link to="/">
                <img src={ring} />
                </Link>
            </div>
            <div>
                <Link to="/products">Products</Link>
            </div>
            <div>
                <Link to="/products/new">New Product</Link>
            </div>
            <div>
                <Link to="/cart">Cart</Link>
            </div>
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