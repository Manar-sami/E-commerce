import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography";
import { useTranslation } from 'react-i18next';


function Product_section() {
  const{t}=useTranslation();

  return (
   <Container>
       <Box
  sx={{
   
    py: { xs: "48px", md: "80px" },
   
  }}
>
  <Typography
    component="h2"
    variant="h2"
    sx={{
      textAlign: "center",
      color: "h2color",
      fontSize: { xs: "24px", md: "32px" },
      fontWeight: "400",
      mb: { xs: 4, md: 6 },
    }}
  >
    {t('Ecosystems')}
  </Typography>

  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: {
        xs: "1fr",
        sm: "repeat(2, 1fr)",
        md: "repeat(4, 1fr)",
      },
      gap: { xs: 2, md: 3 },
      maxWidth: "1200px",
      mx: "auto",
    }}
  >
    
    <Box
      sx={{
        position: "relative",
        height: { xs: "220px", md: "260px" },
        borderRadius: "12px",
        overflow: "hidden",
        backgroundImage: `url('/image/Audio.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        cursor: "pointer",
        transition: "0.4s",
        "&:hover": {
          transform: "scale(1.02)",
        },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
           background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.3) 100%)",
        }}
      />
      <Typography
        sx={{
          position: "absolute",
          bottom: "20px",
          left: "20px",
          color: "#FFFFFF",
          fontSize: "18px",
          fontWeight: "400",
        }}
      >
        {t('Audio')}
      </Typography>
    </Box>

   
    <Box
      sx={{
        position: "relative",
        height: { xs: "220px", md: "260px" },
        borderRadius: "12px",
        overflow: "hidden",
        backgroundImage: `url('/image/Visual.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        cursor: "pointer",
        transition: "0.4s",
        "&:hover": {
          transform: "scale(1.02)",
        },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
             background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0,0.3) 100%)",
        }}
      />
      <Typography
        sx={{
          position: "absolute",
          bottom: "20px",
          left: "20px",
          color: "#FFFFFF",
          fontSize: "18px",
          fontWeight: "400",
        }}
      >
        {t('Visual')}
      </Typography>
    </Box>

    
    <Box
      sx={{
        position: "relative",
        height: { xs: "220px", md: "260px" },
        borderRadius: "12px",
        overflow: "hidden",
        backgroundImage: `url('/image/Mobile.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        cursor: "pointer",
        transition: "0.4s",
        "&:hover": {
          transform: "scale(1.02)",
        },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
           background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.3) 100%)",
        }}
      />
      <Typography
        sx={{
          position: "absolute",
          bottom: "20px",
          left: "20px",
          color: "#FFFFFF",
          fontSize: "18px",
          fontWeight: "400",
        }}
      >
        {t('Mobile')}
      </Typography>
    </Box>

    
    <Box
      sx={{
        position: "relative",
        height: { xs: "220px", md: "260px" },
        borderRadius: "12px",
        overflow: "hidden",
        backgroundImage: `url('/image/Computing.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        cursor: "pointer",
        transition: "0.4s",
        "&:hover": {
          transform: "scale(1.02)",
        },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0,0.3) 100%)",
        }}
      />
      <Typography
        sx={{
          position: "absolute",
          bottom: "20px",
          left: "20px",
          color: "#FFFFFF",
          fontSize: "18px",
          fontWeight: "400",
        }}
      >
        {t('Computing')}
      </Typography>
    </Box>
  </Box>
</Box>
   </Container>
  )
}

export default Product_section
