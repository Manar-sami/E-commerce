
import { Link } from "react-router-dom";
import useAuthStore from "../store/UseAuthStore";
import { useNavigate } from "react-router-dom";

function Header() {

 const Token=useAuthStore((state)=>state.Token);
 const logout=useAuthStore((state)=>state.logout);
 const navigate=useNavigate();

  const hundellogout=()=>{
    logout();
    navigate('/Login');
  }
  return (
    <>
    <nav className="flex justify-between items-center p-4 bg-gray-200">
     <ul className="flex  justify-center items-center gap-3">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/Categories">Categories</Link></li>
        
     </ul>
    <div>

      {Token?
      <>
      <Link to="/Cart" className="bg-blue-500 text-white px-2 py-1 rounded">
       Cart
     </Link>
     <Link to="/login" onClick={hundellogout}  className="bg-red-500 text-white px-2 py-1 rounded ml-5">
      logout
     </Link>
      </>
      :
      <>
       <Link to="/Login" className="bg-green-500 text-white px-2 py-1 rounded ">
       Login
     </Link>
      <Link to="/Register" className="bg-blue-500 text-white px-2 py-1 rounded ml-5">
        Register
      </Link>
      </>
      }
     
    
    </div>
    </nav>
    </>
  )
}

export default Header;