# EmailJS Setup Instructions

To enable email functionality in your portfolio contact form, follow these steps:

## 1. Create EmailJS Account
- Go to [https://www.emailjs.com/](https://www.emailjs.com/)
- Sign up for a free account (allows 200 emails/month)

## 2. Add Email Service
- In your EmailJS dashboard, go to "Email Services"
- Click "Add New Service"
- Choose your email provider (Gmail, Outlook, etc.)
- Follow the setup instructions for your provider
- Note down your **Service ID**

## 3. Create Email Template
- Go to "Email Templates" in your dashboard
- Click "Create New Template"
- Use this template structure:

```
Subject: New Contact Form Message: {{subject}}

From: {{from_name}} ({{from_email}})
Subject: {{subject}}

Message:
{{message}}

---
Reply to: {{reply_to}}
```

- Save the template and note down your **Template ID**

## 4. Get Public Key
- Go to "Account" → "General"
- Find your **Public Key** (also called User ID)

## 5. Create Environment File
Create a `.env` file in your project root with:

```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id_here
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id_here
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
```

Replace the placeholder values with your actual EmailJS credentials.

## 6. Template Variables
Make sure your EmailJS template includes these variables:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{subject}}` - Message subject
- `{{message}}` - Message content
- `{{reply_to}}` - Reply-to email address

## 7. Test the Form
- Restart your development server after adding the .env file
- Fill out and submit the contact form
- Check your email for the message

## Security Note
- Never commit your .env file to version control
- The .env file is already in .gitignore
- Your EmailJS public key is safe to use in frontend code

## Troubleshooting
- Make sure all environment variables are prefixed with `REACT_APP_`
- Restart your dev server after adding/changing .env variables
- Check the browser console for any error messages
- Verify your EmailJS service and template are active 