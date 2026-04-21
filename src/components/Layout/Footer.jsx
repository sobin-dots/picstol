import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">

          {/* Brand Column */}
          <div className="lg:col-span-4">
            <div className="flex gap-4">
              <Link to="/" className="inline-block mb-6">
                <img src="/assets/images/logo.png" alt="PICSTOL" className="h-20" />
              </Link>
              <Link className='text-white text-sm'>
                <img src="/assets/images/tpn-logo.png" alt="TPN" className="h-20" />
              </Link>
            </div>
            <p className="text-gray-400 max-w-sm mb-8 font-mono text-sm leading-relaxed">
              Visual Effects Studio based in India. Bringing cinematic excellence to every frame with precision and passion.
            </p>

            <div className="flex gap-4">
              {/* Instagram */}
              <a href="https://www.instagram.com/picstolstudios?igsh=NjA5cmIza2o5cHhu" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
              </a>
              {/* X / Twitter */}
              <a href="https://x.com/PicstolStudios" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
              </a>
              {/* Facebook */}
              <a href="https://www.facebook.com/picstolstudios" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
              </a>
              {/* Vimeo */}
              <a href="https://vimeo.com/picstolstudios" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:border-accent transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.396 7.164c-.093 2.026-1.507 4.799-4.245 8.32-2.73 3.535-5.047 5.303-6.953 5.303-1.201 0-2.213-1.107-3.036-3.321l-1.62-5.922c-.613-2.285-1.272-3.428-1.977-3.428-.153 0-.685.317-1.595.952l-.959-1.233c.96-.839 1.906-1.685 2.844-2.531 1.278-1.1 2.24-1.685 2.884-1.745 1.532-.14 2.479.91 2.844 3.15.42 2.585.707 4.18.86 4.787.452 2.24.945 3.359 1.479 3.359.392 0 1.002-.639 1.83-1.918.828-1.279 1.272-2.24 1.334-2.884.126-1.341-.371-2.012-1.493-2.012-.513 0-1.049.12-1.607.351 1.053-3.442 3.064-5.111 6.035-5.008 2.191.076 3.23 1.507 3.111 4.3z" /></svg>
              </a>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

              {/* Contact Info */}
              <div>
                <h4 className="text-gray-500 uppercase tracking-widest text-xs font-bold mb-6">Contact Us On</h4>
                <ul className="space-y-4">
                  <li>
                    <a href="mailto:hello@picstol.com" className="text-gray-300 hover:text-accent transition-colors block text-sm">hello@picstol.com</a>
                  </li>
                  <li className="text-gray-300 text-sm">
                    +91 995 262 7427
                  </li>
                </ul>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-gray-500 uppercase tracking-widest text-xs font-bold mb-6">Quick Links</h4>
                <ul className="space-y-4">
                  <li><Link to="/portfolio" className="text-gray-300 hover:text-accent transition-colors text-sm">Portfolio</Link></li>
                  <li><Link to="/careers" className="text-gray-300 hover:text-accent transition-colors text-sm">Careers</Link></li>
                  <li><Link to="/inquiry" className="text-gray-300 hover:text-accent transition-colors text-sm">Contact</Link></li>
                </ul>
              </div>

              {/* Head Office Address */}
              <div>
                <h4 className="text-gray-500 uppercase tracking-widest text-xs font-bold mb-6 italic">Head Office</h4>
                <p className="text-sm text-gray-400 leading-relaxed font-mono">
                  317/4 Joe Daniel Street, Kottar-Parvathipuram Rd, Nagercoil, Tamil Nadu 629003
                </p>
              </div>

              {/* Chennai Address */}
              <div>
                <h4 className="text-gray-500 uppercase tracking-widest text-xs font-bold mb-6 italic">Chennai Office</h4>
                <p className="text-sm text-gray-400 leading-relaxed font-mono">
                  5th Floor, Tower B, TECCI PARK, OMR, Sholinganallur, Chennai - 600119
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center py-8 border-t border-white/5 text-[10px] uppercase tracking-[0.2em] text-gray-600">
          <p>© {new Date().getFullYear()} PICSTOL VISUAL EFFECTS. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;