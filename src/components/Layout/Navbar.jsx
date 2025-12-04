import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box, Drawer, List, ListItem, ListItemText, useScrollTrigger, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useLocation } from 'react-router-dom';
import EnrollmentDialog from '../UI/EnrollmentDialog';

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [enrollOpen, setEnrollOpen] = useState(false);

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });
    const location = useLocation();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Courses', path: '/courses' },
        { name: 'Blog', path: '/blog' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', height: '100%', bgcolor: 'background.default' }}>
            <Typography variant="h6" sx={{ my: 2, color: 'primary.main', fontWeight: 'bold' }}>
                CODEXA
            </Typography>
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.name} disablePadding>
                        <Button component={Link} to={item.path} sx={{ textAlign: 'center', width: '100%', color: 'text.primary' }}>
                            <ListItemText primary={item.name} />
                        </Button>
                    </ListItem>
                ))}
                <ListItem disablePadding>
                    <Button onClick={() => setEnrollOpen(true)} sx={{ textAlign: 'center', width: '100%', color: 'primary.main', fontWeight: 'bold' }}>
                        <ListItemText primary="Get Started" />
                    </Button>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <>
            <AppBar position="fixed" elevation={trigger ? 4 : 0} sx={{ bgcolor: trigger ? 'rgba(255, 255, 255, 0.95)' : 'transparent', backdropFilter: 'blur(10px)', color: 'text.primary' }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h5"
                            component={Link}
                            to="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontWeight: 800,
                                letterSpacing: '.05rem',
                                color: 'primary.main',
                                textDecoration: 'none',
                            }}
                        >
                            CODEXA
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                        </Box>
                        <Typography
                            variant="h5"
                            component={Link}
                            to="/"
                            sx={{
                                flexGrow: 1,
                                display: { xs: 'flex', md: 'none' },
                                fontWeight: 800,
                                letterSpacing: '.05rem',
                                color: 'primary.main',
                                textDecoration: 'none',
                            }}
                        >
                            CODEXA
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end', gap: 2 }}>
                            {navItems.map((item) => (
                                <Button
                                    key={item.name}
                                    component={Link}
                                    to={item.path}
                                    sx={{
                                        my: 2,
                                        color: location.pathname === item.path ? 'primary.main' : 'text.primary',
                                        display: 'block',
                                        fontWeight: 500,
                                        position: 'relative',
                                        '&:hover': {
                                            color: 'primary.main'
                                        }
                                    }}
                                >
                                    {item.name}
                                </Button>
                            ))}
                            <Button
                                variant="contained"
                                color="primary"
                                sx={{ ml: 2 }}
                                onClick={() => setEnrollOpen(true)}
                            >
                                Get Started
                            </Button>
                        </Box>
                    </Toolbar>
                </Container>
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
                    }}
                >
                    {drawer}
                </Drawer>
            </AppBar>
            <Toolbar /> {/* Spacer to prevent content from hiding behind fixed navbar */}
            <EnrollmentDialog open={enrollOpen} onClose={() => setEnrollOpen(false)} />
        </>
    );
};

export default Navbar;
