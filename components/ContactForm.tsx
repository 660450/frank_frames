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
  const [errorMessage, setErrorMessage] = useState('')
  const [values, setValues] = useState<FormValues>(initialValues)

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target
    setValues(current => ({ ...current, [name]: value }))
    if (status === 'error') {
      setErrorMessage('')
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })

      if (!response.ok) {
        throw new Error(isEnglish ? 'Something went wrong while sending your message.' : 'Er ging iets mis bij het verzenden van je bericht.')
      }

      setValues(initialValues)
      setStatus('sent')
    } catch (error) {
      console.error(error)
      setErrorMessage(isEnglish ? 'Something went wrong while sending your message.' : 'Er ging iets mis bij het verzenden van je bericht.')
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div
        aria-live="polite"
        className="flex animate-[fadeIn_0.25s_ease-out] flex-col items-center justify-center rounded border border-emerald-200 bg-emerald-50/80 px-6 py-10 text-center shadow-[0_12px_30px_rgba(16,185,129,0.08)]"
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          aria-hidden="true"
          className="mb-6 text-emerald-700"
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
        <p className="mt-3 max-w-md font-lato text-sm leading-relaxed text-mist">
          {isEnglish
            ? 'Thank you — your message is in my inbox and I’ll reply as soon as possible.'
            : 'Bedankt — je bericht is binnengekomen en ik neem zo snel mogelijk contact met je op.'}
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-8 font-lato text-[10px] tracking-[0.25em] uppercase text-accent transition-colors duration-300 hover:text-ink"
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
        className="self-start border border-ink bg-ink px-10 py-3 font-lato text-[10px] tracking-[0.3em] uppercase text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-ink disabled:cursor-not-allowed disabled:opacity-50"
      >
        {status === 'sending'
          ? isEnglish ? 'Sending…' : 'Verzenden…'
          : isEnglish ? 'Send message' : 'Versturen'}
      </button>

      {status === 'error' && (
        <div
          aria-live="polite"
          className="animate-[fadeIn_0.2s_ease-out] rounded border border-red-200 bg-red-50 px-4 py-3 font-lato text-xs leading-relaxed text-red-700 shadow-[0_10px_20px_rgba(239,68,68,0.06)]"
        >
          {errorMessage || (isEnglish
            ? 'Something went wrong. Please check your details and try again.'
            : 'Er is iets misgegaan. Controleer je invoer en probeer het opnieuw.')}
        </div>
      )}
    </form>
  )
}
