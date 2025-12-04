import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { Helmet } from 'react-helmet-async';

const About = () => {
    return (
        <>
            <Helmet>
                <title>About Us - Codexa</title>
                <meta name="description" content="Learn about Codexa's mission to revolutionize coding education." />
            </Helmet>
            <Box sx={{ py: 8 }}>
                <Container maxWidth="xl">
                    <Grid container spacing={8} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <Typography variant="h2" gutterBottom color="text.primary">
                                About Codexa
                            </Typography>
                            <Typography variant="h5" color="primary" gutterBottom>
                                Empowering the next generation of tech leaders.
                            </Typography>
                            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', color: 'text.secondary' }}>
                                At Codexa, we believe that quality education should be accessible to everyone. Our mission is to bridge the gap between traditional education and industry requirements.
                            </Typography>
                            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', color: 'text.secondary' }}>
                                We provide cutting-edge curriculum, hands-on projects, and mentorship from industry experts to help you master the skills that matter.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box
                                component="img"
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                                alt="Team working"
                                sx={{ width: '100%', borderRadius: 4, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                            />
                        </Grid>
                    </Grid>

                    <Box sx={{ mt: 10 }}>
                        <Grid container spacing={4}>
                            {[
                                { number: '50+', label: 'Expert Mentors' },
                                { number: '4.8/5', label: 'Average Rating' }
                            ].map((stat, index) => (
                                <Grid item xs={6} md={6} key={index}>
                                    <Paper sx={{ p: 4, textAlign: 'center', bgcolor: 'background.paper', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                                        <Typography variant="h3" color="primary" fontWeight="bold">
                                            {stat.number}
                                        </Typography>
                                        <Typography variant="h6" color="text.secondary">
                                            {stat.label}
                                        </Typography>
                                    </Paper>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </>
    );
};

export default About;
