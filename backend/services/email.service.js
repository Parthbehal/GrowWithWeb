const nodemailer = require('nodemailer')

// Create reusable transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS, // Gmail App Password
    },
  })
}

// Beautiful HTML email template
const buildEmailHTML = (data) => {
  const { name, email, phone, service, budget, message, createdAt } = data
  const date = new Date(createdAt).toLocaleString('en-IN', {
    dateStyle: 'long',
    timeStyle: 'short',
    timeZone: 'Asia/Kolkata',
  })

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>New Enquiry — GrowWithWeb</title>
</head>
<body style="margin:0;padding:0;background:#0a0a0f;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0f;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background:#111120;border-radius:16px 16px 0 0;padding:32px 36px;border:1px solid #1e1e35;border-bottom:none;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <span style="font-size:22px;font-weight:800;color:#f0f0f8;letter-spacing:-0.02em;">
                      Grow<span style="color:#00f0a0;">WithWeb</span>
                    </span>
                  </td>
                  <td align="right">
                    <span style="background:rgba(0,240,160,0.1);border:1px solid rgba(0,240,160,0.3);color:#00f0a0;font-size:11px;font-weight:700;padding:5px 12px;border-radius:100px;letter-spacing:0.06em;text-transform:uppercase;">
                      🔔 New Enquiry
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Hero -->
          <tr>
            <td style="background:linear-gradient(135deg,#111120,#0d0d1a);padding:28px 36px 24px;border-left:1px solid #1e1e35;border-right:1px solid #1e1e35;">
              <p style="margin:0 0 6px;font-size:13px;color:#55556a;text-transform:uppercase;letter-spacing:0.07em;font-weight:600;">${date}</p>
              <h1 style="margin:0;font-size:26px;font-weight:800;color:#f0f0f8;letter-spacing:-0.02em;">
                ${name} wants to work with you!
              </h1>
              <p style="margin:10px 0 0;font-size:15px;color:#8888aa;">
                They're interested in: <strong style="color:#00f0a0;">${service}</strong>
              </p>
            </td>
          </tr>

          <!-- Details -->
          <tr>
            <td style="background:#111120;padding:28px 36px;border-left:1px solid #1e1e35;border-right:1px solid #1e1e35;">
              <table width="100%" cellpadding="0" cellspacing="0">

                <!-- Name -->
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #1a1a2e;">
                    <p style="margin:0 0 3px;font-size:11px;color:#55556a;text-transform:uppercase;letter-spacing:0.06em;font-weight:700;">Full Name</p>
                    <p style="margin:0;font-size:15px;color:#f0f0f8;font-weight:600;">${name}</p>
                  </td>
                </tr>

                <!-- Email -->
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #1a1a2e;">
                    <p style="margin:0 0 3px;font-size:11px;color:#55556a;text-transform:uppercase;letter-spacing:0.06em;font-weight:700;">Email Address</p>
                    <a href="mailto:${email}" style="margin:0;font-size:15px;color:#00c8ff;font-weight:600;text-decoration:none;">${email}</a>
                  </td>
                </tr>

                <!-- Phone -->
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #1a1a2e;">
                    <p style="margin:0 0 3px;font-size:11px;color:#55556a;text-transform:uppercase;letter-spacing:0.06em;font-weight:700;">Phone / WhatsApp</p>
                    <p style="margin:0;font-size:15px;color:#f0f0f8;font-weight:600;">${phone || 'Not provided'}</p>
                  </td>
                </tr>

                <!-- Service + Budget side by side -->
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #1a1a2e;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td width="50%" style="padding-right:12px;">
                          <p style="margin:0 0 3px;font-size:11px;color:#55556a;text-transform:uppercase;letter-spacing:0.06em;font-weight:700;">Service</p>
                          <span style="display:inline-block;background:rgba(0,240,160,0.1);border:1px solid rgba(0,240,160,0.25);color:#00f0a0;font-size:13px;font-weight:700;padding:5px 12px;border-radius:8px;">${service}</span>
                        </td>
                        <td width="50%">
                          <p style="margin:0 0 3px;font-size:11px;color:#55556a;text-transform:uppercase;letter-spacing:0.06em;font-weight:700;">Budget Range</p>
                          <span style="display:inline-block;background:rgba(245,158,11,0.1);border:1px solid rgba(245,158,11,0.25);color:#f59e0b;font-size:13px;font-weight:700;padding:5px 12px;border-radius:8px;">${budget || 'Not specified'}</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <!-- Message -->
                <tr>
                  <td style="padding:16px 0 0;">
                    <p style="margin:0 0 10px;font-size:11px;color:#55556a;text-transform:uppercase;letter-spacing:0.06em;font-weight:700;">Project Details</p>
                    <div style="background:#0c0c18;border:1px solid #1e1e35;border-radius:10px;padding:16px 18px;">
                      <p style="margin:0;font-size:14px;color:#a0a0c0;line-height:1.75;">${message.replace(/\n/g, '<br/>')}</p>
                    </div>
                  </td>
                </tr>

              </table>
            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td style="background:#0f0f1c;padding:24px 36px;border-left:1px solid #1e1e35;border-right:1px solid #1e1e35;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <p style="margin:0 0 14px;font-size:14px;color:#8888aa;">Reply quickly to secure this lead 🚀</p>
                    <a href="mailto:${email}?subject=Re: Your GrowWithWeb Enquiry&body=Hi ${name},%0D%0A%0D%0AThank you for reaching out! I've reviewed your project details and would love to discuss further.%0D%0A%0D%0ABest regards,%0D%0AParth / Paras%0D%0AGrowWithWeb"
                      style="display:inline-block;background:#00f0a0;color:#030308;font-size:14px;font-weight:800;padding:13px 28px;border-radius:10px;text-decoration:none;margin-right:10px;">
                      ✉️ Reply to ${name}
                    </a>
                    ${phone ? `<a href="https://wa.me/91${phone.replace(/\D/g,'')}?text=Hi ${encodeURIComponent(name)}! Thanks for reaching out to GrowWithWeb. I'd love to discuss your project."
                      style="display:inline-block;background:rgba(37,211,102,0.12);border:1px solid rgba(37,211,102,0.3);color:#25d366;font-size:14px;font-weight:700;padding:12px 24px;border-radius:10px;text-decoration:none;">
                      💬 WhatsApp
                    </a>` : ''}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#0a0a0f;border:1px solid #1e1e35;border-top:none;border-radius:0 0 16px 16px;padding:20px 36px;text-align:center;">
              <p style="margin:0;font-size:12px;color:#33334a;">
                This email was sent automatically by your <strong style="color:#00f0a0;">GrowWithWeb</strong> contact form.<br/>
                Ghaziabad, UP, India · parasjainjain89@gmail.com
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `
}

// Send notification email to owner
const sendEnquiryNotification = async (contactData) => {
  try {
    const transporter = createTransporter()

    await transporter.sendMail({
      from: `"GrowWithWeb Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.NOTIFY_EMAIL,
      subject: `🔔 New Enquiry from ${contactData.name} — ${contactData.service}`,
      html: buildEmailHTML(contactData),
      // Plain text fallback
      text: `
New Enquiry — GrowWithWeb

Name: ${contactData.name}
Email: ${contactData.email}
Phone: ${contactData.phone || 'Not provided'}
Service: ${contactData.service}
Budget: ${contactData.budget || 'Not specified'}

Message:
${contactData.message}

Received: ${new Date(contactData.createdAt).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
      `.trim(),
    })

    console.log(`✅ Notification email sent to ${process.env.NOTIFY_EMAIL}`)
    return true
  } catch (err) {
    // Don't crash the server if email fails — just log it
    console.error('❌ Email notification failed:', err.message)
    return false
  }
}

