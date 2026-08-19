import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
 
  Stack
} from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function ContactSection() {
  return (
    <Box sx={{ bgcolor: '#0a0a0a', minHeight: '100vh', py: 8, display: 'flex', alignItems: 'center' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          
         
          <Grid item  size={{xs:12,md:7}}>
            <Box
              elevation={0}
              sx={{
                p: 4,
                bgcolor: '#121212',
                borderRadius: 3,
                border: '1px solid #1f1f1f',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <Typography variant="h4" component="h1" sx={{ color: '#fff', mb: 4, fontWeight: 400 }}>
                Send a Message
              </Typography>

              <Box component="form" noValidate autoComplete="off" sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <Box>
                  <Typography variant="caption" sx={{ color: '#a0a0a0', letterSpacing: 1.5, fontWeight: 600 }}>
                    NAME
                  </Typography>
                  <TextField
                    fullWidth
                    variant="standard"
                    placeholder="John Doe"
                    sx={{
                      '& .MuiInput-underline:before': { borderBottomColor: '#333' },
                      '& .MuiInput-underline:after': { borderBottomColor: '#d4af37' },
                      input: { color: '#fff', pt: 1 },
                    }}
                  />
                </Box>

                <Box>
                  <Typography variant="caption" sx={{ color: '#a0a0a0', letterSpacing: 1.5, fontWeight: 600 }}>
                    EMAIL
                  </Typography>
                  <TextField
                    fullWidth
                    variant="standard"
                    placeholder="john@example.com"
                    sx={{
                      '& .MuiInput-underline:before': { borderBottomColor: '#333' },
                      '& .MuiInput-underline:after': { borderBottomColor: '#d4af37' },
                      input: { color: '#fff', pt: 1 },
                    }}
                  />
                </Box>

                <Box>
                  <Typography variant="caption" sx={{ color: '#a0a0a0', letterSpacing: 1.5, fontWeight: 600 }}>
                    SUBJECT
                  </Typography>
                  <TextField
                    fullWidth
                    variant="standard"
                    placeholder="Product Inquiry"
                    sx={{
                      '& .MuiInput-underline:before': { borderBottomColor: '#333' },
                      '& .MuiInput-underline:after': { borderBottomColor: '#d4af37' },
                      input: { color: '#fff', pt: 1 },
                    }}
                  />
                </Box>

                <Box sx={{ mb: 3 }}>
                  <Typography variant="caption" sx={{ color: '#a0a0a0', letterSpacing: 1.5, fontWeight: 600 }}>
                    MESSAGE
                  </Typography>
                  <TextField
                    fullWidth
                    multiline
                    rows={3}
                    variant="standard"
                    placeholder="How can we help you?"
                    sx={{
                      '& .MuiInput-underline:before': { borderBottomColor: '#333' },
                      '& .MuiInput-underline:after': { borderBottomColor: '#d4af37' },
                      '& .MuiInputBase-input': { color: '#fff', pt: 1 },
                    }}
                  />
                </Box>

                <Button
                  variant="contained"
                  disableElevation
                  sx={{
                    bgcolor: '#d4af37',
                    color: '#000',
                    fontWeight: 'bold',
                    fontSize: '12px',
                    letterSpacing: 1.5,
                    py: 1.2,
                    px: 3,
                    width: 'fit-content',
                    borderRadius: 1,
                    '&:hover': {
                      bgcolor: '#b8962d',
                    },
                  }}
                >
                  SEND MESSAGE
                </Button>
              </Box>
            </Box>
          </Grid>

        
          <Grid item size={{xs:12,md:5}} sx={{display:"flex",flexDirection:'column',justifyContent:"space-between"}}>
            
              
              
              <Box
                
                sx={{
                  p: 3,
                  bgcolor: '#121212',
                  borderRadius: 3,
                  border: '1px solid #1f1f1f',

                }}
              >
                <Stack spacing={3}>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <LocationOnOutlinedIcon sx={{ color: '#d4af37', mt: 0.5 }} />
                    <Box>
                      <Typography variant="h6" sx={{ color: '#fff', fontSize: '18px' }}>
                        Headquarters
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#a0a0a0', mt: 0.5 }}>
                        1200 Aureate Boulevard<br />
                        Suite 500<br />
                        San Francisco, CA 94107
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <LocalPhoneOutlinedIcon sx={{ color: '#d4af37', mt: 0.5 }} />
                    <Box>
                      <Typography variant="h6" sx={{ color: '#fff', fontSize: '18px' }}>
                        Direct Line
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#a0a0a0', mt: 0.5 }}>
                        +1 (800) 555-0199
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <EmailOutlinedIcon sx={{ color: '#d4af37', mt: 0.5 }} />
                    <Box>
                      <Typography variant="h6" sx={{ color: '#fff', fontSize: '18px' }}>
                        Email
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#a0a0a0', mt: 0.5 }}>
                        concierge@aureate.tech
                      </Typography>
                    </Box>
                  </Box>
                </Stack>
              </Box>

              
              <Box
               
                sx={{
                  borderRadius: 3,
                  overflow: 'hidden',
                  border: '1px solid #1f1f1f',
                  height: 180,
                }}
              >
                <Box
                  component="img"
                  src="./image/contact.png"
                  alt="Office Map"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    
                  }}
                />
              </Box>

             
              <Box
                
                sx={{
                  p: 2.5,
                  bgcolor: '#121212',
                  borderRadius: 3,
                  border: '1px solid #1f1f1f',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer',
                  transition: 'border-color 0.2s',
                  '&:hover': {
                    borderColor: '#d4af37',
                  },
                }}
              >
                <Typography variant="h6" sx={{ color: '#fff', fontSize: '18px' }}>
                  View FAQ
                </Typography>
                <ArrowForwardIcon sx={{ color: '#d4af37' }} />
              </Box>

           
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
}