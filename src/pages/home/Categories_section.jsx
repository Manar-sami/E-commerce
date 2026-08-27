import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Button from '@mui/material/Button';
import { motion } from "framer-motion";

function Categories_section() {

  const { t } = useTranslation();

  return (
    <Box sx={{ backgroundColor: "footerbg", py: { xs: 6, md: 8 } }}>
      <Container maxWidth="lg">

        
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: { xs: 4, md: 5 },
          }}
        >

            <Typography
            sx={{
              color: "#D4AF37",
              fontSize: "13px",
              letterSpacing: "2px",
              fontWeight: "500",
              cursor: "pointer",
            }}
          >
            {t('VIEW ALL')}
          </Typography>
          <Typography
            component="h2"
            variant="h2"
            sx={{
              color: "h2color",
              fontSize: { xs: "24px", md: "32px" },
              fontWeight: "bold",
            }}
          >
            {t('Curated Excellence')}
          </Typography>

        
        </Box>

     
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(4, 1fr)",
            },
            gap: { xs: 3, md: 3 },
          }}
        >
       
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -6, borderColor: "rgba(212,175,55,0.5)" }}
            sx={{
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "4px",
              p: 2,
              cursor: "pointer",
              backgroundColor:"#0A0A0A"
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "160px",
                borderRadius: "4px",
                overflow: "hidden",
                mb: 2,
                backgroundColor:"black",
                backgroundImage: `url('/image/Aura.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <Typography sx={{ color: "#FFFFFF", fontSize: "18px", fontWeight: "500", mb: 0.5 }}>
              {t('Aura Chronograph')}
            </Typography>
            <Typography sx={{ color: "#9E9E9E", fontSize: "14px", mb: 2 }}>
              {t('$1,250')}
            </Typography>
            <Button
              component={motion.button}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              fullWidth
              sx={{
                color: "#FFFFFF",
                fontSize: "13px",
                letterSpacing: "1px",
                fontWeight: "400",
                borderRadius: "0px",
                border: "1px solid #4A4A4A",
                py: "10px",
                transition: "background-color 0.3s, color 0.3s",
                "&:hover": {
                  backgroundColor: "#FFFFFF",
                  color: "#0A0A0A",
                },
              }}
            >
              {t('ADD TO CART')}
            </Button>
          </Box>

          
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -6, borderColor: "rgba(212,175,55,0.5)" }}
            sx={{
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "4px",
              p: 2,
              cursor: "pointer",
               backgroundColor:"#0A0A0A"
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "160px",
                borderRadius: "4px",
                overflow: "hidden",
                mb: 2,
                backgroundImage: `url('/image/Nova.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <Typography sx={{ color: "#FFFFFF", fontSize: "18px", fontWeight: "500", mb: 0.5 }}>
              {t('Nova IEMs')}
            </Typography>
            <Typography sx={{ color: "#9E9E9E", fontSize: "14px", mb: 2 }}>
              {t('$850')}
            </Typography>
            <Button
              component={motion.button}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              fullWidth
              sx={{
                color: "#FFFFFF",
                fontSize: "13px",
                letterSpacing: "1px",
                fontWeight: "400",
                borderRadius: "0px",
                border: "1px solid #4A4A4A",
                py: "10px",
                transition: "background-color 0.3s, color 0.3s",
                "&:hover": {
                  backgroundColor: "#FFFFFF",
                  color: "#0A0A0A",
                },
              }}
            >
              {t('ADD TO CART')}
            </Button>
          </Box>

          
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -6, borderColor: "rgba(212,175,55,0.5)" }}
            sx={{
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "4px",
              p: 2,
              cursor: "pointer",
               backgroundColor:"#0A0A0A"
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "160px",
                borderRadius: "4px",
                overflow: "hidden",
                mb: 2,
                backgroundImage: `url('/image/Core.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <Typography sx={{ color: "#FFFFFF", fontSize: "18px", fontWeight: "500", mb: 0.5 }}>
              {t('Core DAC')}
            </Typography>
            <Typography sx={{ color: "#9E9E9E", fontSize: "14px", mb: 2 }}>
              {t('$2,100')}
            </Typography>
            <Button
              component={motion.button}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              fullWidth
              sx={{
                color: "#FFFFFF",
                fontSize: "13px",
                letterSpacing: "1px",
                fontWeight: "400",
                borderRadius: "0px",
                border: "1px solid #4A4A4A",
                py: "10px",
                transition: "background-color 0.3s, color 0.3s",
                "&:hover": {
                  backgroundColor: "#FFFFFF",
                  color: "#0A0A0A",
                },
              }}
            >
              {t('ADD TO CART')}
            </Button>
          </Box>

         
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ y: -6, borderColor: "rgba(212,175,55,0.5)" }}
            sx={{
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "4px",
              p: 2,
              cursor: "pointer",
              backgroundColor:"#0A0A0A"
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "160px",
                borderRadius: "4px",
                overflow: "hidden",
                mb: 2,
                backgroundImage: `url('/image/Apex.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <Typography sx={{ color: "#FFFFFF", fontSize: "18px", fontWeight: "500", mb: 0.5 }}>
              {t('Apex Type-01')}
            </Typography>
            <Typography sx={{ color: "#9E9E9E", fontSize: "14px", mb: 2 }}>
              {t('$450')}
            </Typography>
            <Button
              component={motion.button}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              fullWidth
              sx={{
                color: "#FFFFFF",
                fontSize: "13px",
                letterSpacing: "1px",
                fontWeight: "400",
                borderRadius: "0px",
                border: "1px solid #4A4A4A",
                py: "10px",
                transition: "background-color 0.3s, color 0.3s",
                "&:hover": {
                  backgroundColor: "#FFFFFF",
                  color: "#0A0A0A",
                },
              }}
            >
              {t('ADD TO CART')}
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Categories_section