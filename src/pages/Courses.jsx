import React, { useState } from 'react';
import { Box, Container, Typography, Grid, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CourseCard from '../components/UI/CourseCard';
import coursesData from '../data/courses.json';
import { Helmet } from 'react-helmet-async';

const Courses = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredCourses = coursesData.filter(course =>
        course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <Helmet>
                <title>All Courses - Codexa</title>
                <meta name="description" content="Browse our comprehensive list of coding courses. Find the perfect course to kickstart your tech career." />
            </Helmet>
            <Box sx={{ py: 8, minHeight: '80vh' }}>
                <Container maxWidth="xl">
                    <Box sx={{ mb: 8, textAlign: 'center' }}>
                        <Typography variant="h2" gutterBottom color="text.primary">
                            Explore Our Courses
                        </Typography>
                        <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
                            Find the perfect path for your coding journey
                        </Typography>
                        <TextField
                            variant="outlined"
                            placeholder="Search courses..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            sx={{ width: { xs: '100%', md: '500px' } }}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon color="action" />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Box>

                    <Grid container spacing={4}>
                        {filteredCourses.length > 0 ? (
                            filteredCourses.map((course) => (
                                <Grid item key={course.id} xs={12} md={4}>
                                    <CourseCard course={course} />
                                </Grid>
                            ))
                        ) : (
                            <Grid item xs={12}>
                                <Box sx={{ textAlign: 'center', py: 8 }}>
                                    <Typography variant="h5" color="text.secondary">
                                        No courses found matching "{searchTerm}"
                                    </Typography>
                                </Box>
                            </Grid>
                        )}
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default Courses;
