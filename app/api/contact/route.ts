import { NextResponse } from 'next/server'
import { Resend } from 'resend'

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY

  if (!apiKey) {
    throw new Error('RESEND_API_KEY ontbreekt. Voeg deze toe aan je environment variables.')
  }

  return new Resend(apiKey)
}

function getFromAddress() {
  const from = process.env.RESEND_FROM_EMAIL

  if (!from) {
    throw new Error('RESEND_FROM_EMAIL ontbreekt. Zet een geverifieerd verzendadres in .env.local, bijvoorbeeld: "Frank Fotografie <mail@jouwdomein.nl>".')
  }

  return from
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const naam = String(body.naam || '').trim()
    const email = String(body.email || '').trim()
    const bericht = String(body.bericht || '').trim()

    if (!naam || !email || !bericht) {
      return NextResponse.json(
        { error: 'Naam, e-mail en bericht zijn verplicht.' },
        { status: 400 }
      )
    }

    const recipient = process.env.CONTACT_TO_EMAIL
    if (!recipient) {
      throw new Error('CONTACT_TO_EMAIL ontbreekt. Voeg het ontvangende e-mailadres toe aan .env.local.')
    }

    const resend = getResendClient()
    const from = getFromAddress()

    const result = await resend.emails.send({
      from,
      to: [recipient],
      replyTo: email,
      subject: `Nieuw contactbericht van ${naam}`,
      html: `
        <h2>Nieuw contactbericht</h2>
        <p><strong>Naam:</strong> ${naam}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Bericht:</strong></p>
        <p>${bericht.replace(/\n/g, '<br />')}</p>
      `,
      text: `Nieuw contactbericht\n\nNaam: ${naam}\nE-mail: ${email}\n\nBericht:\n${bericht}`,
    })

    if (result.error) {
      throw new Error(result.error.message || 'Resend kon het bericht niet verzenden.')
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Onbekende fout'

    return NextResponse.json(
      { error: message },
      { status: 500 }
    )
  }
}
