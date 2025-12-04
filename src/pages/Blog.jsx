import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button, CardActionArea } from '@mui/material';
import postsData from '../data/posts.json';
import { Helmet } from 'react-helmet-async';

const Blog = () => {
    return (
        <>
            <Helmet>
                <title>Blog - Codexa</title>
                <meta name="description" content="Read the latest articles on technology, coding, and career development." />
            </Helmet>
            <Box sx={{ py: 8 }}>
                <Container maxWidth="xl">
                    <Box sx={{ textAlign: 'center', mb: 8 }}>
                        <Typography variant="h2" gutterBottom color="text.primary">
                            Latest Insights
                        </Typography>
                        <Typography variant="h6" color="text.secondary">
                            Stay updated with the latest trends in tech
                        </Typography>
                    </Box>

                    <Grid container spacing={4}>
                        {postsData.map((post) => (
                            <Grid item key={post.id} xs={12} md={4}>
                                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="240"
                                            image={post.image}
                                            alt={post.title}
                                        />
                                        <CardContent>
                                            <Typography variant="caption" color="primary" gutterBottom display="block">
                                                {post.date} • {post.author}
                                            </Typography>
                                            <Typography variant="h5" gutterBottom fontWeight="bold" color="text.primary">
                                                {post.title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {post.excerpt}
                                            </Typography>
                                            <Button size="small" color="primary" sx={{ mt: 2 }}>
                                                Read More
                                            </Button>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default Blog;
