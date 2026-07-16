
import useGetitemformcart from "../../Hook/Getitemformcart";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";
import useRemovitemcart from "../../Hook/Removitemcart";

function Cart() { 
  // هان استدعينا ال hook الخاص يلي بجيب المنتجات الموجودة في السلة
  const{data,isLoading,isError,error}=useGetitemformcart();

 // هان استدعينا ال hook الخاص يلي بحذف المنتج الموجودة في السلة
  const{mutate:removecart}=useRemovitemcart()

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>{error.message}</div>

 

 return (
    
     <TableContainer component={Paper}>
        <Typography  align="center" variant="h1" component="h1" > Cart </ Typography>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>productName</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Total</TableCell>
            <TableCell align="right">Action</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow
              key={item.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {item.productName}
              </TableCell>
              <TableCell align="right">{item.price}$</TableCell>
              <TableCell align="right">{item.count}</TableCell>
              <TableCell align="right">{item.totalPrice}$</TableCell>
              
              <TableCell align="right"><button color="error" align="right" onClick={()=>removecart(item.productId)}>delete</button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
  
}

export default Cart;