
import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
import { Box, Container } from "@mui/material"


function Profilelayout() {

  return (
    <>
    <Box sx={{py:10}}>
     <Container sx={{display:"flex",gap:10,flexDirection:{xs:"column",md:"row"}}}>
         <Sidebar></Sidebar>
         <Outlet></Outlet>
     </Container>
    </Box>
    
    </>
  )
}

export default Profilelayout