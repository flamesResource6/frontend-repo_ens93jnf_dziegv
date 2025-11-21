import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section id="top" className="relative min-h-[90vh] pt-24 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <div className="mt-16 sm:mt-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white backdrop-blur">
            AI & Cybersecurity
          </span>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            Venkata Sai Yandeti
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-white/80 max-w-3xl">
            AI & ML Engineer | Cybersecurity Enthusiast | Ethical Hacker in Training
          </p>
          <p className="mt-3 text-white/70 max-w-2xl">
            I build intelligent, secure systems and multimodal AI assistants to drive innovation in real-time automation.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#projects" className="inline-flex justify-center rounded-md bg-sky-500 hover:bg-sky-400 text-white px-6 py-3 font-semibold transition-colors">
              View My Work
            </a>
            <a href="#contact" className="inline-flex justify-center rounded-md border border-white/30 bg-white/10 hover:bg-white/20 text-white px-6 py-3 font-semibold transition-colors">
              Contact Me
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/50 to-slate-900"></div>
    </section>
  )
}

export default Hero
