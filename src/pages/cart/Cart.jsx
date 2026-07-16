
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
import useUpdateQuantity from "../../Hook/UpdateQuantity";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


function Cart() { 
  // هان استدعينا ال hook الخاص يلي بجيب المنتجات الموجودة في السلة
  const{data,isLoading,isError,error}=useGetitemformcart();

 // هان استدعينا ال hook الخاص يلي بحذف المنتج الموجودة في السلة
  const{mutate:removecart,isPending}=useRemovitemcart();

 // هان استدعينا ال hook الخاص يلي بعدل الكمية  الموجودة في السلة
   const{mutate:update,isPending:updateitem}=useUpdateQuantity();

  //  function خاصة في التحديث
   const handuleupdate=(productId,action)=>{
    const item=data.find(i=>i.productId==productId);
    console.log(item);

    if (action === "+") {
    update({
      productId,
      count: item.count + 1
    });
  }
    else {
      if(data.count<0){
         
      }
  update({
    productId,
    count: item.count - 1
  });
}
   }

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
              <TableCell align="right">
                 <Box sx={{display: "flex",alignItems:"center",justifyContent:"end"}}>
                 {item.count<1?<>
                  <IconButton sx={{opacity:0}} >
                  < RemoveIcon onClick={()=>handuleupdate(item.productId,'-')}/>
                 </IconButton>
                  </> :
                  <>
                  <IconButton >
                  < RemoveIcon onClick={()=>handuleupdate(item.productId,'-')}/>
                 </IconButton>
                  </>
                  }
                 
                 <TableCell align="right">{item.count}</TableCell>
                   <IconButton>
                  < AddIcon onClick={()=>handuleupdate(item.productId,'+')}/>
                 </IconButton>
              </Box>
              </TableCell>
             
              <TableCell align="right">{item.totalPrice}$</TableCell>
              
              <TableCell align="right"><Button  align="right"  color="error"
               disabled={isPending}
              onClick={()=>removecart(item.productId)}>delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
  
}

export default Cart;