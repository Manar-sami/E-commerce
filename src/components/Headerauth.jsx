import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { Link } from "react-router-dom";




function Headerauth() {
  return (
   <Container  maxWidth="lg">
     <Box
  component={Link}
  to="/"
  sx={{
    fontSize: 32,
    fontWeight: "bold",
    color: "black",
    textDecoration: "none",
  }}
>
  KaShop
     </Box>


   

     
   </Container>
  )
}

export default Headerauth