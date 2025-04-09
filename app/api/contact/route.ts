import { NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Add logging to debug
    console.log('Attempting to send email with data:', {
      name,
      email,
      message,
      apiKeyExists: !!process.env.RESEND_API_KEY
    })

    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: process.env.RECIPIENT_EMAIL!,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    })


    return NextResponse.json(
      { message: 'Message sent successfully', data },
      { status: 200 }
    )
  } catch (error) {
    // Improved error logging
    console.error('Detailed error:', {
      error,
      message: error instanceof Error ? error.message : 'Unknown error',
      apiKeyExists: !!process.env.RESEND_API_KEY
    })

    return NextResponse.json(
      { error: 'Failed to send email', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}