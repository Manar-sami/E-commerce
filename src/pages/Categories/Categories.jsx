
import useGetcategorise from './../../Hook/Getcategorise'
import Herocategories from './Herocategories';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import SubscribeSection from './SubscribeSection';

function Categories() {

   const{data,isLoading,isError}=useGetcategorise();
 
   if(isLoading){
    return <>
     <h2>lodaing</h2>
    </>
   }
      if(isError){
    return <>
     <h2>error</h2>
    </>
   }


  return (
    <> 
    <Herocategories></Herocategories>
    
  <Container>
     <Grid container spacing={3} sx={{py:10}}>
  {data.response.data.map((category) => (
    <Grid key={category.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
      <Box
        sx={{
          p: 4,
          borderRadius: 3,
          backgroundColor: "#fff",
          boxShadow: 2,
          textAlign: "center",
          transition: "0.3s",
          cursor: "pointer",
          "&:hover": {
            transform: "translateY(-6px)",
            boxShadow: 6,
          },
        }}
      >
        <Box
          sx={{
            width: 70,
            height: 70,
            borderRadius: "50%",
            bgcolor: "#EEF2FF",
            color: "#1A237E",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mx: "auto",
            mb: 2,
            fontSize: 28,
            fontWeight: "bold",
          }}
        >
          {category.id}
        </Box>

        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", color: "#1A1C1E" }}
        >
          {category.name}
        </Typography>

        <Typography
          variant="body2"
          sx={{ color: "#6B7280", mt: 1 }}
        >
          Browse products in this category
        </Typography>
      </Box>
    </Grid>
  ))}
</Grid> 
  </Container>

     <SubscribeSection></SubscribeSection>


    </>
  )
}

export default Categories