'use client'

import { useState, type ChangeEvent, type FormEvent } from 'react'
import type { Locale } from '@/lib/i18n'

type Status = 'idle' | 'sending' | 'sent' | 'error'

type FormValues = {
  naam: string
  email: string
  bericht: string
}

const initialValues: FormValues = {
  naam: '',
  email: '',
  bericht: '',
}

export default function ContactForm({ locale = 'nl' }: { locale?: Locale }) {
  const isEnglish = locale === 'en'
  const [status, setStatus] = useState<Status>('idle')
  const [values, setValues] = useState<FormValues>(initialValues)

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target
    setValues(current => ({ ...current, [name]: value }))
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })

      if (!response.ok) {
        const payload = await response.json().catch(() => ({}))
        throw new Error(payload.error || 'Er ging iets mis bij het verzenden.')
      }

      setValues(initialValues)
      setStatus('sent')
    } catch (error) {
      console.error(error)
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          aria-hidden="true"
          className="mb-6 text-accent"
        >
          <circle cx="20" cy="20" r="19" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M12 20l6 6 10-12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h2 className="font-montserrat text-2xl font-light text-ink">{isEnglish ? 'Message received' : 'Bericht ontvangen'}</h2>
        <p className="mt-3 font-lato text-sm text-mist">
        {isEnglish ? 'Thank you — I’ll be in touch as soon as possible.' : 'Bedankt — ik neem zo snel mogelijk contact op.'}
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-8 font-lato text-[10px] tracking-[0.25em] uppercase text-accent transition-colors hover:text-ink"
        >
          {isEnglish ? 'Send another message' : 'Nog een bericht sturen'}
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <label
          htmlFor="naam"
          className="font-lato text-[10px] tracking-[0.25em] uppercase text-mist"
        >
          {isEnglish ? 'Name' : 'Naam'}
        </label>
        <input
          id="naam"
          name="naam"
          type="text"
          required
          autoComplete="name"
          value={values.naam}
          onChange={handleChange}
          className="border-b border-rule bg-transparent py-2 font-lato text-sm text-ink placeholder:text-mist/50 outline-none transition-colors focus:border-ink"
          placeholder={isEnglish ? 'Your name' : 'Jouw naam'}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="email"
          className="font-lato text-[10px] tracking-[0.25em] uppercase text-mist"
        >
          {isEnglish ? 'Email' : 'E-mail'}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          value={values.email}
          onChange={handleChange}
          className="border-b border-rule bg-transparent py-2 font-lato text-sm text-ink placeholder:text-mist/50 outline-none transition-colors focus:border-ink"
          placeholder={isEnglish ? 'you@email.com' : 'jouw@email.nl'}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="bericht"
          className="font-lato text-[10px] tracking-[0.25em] uppercase text-mist"
        >
          {isEnglish ? 'Message' : 'Bericht'}
        </label>
        <textarea
          id="bericht"
          name="bericht"
          required
          rows={5}
          value={values.bericht}
          onChange={handleChange}
          className="resize-none border-b border-rule bg-transparent py-2 font-lato text-sm text-ink placeholder:text-mist/50 outline-none transition-colors focus:border-ink"
          placeholder={isEnglish ? 'Write your message here...' : 'Schrijf hier je bericht...'}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="self-start border border-ink px-10 py-3 font-lato text-[10px] tracking-[0.3em] uppercase text-ink transition-all duration-300 hover:bg-ink hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
      >
        {status === 'sending'
          ? isEnglish ? 'Sending…' : 'Verzenden…'
          : isEnglish ? 'Send message' : 'Versturen'}
      </button>

      {status === 'error' && (
        <p className="font-lato text-xs text-red-500">
          {isEnglish
            ? 'Something went wrong. Please check your details and try again.'
            : 'Er is iets misgegaan. Controleer je invoer en probeer het opnieuw.'}
        </p>
      )}
    </form>
  )
}
