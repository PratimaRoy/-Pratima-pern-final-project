import { Link } from "react-router-dom";
import ring from "../assets/ring.png"

export default function NavBar(){

    return(
        <nav>
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