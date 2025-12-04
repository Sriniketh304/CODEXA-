import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box, Chip } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
    return (
        <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }} style={{ height: '100%' }}>
            <Card sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative'
            }}>
                <CardMedia
                    component="img"
                    height="200"
                    image={course.image}
                    alt={course.name}
                    sx={{
                        borderRadius: '16px 16px 0 0',
                        objectFit: 'cover'
                    }}
                />
                <CardContent sx={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                }}>
                    <Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                            <Chip label={course.mode} size="small" color="secondary" variant="outlined" />
                            <Typography variant="h6" color="primary.main" fontWeight="bold">
                                {course.price}
                            </Typography>
                        </Box>
                        <Typography gutterBottom variant="h5" component="div" fontWeight="bold" sx={{
                            minHeight: '64px',
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden'
                        }}>
                            {course.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{
                            mb: 2,
                            minHeight: '48px',
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden'
                        }}>
                            {course.description}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3, color: 'text.secondary' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                <AccessTimeIcon fontSize="small" />
                                <Typography variant="caption">{course.duration}</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                <SignalCellularAltIcon fontSize="small" />
                                <Typography variant="caption">{course.level}</Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Button
                        component={Link}
                        to={`/courses/${course.id}`}
                        variant="contained"
                        fullWidth
                        color="primary"
                    >
                        View Details
                    </Button>
                </CardContent>
            </Card>
        </motion.div>
    );
};

export default CourseCard;
