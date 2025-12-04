import React from 'react';
import { Fab, Tooltip } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const WhatsAppButton = () => {
    const handleClick = () => {
        window.open('https://wa.me/917286944216', '_blank');
    };

    return (
        <Tooltip title="Chat with us on WhatsApp" arrow placement="left">
            <Fab
                color="success"
                aria-label="whatsapp"
                onClick={handleClick}
                sx={{
                    position: 'fixed',
                    bottom: 32,
                    right: 32,
                    zIndex: 1000,
                    bgcolor: '#25D366',
                    '&:hover': {
                        bgcolor: '#128C7E',
                    },
                }}
            >
                <WhatsAppIcon sx={{ fontSize: 32, color: 'white' }} />
            </Fab>
        </Tooltip>
    );
};

export default WhatsAppButton;
