import { Box, Container, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import useProfile from '../../Hook/Profile'
import CircularProgress from '@mui/material/CircularProgress';
import PhotoIcon from '@mui/icons-material/Photo';
import Pagination from '@mui/material/Pagination';
import { useState } from 'react';

function Order() {
 
  const{t}=useTranslation();

  const{data,isLoading,isError}=useProfile();
    console.log(data);
  
     const[page,setpage]=useState(1);
     const itemsPage=4;
     const start=(page-1)*itemsPage;
     const end=start+itemsPage;
     
    if(isLoading) return <CircularProgress></CircularProgress>
    if(isError) return <Typography>error</Typography>
    
  return (
    <Box>
     <Container >
        <Typography sx={{fontSize:"32px",color:"#0B1C30",fontWeight:"bold"}}>
            {t("Order History")}
        </Typography>
        <Typography sx={{fontSize:"16px",color:"#454652"}}>
            {t("View and track your previous luxury appliance purchases.")}
        </Typography>
        <Box >
          {data.data.orders.length > 0 ? (
            <Box>
               {data.data.orders.slice(start,end).map((item) =>(
               <Box key={item.id} sx={{p:"24px",mt:4,borderRadius:"12px",boxShadow:3,display:"flex",flexWrap:"wrap",width:"100%",gap:8,alignItems:"center"}}>
                 <Box sx={{bgcolor:"#11101a30",p:4,borderRadius:"8px",width:{xs:"100%",sm:"auto"},textAlign:"center"}} >
                    {item.image?item.image:<PhotoIcon/>}
                 </Box>

                    <Box>
                      <Typography sx={{fontSize:"12px",color:"#454652",fontWeight:"700"}}>
                        {t("ORDER ID")}
                      </Typography>
                        <Typography sx={{fontSize:"14px",color:"#0B1C30",fontWeight:"600",mt:1}}>
                            {item.id}
                        </Typography>
                    </Box>

                      <Box>
                      <Typography sx={{fontSize:"12px",color:"#454652",fontWeight:"700"}}>
                        {t("DATE")}
                      </Typography>
                        <Typography sx={{fontSize:"14px",color:"#0B1C30",fontWeight:"600",mt:1}}>
                            {new Date(item.orderDate).toLocaleDateString('en-GB')}
                        </Typography>
                    </Box>
                      <Box>
                      <Typography sx={{fontSize:"12px",color:"#454652",fontWeight:"700"}}>
                        {t("TOTAL")}
                      </Typography>
                        <Typography sx={{fontSize:"14px",color:"#000666",fontWeight:"bold",mt:1}}>
                            ${item.amountPaid}
                        </Typography>
                    </Box>

                     <Box>
                      <Typography sx={{fontSize:"12px",color:"#454652",fontWeight:"700"}}>
                        {t("STATUS")}
                      </Typography>
                        <Typography sx={{fontSize:"14px",color:"#B08000",fontWeight:"bold",mt:1}}>
                            {item.status}
                        </Typography>
                    </Box>

                     <Box>
                      <Typography sx={{fontSize:"12px",color:"#454652",fontWeight:"700"}}>
                        {t("PAYMENT")}
                      </Typography>
                        <Typography sx={{fontSize:"14px",color:"green",fontWeight:"bold",mt:1}}>
                            {item.paymentStatus}
                        </Typography>
                    </Box>

                    
                </Box>
               
            ))}
             <Pagination  color="primary" sx={{mt:4,display:"flex",justifyContent:"center"}} count={Math.ceil(data.data.orders.length / itemsPage)} onChange={(event, value)=>setpage(value)}  />
             </Box>
          ) : (
            <Typography sx={{fontSize:"16px",color:"#454652"}}>
              {t("You have no previous orders.")}
            </Typography>
          )}

          
        </Box>
     </Container>
    </Box>
  )
}

export default Order