function Education() {
  return (
    <section id="education" className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Education & Certifications</h2>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-6">
            <h3 className="font-semibold text-slate-900 dark:text-white">B.Tech (AI & ML)</h3>
            <p className="text-slate-600 dark:text-slate-300">PBR Visvodaya Institute of Technology & Science, Kavali</p>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Focus: Machine Learning, Deep Learning, Cybersecurity foundations</p>
          </div>
          <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-6">
            <h3 className="font-semibold text-slate-900 dark:text-white">Certifications</h3>
            <ul className="mt-2 list-disc list-inside text-slate-600 dark:text-slate-300 text-sm space-y-1">
              <li>Intro to Ethical Hacking (online)</li>
              <li>Machine Learning Specialization (online)</li>
              <li>Hands-on IoT with ESP32 (workshop)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
