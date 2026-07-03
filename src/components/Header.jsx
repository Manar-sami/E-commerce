
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
    <nav>
     <ul className="flex  justify-center items-center gap-3">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/Register">Register</Link></li>
        <li><Link to="/Categories">Categories</Link></li>
        <li><Link to="/Cart">Cart</Link></li>
     </ul>
    </nav>
    </>
  )
}

export default Header;