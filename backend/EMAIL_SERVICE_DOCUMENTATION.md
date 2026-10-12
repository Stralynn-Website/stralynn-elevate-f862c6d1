# Stralynn Backend — Email Service Documentation

This document provides a comprehensive guide to the email service implemented in the Stralynn backend, explaining which emails are used for what, how to change them, how emails are triggered, and step-by-step instructions for configuring everything in **Vercel**.

---

## 1. Overview & Architecture

The email service is powered by **[Nodemailer](https://nodemailer.com/)** using the SMTP protocol.

- **Implementation File:** [`backend/src/utils/mailer.js`](file:///c:/Users/tejas/Downloads/Stralynn/stralynn-elevate-f862c6d1/backend/src/utils/mailer.js)
- **Controllers Using Mailer:**
  - Contact Form: [`backend/src/controllers/contact.controller.js`](file:///c:/Users/tejas/Downloads/Stralynn/stralynn-elevate-f862c6d1/backend/src/controllers/contact.controller.js)
  - Job Application: [`backend/src/controllers/jobs.controller.js`](file:///c:/Users/tejas/Downloads/Stralynn/stralynn-elevate-f862c6d1/backend/src/controllers/jobs.controller.js)
- **Configuration File:** [`backend/.env`](file:///c:/Users/tejas/Downloads/Stralynn/stralynn-elevate-f862c6d1/backend/.env) (and [`backend/.env.example`](file:///c:/Users/tejas/Downloads/Stralynn/stralynn-elevate-f862c6d1/backend/.env.example))

---

## 2. Which Email is Used for What?

There are two primary categories of emails in the system:
1. **The Sender / Outgoing Account** (from which all emails originate)
2. **The Recipient / Notification Account** (which receives internal company alerts)

### Summary Table

| Role | Environment Variable | Current Value (in `.env`) | Fallback Default | Description |
| :--- | :--- | :--- | :--- | :--- |
| **SMTP Auth Account** | `SMTP_USER` | `riddhcodes@gmail.com` | *None (Required)* | The email account used to authenticate with the SMTP server. |
| **Outgoing Sender ("From")** | `MAIL_FROM` | `"Stralynn <riddhcodes@gmail.com>"` | Falls back to `SMTP_USER` | The display name and sender address that appears in the recipient's inbox header. |
| **Company Notification Inbox ("To")** | `COMPANY_NOTIFY_EMAIL` | `tejashwnijaiswal@gmail.com` | `connect@stralynn.com` | The internal inbox that receives alerts whenever a contact form is submitted or someone applies for a job. |

---

## 3. Email Triggers & Message Flows

### Flow 1: Contact Form Submission (`POST /api/contact`)

When a visitor submits the "Contact Us" form on the website, **two emails** are fired:

#### A. User Confirmation Email
- **Sent From:** `MAIL_FROM` (e.g., `"Stralynn <riddhcodes@gmail.com>"`)
- **Sent To:** The visitor's email address entered in the form (`req.body.email`)
- **Subject:** `We've received your message — Stralynn`
- **Purpose:** Acknowledges receipt to the visitor and assures them a team member will follow up shortly.

#### B. Internal Company Notification
- **Sent From:** `MAIL_FROM`
- **Sent To:** `COMPANY_NOTIFY_EMAIL` (e.g., `tejashwnijaiswal@gmail.com` or `connect@stralynn.com`)
- **Subject:** `New contact form submission — <Full Name>`
- **Content:** Includes an HTML table with:
  - Full Name
  - Email Address
  - Phone Number
  - Company
  - Role
  - Reason for contacting
  - Full text message

---

### Flow 2: Job Application (`POST /api/jobs/:jobId/apply`)

When a candidate applies for a role on the Careers page with their resume, **two emails** are fired:

#### A. Candidate Confirmation Email
- **Sent From:** `MAIL_FROM`
- **Sent To:** Candidate's email address (`application.email`)
- **Subject:** `Your application for <Role Name> — Stralynn`
- **Purpose:** Confirms their application has been received and is under review.

#### B. Internal Hiring Team Notification
- **Sent From:** `MAIL_FROM`
- **Sent To:** `COMPANY_NOTIFY_EMAIL`
- **Subject:** `New job application — <Role Name> — <Candidate Name>`
- **Content:** Includes candidate's details (Name, Email, Phone, Location, LinkedIn/Portfolio, Cover Note, Role & Team).
- **Resume Attachment:** The candidate's resume (PDF/DOCX) is **automatically attached** as an email attachment so the hiring team can review it directly from their inbox without logging into the admin panel.

---

## 4. Error Handling & Resilience

- **Non-blocking ("Fire-and-forget"):** Sending emails is decoupled from the database transaction. If an email fails to send (e.g., invalid SMTP credentials, rate limit, network timeout), the API request **will still succeed (HTTP 201)** and the data is safely stored in MongoDB.
- **Graceful Degradation:** If `SMTP_HOST`, `SMTP_USER`, or `SMTP_PASS` are omitted or empty, the backend logs:
  ```text
  Email is not configured (SMTP_HOST/SMTP_USER/SMTP_PASS missing) — skipping outgoing emails.
  ```
  The server will not crash, and outgoing emails are safely skipped.

---

## 5. How to Change the Email Addresses

### Case A: Changing Where Internal Notifications Go (Quickest)

If you only want incoming lead/application alerts sent to a different person or inbox (e.g., `hr@stralynn.com` or `sales@stralynn.com`):
1. Open your `.env` file (or Vercel Environment Variables).
2. Update:
   ```env
   COMPANY_NOTIFY_EMAIL=new-inbox@yourdomain.com
   ```
3. Restart backend (or redeploy on Vercel). No code changes required.

---

### Case B: Changing the Sender Display Name or Address

To change how the email sender looks to recipients:
1. Update `MAIL_FROM` in your `.env` (or Vercel):
   ```env
   MAIL_FROM="Stralynn Careers <hr@stralynn.com>"
   ```
   *(Note: Most SMTP providers require that the email address matches or is an authorized alias of `SMTP_USER`).*

---

### Case C: Switching to a Different Gmail Account

If you want to send emails from a different Gmail address (e.g., `company@gmail.com`):

1. Log into the desired Google Account.
2. Ensure **2-Step Verification** is turned on in Google Account Settings (`Security` > `How you sign in to Google`).
3. Generate a dedicated **App Password**:
   - Go to: [https://myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
   - App Name: `Stralynn Backend`
   - Click **Create**.
   - Copy the 16-character password (e.g., `xxxx xxxx xxxx xxxx`).
4. Update your `.env` file:
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=465
   SMTP_SECURE=true
   SMTP_USER=your_new_email@gmail.com
   SMTP_PASS=xxxx xxxx xxxx xxxx
   MAIL_FROM="Stralynn <your_new_email@gmail.com>"
   ```

---

### Case D: Switching to a Professional SMTP Provider (SendGrid, Postmark, AWS SES, Resend, Mailgun)

When moving to a custom domain (e.g., `@stralynn.com`):

#### Example: SendGrid
```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=apikey
SMTP_PASS=SG.your_sendgrid_api_key_here
MAIL_FROM="Stralynn <connect@stralynn.com>"
COMPANY_NOTIFY_EMAIL=connect@stralynn.com
```

#### Example: Google Workspace (Custom Domain on Google)
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=connect@stralynn.com
SMTP_PASS=your_workspace_app_password
MAIL_FROM="Stralynn <connect@stralynn.com>"
COMPANY_NOTIFY_EMAIL=connect@stralynn.com
```

#### Example: Amazon SES
```env
SMTP_HOST=email-smtp.us-east-1.amazonaws.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=YOUR_SES_SMTP_USERNAME
SMTP_PASS=YOUR_SES_SMTP_PASSWORD
MAIL_FROM="Stralynn <connect@stralynn.com>"
COMPANY_NOTIFY_EMAIL=connect@stralynn.com
```

---

## 6. What Changes Need to be Made in Vercel

If your backend is hosted or deployed on **Vercel** (either as a standalone project or within a monorepo via `@vercel/node`), follow these steps:

### Step 1: Navigate to Environment Variables in Vercel
1. Go to [vercel.com](https://vercel.com) and log in.
2. Select your backend project.
3. Click on the **Settings** tab at the top.
4. In the left sidebar, click **Environment Variables**.

---

### Step 2: Add or Update the Email Environment Variables

Add each of the following keys for all active environments (**Production**, **Preview**, and **Development**):

| Key | Example Value | Description |
| :--- | :--- | :--- |
| `SMTP_HOST` | `smtp.gmail.com` | SMTP host server |
| `SMTP_PORT` | `465` | `465` (SSL) or `587` (STARTTLS) |
| `SMTP_SECURE` | `true` | `"true"` for 465, `"false"` for 587 |
| `SMTP_USER` | `riddhcodes@gmail.com` | SMTP username / sender account |
| `SMTP_PASS` | `ggoy supu trhy kdxh` | App password (no spaces or with spaces) |
| `MAIL_FROM` | `"Stralynn <riddhcodes@gmail.com>"` | Sender header shown to recipients |
| `COMPANY_NOTIFY_EMAIL` | `connect@stralynn.com` | Email address where company alerts go |

> **Important:** Quotes around `MAIL_FROM` are recommended so the display name is preserved correctly.

---

### Step 3: Trigger a Redeployment (Crucial!)

> **Warning:** Changing environment variables in Vercel **does not** automatically apply to existing live deployments.
> You must redeploy for the new environment variables to take effect.

1. In your Vercel project, go to the **Deployments** tab.
2. Find the latest deployment.
3. Click the **three dots (...)** menu on the right.
4. Select **Redeploy**.
5. Alternatively, push a new commit to your connected GitHub branch.

---

### Step 4: Vercel Serverless Function Considerations

1. **Fire-and-Forget in Serverless Functions:**
   In `contact.controller.js` and `jobs.controller.js`, emails are called without `await` (`sendContactConfirmation().catch(...)`). On persistent servers (like Render/EC2), background tasks continue running. However, on **Vercel Serverless**, the Lambda execution context may freeze immediately after `res.status(201).json()` is returned, which can occasionally kill in-flight SMTP connections.
   
   *Tip:* If you notice emails intermittently not arriving on Vercel, await the mailer functions before returning the response:
   ```javascript
   await Promise.allSettled([
     sendContactConfirmation({ to: email, firstName }),
     sendContactNotification({ firstName, lastName, email, phone, company, role, reason, message })
   ]);
   ```

2. **Timeout Settings:**
   Gmail SMTP over port 465 can take 1–3 seconds to complete SSL handshake and send. Make sure your serverless function timeout is at least 10–15 seconds (configured in `vercel.json` under `maxDuration` if on Pro plan, or default on Hobby).

3. **CORS Origins:**
   Ensure `CORS_ORIGINS` in Vercel includes your production frontend URL (e.g. `https://stralynn.com` or `https://stralynn-elevate-f862c6d1.vercel.app`).

---

## 7. Quick Reference Checklist

- [ ] `SMTP_USER` is valid and active.
- [ ] `SMTP_PASS` is a valid 16-character Google App Password (not standard account password).
- [ ] `MAIL_FROM` is set with the company name and sender email.
- [ ] `COMPANY_NOTIFY_EMAIL` is set to the team member or distribution list who handles incoming leads.
- [ ] All 7 variables are added in **Vercel Project Settings > Environment Variables**.
- [ ] Project has been **redeployed** in Vercel after saving environment variables.
- [ ] Test form submitted on live website and checked both recipient and sender inbox.
