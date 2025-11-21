function Footer() {
  return (
    <footer className="py-8 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-600 dark:text-slate-300">
        <p>© 2025 Venkata Sai Yandeti. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm">
          <a href="#top" className="hover:text-sky-600">Back to top</a>
          <a href="#" className="hover:text-sky-600">Privacy Policy</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
