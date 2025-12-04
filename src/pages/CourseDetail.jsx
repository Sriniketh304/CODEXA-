import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Button, Chip, Divider, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { useParams, Link } from 'react-router-dom';
import coursesData from '../data/courses.json';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import LanguageIcon from '@mui/icons-material/Language';
import { Helmet } from 'react-helmet-async';
import EnrollmentDialog from '../components/UI/EnrollmentDialog';

const CourseDetail = () => {
    const { id } = useParams();
    const [enrollOpen, setEnrollOpen] = useState(false);
    const course = coursesData.find(c => c.id === parseInt(id));

    if (!course) {
        return (
            <Container sx={{ py: 10, textAlign: 'center' }}>
                <Typography variant="h4">Course not found</Typography>
                <Button component={Link} to="/courses" sx={{ mt: 2 }}>Back to Courses</Button>
            </Container>
        );
    }

    return (
        <>
            <Helmet>
                <title>{course.name} - Codexa</title>
                <meta name="description" content={course.description} />
            </Helmet>
            <Box sx={{ py: 8 }}>
                <Container maxWidth="xl">
                    <Grid container spacing={6}>
                        <Grid item xs={12} md={8}>
                            <Box sx={{ mb: 4 }}>
                                <Chip label={course.level} color="secondary" sx={{ mb: 2 }} />
                                <Typography variant="h2" gutterBottom>{course.name}</Typography>
                                <Typography variant="h5" color="text.secondary" paragraph>
                                    {course.description}
                                </Typography>
                            </Box>

                            <Box sx={{ mb: 6 }}>
                                <img
                                    src={course.image}
                                    alt={course.name}
                                    style={{ width: '100%', borderRadius: '24px', maxHeight: '500px', objectFit: 'cover' }}
                                />
                            </Box>

                            <Typography variant="h4" gutterBottom>What you'll learn</Typography>
                            <List sx={{ mb: 4 }}>
                                {[
                                    'Build real-world applications from scratch',
                                    'Master the latest tools and technologies',
                                    'Best practices for clean and maintainable code',
                                    'Deploy your projects to production'
                                ].map((item, index) => (
                                    <ListItem key={index}>
                                        <ListItemIcon>
                                            <CheckCircleOutlineIcon color="primary" />
                                        </ListItemIcon>
                                        <ListItemText primary={item} />
                                    </ListItem>
                                ))}
                            </List>
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <Box sx={{
                                p: 4,
                                bgcolor: 'background.paper',
                                borderRadius: 4,
                                position: 'sticky',
                                top: 100,
                                border: '1px solid rgba(0,0,0,0.05)',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
                            }}>
                                <Typography variant="h3" color="primary.main" gutterBottom fontWeight="bold">
                                    {course.price}
                                </Typography>
                                <Button
                                    variant="contained"
                                    fullWidth
                                    size="large"
                                    sx={{ mb: 3 }}
                                    onClick={() => setEnrollOpen(true)}
                                >
                                    Enroll Now
                                </Button>

                                <Divider sx={{ my: 3 }} />

                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                        <AccessTimeIcon color="action" />
                                        <Typography>Duration: <strong>{course.duration}</strong></Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                        <SignalCellularAltIcon color="action" />
                                        <Typography>Level: <strong>{course.level}</strong></Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                        <LanguageIcon color="action" />
                                        <Typography>Mode: <strong>{course.mode}</strong></Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <EnrollmentDialog
                open={enrollOpen}
                onClose={() => setEnrollOpen(false)}
                courseName={course.name}
            />
        </>
    );
};

export default CourseDetail;
