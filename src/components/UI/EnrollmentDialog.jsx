import React, { useState } from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Button,
    MenuItem,
    Typography,
    IconButton,
    Box
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const EnrollmentDialog = ({ open, onClose, courseName }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        qualification: ''
    });

    const qualifications = [
        'College Student',
        "Master's Student",
        'Working Professional',
        'Other'
    ];

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth PaperProps={{ sx: { borderRadius: 3, p: 1 } }}>
            <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', pb: 1 }}>
                <Typography variant="h5" fontWeight="bold">
                    {courseName ? `Enroll in ${courseName}` : 'Get Started with Codexa'}
                </Typography>
                <IconButton onClick={onClose} size="small">
                    <CloseIcon />
                </IconButton>
            </DialogTitle>

            {/* Standard Form Submission to FormSubmit */}
            <form action="https://formsubmit.co/srinikethkusha@gmail.com" method="POST" target="_blank">
                <DialogContent>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                        Fill in your details below. A verification page will open in a new tab.
                    </Typography>

                    {/* Hidden Configuration Fields */}
                    <input type="hidden" name="_subject" value={`New Enrollment: ${courseName || 'General Inquiry'}`} />
                    <input type="hidden" name="_template" value="table" />
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_next" value={window.location.href} />
                    <input type="hidden" name="course_name" value={courseName || 'General Inquiry'} />

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                        <TextField
                            label="Full Name"
                            name="name"
                            value={formData.fullName}
                            onChange={handleChange}
                            fullWidth
                            required
                            variant="outlined"
                        />
                        <TextField
                            label="Email Address"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            fullWidth
                            required
                            variant="outlined"
                        />
                        <TextField
                            select
                            label="Present Qualification"
                            name="qualification"
                            value={formData.qualification}
                            onChange={handleChange}
                            fullWidth
                            required
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
                <DialogActions sx={{ px: 3, pb: 3 }}>
                    <Button onClick={onClose} color="inherit" sx={{ mr: 1 }}>
                        Cancel
                    </Button>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        size="large"
                        sx={{ px: 4 }}
                    >
                        Submit
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    );
};

export default EnrollmentDialog;
