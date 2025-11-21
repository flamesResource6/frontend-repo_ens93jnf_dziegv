import { useState } from 'react'
import { Send, Mail, Github, Linkedin, MapPin, MessageSquare } from 'lucide-react'

const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    try {
      const res = await fetch(`${baseUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        const data = await res.json()
        setStatus({ ok: true, message: data.message || 'Message sent!' })
        setForm({ name: '', email: '', message: '' })
      } else {
        const err = await res.json().catch(() => ({}))
        setStatus({ ok: false, message: err.detail || 'Something went wrong. Please try again.' })
      }
    } catch (error) {
      setStatus({ ok: false, message: error.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Let’s build something innovative</h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300">Feel free to reach out for collaborations, internships, or project ideas.</p>
            <div className="mt-6 space-y-3 text-slate-700 dark:text-slate-300">
              <p className="inline-flex items-center gap-2"><MapPin className="w-4 h-4" /> Based in Tirupati, Andhra Pradesh, India</p>
              <a href="mailto:email@example.com" className="inline-flex items-center gap-2 hover:text-sky-600"><Mail className="w-4 h-4" /> email@example.com</a>
              <div className="flex gap-3 pt-2">
                <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800"><Github className="w-4 h-4" /> GitHub</a>
                <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800"><Linkedin className="w-4 h-4" /> LinkedIn</a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Name</label>
                  <input id="name" name="name" value={form.name} onChange={handleChange} required placeholder="Your name" className="mt-1 w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
                  <input id="email" name="email" type="email" value={form.email} onChange={handleChange} required placeholder="you@example.com" className="mt-1 w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500" />
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
                <textarea id="message" name="message" value={form.message} onChange={handleChange} required rows="5" placeholder="How can I help?" className="mt-1 w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500" />
              </div>
              <button type="submit" disabled={loading} className="mt-6 inline-flex items-center gap-2 rounded-md bg-sky-600 hover:bg-sky-500 text-white px-5 py-2.5 font-semibold disabled:opacity-60">
                <Send className="w-4 h-4" /> {loading ? 'Sending...' : 'Send Message'}
              </button>
              {status && (
                <p className={`mt-3 text-sm ${status.ok ? 'text-green-600' : 'text-red-600'}`}>
                  <MessageSquare className="inline w-4 h-4 mr-1" /> {status.message}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
