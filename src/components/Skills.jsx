import { Cpu, ShieldCheck, Mic, Camera, Globe, Code, Brain, Box } from 'lucide-react'

const skills = [
  { icon: Brain, title: 'Machine Learning', level: 'Intermediate' },
  { icon: Cpu, title: 'Artificial Intelligence', level: 'Intermediate' },
  { icon: ShieldCheck, title: 'Cybersecurity', level: 'Initiating' },
  { icon: Box, title: 'IoT Integration', level: 'Intermediate' },
  { icon: Camera, title: 'Face Recognition', level: 'Intermediate' },
  { icon: Mic, title: 'Voice Recognition', level: 'Intermediate' },
  { icon: Code, title: 'Python / TensorFlow', level: 'Advanced' },
  { icon: Globe, title: 'Web Development', level: 'Intermediate' }
]

function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Skills & Technologies</h2>
        <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-2xl">A snapshot of the tools and areas I work with regularly.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map(({ icon: Icon, title, level }) => (
            <div key={title} className="group rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-6 hover:-translate-y-1 hover:shadow-lg transition-all">
              <div className="w-11 h-11 rounded-lg bg-sky-500/10 text-sky-600 dark:text-sky-400 flex items-center justify-center">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900 dark:text-white">{title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">{level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
