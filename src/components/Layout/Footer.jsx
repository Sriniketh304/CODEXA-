import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                py: 6,
                px: 2,
                mt: 'auto',
                backgroundColor: (theme) => theme.palette.background.paper,
                borderTop: '1px solid rgba(0,0,0,0.05)',
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" color="primary" gutterBottom fontWeight="bold">
                            CODEXA
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Code Your Future. Premium coding education for the next generation of developers.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" color="text.primary" gutterBottom fontWeight="bold">
                            Quick Links
                        </Typography>
                        <Link component={RouterLink} to="/courses" color="text.secondary" display="block" sx={{ mb: 1, textDecoration: 'none', '&:hover': { color: 'primary.main' } }}>
                            Courses
                        </Link>
                        <Link component={RouterLink} to="/blog" color="text.secondary" display="block" sx={{ mb: 1, textDecoration: 'none', '&:hover': { color: 'primary.main' } }}>
                            Blog
                        </Link>
                        <Link component={RouterLink} to="/about" color="text.secondary" display="block" sx={{ mb: 1, textDecoration: 'none', '&:hover': { color: 'primary.main' } }}>
                            About Us
                        </Link>
                        <Link component={RouterLink} to="/contact" color="text.secondary" display="block" sx={{ mb: 1, textDecoration: 'none', '&:hover': { color: 'primary.main' } }}>
                            Contact
                        </Link>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" color="text.primary" gutterBottom fontWeight="bold">
                            Connect With Us
                        </Typography>
                        <Box>
                            <IconButton color="primary" aria-label="Facebook">
                                <FacebookIcon />
                            </IconButton>
                            <IconButton color="primary" aria-label="Twitter">
                                <TwitterIcon />
                            </IconButton>
                            <IconButton color="primary" aria-label="Instagram">
                                <InstagramIcon />
                            </IconButton>
                            <IconButton color="primary" aria-label="LinkedIn">
                                <LinkedInIcon />
                            </IconButton>
                        </Box>
                        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                            Hyderabad, India
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            support@codexa.com
                        </Typography>
                    </Grid>
                </Grid>
                <Box sx={{ mt: 5, textAlign: 'center' }}>
                    <Typography variant="body2" color="text.secondary">
                        © {new Date().getFullYear()} Codexa. All rights reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
