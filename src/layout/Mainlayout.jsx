import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion, useScroll , useMotionValueEvent} from "framer-motion";
import { useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function Mainlayout() {
  const { scrollY } = useScroll();
  console.log(scrollY)
  const[show,setshow]=useState(false);
  
  useMotionValueEvent(scrollY, "change", (latest) => {
    if(latest>300){
      setshow(true);
    }
    else{
      setshow(false)
    }
  })
  return (
     <>
      <Header />
       {show&&
              <motion.button  onClick={()=>  window.scrollTo({
                   top: 0,
                   behavior: "smooth",
              })}
      style={{
        position: "fixed",
        bottom: 50,
        right: 50,
        borderRadius:"50%",
        backgroundColor:"#F2CA50",
        border:"none",
        zIndex:"20",
      }}
      animate={{
        opacity: 1,
      }}
    >
     <KeyboardArrowUpIcon />
    </motion.button>
       }
      <Outlet />
      <Footer />
     </>
  )
}

export default Mainlayout;