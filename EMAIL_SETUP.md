# Email Setup Guide

This website uses a self-hosted email solution without third-party services. It uses Nodemailer with Gmail SMTP.

## Setup Instructions

### 1. Create Gmail App Password

1. Go to your Google Account: https://myaccount.google.com/
2. Select **Security** in the left sidebar
3. Under "How you sign in to Google," select **2-Step Verification** (enable it if not already)
4. At the bottom of the page, select **App passwords**
5. Select **Mail** as the app and **Other (Custom name)** as the device
6. Name it "Pathway International Website"
7. Click **Generate**
8. Copy the 16-character password (it will look like: `xxxx xxxx xxxx xxxx`)

### 2. Configure Environment Variables

#### For Local Development:

1. Copy the template file:
   ```bash
   cp .env.local.example .env.local
   ```

2. Edit `.env.local` and fill in your credentials:
   ```env
   EMAIL_USER=your-gmail@gmail.com
   EMAIL_PASS=your-16-char-app-password
   EMAIL_RECEIVER=Pathwayinternationalnlr@gmail.com
   ```

#### For Vercel Deployment:

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add the following three variables:
   - `EMAIL_USER` = your Gmail address
   - `EMAIL_PASS` = your 16-character app password
   - `EMAIL_RECEIVER` = Pathwayinternationalnlr@gmail.com

4. Click **Save** for each variable

### 3. How It Works

When a user submits the contact form:

1. **Form Submission**: The React form sends data to `/api/send-email`
2. **Serverless Function**: Vercel serverless function receives the data
3. **Two Emails Sent**:
   - **To Admin** (you): Contains all form details and inquiry information
   - **To Customer**: Automated thank you email with next steps

### 4. Testing Locally

To test the email functionality locally:

1. Make sure you've set up `.env.local` with your credentials
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Fill out and submit the contact form
4. Check both your inbox (admin email) and the test email address

### 5. Security Notes

- ✅ `.env.local` is automatically ignored by git (won't be pushed to GitHub)
- ✅ App Password is safer than using your actual Gmail password
- ✅ App Password only works for SMTP, not for logging into your account
- ✅ You can revoke the app password anytime from Google Account settings

### 6. Troubleshooting

**Email not sending:**
- Verify your Gmail credentials in environment variables
- Make sure 2-Step Verification is enabled on your Google Account
- Check that the App Password is correct (no spaces)
- Check Vercel function logs for errors

**"Less secure app" error:**
- Use App Password instead of your regular password
- Make sure 2-Step Verification is enabled

**Rate Limiting:**
- Gmail has sending limits (typically 500 emails/day for free accounts)
- For high volume, consider upgrading to Google Workspace

### 7. Email Templates

The emails are formatted with HTML and include:
- **Admin Email**: Form details, sender info, message content, timestamp
- **Customer Email**: Professional branding, what happens next, contact information

You can customize the email templates in `/api/send-email.js`

## Support

If you encounter issues, check:
1. Environment variables are correctly set
2. Gmail App Password is valid
3. Vercel deployment logs for errors
4. Form validation passes before submission
