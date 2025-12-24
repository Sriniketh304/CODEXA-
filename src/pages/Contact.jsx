import React, { useState } from 'react';
import { Box, Container, Typography, Grid, TextField, Button, Paper } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Construct the WhatsApp message
        const message = `*New Contact Inquiry*
        
*Name:* ${formData.name}
*Email:* ${formData.email}
*Message:*
${formData.message}
        
Please get back to me.`;

        // Encode message and open WhatsApp
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/917286944216?text=${encodedMessage}`, '_blank');

        // Reset form
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <>
            <Helmet>
                <title>Contact Us - Codexa</title>
                <meta name="description" content="Get in touch with Codexa for any queries regarding our courses." />
            </Helmet>
            <Box sx={{ py: 8 }}>
                <Container maxWidth="xl">
                    <Grid container spacing={8}>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h2" gutterBottom color="text.primary">
                                Get in Touch
                            </Typography>
                            <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 6 }}>
                                Have questions about our courses or need career guidance? We're here to help!
                            </Typography>

                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                    <Box sx={{ p: 2, bgcolor: 'primary.main', borderRadius: '50%', color: 'white' }}>
                                        <LocationOnIcon />
                                    </Box>
                                    <Box>
                                        <Typography variant="h6" color="text.primary">Visit Us</Typography>
                                        <Typography color="text.secondary">Hyderabad, India</Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                    <Box sx={{ p: 2, bgcolor: 'primary.main', borderRadius: '50%', color: 'white' }}>
                                        <EmailIcon />
                                    </Box>
                                    <Box>
                                        <Typography variant="h6" color="text.primary">Email Us</Typography>
                                        <Typography color="text.secondary">support@codexa.com</Typography>
                                    </Box>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                    <Box sx={{ p: 2, bgcolor: 'primary.main', borderRadius: '50%', color: 'white' }}>
                                        <PhoneIcon />
                                    </Box>
                                    <Box>
                                        <Typography variant="h6" color="text.primary">Call Us</Typography>
                                        <Typography color="text.secondary">+91-7286944216</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Paper sx={{ p: 4, bgcolor: 'background.paper', borderRadius: 4, boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                                <form onSubmit={handleSubmit}>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                label="Name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                variant="outlined"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                label="Email"
                                                name="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                variant="outlined"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                label="Message"
                                                name="message"
                                                multiline
                                                rows={4}
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                variant="outlined"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                size="large"
                                                fullWidth
                                                color="success"
                                                startIcon={<WhatsAppIcon />}
                                            >
                                                Send Message via WhatsApp
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </form>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default Contact;
