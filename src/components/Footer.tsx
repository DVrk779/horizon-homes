export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-950 dark:bg-black w-full py-20 px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto">
        <div className="col-span-1 md:col-span-1">
          <span className="font-serif text-3xl text-white mb-8 block">Horizon Homes</span>
          <p className="text-slate-500 font-sans text-xs leading-relaxed uppercase tracking-widest mb-8">
            Elevating the art of the acquisition through historical insight and modern precision.
          </p>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-slate-500 hover:text-white cursor-pointer transition-colors">public</span>
            <span className="material-symbols-outlined text-slate-500 hover:text-white cursor-pointer transition-colors">alternate_email</span>
            <span className="material-symbols-outlined text-slate-500 hover:text-white cursor-pointer transition-colors">location_on</span>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h5 className="text-white font-semibold mb-2 font-sans text-sm tracking-wide uppercase">The Agency</h5>
          <a className="text-slate-500 hover:text-slate-300 transition-colors font-sans text-sm tracking-wide uppercase hover:underline decoration-slate-700 underline-offset-8" href="#">Our Heritage</a>
          <a className="text-slate-500 hover:text-slate-300 transition-colors font-sans text-sm tracking-wide uppercase hover:underline decoration-slate-700 underline-offset-8" href="#">The Collection</a>
          <a className="text-slate-500 hover:text-slate-300 transition-colors font-sans text-sm tracking-wide uppercase hover:underline decoration-slate-700 underline-offset-8" href="#">Advisory</a>
          <a className="text-slate-500 hover:text-slate-300 transition-colors font-sans text-sm tracking-wide uppercase hover:underline decoration-slate-700 underline-offset-8" href="#">Careers</a>
        </div>
        <div className="flex flex-col gap-4">
          <h5 className="text-white font-semibold mb-2 font-sans text-sm tracking-wide uppercase">Legal</h5>
          <a className="text-slate-500 hover:text-slate-300 transition-colors font-sans text-sm tracking-wide uppercase hover:underline decoration-slate-700 underline-offset-8" href="#">Privacy Policy</a>
          <a className="text-slate-500 hover:text-slate-300 transition-colors font-sans text-sm tracking-wide uppercase hover:underline decoration-slate-700 underline-offset-8" href="#">Terms of Service</a>
          <a className="text-slate-500 hover:text-slate-300 transition-colors font-sans text-sm tracking-wide uppercase hover:underline decoration-slate-700 underline-offset-8" href="#">Cookie Policy</a>
          <a className="text-slate-500 hover:text-slate-300 transition-colors font-sans text-sm tracking-wide uppercase hover:underline decoration-slate-700 underline-offset-8" href="#">Accessibility</a>
        </div>
        <div className="flex flex-col gap-4">
          <h5 className="text-white font-semibold mb-2 font-sans text-sm tracking-wide uppercase">Newsletter</h5>
          <p className="text-slate-500 text-xs uppercase tracking-widest mb-4">Join our private registry for off-market alerts.</p>
          <div className="border-b border-slate-800 pb-2 flex items-center">
            <input className="bg-transparent border-none text-white text-xs placeholder:text-slate-700 focus:ring-0 w-full outline-none" placeholder="YOUR EMAIL" type="email" />
            <button className="material-symbols-outlined text-slate-500 hover:text-white transition-colors">east</button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-slate-500 text-[10px] tracking-[0.2em] uppercase">
        <span>© 2024 Horizon Homes. All rights reserved.</span>
        <span className="mt-4 md:mt-0">Built by Fares Ahmed using Next.js & Sanity</span>
      </div>
    </footer>
  );
}
