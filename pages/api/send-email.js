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
    const targetEmail = 'info@altapetesolutions.com';

    // 1. Persistent Local JSON Lead Backup so no inquiry is ever lost
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
        source: sourceTitle,
        name: name || 'Not provided',
        email: email || 'Not provided',
        phone: phone || 'Not provided',
        company: company || 'Not provided',
        service: service || 'General Consultation',
        budget: budget || 'Not specified',
        subject: subject || 'Enterprise Inquiry',
        message: message || 'No message provided'
      });
      fs.writeFileSync(backupFile, JSON.stringify(existing.slice(0, 500), null, 2), 'utf8');
    } catch (fsErr) {
      console.error('Inquiry local backup write error:', fsErr);
    }

    // 2. Automated Zero-Credential Email Delivery via FormSubmit.co to info@altapetesolutions.com
    let zeroCredSent = false;
    let zeroCredMessage = '';
    try {
      const formSubmitResponse = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Origin': 'https://altapetesolutions.com',
          'Referer': 'https://altapetesolutions.com/'
        },
        body: JSON.stringify({
          name: name || 'Prospective Client',
          email: email || 'client@altapetesolutions.com',
          phone: phone || 'Not provided',
          company: company || 'Not provided',
          service_required: service || 'General ERP / IT Advisory',
          budget_scope: budget || 'Not specified',
          subject: subject || `[${sourceTitle}] Client Scope`,
          inquiry_message: message || 'No additional message provided',
          submission_time: timestamp,
          source_channel: sourceTitle,
          _subject: `⚡ [${sourceTitle}] New Lead: ${name || 'Inquiry'} (${service || 'Altapete'})`,
          _template: 'table',
          _captcha: 'false'
        })
      });

      const formSubmitData = await formSubmitResponse.json().catch(() => ({}));
      if (formSubmitResponse.ok && (formSubmitData.success === 'true' || formSubmitData.success === true)) {
        zeroCredSent = true;
      } else {
        zeroCredMessage = formSubmitData.message || '';
      }
    } catch (fetchErr) {
      console.error('FormSubmit delivery error:', fetchErr);
    }

    // 3. Optional Direct SMTP Delivery via Nodemailer (if environment variables are provided)
    const smtpHost = process.env.SMTP_HOST;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (smtpHost && smtpUser && smtpPass) {
      try {
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
          html: `
            <div style="background-color: #0b091f; padding: 30px; font-family: Arial, sans-serif; color: #ffffff;">
              <div style="max-width: 600px; margin: 0 auto; background-color: #141133; border: 1px solid #282460; border-radius: 12px; padding: 24px;">
                <img src="https://altapetesolutions.com/assets/imgs/logo.png" alt="Altapete Solutions" width="140" style="margin-bottom: 20px;" />
                <h2 style="color: #38bdf8; margin-top: 0;">New Lead Inquiry (${sourceTitle})</h2>
                <p><strong>Client Name:</strong> ${name}</p>
                <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #38bdf8;">${email}</a></p>
                <p><strong>Phone / WhatsApp:</strong> ${phone}</p>
                <p><strong>Company:</strong> ${company || 'N/A'}</p>
                <p><strong>Service Focus:</strong> ${service || 'N/A'}</p>
                <p><strong>Budget:</strong> ${budget || 'N/A'}</p>
                <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
                <div style="background-color: #1a1542; padding: 15px; border-radius: 8px; margin-top: 15px;">
                  <h4 style="margin: 0 0 10px 0; color: #38bdf8;">Message / Scope:</h4>
                  <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${message || 'None'}</p>
                </div>
              </div>
            </div>
          `
        });
      } catch (smtpErr) {
        console.error('SMTP delivery error:', smtpErr);
      }
    }

    return res.status(200).json({
      success: true,
      message: 'Inquiry received successfully and dispatched to info@altapetesolutions.com.',
      needsActivation: zeroCredMessage.includes('Activation'),
      activationNote: zeroCredMessage || undefined
    });

  } catch (error) {
    console.error('Send email route error:', error);
    return res.status(500).json({
      success: false,
      error: 'An unexpected error occurred. Please try again or email info@altapetesolutions.com directly.'
    });
  }
}
