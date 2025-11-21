import { useEffect, useState } from 'react'

const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

const presetProjects = [
  {
    title: 'Multimodal JARVIS-like AI Assistant',
    description: 'Voice + vision assistant with wake-word detection, tool use, and IoT control.',
    image_url: 'https://images.unsplash.com/photo-1534759846116-57969e8a80b2?q=80&w=1200&auto=format&fit=crop',
    tech: ['Python', 'OpenAI/Gemini', 'Whisper', 'React', 'IoT'],
    link: '#'
  },
  {
    title: 'AI Cyber Threat Detection Engine',
    description: 'Real-time detection pipeline for anomalies and suspicious patterns in logs.',
    image_url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop',
    tech: ['Python', 'Scikit-learn', 'ELK', 'FastAPI'],
    link: '#'
  },
  {
    title: 'Self-watering IoT System',
    description: 'Low-power irrigation with 3.7V 18650 battery, soil sensing, and automation.',
    image_url: 'https://images.unsplash.com/photo-1490818387583-1baba5e638af?q=80&w=1200&auto=format&fit=crop',
    tech: ['ESP32', 'Sensors', 'MQTT'],
    link: '#'
  },
]

function Projects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(`${baseUrl}/projects`)
        if (res.ok) {
          const data = await res.json()
          if (data.items && data.items.length > 0) {
            setProjects(data.items)
          } else {
            setProjects(presetProjects)
          }
        } else {
          setProjects(presetProjects)
        }
      } catch (e) {
        setProjects(presetProjects)
      } finally {
        setLoading(false)
      }
    }
    fetchProjects()
  }, [])

  return (
    <section id="projects" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Projects</h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-2xl">Selected work that showcases my interests in AI, security, and automation.</p>
          </div>
        </div>

        {loading ? (
          <p className="mt-10 text-slate-600 dark:text-slate-300">Loading...</p>
        ) : (
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <div key={p.title} className="group rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden bg-slate-50 dark:bg-slate-900">
                {p.image_url && (
                  <img src={p.image_url} alt={p.title} loading="lazy" className="h-44 w-full object-cover" />
                )}
                <div className="p-6">
                  <h3 className="font-semibold text-slate-900 dark:text-white">{p.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{p.description}</p>
                  {p.tech && p.tech.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <span key={t} className="text-xs rounded-full border border-slate-200 dark:border-slate-800 px-2 py-0.5 text-slate-600 dark:text-slate-300">{t}</span>
                      ))}
                    </div>
                  )}
                  {p.link && (
                    <a href={p.link} className="mt-4 inline-flex text-sky-600 hover:text-sky-500 font-medium">View Details →</a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects
