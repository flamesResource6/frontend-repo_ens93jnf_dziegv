function Experience() {
  return (
    <section id="experience" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Experience & Achievements</h2>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-6">
            <h3 className="font-semibold text-slate-900 dark:text-white">College Expo Presentation</h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">Presented AI-based Cybersecurity Threat Detection project showcasing anomaly detection.</p>
          </div>
          <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-6">
            <h3 className="font-semibold text-slate-900 dark:text-white">Multimodal Voice Assistant</h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">Built a JARVIS-like assistant with wake-word detection and IoT integration.</p>
          </div>
          <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-6">
            <h3 className="font-semibold text-slate-900 dark:text-white">Community Work</h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">Aquaculture project assistance and local tech workshops.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
