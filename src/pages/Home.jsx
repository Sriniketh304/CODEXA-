import React from 'react';
import { Box, Container, Typography, Grid, Button } from '@mui/material';
import HeroSection from '../components/UI/HeroSection';
import CourseCard from '../components/UI/CourseCard';
import coursesData from '../data/courses.json';
import testimonialsData from '../data/testimonials.json';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Home = () => {
    const popularCourses = coursesData.slice(0, 3);

    return (
        <>
            <Helmet>
                <title>Codexa - Code Your Future</title>
                <meta name="description" content="Master coding with Codexa. Learn React, Full Stack, and Backend development from industry experts." />
            </Helmet>

            <HeroSection />

            {/* Popular Courses Section */}
            <Box sx={{ py: 10, bgcolor: 'background.default' }}>
                <Container maxWidth="xl">
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', mb: 6 }}>
                        <Box>
                            <Typography variant="h2" gutterBottom sx={{ color: 'text.primary' }}>
                                Popular Courses
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                Explore our highest-rated programs designed for your success.
                            </Typography>
                        </Box>
                        <Button component={Link} to="/courses" variant="text" color="primary" endIcon={<span>→</span>}>
                            View All
                        </Button>
                    </Box>
                    <Grid container spacing={4}>
                        {popularCourses.map((course) => (
                            <Grid item key={course.id} xs={12} md={4}>
                                <CourseCard course={course} />
                            </Grid>
                        ))}
                    </Grid>
                    <Box sx={{ mt: 6, textAlign: 'center' }}>
                        <Button
                            component={Link}
                            to="/courses"
                            variant="outlined"
                            size="large"
                            color="primary"
                            sx={{ px: 4, py: 1.5, borderRadius: 2 }}
                        >
                            Explore All Courses
                        </Button>
                    </Box>
                </Container>
            </Box>

            {/* Why Choose Us Section */}
            <Box sx={{ py: 10, bgcolor: 'background.paper' }}>
                <Container maxWidth="xl">
                    <Typography variant="h2" align="center" gutterBottom sx={{ mb: 8, color: 'text.primary' }}>
                        Why Choose Codexa?
                    </Typography>
                    <Grid container spacing={4}>
                        {[
                            { title: 'Industry-Relevant Curriculum', desc: 'Master the exact skills top tech companies are hiring for today.' },
                            { title: 'Live Mentorship & Support', desc: 'Get your doubts resolved instantly with 1:1 expert guidance.' },
                            { title: 'Career Support', desc: 'Get resume reviews, mock interviews, and job referrals.' },
                            { title: 'Flexible Learning', desc: 'Learn at your own pace with lifetime access to course content.' }
                        ].map((feature, index) => (
                            <Grid item xs={12} sm={6} md={3} key={index}>
                                <motion.div whileHover={{ y: -10 }}>
                                    <Box sx={{
                                        p: 4,
                                        height: '100%',
                                        bgcolor: 'background.default',
                                        borderRadius: 4,
                                        border: '1px solid rgba(0,0,0,0.05)',
                                        boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
                                    }}>
                                        <Typography variant="h5" gutterBottom color="primary.main" fontWeight="bold">
                                            {feature.title}
                                        </Typography>
                                        <Typography variant="body1" color="text.secondary">
                                            {feature.desc}
                                        </Typography>
                                    </Box>
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Testimonials Section */}
            <Box sx={{ py: 10 }}>
                <Container maxWidth="xl">
                    <Typography variant="h2" align="center" gutterBottom sx={{ mb: 2, color: 'text.primary' }}>
                        Student Success Stories
                    </Typography>
                    <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 8 }}>
                        Hear from our community of learners
                    </Typography>
                    <Grid container spacing={4}>
                        {testimonialsData.map((testimonial) => (
                            <Grid item xs={12} md={4} key={testimonial.id}>
                                <Box sx={{
                                    p: 4,
                                    bgcolor: 'background.paper',
                                    borderRadius: 4,
                                    height: '100%',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
                                }}>
                                    <Typography variant="h1" sx={{
                                        position: 'absolute',
                                        top: -20,
                                        right: 20,
                                        opacity: 0.1,
                                        fontFamily: 'serif',
                                        color: 'primary.main'
                                    }}>
                                        "
                                    </Typography>
                                    <Typography variant="body1" paragraph sx={{ fontStyle: 'italic', mb: 3, fontSize: '1.1rem', color: 'text.primary' }}>
                                        "{testimonial.review}"
                                    </Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                        <Box sx={{
                                            width: 50,
                                            height: 50,
                                            borderRadius: '50%',
                                            bgcolor: 'primary.main',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: 'white',
                                            fontWeight: 'bold'
                                        }}>
                                            {testimonial.name[0]}
                                        </Box>
                                        <Box>
                                            <Typography variant="subtitle1" fontWeight="bold" color="text.primary">
                                                {testimonial.name}
                                            </Typography>
                                            <Typography variant="caption" color="text.secondary">
                                                {testimonial.role} • {testimonial.rating} ★
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default Home;
