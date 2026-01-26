import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }

  try {
    const {
      name, fullName,
      email,
      phone,
      country,
      message,
      formType = 'contact', // 'contact' or 'application'
      ...otherFields
    } = req.body;

    const senderName = name || fullName;

    if (!senderName || !email) {
      return res.status(400).json({ success: false, error: 'Name and email are required' });
    }

    // Create Transporter (Same as Latex Infotech)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // Generate Email Content based on Form Type
    let emailSubject = `New Contact Form Submission from ${senderName}`;
    let emailHeading = "New Contact Form Submission";
    let emailContentHtml = '';

    if (formType === 'application') {
      emailSubject = `New Student Application from ${senderName}`;
      emailHeading = "New Student Application";

      // Check for specific application fields to structure them nicely
      const fieldGroups = {
        "Personal Details": {
          "Name": senderName,
          "Email": email,
          "Phone": phone,
          "Current Country": country,
          "City": otherFields.city
        },
        "Academic Background": {
          "Highest Qualification": otherFields.highestQualification,
          "Field of Study": otherFields.fieldOfStudy,
          "Graduation Year": otherFields.graduationYear,
          "GPA/Percentage": otherFields.gpa,
          "Secondary Education": otherFields.secondaryEducation
        },
        "Test Scores": {
          "English Test": otherFields.englishTest,
          "English Score": otherFields.englishScore,
          "GRE/GMAT": otherFields.greGmat,
          "Score": otherFields.greGmatScore,
          "No Tests": otherFields.noTests ? "Yes" : "No"
        },
        "Study Preferences": {
          "Target Destination": otherFields.studyDestination,
          "Interested Course": otherFields.interestedCourse,
          "Degree Level": otherFields.degreeLevel,
          "Preferred Intake": otherFields.preferredIntake,
          "Budget Range": otherFields.budgetRange
        },
        "Additional Info": {
          "Work Experience": otherFields.workExperience,
          "Additional Info": otherFields.additionalInfo || message
        }
      };

      let tableRows = '';
      for (const [group, fields] of Object.entries(fieldGroups)) {
        tableRows += `<tr style="background-color: #f3f4f6;"><th colspan="2" style="padding: 10px; text-align: left; color: #6D28D9;">${group}</th></tr>`;
        for (const [key, value] of Object.entries(fields)) {
          if (value) {
            tableRows += `
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold; width: 40%;">${key}</td>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${value}</td>
              </tr>
            `;
          }
        }
      }

      emailContentHtml = `
        <table style="width: 100%; border-collapse: collapse;">
          ${tableRows}
        </table>
      `;

    } else {
      // Standard Contact Form
      emailContentHtml = `
        <div class="field">
          <span class="label">👤 Name:</span>
          <div class="value">${senderName}</div>
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
          <div class="value" style="white-space: pre-wrap;">${message || 'No message provided'}</div>
        </div>
      `;
    }

    // Email to admin
    const adminMailOptions = {
      from: `"Pathway International Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECEIVER || process.env.EMAIL_USER,
      replyTo: email,
      subject: emailSubject,
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
              <h1 style="margin: 0;">${emailHeading}</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">From Pathway International Website</p>
            </div>
            <div class="content">
              ${emailContentHtml}
            </div>
            <div class="footer">
              <p style="margin: 0;">This email was sent from the ${formType === 'application' ? 'student application' : 'contact'} form at Pathway International</p>
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
      subject: `Thank you for your ${formType === 'application' ? 'Application' : 'Inquiry'} - Pathway International`,
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
              <h1 style="margin: 0;">Thank You, ${senderName}!</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">We've received your ${formType === 'application' ? 'application' : 'inquiry'}</p>
            </div>
            <div class="content">
              <p>Thank you for choosing Pathway International. We have successfully received your ${formType === 'application' ? 'student application details' : 'inquiry'}.</p>
              
              <p>Our expert counselors will review your profile and get back to you within 24-48 hours with personalized guidance.</p>
              
              <div class="highlight">
                <p style="margin: 0;"><strong>Next Steps:</strong></p>
                <ul style="margin: 10px 0;">
                  <li>Profile Evaluation by Experts</li>
                  <li>Shortlisting Best-Fit Universities</li>
                  <li>Guidance on Documentation & Visa Process</li>
                </ul>
              </div>
              
              <p>If you have any urgent queries, feel free to reach us at:</p>
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
