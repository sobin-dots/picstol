import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/10' : 'bg-black/80 backdrop-blur-md border-b border-white/5'}`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" onClick={closeMenu} className="flex items-center gap-2 group">
            <img src="/assets/images/logo.png" alt="PICSTOL" className="h-20 sm:h-20 transition-transform group-hover:scale-105" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink 
              to="/" 
              onClick={closeMenu}
              className={({ isActive }) => `text-sm font-medium transition-colors relative py-1 ${isActive ? 'text-white' : 'text-gray-300 hover:text-white'}`}
            >
              {({ isActive }) => (
                <>
                  Home
                  {isActive && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent"></span>}
                </>
              )}
            </NavLink>
            <NavLink  
              to="/portfolio" 
              onClick={closeMenu}
              className={({ isActive }) => `text-sm font-medium transition-colors relative py-1 ${isActive ? 'text-white' : 'text-gray-300 hover:text-white'}`}
            >
              {({ isActive }) => (
                <>
                  Portfolio
                  {isActive && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent"></span>}
                </>
              )}
            </NavLink>
            <NavLink 
              to="/careers" 
              onClick={closeMenu}
              className={({ isActive }) => `text-sm font-medium transition-colors relative py-1 ${isActive ? 'text-white' : 'text-gray-300 hover:text-white'}`}
            >
              {({ isActive }) => (
                <>
                  Careers
                  {isActive && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent"></span>}
                </>
              )}
            </NavLink>
            <Link to="/inquiry" onClick={closeMenu} className="px-6 py-2 bg-accent hover:bg-accent-hover text-white text-xs font-black uppercase tracking-widest rounded-sm transition-all italic skew-x-[-12deg]">
              <span className="block skew-x-[12deg]">Inquiry</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white" 
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}/>
            </svg>
          </button>
        </div>

    
        <div className={`${isMobileMenuOpen ? 'flex' : 'hidden'} md:hidden pb-6 pt-2 flex-col gap-4 animate-fade-in`}>
          <NavLink to="/" onClick={closeMenu} className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? 'text-white' : 'text-gray-300 hover:text-white'}`}>
            Home
          </NavLink>
          <NavLink to="/portfolio" onClick={closeMenu} className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? 'text-white' : 'text-gray-300 hover:text-white'}`}>
            Portfolio
          </NavLink>
          <NavLink to="/careers" onClick={closeMenu} className={({ isActive }) => `text-sm font-medium transition-colors ${isActive ? 'text-white' : 'text-gray-300 hover:text-white'}`}>
            Careers
          </NavLink>
          <Link to="/inquiry" onClick={closeMenu} className="px-6 py-3 bg-accent hover:bg-accent-hover text-white text-xs font-black uppercase tracking-widest rounded-sm transition-all italic skew-x-[-12deg] text-center">
            <span className="block skew-x-[12deg]">Inquiry</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
