import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 w-full pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="text-4xl font-black text-zinc-800 mb-8 font-headline italic tracking-tighter">KINETIC</div>
          <p className="text-zinc-500 font-body text-sm max-w-sm leading-relaxed">
            The intersection of pharmaceutical precision and human peak performance. We develop formulations for those who consider their body a high-stakes machine.
          </p>
        </div>
        
        <div>
          <h6 className="text-white font-headline font-black uppercase text-xs tracking-widest mb-8">Navigation</h6>
          <ul className="space-y-4">
            <li><Link className="text-zinc-500 hover:text-zinc-100 transition-colors underline-offset-4 font-body text-sm hover:underline decoration-[#D4FF00]" to="/catalog">Shop All</Link></li>
            <li><Link className="text-zinc-500 hover:text-zinc-100 transition-colors underline-offset-4 font-body text-sm hover:underline decoration-[#D4FF00]" to="/catalog">The Science</Link></li>
            <li><Link className="text-zinc-500 hover:text-zinc-100 transition-colors underline-offset-4 font-body text-sm hover:underline decoration-[#D4FF00]" to="/catalog">Lab Reports</Link></li>
            <li><Link className="text-zinc-500 hover:text-zinc-100 transition-colors underline-offset-4 font-body text-sm hover:underline decoration-[#D4FF00]" to="/catalog">Ambassadors</Link></li>
          </ul>
        </div>
        
        <div>
          <h6 className="text-white font-headline font-black uppercase text-xs tracking-widest mb-8">Legal & Support</h6>
          <ul className="space-y-4">
            <li><Link className="text-zinc-500 hover:text-zinc-100 transition-colors underline-offset-4 font-body text-sm hover:underline decoration-[#D4FF00]" to="#">Privacy Policy</Link></li>
            <li><Link className="text-zinc-500 hover:text-zinc-100 transition-colors underline-offset-4 font-body text-sm hover:underline decoration-[#D4FF00]" to="#">Terms of Service</Link></li>
            <li><Link className="text-zinc-500 hover:text-zinc-100 transition-colors underline-offset-4 font-body text-sm hover:underline decoration-[#D4FF00]" to="#">Shipping Info</Link></li>
            <li><Link className="text-zinc-500 hover:text-zinc-100 transition-colors underline-offset-4 font-body text-sm hover:underline decoration-[#D4FF00]" to="#">Returns</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-8 mt-24 flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-900 gap-4">
        <span className="text-zinc-500 font-body text-sm tracking-normal uppercase text-[10px]">
          © 2024 KINETIC EDITORIAL. ENGINEERED FOR PERFORMANCE.
        </span>
        <div className="flex gap-6">
          <Link className="text-zinc-500 hover:text-[#D4FF00] transition-colors" to="#"><span className="material-symbols-outlined text-lg">share</span></Link>
          <Link className="text-zinc-500 hover:text-[#D4FF00] transition-colors" to="#"><span className="material-symbols-outlined text-lg">mail</span></Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
