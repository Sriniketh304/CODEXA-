# EmailJS Setup Instructions for Codexa

## Overview
The enrollment form now uses EmailJS to send enrollment details directly to **srinikethkusha@gmail.com** without requiring a backend server.

## Setup Steps

### 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a **FREE** account (allows 200 emails/month)
3. Verify your email address

### 2. Create Email Service
1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose **Gmail** (recommended)
4. Connect your Gmail account (srinikethkusha@gmail.com)
5. Copy the **Service ID** (e.g., `service_xxxxxxx`)

### 3. Create Email Template
1. Go to **Email Templates**
2. Click **Create New Template**
3. Use this template content:

**Template Name:** `Codexa Enrollment Request`

**Subject:** `New Enrollment: {{course_name}}`

**Content:**
```
Hello Admin,

You have received a new enrollment request from Codexa website.

Student Details:
- Name: {{from_name}}
- Email: {{from_email}}
- Qualification: {{qualification}}
- Course Interested: {{course_name}}

Please contact them at the earliest.

Best regards,
Codexa System
```

4. Copy the **Template ID** (e.g., `template_xxxxxxx`)

### 4. Get Public Key
1. Go to **Account** → **General**
2. Find your **Public Key** (e.g., `xxxxxxxxxxx`)

### 5. Update the Code
Open `src/components/UI/EnrollmentDialog.jsx` and replace these values on lines 42-44:

```javascript
const serviceId = 'YOUR_SERVICE_ID_HERE';
const templateId = 'YOUR_TEMPLATE_ID_HERE';
const publicKey = 'YOUR_PUBLIC_KEY_HERE';
```

## Testing
1. After updating the IDs, save the file
2. Fill out the enrollment form on your website
3. Check **srinikethkusha@gmail.com** inbox for the enrollment email

## Alternative: Use FormSubmit (No Setup Required)
If you prefer a simpler solution without EmailJS setup, I can implement FormSubmit which requires zero configuration.

## Troubleshooting
- **Emails not arriving?** Check EmailJS dashboard for error logs
- **Rate limit reached?** Free tier allows 200 emails/month
- **Need help?** Contact EmailJS support or let me know!

---
**Note:** Keep your Public Key safe but know it's meant to be used in frontend code. Never share your Private Key.
