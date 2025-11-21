function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">About Me</h2>
            <p className="mt-6 text-slate-600 dark:text-slate-300 leading-relaxed">
              I am a B.Tech student in Artificial Intelligence & Machine Learning at
              PBR Visvodaya Institute of Technology & Science, Kavali. My goal is to
              become an Ethical Hacker and Cybersecurity expert. I enjoy building
              intelligent, secure systems that merge AI, IoT, and modern web technologies.
            </p>
            <p className="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">
              I’m currently working on an advanced multimodal JARVIS-inspired assistant
              and an AI-powered cyber threat detection engine. I focus on practical,
              hands-on projects that improve reliability, automation, and security.
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-slate-700 dark:text-slate-200">
              <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-sky-500"></span> Machine Learning</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-sky-500"></span> Artificial Intelligence</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-sky-500"></span> Cybersecurity</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-sky-500"></span> IoT Integration</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-sky-500"></span> Voice/Face Authentication</li>
              <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-sky-500"></span> Web Development</li>
            </ul>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-sky-500/20 to-purple-500/20 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-400">
              <span className="text-sm">Your portrait can go here</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
