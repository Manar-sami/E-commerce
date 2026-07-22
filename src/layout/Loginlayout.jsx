import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Headerauth from "../components/Headerauth";


function loginlayout() {
  return (
      <>
      <Headerauth/>
      <Outlet />
      <Footer />
     </>
  )
}

export default loginlayout