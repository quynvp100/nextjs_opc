import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    console.log('Contact API called - Formspree version')

    const body = await request.json()
    const { name, email, company, phone, subject, message, vesselType, projectTimeline } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Format email for Formspree
    const formData = new FormData()
    formData.append('name', name)
    formData.append('email', email)
    formData.append('subject', `Contact Form: ${subject}`)
    formData.append('message', `
Contact Information:
- Name: ${name}
- Email: ${email}
- Company: ${company || 'Not provided'}
- Phone: ${phone || 'Not provided'}

Project Details:
- Subject: ${subject}
- Vessel Type: ${vesselType || 'Not specified'}
- Project Timeline: ${projectTimeline || 'Not specified'}

Message:
${message}

---
Submitted from: Dai Duong Shipbuilding Website
Date: ${new Date().toLocaleString()}
    `)

    // Send to Formspree using your real endpoint
    const formspreeUrl = 'https://formspree.io/f/xpwkaqaq' // Your real Formspree endpoint

    console.log('Sending to Formspree:', formspreeUrl)
    console.log('Email data:', { name, email, subject })

    const response = await fetch(formspreeUrl, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })

    if (response.ok) {
      console.log('✅ Email sent successfully via Formspree to quynvp95@gmail.com')
      return NextResponse.json(
        {
          message: 'Email sent successfully to quynvp95@gmail.com',
          service: 'Formspree',
          status: 'delivered'
        },
        { status: 200 }
      )
    } else {
      const errorText = await response.text()
      console.error('❌ Formspree error:', errorText)
      console.error('Response status:', response.status)

      // Still log the email content for debugging
      console.log('📧 EMAIL THAT FAILED TO SEND:')
      console.log('To: quynvp95@gmail.com')
      console.log('From:', email)
      console.log('Subject:', subject)
      console.log('Message:', message)

      throw new Error(`Formspree failed: ${response.status} - ${errorText}`)
    }

  } catch (error: any) {
    console.error('Error sending email:', error)

    return NextResponse.json(
      {
        error: 'Failed to send email',
        details: error.message
      },
      { status: 500 }
    )
  }
}