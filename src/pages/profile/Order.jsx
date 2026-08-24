import { Box, Container, Typography, CircularProgress, Pagination, Grid, Chip } from '@mui/material';
import { useTranslation } from 'react-i18next';
import useProfile from '../../Hook/Profile';
import PhotoIcon from '@mui/icons-material/Photo';
import { useState } from 'react';

function Order() {
  const { t, i18n } = useTranslation();
  const { data, isLoading, isError } = useProfile();
  
  const [page, setpage] = useState(1);
  const itemsPage = 4;
  const start = (page - 1) * itemsPage;
  const end = start + itemsPage;

  if (isLoading) return (
    <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
      <CircularProgress sx={{ color: '#d4b896' }} />
    </Box>
  );
  
  if (isError) return <Typography sx={{ color: '#ef4444', textAlign: 'center', py: 4 }}>{t("Error loading orders")}</Typography>;

  const orders = data?.data?.orders ;

  return (
    <Box >
      <Container maxWidth="lg">
        
        <Typography sx={{ fontSize: "32px", color: "h2color", fontWeight: "600", letterSpacing: "0.5px" }}>
          {t("Order History")}
        </Typography>
        <Typography sx={{ fontSize: "15px", color: "headercolor", mt: 0.5, mb: 4 }}>
          {t("View and track your previous luxury appliance purchases.")}
        </Typography>

        <Box>
          {orders.length > 0 ? (
            <Box>
              {orders.slice(start, end).map((item) => (
                <Box
                  key={item.id}
                  sx={{
                    p: "20px 24px",
                    mt: 2.5,
                    borderRadius: "12px",
                    backgroundColor: "#141416",
                    border: "1px solid #262626",
                  }}
                >
                  <Grid container spacing={2} alignItems="center">
                
                    <Grid item xs={12} sm="auto">
                      <Box
                        sx={{
                          width: 60,
                          height: 60,
                          borderRadius: "8px",
                          backgroundColor: "#0d0d0e",
                          border: "1px solid #262626",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          overflow: "hidden",
                          color: "#52525b"
                        }}
                      >
                        {item.image ? (
                          <img src={item.image} alt={item.id} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        ) : (
                          <PhotoIcon sx={{ fontSize: 28, color: '#52525b' }} />
                        )}
                      </Box>
                    </Grid>

                    
                    <Grid item xs={6} sm={2.2}>
                      <Typography sx={{ fontSize: "11px", color: "#71717a", fontWeight: "700", letterSpacing: "0.5px" }}>
                        {t("ORDER ID")}
                      </Typography>
                      <Typography sx={{ fontSize: "14px", color: "#ffffff", fontWeight: "500", mt: 0.5 }}>
                        #{item.id}
                      </Typography>
                    </Grid>

                    {/* DATE */}
                    <Grid item xs={6} sm={2.2}>
                      <Typography sx={{ fontSize: "11px", color: "#71717a", fontWeight: "700", letterSpacing: "0.5px" }}>
                        {t("DATE")}
                      </Typography>
                      <Typography sx={{ fontSize: "14px", color: "#a1a1aa", fontWeight: "500", mt: 0.5 }}>
                        {new Date(item.orderDate).toLocaleDateString('en-GB')}
                      </Typography>
                    </Grid>

                  
                    <Grid item xs={6} sm={2}>
                      <Typography sx={{ fontSize: "11px", color: "#71717a", fontWeight: "700", letterSpacing: "0.5px" }}>
                        {t("TOTAL")}
                      </Typography>
                      <Typography sx={{ fontSize: "14px", color: "#ffffff", fontWeight: "600", mt: 0.5 }}>
                        ${item.amountPaid}
                      </Typography>
                    </Grid>

                    <Grid item xs={6} sm={2.2}>
                      <Typography sx={{ fontSize: "11px", color: "#71717a", fontWeight: "700", letterSpacing: "0.5px", mb: 0.5 }}>
                        {t("STATUS")}
                      </Typography>
                      <Chip
                        label={item.status}
                        size="small"
                        sx={{
                          backgroundColor: "#27272a",
                          color: "#e4e4e7",
                          fontWeight: "500",
                          fontSize: "12px",
                          borderRadius: "6px"
                        }}
                      />
                    </Grid>

                    
                    <Grid item xs={6} sm={2}>
                      <Typography sx={{ fontSize: "11px", color: "#71717a", fontWeight: "700", letterSpacing: "0.5px", mb: 0.5 }}>
                        {t("PAYMENT")}
                      </Typography>
                      <Chip
                        label={item.paymentStatus}
                        size="small"
                        sx={{
                          backgroundColor: "rgba(212, 184, 150, 0.1)",
                          color: "#d4b896",
                          border: "1px solid rgba(212, 184, 150, 0.25)",
                          fontWeight: "500",
                          fontSize: "12px",
                          borderRadius: "6px"
                        }}
                      />
                    </Grid>
                  </Grid>
                </Box>
              ))}

             
              <Pagination
                sx={{
                  mt: 4,
                  display: "flex",
                  justifyContent: "center",
                  direction: i18n.language === "ar" ? "rtl" : "ltr",
                  "& .MuiPaginationItem-root": {
                    color: "#a1a1aa",
                    "&.Mui-selected": {
                      backgroundColor: "#d4b896",
                      color: "#000000",
                      fontWeight: "bold",
                      "&:hover": { backgroundColor: "#c2a47e" }
                    },
                    "&:hover": { backgroundColor: "#27272a" }
                  }
                }}
                count={Math.ceil(orders.length / itemsPage)}
                page={page}
                onChange={(event, value) => setpage(value)}
              />
            </Box>
          ) : (
            <Typography sx={{ fontSize: "16px", color: "#71717a", mt: 4, textAlign: 'center' }}>
              {t("You have no previous orders.")}
            </Typography>
          )}
        </Box>
      </Container>
    </Box>
  );
}

export default Order;