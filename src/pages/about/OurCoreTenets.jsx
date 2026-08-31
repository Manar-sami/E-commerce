import { Box, Container, Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import { motion } from "framer-motion";

function OurCoreTenets() {
  const { t } = useTranslation();

  return (
    <Box sx={{ py: 10 }}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            sx={{
              fontSize: "24px",
              color: "h2color",
              textAlign: "center",
            }}
          >
            {t("Our Core Tenets")}
          </Typography>
        </motion.div>

        <Grid spacing={3} container sx={{ pt: 9 }}>
          <Grid
            size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
            sx={{ border: "1px solid #E9C34920", p: "40px", boxShadow: 3 }}
          >
            <LightbulbOutlinedIcon
              sx={{ color: "#E9C349", fontSize: "28px" }}
            />
            <Typography
              component="h2"
              sx={{ fontSize: "24px", color: "h2color", my: 2 }}
            >
             {t("Innovation")} 
            </Typography>

            <Typography
              component="p"
              sx={{ fontSize: "16px", color: "colorp" }}
            >
              {t("Pushing boundaries beyond the visible spectrum of technology.")}
            </Typography>
          </Grid>

          <Grid
            size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
            sx={{ border: "1px solid #E9C34920", p: "40px", boxShadow: 3 }}
          >
            <DiamondOutlinedIcon sx={{ color: "#E9C349", fontSize: "28px" }} />
            <Typography
              component="h2"
              sx={{ fontSize: "24px", color: "h2color", my: 2 }}
            >
             {t("Quality")}  
            </Typography>

            <Typography
              component="p"
              sx={{ fontSize: "16px", color: "colorp" }}
            >
              {t("Uncompromising materials sourced globally, engineered locally.")} 
            </Typography>
          </Grid>

          <Grid
            size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
            sx={{ border: "1px solid #E9C34920", p: "40px", boxShadow: 3 }}
          >
            <WorkspacePremiumOutlinedIcon
              sx={{ color: "#E9C349", fontSize: "28px" }}
            />
            <Typography
              component="h2"
              sx={{ fontSize: "24px", color: "h2color", my: 2 }}
            >
              {t("Trust")}
            </Typography>

            <Typography
              component="p"
              sx={{ fontSize: "16px", color: "colorp" }}
            >
              {t("A lifetime guarantee on the mechanical soul of our products.")}
            </Typography>
          </Grid>

          <Grid
            size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
            sx={{ border: "1px solid #E9C34920", p: "40px", boxShadow: 3 }}
          >
            <GroupsOutlinedIcon sx={{ color: "#E9C349", fontSize: "28px" }} />
            <Typography
              component="h2"
              sx={{ fontSize: "24px", color: "h2color", my: 2 }}
            >
                 {t("Client First")}
            </Typography>

            <Typography
              component="p"
              sx={{ fontSize: "16px", color: "colorp" }}
            >
             {t("White-glove service, ensuring your experience matches our engineering.")} 
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default OurCoreTenets;
