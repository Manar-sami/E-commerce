import { useState } from "react";
import { Box, Container, Typography, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

function FAQ() {
  const { t } = useTranslation();

  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "background.default",
        py: 8,
      }}
    >
      <Container maxWidth="md">

       

        <Typography
          sx={{
            textAlign: "center",
            color: "#F2CA50",
            fontSize: { xs: "30px", md: "40px" },
            fontWeight: 600,
            mb: 5,
          }}
        >
          {t("Frequently Asked Questions")}
        </Typography>



        
        <Box sx={{ borderBottom: "1px solid #333" }}>
          <Box
            onClick={() => setOpen1(!open1)}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              py: 3,
              cursor: "pointer",
            }}
          >
            <Typography sx={{ color: "h2color" }}>
              {t("How can I place an order?")}
            </Typography>

            <IconButton>
              {open1 ? (
                <RemoveIcon sx={{ color: "#F2CA50" }} />
              ) : (
                <AddIcon sx={{ color: "#F2CA50" }} />
              )}
            </IconButton>
          </Box>

          <AnimatePresence>
            {open1 && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{ overflow: "hidden" }}
              >
                <Typography sx={{ color: "colorp", pb: 3 }}>
                  {t(
                    "Choose the product you want, add it to your cart, and complete the checkout process."
                  )}
                </Typography>
              </motion.div>
            )}
          </AnimatePresence>
        </Box>

        
        <Box sx={{ borderBottom: "1px solid #333" }}>
          <Box
            onClick={() => setOpen2(!open2)}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              py: 3,
              cursor: "pointer",
            }}
          >
            <Typography sx={{ color: "h2color" }}>
              {t("What payment methods do you accept?")}
            </Typography>

            <IconButton>
              {open2 ? (
                <RemoveIcon sx={{ color: "#F2CA50" }} />
              ) : (
                <AddIcon sx={{ color: "#F2CA50" }} />
              )}
            </IconButton>
          </Box>

          <AnimatePresence>
            {open2 && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{ overflow: "hidden" }}
              >
                <Typography sx={{ color: "colorp", pb: 3 }}>
                  {t(
                    "We accept several secure payment methods. Available options are shown during checkout."
                  )}
                </Typography>
              </motion.div>
            )}
          </AnimatePresence>
        </Box>

        
        <Box sx={{ borderBottom: "1px solid #333" }}>
          <Box
            onClick={() => setOpen3(!open3)}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              py: 3,
              cursor: "pointer",
            }}
          >
            <Typography sx={{ color: "h2color" }}>
              {t("How long does delivery take?")}
            </Typography>

            <IconButton>
              {open3 ? (
                <RemoveIcon sx={{ color: "#F2CA50" }} />
              ) : (
                <AddIcon sx={{ color: "#F2CA50" }} />
              )}
            </IconButton>
          </Box>

          <AnimatePresence>
            {open3 && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{ overflow: "hidden" }}
              >
                <Typography sx={{ color: "colorp", pb: 3 }}>
                  {t(
                    "Delivery time depends on your location and the shipping method selected at checkout."
                  )}
                </Typography>
              </motion.div>
            )}
          </AnimatePresence>
        </Box>

        
        <Box sx={{ borderBottom: "1px solid #333" }}>
          <Box
            onClick={() => setOpen4(!open4)}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              py: 3,
              cursor: "pointer",
            }}
          >
            <Typography sx={{ color: "h2color" }}>
              {t("Can I return a product?")}
            </Typography>

            <IconButton>
              {open4 ? (
                <RemoveIcon sx={{ color: "#F2CA50" }} />
              ) : (
                <AddIcon sx={{ color: "#F2CA50" }} />
              )}
            </IconButton>
          </Box>

          <AnimatePresence>
            {open4 && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{ overflow: "hidden" }}
              >
                <Typography sx={{ color: "colorp", pb: 3 }}>
                  {t(
                    "Yes, products can be returned according to our return policy."
                  )}
                </Typography>
              </motion.div>
            )}
          </AnimatePresence>
        </Box>

      </Container>
    </Box>
  );
}

export default FAQ;