// Send auto-reply to the person who submitted the form
const sendAutoReply = async ({ name, email, service }) => {
  try {
    const transporter = createTransporter()

    await transporter.sendMail({
      from: `"GrowWithWeb" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Thanks for reaching out, ${name}! We'll be in touch soon.`,
      html: `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"/></head>
<body style="margin:0;padding:0;background:#0a0a0f;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0f;padding:40px 20px;">
    <tr><td align="center">
      <table width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;background:#111120;border:1px solid #1e1e35;border-radius:16px;overflow:hidden;">
        <tr>
          <td style="padding:36px;border-bottom:1px solid #1a1a2e;">
            <p style="margin:0 0 20px;font-size:24px;font-weight:800;color:#f0f0f8;">Grow<span style="color:#00f0a0;">WithWeb</span></p>
            <h2 style="margin:0 0 12px;font-size:22px;font-weight:800;color:#f0f0f8;">Hi ${name}, we've got your message! 👋</h2>
            <p style="margin:0;font-size:15px;color:#8888aa;line-height:1.7;">
              Thanks for reaching out about <strong style="color:#00f0a0;">${service}</strong>. We've received your enquiry and will get back to you within <strong style="color:#f0f0f8;">24 hours</strong> with a detailed proposal.
            </p>
          </td>
        </tr>
        <tr>
          <td style="padding:28px 36px;">
            <p style="margin:0 0 16px;font-size:14px;color:#8888aa;">In the meantime, feel free to reach us directly:</p>
            <a href="https://wa.me/917007736647" style="display:inline-block;background:rgba(37,211,102,0.1);border:1px solid rgba(37,211,102,0.25);color:#25d366;font-size:14px;font-weight:700;padding:11px 22px;border-radius:10px;text-decoration:none;margin-right:10px;">💬 WhatsApp Parth</a>
            <a href="https://wa.me/917820047480" style="display:inline-block;background:rgba(37,211,102,0.1);border:1px solid rgba(37,211,102,0.25);color:#25d366;font-size:14px;font-weight:700;padding:11px 22px;border-radius:10px;text-decoration:none;">💬 WhatsApp Paras</a>
          </td>
        </tr>
        <tr>
          <td style="background:#0a0a0f;padding:20px 36px;text-align:center;">
            <p style="margin:0;font-size:12px;color:#33334a;">GrowWithWeb · Ghaziabad, UP, India · parasjainjain89@gmail.com</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>
      `,
    })

    console.log(`✅ Auto-reply sent to ${email}`)
    return true
  } catch (err) {
    console.error('❌ Auto-reply failed:', err.message)
    return false
  }
}

module.exports = { sendEnquiryNotification, sendAutoReply }
