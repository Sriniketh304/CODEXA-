import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button, CardActionArea, Dialog, DialogTitle, DialogContent, DialogActions, IconButton } from '@mui/material';
import postsData from '../data/posts.json';
import { Helmet } from 'react-helmet-async';
import CloseIcon from '@mui/icons-material/Close';

const Blog = () => {
    const [selectedPost, setSelectedPost] = useState(null);

    const handleOpen = (post) => {
        setSelectedPost(post);
    };

    const handleClose = () => {
        setSelectedPost(null);
    };

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
                                    <CardActionArea onClick={() => handleOpen(post)}>
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
                                            <Button size="small" color="primary" sx={{ mt: 2 }} onClick={() => handleOpen(post)}>
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

            {/* Blog Post Dialog */}
            <Dialog
                open={!!selectedPost}
                onClose={handleClose}
                maxWidth="md"
                fullWidth
                PaperProps={{ sx: { borderRadius: 3 } }}
            >
                {selectedPost && (
                    <>
                        <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pb: 1 }}>
                            <Box sx={{ pr: 4 }}>
                                <Typography variant="h5" fontWeight="bold">
                                    {selectedPost.title}
                                </Typography>
                                <Typography variant="caption" color="text.secondary">
                                    {selectedPost.date} by {selectedPost.author}
                                </Typography>
                            </Box>
                            <IconButton onClick={handleClose} size="small" sx={{ position: 'absolute', right: 8, top: 8 }}>
                                <CloseIcon />
                            </IconButton>
                        </DialogTitle>
                        <DialogContent dividers>
                            <Box
                                component="img"
                                src={selectedPost.image}
                                alt={selectedPost.title}
                                sx={{
                                    width: '100%',
                                    height: '300px',
                                    objectFit: 'cover',
                                    borderRadius: 2,
                                    mb: 3
                                }}
                            />
                            <Typography variant="body1" sx={{ lineHeight: 1.8, fontSize: '1.1rem' }}>
                                {selectedPost.content}
                            </Typography>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} color="primary">
                                Close
                            </Button>
                        </DialogActions>
                    </>
                )}
            </Dialog>
        </>
    );
};

export default Blog;
