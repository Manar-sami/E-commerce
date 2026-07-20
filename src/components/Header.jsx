
import { Link } from "react-router-dom";
import useAuthStore from "../store/UseAuthStore";
import { useNavigate } from "react-router-dom";
import useGetitemformcart from './../Hook/Getitemformcart'
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useTranslation } from 'react-i18next';
import i18n from "./../languge";
import Button from "@mui/material/Button";
function Header() {

 const Token=useAuthStore((state)=>state.Token);
 const logout=useAuthStore((state)=>state.logout);
 const {data}=useGetitemformcart();
  //  اللغة 
 const changeLanguage =()=>{
  const lang=i18n.language==='ar'?"en":"ar"
 i18n.changeLanguage (lang);
 }

 console.log(data)
   const { t } = useTranslation();

 const navigate=useNavigate();

  const hundellogout=()=>{
    logout();
    navigate('/Login');
  }
  return (
    <>
    <nav className="flex justify-between items-center p-4 bg-gray-200">
     <ul className="flex  justify-center items-center gap-3">
        <li><Link to="/">{t('Home')}</Link></li>
        <li><Link to="/products">{t('Products')}</Link></li>
        <li><Link to="/Categories">{t('Categories')}</Link></li>
        
     </ul>
    <div>

      {Token?
      <>

      <Link to="/Cart" className="px-2 py-1 ">
       <Typography
    sx={{
      backgroundColor: "red",
      color: "white",
      width: 24,
      height: 24,
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 14,
    }}
  >
   {/* {data.length} */}
  </Typography>
       <ShoppingCartIcon/>
     </Link>

      <Button onClick={ changeLanguage}>
        {i18n.language==='ar'?"EN":"AR"}
      </Button>

     <Link to="/login" onClick={hundellogout}  className="bg-red-500 text-white px-2 py-1 rounded ml-5">
      {t('logout')}
     </Link>
      </>
      :
      <>
       <Link to="/Login" className="bg-green-500 text-white px-2 py-1 rounded ">
       {t('Login')}
     </Link>
      <Link to="/Register" className="bg-blue-500 text-white px-2 py-1 rounded ml-5">
       {t('Register')} 
      </Link>
      </>
      }
     
    
    </div>
    </nav>
    </>
  )
}

export default Header;