import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTranslation } from 'react-i18next';

function Join() {
  const { t } = useTranslation();

  return (
    <Box sx={{ py: 10, backgroundColor: '#0B1C30' }}>
      <Container maxWidth="md">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          
          <Typography
            sx={{
              color: 'white',
              fontSize: '32px',
              fontWeight: '700',
              mb: 1.5,
            }}
          >
            {t('Join the Collective.')}
          </Typography>

         
          <Typography
            sx={{
              color: '#ffffff8f',
              fontSize: '15px',
              maxWidth: '480px',
              lineHeight: 1.6,
              mb: 4,
            }}
          >
            {t(
              'Subscribe to receive early access to new arrivals, private sales, and curated lifestyle editorials.'
            )}
          </Typography>

          
          <Box sx={{ width: '100%', maxWidth: '420px', mb: 2 }}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder={t('Email Address')}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      edge="end"
                      sx={{
                        color: 'rgba(255, 255, 255, 0.7)',
                        '&:hover': { color: '#ffffff' },
                      }}
                    >
                      <ArrowForwardIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  color: 'white',
                  borderRadius: '0px',
                  height: '48px',
                  '& fieldset': {
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                  },
                
                  '&.Mui-focused fieldset': {
                    
                    borderWidth: '1px',
                  },
                },
                '& .MuiInputBase-input::placeholder': {
                  color: 'rgba(255, 255, 255, 0.4)',
                  opacity: 1,
                  fontSize: '14px',
                },
              }}
            />
          </Box>

          
          <Typography sx={{ color: 'rgba(255, 255, 255, 0.4)', fontSize: '12px' }}>
            {t('By subscribing, you agree to our Privacy Policy and Terms of Service.')}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Join;