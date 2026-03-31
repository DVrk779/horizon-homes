export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md">
      <div className="flex justify-between items-center px-8 py-6 max-w-[1920px] mx-auto">
        <span className="font-serif text-2xl font-bold tracking-tighter text-slate-900 dark:text-slate-50">
          Horizon Homes
        </span>
        <div className="hidden md:flex items-center space-x-12">
          <a
            className="font-serif text-lg tracking-tight text-slate-900 dark:text-white border-b border-slate-900 dark:border-white pb-1"
            href="#home"
          >
            Home
          </a>
          <a
            className="font-serif text-lg tracking-tight text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            href="#properties"
          >
            Properties
          </a>
          <a
            className="font-serif text-lg tracking-tight text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            href="#about"
          >
            About
          </a>
          <a
            className="font-serif text-lg tracking-tight text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            href="#contact"
          >
            Contact
          </a>
        </div>
        <button className="bg-primary text-on-primary px-6 py-2.5 font-label text-sm uppercase tracking-widest hover:opacity-80 transition-opacity duration-300 active:scale-95">
          Book a Viewing
        </button>
      </div>
    </nav>
  );
}
