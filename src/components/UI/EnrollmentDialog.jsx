import React, { useState } from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Button,
    MenuItem,
    IconButton,
    Box
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const EnrollmentDialog = ({ open, onClose, courseName }) => {
    // State to hold form data
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: '',
        qualification: ''
    });

    const qualifications = [
        'College Student',
        "Master's Student",
        'Working Professional',
        'Other'
    ];

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle Form Submission (WhatsApp Only)
    const handleSubmit = (e) => {
        e.preventDefault();

        // 1. Construct the WhatsApp message
        const message = `*New Enrollment Request*
    
*Name:* ${formData.fullName}
*Phone:* ${formData.phone}
*Email:* ${formData.email}
*Qualification:* ${formData.qualification}
*Course:* ${courseName || 'General Inquiry'}
    
Please contact me.`;

        // 2. Encode message for URL
        const encodedMessage = encodeURIComponent(message);

        // 3. Open WhatsApp with pre-filled message
        // Uses the universal WhatsApp API link
        window.open(`https://wa.me/917286944216?text=${encodedMessage}`, '_blank');

        // 4. Close dialog and reset form
        onClose();
        setFormData({ fullName: '', phone: '', email: '', qualification: '' });
    };

    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="xs"
            fullWidth
            PaperProps={{ sx: { borderRadius: 3 } }}
        >
            <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pb: 1, pt: 2 }}>
                <Box>
                    <Box component="span" sx={{ fontSize: '1.1rem', fontWeight: 'bold', display: 'block' }}>
                        {courseName ? 'Enroll Now' : 'Get Started'}
                    </Box>
                    <Box component="span" sx={{ fontSize: '0.8rem', color: 'text.secondary', fontWeight: 'normal' }}>
                        {courseName || 'Start your journey'}
                    </Box>
                </Box>
                <IconButton onClick={onClose} size="small">
                    <CloseIcon />
                </IconButton>
            </DialogTitle>

            <form onSubmit={handleSubmit}>
                <DialogContent sx={{ pt: 1 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <TextField
                            label="Full Name"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            fullWidth
                            required
                            size="small"
                            variant="outlined"
                        />

                        <TextField
                            label="Phone Number"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            fullWidth
                            required
                            size="small"
                            variant="outlined"
                            placeholder="+91"
                        />

                        <TextField
                            label="Email Address"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            fullWidth
                            required
                            size="small"
                            variant="outlined"
                        />
                        <TextField
                            select
                            label="Qualification"
                            name="qualification"
                            value={formData.qualification}
                            onChange={handleChange}
                            fullWidth
                            required
                            size="small"
                            variant="outlined"
                        >
                            {qualifications.map((option) => (
                                <MenuItem key={option} value={option}>
                                    {option}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Box>
                </DialogContent>
                <DialogActions sx={{ px: 3, pb: 3, pt: 1 }}>
                    <Button onClick={onClose} color="inherit" size="small">
                        Cancel
                    </Button>
                    <Button
                        type="submit"
                        variant="contained"
                        color="success"
                        size="medium"
                        sx={{ px: 3 }}
                        endIcon={<WhatsAppIcon />}
                    >
                        Send via WhatsApp
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    );
};

export default EnrollmentDialog;
