import nodemailer from 'nodemailer';

// This is a mock API endpoint for local development
// In production, Vercel will use /api/send-email.js instead

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, email, phone, country, message } = body;

        // Validate required fields
        if (!name || !email || !message) {
            return new Response(JSON.stringify({ message: 'Please fill in all required fields' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        // Create transporter using Gmail SMTP
        const transporter = nodemailer.createTransporter({
            service: 'gmail',
            auth: {
                user: import.meta.env.VITE_EMAIL_USER,
                pass: import.meta.env.VITE_EMAIL_PASS,
            },
        });

        // Email to admin (you)
        const adminMailOptions = {
            from: import.meta.env.VITE_EMAIL_USER,
            to: import.meta.env.VITE_EMAIL_RECEIVER || import.meta.env.VITE_EMAIL_USER,
            subject: `New Contact Form Submission from ${name}`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
          <h2 style="color: #6D28D9; border-bottom: 2px solid #6D28D9; padding-bottom: 10px;">New Contact Form Submission</h2>
          
          <div style="margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p style="margin: 10px 0;"><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p style="margin: 10px 0;"><strong>Country:</strong> ${country || 'Not provided'}</p>
          </div>
          
          <div style="margin: 20px 0; padding: 15px; background-color: #f5f5f5; border-radius: 5px;">
            <p style="margin: 0 0 10px 0;"><strong>Message:</strong></p>
            <p style="margin: 0; white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e0e0e0; font-size: 12px; color: #666;">
            <p>This email was sent from the Pathway International contact form.</p>
            <p>Submitted on: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
        };

        // Auto-reply to customer
        const customerMailOptions = {
            from: import.meta.env.VITE_EMAIL_USER,
            to: email,
            subject: 'Thank You for Contacting Pathway International',
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
          <h2 style="color: #6D28D9;">Thank You, ${name}!</h2>
          
          <p>We have received your inquiry and appreciate you taking the time to contact us.</p>
          
          <p>Our team will review your message and get back to you within 24-48 hours.</p>
          
          <div style="margin: 20px 0; padding: 15px; background-color: #f0f4ff; border-left: 4px solid #6D28D9;">
            <p style="margin: 0;"><strong>What happens next?</strong></p>
            <ul style="margin: 10px 0;">
              <li>Our counselors will review your inquiry</li>
              <li>We'll prepare personalized recommendations</li>
              <li>You'll receive a detailed response via email or phone</li>
            </ul>
          </div>
          
          <p>If you have any urgent questions, feel free to reach us at:</p>
          <ul>
            <li>Email: Pathwayinternationalnlr@gmail.com</li>
            <li>Phone: +91 6302 040 874</li>
          </ul>
          
          <p style="margin-top: 30px;">Best regards,<br/>
          <strong>Pathway International Team</strong></p>
          
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e0e0e0; font-size: 12px; color: #666;">
            <p>This is an automated response. Please do not reply to this email.</p>
          </div>
        </div>
      `,
        };

        // Send both emails
        await transporter.sendMail(adminMailOptions);
        await transporter.sendMail(customerMailOptions);

        return new Response(JSON.stringify({
            success: true,
            message: 'Email sent successfully!'
        }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });

    } catch (error) {
        console.error('Email error:', error);
        return new Response(JSON.stringify({
            success: false,
            message: 'Failed to send email. Please try again later.',
            error: error.message
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
