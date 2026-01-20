import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }

  try {
    const { name, email, phone, country, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, error: 'Name, email, and message are required' });
    }

    // Create Transporter (Same as Latex Infotech)
    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // Email to admin
    const adminMailOptions = {
      from: `"Pathway International Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECEIVER || process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(to right, #6D28D9, #2563eb); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; }
            .field { margin-bottom: 20px; }
            .label { font-weight: bold; color: #1f2937; display: block; margin-bottom: 5px; }
            .value { background: white; padding: 12px; border-left: 3px solid #6D28D9; border-radius: 4px; }
            .footer { background: #1f2937; color: #9ca3af; padding: 20px; text-align: center; border-radius: 0 0 10px 10px; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">New Contact Form Submission</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">From Pathway International Website</p>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">👤 Name:</span>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <span class="label">📧 Email:</span>
                <div class="value"><a href="mailto:${email}" style="color: #6D28D9; text-decoration: none;">${email}</a></div>
              </div>
              <div class="field">
                <span class="label">📱 Phone:</span>
                <div class="value"><a href="tel:${phone}" style="color: #6D28D9; text-decoration: none;">${phone || 'Not provided'}</a></div>
              </div>
              <div class="field">
                <span class="label">🌍 Preferred Country:</span>
                <div class="value">${country || 'Not specified'}</div>
              </div>
              <div class="field">
                <span class="label">💬 Message:</span>
                <div class="value" style="white-space: pre-wrap;">${message}</div>
              </div>
            </div>
            <div class="footer">
              <p style="margin: 0;">This email was sent from the contact form at Pathway International</p>
              <p style="margin: 10px 0 0 0;">© ${new Date().getFullYear()} Pathway International. All rights reserved.</p>
            </div>
          </div>
        </body>
        </html>
      `
    };

    // Auto-reply to customer
    const customerMailOptions = {
      from: `"Pathway International" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Thank You for Contacting Pathway International',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(to right, #6D28D9, #2563eb); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; }
            .footer { background: #1f2937; color: #9ca3af; padding: 20px; text-align: center; border-radius: 0 0 10px 10px; font-size: 12px; }
            .highlight { background: #f0f4ff; border-left: 4px solid #6D28D9; padding: 15px; margin: 20px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">Thank You, ${name}!</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">We've received your inquiry</p>
            </div>
            <div class="content">
              <p>Thank you for reaching out to Pathway International. We have received your inquiry and appreciate you taking the time to contact us.</p>
              
              <p>Our team will review your message and get back to you within 24-48 hours.</p>
              
              <div class="highlight">
                <p style="margin: 0;"><strong>What happens next?</strong></p>
                <ul style="margin: 10px 0;">
                  <li>Our counselors will review your inquiry</li>
                  <li>We'll prepare personalized recommendations</li>
                  <li>You'll receive a detailed response via email or phone</li>
                </ul>
              </div>
              
              <p>If you have any urgent questions, feel free to reach us at:</p>
              <ul>
                <li><strong>Email:</strong> Pathwayinternationalnlr@gmail.com</li>
                <li><strong>Phone:</strong> +91 6302 040 874</li>
              </ul>
              
              <p style="margin-top: 30px;">Best regards,<br/>
              <strong>Pathway International Team</strong></p>
            </div>
            <div class="footer">
              <p style="margin: 0;">This is an automated response. Please do not reply to this email.</p>
            </div>
          </div>
        </body>
        </html>
      `
    };

    // Send both emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(customerMailOptions);

    return res.status(200).json({ success: true, message: 'Email sent successfully' });

  } catch (error) {
    console.error('Email API Error:', error);
    return res.status(500).json({ success: false, error: 'Failed to send email', details: error.message });
  }
}
