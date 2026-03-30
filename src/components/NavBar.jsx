import { Link, useLocation } from 'react-router-dom'

const NavBar = () => {
  const location = useLocation()
  
  const navLinks = [
    { title: 'Pre-Workout', path: '/catalog' },
    { title: 'Protein', path: '/catalog' },
    { title: 'Amino Acids', path: '/catalog' },
    { title: 'Recovery', path: '/catalog' },
    { title: 'Supplements', path: '/catalog' },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/50 shadow-2xl shadow-black/50 flex justify-between items-center px-8 py-4">
      <Link to="/" className="text-2xl font-black italic text-[#D4FF00] tracking-tighter uppercase font-headline">
        KINETIC
      </Link>
      
      <div className="hidden md:flex gap-8 items-center">
        {navLinks.map((link) => (
          <Link
            key={link.title}
            to={link.path}
            className={`font-headline font-black tracking-tighter uppercase text-sm transition-all duration-300 ${
              location.pathname === link.path 
                ? 'text-[#D4FF00] border-b-2 border-[#D4FF00] pb-1' 
                : 'text-zinc-400 hover:text-zinc-100'
            }`}
          >
            {link.title}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-6">
        <button className="text-zinc-400 hover:text-[#D4FF00] transition-all duration-300 active:scale-95">
          <span className="material-symbols-outlined">person</span>
        </button>
        <Link 
          to="/checkout" 
          className="text-zinc-400 hover:text-[#D4FF00] transition-all duration-300 active:scale-95 relative"
        >
          <span className="material-symbols-outlined">shopping_cart</span>
          <span className="absolute -top-1 -right-1 bg-primary-container text-on-primary-fixed text-[10px] font-bold px-1 rounded-full">2</span>
        </Link>
      </div>
    </nav>
  )
}

export default NavBar
