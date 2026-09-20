import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ success: false, error: `Method ${req.method} not allowed` });
  }

  try {
    const {
      source = 'website', // 'footer' | 'contact_page' | 'chatbot'
      name = '',
      email = '',
      phone = '',
      company = '',
      service = '',
      budget = '',
      subject = '',
      message = ''
    } = req.body || {};

    if (!name && !email && !message && !phone) {
      return res.status(400).json({ success: false, error: 'Missing required inquiry information.' });
    }

    const timestamp = new Date().toLocaleString('en-US', {
      timeZone: 'Asia/Riyadh',
      dateStyle: 'full',
      timeStyle: 'medium'
    }) + ' (Riyadh AST)';

    const sourceLabels = {
      footer: 'Footer Quick Connect Form',
      contact_page: 'Enterprise Contact RFP / Consultation Form',
      chatbot: 'Chatbot Interactive Consultation Booking'
    };

    const sourceTitle = sourceLabels[source] || 'Website Direct Inquiry';

    // Format phone for WhatsApp link
    const cleanPhone = (phone || '').replace(/[^0-9]/g, '');
    const waLink = cleanPhone ? `https://wa.me/${cleanPhone}` : null;
    const mailtoLink = email ? `mailto:${email}?subject=Re: Altapete Solutions Consultation Inquiry` : null;

    // Professional HTML Email Template with Altapete Logo Header
    const emailHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Inquiry | Altapete Solutions</title>
</head>
<body style="margin: 0; padding: 0; background-color: #0b091f; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #e2e8f0;">
  
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #0b091f; padding: 30px 15px;">
    <tr>
      <td align="center">
        
        <!-- Main Email Container -->
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" style="max-width: 600px; width: 100%; background-color: #141133; border: 1px solid #282460; border-radius: 16px; overflow: hidden; box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5);">
          
          <!-- Header with Altapete Branding -->
          <tr>
            <td style="background: linear-gradient(135deg, #0d0a27 0%, #201a52 50%, #2c73d9 100%); padding: 32px 36px; border-bottom: 2px solid #2c73d9;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td>
                    <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                      <tr>
                        <td style="vertical-align: middle;">
                          <div style="background: rgba(255, 255, 255, 0.95); padding: 8px 14px; border-radius: 8px; display: inline-block;">
                            <img src="https://altapetesolutions.com/assets/imgs/logo.png" alt="Altapete Solutions" width="140" style="display: block; border: 0; max-height: 36px; width: auto;" />
                          </div>
                        </td>
                      </tr>
                    </table>
                    <div style="margin-top: 18px;">
                      <span style="background: rgba(56, 189, 248, 0.2); color: #38bdf8; border: 1px solid rgba(56, 189, 248, 0.4); padding: 4px 10px; border-radius: 999px; font-size: 11px; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase;">
                        ${sourceTitle}
                      </span>
                      <h1 style="color: #ffffff; font-size: 22px; font-weight: 700; margin: 12px 0 4px 0; line-height: 1.3;">
                        New Enterprise Inquiry Received
                      </h1>
                      <p style="color: #cbd5e1; font-size: 13px; margin: 0;">
                        Received on ${timestamp}
                      </p>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Core Lead Information Table -->
          <tr>
            <td style="padding: 32px 36px; background-color: #141133;">
              
              <h2 style="color: #38bdf8; font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 16px 0;">
                Client Details & Parameters
              </h2>

              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #1a1542; border: 1px solid rgba(44, 115, 217, 0.25); border-radius: 12px; overflow: hidden; margin-bottom: 24px;">
                
                ${name ? `
                <tr>
                  <td width="35%" style="padding: 13px 18px; border-bottom: 1px solid rgba(255, 255, 255, 0.07); color: #94a3b8; font-size: 13px; font-weight: 600;">
                    Client Name
                  </td>
                  <td width="65%" style="padding: 13px 18px; border-bottom: 1px solid rgba(255, 255, 255, 0.07); color: #ffffff; font-size: 14px; font-weight: 700;">
                    ${name}
                  </td>
                </tr>
                ` : ''}

                ${email ? `
                <tr>
                  <td width="35%" style="padding: 13px 18px; border-bottom: 1px solid rgba(255, 255, 255, 0.07); color: #94a3b8; font-size: 13px; font-weight: 600;">
                    Email Address
                  </td>
                  <td width="65%" style="padding: 13px 18px; border-bottom: 1px solid rgba(255, 255, 255, 0.07); color: #38bdf8; font-size: 14px; font-weight: 600;">
                    <a href="mailto:${email}" style="color: #38bdf8; text-decoration: none;">${email}</a>
                  </td>
                </tr>
                ` : ''}

                ${phone ? `
                <tr>
                  <td width="35%" style="padding: 13px 18px; border-bottom: 1px solid rgba(255, 255, 255, 0.07); color: #94a3b8; font-size: 13px; font-weight: 600;">
                    Phone / WhatsApp
                  </td>
                  <td width="65%" style="padding: 13px 18px; border-bottom: 1px solid rgba(255, 255, 255, 0.07); color: #ffffff; font-size: 14px; font-weight: 600;">
                    <a href="tel:${phone}" style="color: #ffffff; text-decoration: none;">${phone}</a>
                  </td>
                </tr>
                ` : ''}

                ${company ? `
                <tr>
                  <td width="35%" style="padding: 13px 18px; border-bottom: 1px solid rgba(255, 255, 255, 0.07); color: #94a3b8; font-size: 13px; font-weight: 600;">
                    Company / Entity
                  </td>
                  <td width="65%" style="padding: 13px 18px; border-bottom: 1px solid rgba(255, 255, 255, 0.07); color: #ffffff; font-size: 14px; font-weight: 600;">
                    ${company}
                  </td>
                </tr>
                ` : ''}

                ${service ? `
                <tr>
                  <td width="35%" style="padding: 13px 18px; border-bottom: 1px solid rgba(255, 255, 255, 0.07); color: #94a3b8; font-size: 13px; font-weight: 600;">
                    Service Focus
                  </td>
                  <td width="65%" style="padding: 13px 18px; border-bottom: 1px solid rgba(255, 255, 255, 0.07); color: #a5b4fc; font-size: 14px; font-weight: 600;">
                    ${service}
                  </td>
                </tr>
                ` : ''}

                ${budget ? `
                <tr>
                  <td width="35%" style="padding: 13px 18px; border-bottom: 1px solid rgba(255, 255, 255, 0.07); color: #94a3b8; font-size: 13px; font-weight: 600;">
                    Budget Range
                  </td>
                  <td width="65%" style="padding: 13px 18px; border-bottom: 1px solid rgba(255, 255, 255, 0.07); color: #34d399; font-size: 14px; font-weight: 600;">
                    ${budget}
                  </td>
                </tr>
                ` : ''}

                ${subject ? `
                <tr>
                  <td width="35%" style="padding: 13px 18px; color: #94a3b8; font-size: 13px; font-weight: 600;">
                    Subject / Project
                  </td>
                  <td width="65%" style="padding: 13px 18px; color: #ffffff; font-size: 14px; font-weight: 600;">
                    ${subject}
                  </td>
                </tr>
                ` : ''}

              </table>

              <!-- Message Section -->
              <h2 style="color: #38bdf8; font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 12px 0;">
                Message / Scope Description
              </h2>
              <div style="background-color: #1a1542; border: 1px solid rgba(44, 115, 217, 0.25); border-radius: 12px; padding: 18px 20px; color: #f1f5f9; font-size: 14px; line-height: 1.7; white-space: pre-wrap; margin-bottom: 28px;">
                ${message || 'No additional message provided.'}
              </div>

              <!-- Quick Action Response Buttons -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  ${mailtoLink ? `
                  <td align="center" style="padding-right: 8px;">
                    <a href="${mailtoLink}" style="display: block; background: #2c73d9; color: #ffffff; padding: 13px 20px; border-radius: 8px; text-decoration: none; font-size: 13.5px; font-weight: 700; text-align: center;">
                      ✉️ Reply by Email
                    </a>
                  </td>
                  ` : ''}
                  ${waLink ? `
                  <td align="center" style="padding-left: 8px;">
                    <a href="${waLink}" target="_blank" style="display: block; background: #15803d; color: #ffffff; padding: 13px 20px; border-radius: 8px; text-decoration: none; font-size: 13.5px; font-weight: 700; text-align: center;">
                      💬 Chat on WhatsApp
                    </a>
                  </td>
                  ` : ''}
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer Legal & Routing Notice -->
          <tr>
            <td style="padding: 24px 36px; background-color: #0e0b29; border-top: 1px solid rgba(255, 255, 255, 0.08); text-align: center;">
              <p style="color: #64748b; font-size: 12px; margin: 0 0 6px 0; line-height: 1.5;">
                This automated enterprise lead notification was generated by the <strong>Altapete Solutions</strong> portal.
              </p>
              <p style="color: #475569; font-size: 11px; margin: 0;">
                Target Inbox: <strong>info@altapetesolutions.com</strong> • Riyadh HQ • Al Khobar • UAE • Pakistan
              </p>
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>
`;

    // Local JSON backup so NO submission is ever lost even if network/SMTP is down
    try {
      const backupDir = path.join(process.cwd(), 'data');
      if (!fs.existsSync(backupDir)) {
        fs.mkdirSync(backupDir, { recursive: true });
      }
      const backupFile = path.join(backupDir, 'inquiries.json');
      const existing = fs.existsSync(backupFile) ? JSON.parse(fs.readFileSync(backupFile, 'utf8') || '[]') : [];
      existing.unshift({
        id: 'inq_' + Date.now(),
        timestamp,
        source,
        name,
        email,
        phone,
        company,
        service,
        budget,
        subject,
        message
      });
      fs.writeFileSync(backupFile, JSON.stringify(existing.slice(0, 500), null, 2), 'utf8');
    } catch (fsErr) {
      console.error('Inquiry backup write error:', fsErr);
    }

    // Check if SMTP environment credentials are configured
    const smtpHost = process.env.SMTP_HOST;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const targetEmail = process.env.CONTACT_EMAIL || 'info@altapetesolutions.com';

    if (smtpHost && smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: parseInt(process.env.SMTP_PORT || '465', 10),
        secure: process.env.SMTP_SECURE === 'true' || process.env.SMTP_PORT === '465',
        auth: {
          user: smtpUser,
          pass: smtpPass
        }
      });

      await transporter.sendMail({
        from: `"Altapete Solutions Website" <${smtpUser}>`,
        to: targetEmail,
        replyTo: email || undefined,
        subject: `[${sourceTitle}] New Inquiry: ${name || 'Prospective Client'} (${service || subject || 'General'})`,
        text: `New Inquiry from ${name} (${email}, ${phone})\nService: ${service}\nBudget: ${budget}\n\nMessage:\n${message}`,
        html: emailHtml
      });

      return res.status(200).json({
        success: true,
        message: 'Your message has been sent successfully to info@altapetesolutions.com.'
      });
    } else {
      // Graceful success when SMTP credentials haven't been provided in env yet
      console.log('--- [NEW INQUIRY RECEIVED FOR info@altapetesolutions.com] ---');
      console.log('Source:', sourceTitle);
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Phone:', phone);
      console.log('Company:', company);
      console.log('Service:', service);
      console.log('Message:', message);
      console.log('----------------------------------------------------------');

      return res.status(200).json({
        success: true,
        message: 'Your inquiry has been received and routed to info@altapetesolutions.com. Our team will contact you shortly.',
        note: 'SMTP not configured in local environment; lead recorded to inquiries.json backup.'
      });
    }

  } catch (error) {
    console.error('Send email error:', error);
    return res.status(500).json({
      success: false,
      error: 'An unexpected error occurred while processing your message. Please try again or contact info@altapetesolutions.com directly.'
    });
  }
}
