import { Box, Typography, TextField, Button, Container, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';



function Join() {
  const {t}=useTranslation();
  

  return (
   <Box
      sx={{
        bgcolor: '#0d0d0d',
        color: '#ffffff',
        py: 10,
        px: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container maxWidth="md">
        <Stack spacing={3} sx={{justifyContent:"center",alignItems:"center"}}>
      
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontWeight: 400,
              letterSpacing: 1,
            
            }}
          >
            {t("Join the Inner Circle")}
          </Typography>

          
          <Typography
            variant="body1"
            sx={{
              color: '#a1a1aa',
              fontSize: '0.95rem',
              fontWeight: 300,
              mb: 2,
            }}
          >
            {t("Gain early access to limited releases and private viewing events.")} 
          </Typography>

         
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={0}
            sx={{
              width: '100%',
              maxWidth: 550,
            }}
          >
            <TextField
              placeholder={t("Email Address")}
              variant="outlined"
              fullWidth
              sx={{
                bgcolor: '#ffffff',
                mt:1,
                borderRadius: { xs: 1, sm: '4px 0 0 4px' },
                '& .MuiOutlinedInput-root': {
                  height: '48px',
                  borderRadius: { xs: 1, sm: '4px 0 0 4px' },
                  '& fieldset': {
                    borderColor: 'transparent',
                  },
                  '&:hover fieldset': {
                    borderColor: 'transparent',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'transparent',
                  },
                },
                '& .MuiInputBase-input': {
                  color: '#000000',
                  fontSize: '0.9rem',
                },
              }}
            />
            <Button
              variant="contained"
              disableElevation
              sx={{
                bgcolor: '#d4af37',
                color: '#000000',
                fontWeight: 700,
                px: 4,
                mt:1,
                height: '48px',
                borderRadius: { xs: 1, sm: '0 4px 4px 0' },
                textTransform: 'uppercase',
                fontSize: '0.85rem',
                letterSpacing: 1,
                whiteSpace: 'nowrap',
                '&:hover': {
                  bgcolor: '#c5a028',
                },
              }}
            >
              {t("Subscribe")}
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default Join;