import React, { useState } from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import EnrollmentDialog from './EnrollmentDialog';

const HeroSection = () => {
    const [enrollOpen, setEnrollOpen] = useState(false);

    return (
        <>
            <Box
                sx={{
                    minHeight: '90vh',
                    display: 'flex',
                    alignItems: 'center',
                    background: 'linear-gradient(135deg, #fff 0%, #f8f9fa 100%)',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                {/* Background Elements */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: '-10%',
                        right: '-5%',
                        width: '600px',
                        height: '600px',
                        background: 'radial-gradient(circle, rgba(211, 47, 47, 0.05) 0%, rgba(255,255,255,0) 70%)',
                        borderRadius: '50%',
                        zIndex: 0,
                    }}
                />

                <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
                    <Grid container spacing={4} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <Typography
                                    variant="h1"
                                    component="h1"
                                    gutterBottom
                                    sx={{
                                        mb: 3,
                                        background: 'linear-gradient(45deg, #1a1a1a 30%, #4a4a4a 90%)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                    }}
                                >
                                    Code Your <br />
                                    <span style={{ color: '#d32f2f', WebkitTextFillColor: '#d32f2f' }}>Future</span> Today
                                </Typography>
                                <Typography variant="h5" color="text.secondary" paragraph sx={{ mb: 4, maxWidth: '600px' }}>
                                    Master the skills that drive the future. Join Codexa to learn from industry experts and build real-world projects that launch careers.
                                </Typography>
                                <Box sx={{ display: 'flex', gap: 2 }}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        size="large"
                                        onClick={() => setEnrollOpen(true)}
                                    >
                                        Get Started
                                    </Button>
                                    <Button component={Link} to="/courses" variant="outlined" color="primary" size="large">
                                        Explore Courses
                                    </Button>
                                </Box>
                            </motion.div>
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <Box
                                    component="img"
                                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
                                    alt="Coding Future"
                                    sx={{
                                        width: '100%',
                                        borderRadius: '24px',
                                        boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
                                        transform: 'perspective(1000px) rotateY(-5deg)',
                                    }}
                                />
                            </motion.div>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <EnrollmentDialog open={enrollOpen} onClose={() => setEnrollOpen(false)} />
        </>
    );
};

export default HeroSection;
