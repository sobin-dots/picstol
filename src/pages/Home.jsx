import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.scroll-animate').forEach(el => {
      el.style.opacity = '0';
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const services = [
    { 
      title: 'VFX', 
      filter: 'vfx',
      image: '/assets/images/portfolio/vfx/Jailer.jpg', 
      desc: 'Precision rotoscoping, paint/prep, and high-end visual integration for major motion pictures.' 
    },
    { 
      title: '3D', 
      filter: '3d',
      image: '/assets/images/3d_arch.png', 
      desc: 'Expert 3D modeling, texturing, and photorealistic architectural visualizations.' 
    },
    { 
      title: 'MG', 
      filter: 'mg',
      image: '/assets/images/mg_abstract.png', 
      desc: 'Dynamic motion graphics, digital title design, and cinematic brand storytelling.' 
    }
  ];

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="pt-32 flex flex-col items-center">
        <div className="max-w-7xl mx-auto px-4 text-center mb-16">
          <h1 className="text-4xl sm:text-4xl md:text-6xl font-black mb-8 tracking-tight animate-fade-in-up leading-tight">
            Transforming Every Vision Into Magical Reality
          </h1>
          <p className="text-gray-400 text-md md:text-lg  mx-auto animate-fade-in-up delay-200">
            Cutting-edge Visual Effects, 3D Modeling & Motion Graphics solutions that enhance storytelling across films, commercials, and digital media.
          </p>
        </div>
        
        <div className="w-full aspect-video md:aspect-[21/9] overflow-hidden scroll-animate relative group">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="w-full h-full object-cover"
          >
            <source src="/assets/video/hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40"></div>
          
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4 bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-3xl font-bold mb-4 uppercase tracking-[0.2em] text-gray-400">Services</h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, i) => (
              <Link 
                key={i} 
                to={`/portfolio?filter=${service.filter}`}
                className="group scroll-animate" 
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-black text-white uppercase tracking-tighter group-hover:text-accent transition-colors">{service.title}</h3>
                </div>
                <div className="aspect-[4/5] rounded-[2rem] overflow-hidden bg-white/5 relative border border-white/5 group-hover:border-accent/30 transition-all duration-500 shadow-2xl group-hover:shadow-accent/10">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transform transition-all duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                  
                  <div className="absolute inset-0 flex items-center justify-center translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 p-8 text-center bg-black/40 backdrop-blur-sm">
                    <p className="text-sm text-white font-medium">{service.desc}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Brands Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 scroll-animate">
            <h2 className="text-sm md:text-base font-bold text-gray-400 tracking-tight">
              We serve brands from startups to enterprises
            </h2>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-700 max-w-7xl mx-auto scroll-animate">
            <img src="/assets/images/partners/CASAGRAND-logo.webp" alt="Casagrand" className="h-6 md:h-8 w-auto object-contain brightness-0 invert" />
            <img src="/assets/images/partners/arunexe.webp" alt="Arun Excello" className="h-10 md:h-14 w-auto object-contain brightness-0 invert" />
            <img src="/assets/images/partners/vff-logo.webp" alt="VFF" className="h-6 md:h-8 w-auto object-contain brightness-0 invert" />
            <img src="/assets/images/partners/vijay-antony-film-corporation.webp" alt="Vijay Antony" className="h-10 md:h-14 w-auto object-contain " />
            <img src="/assets/images/partners/SPACEMONK_v2.webp" alt="Space Monk" className="h-10 md:h-14 w-auto object-contain brightness-0 invert" />
            <img src="/assets/images/partners/grund.webp" alt="Grundfos" className="h-6 md:h-8 w-auto object-contain brightness-0 invert" />
            <img src="/assets/images/partners/jfw.webp" alt="JFW" className="h-8 md:h-12 w-auto object-contain brightness-0 invert" />
            <img src="/assets/images/partners/360-logo.webp" alt="360" className="h-8 md:h-10 w-auto object-contain " />
          </div>
        </div>
      </section>

      {/* TPN Certification Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto bg-white/[0.02] border border-white/[0.05] rounded-xl p-12 md:p-16 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 scroll-animate relative overflow-hidden group">
            {/* Subtle background circle decoration from screenshot */}
            <div className="absolute right-[10%] top-1/2 -translate-y-1/2 w-48 h-48 bg-white/[0.02] rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="flex-shrink-0 relative z-10">
              <img 
                src="/assets/images/tpn-logo.png" 
                alt="Trusted Partner Network" 
                className="h-20 md:h-28 w-auto object-contain"
              />
            </div>
            
            <div className="text-center md:text-left relative z-10">
              <h2 className="text-3xl md:text-5xl font-normal text-white mb-6 leading-tight">
                <span className="font-black">Certified</span> <span className="italic font-light opacity-80">Trusted</span> <br className="hidden lg:block"/>
                <span className="italic opacity-80">Partner Network</span> <span className="font-black">member.</span>
              </h2>
              <p className="text-gray-500 text-lg md:text-xl font-medium opacity-60">
                Ensuring top-tier content security and industry compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 bg-black overflow-hidden relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto flex flex-col md:row items-center justify-between gap-12 scroll-animate">
            
             
             <div className="flex-1 text-center md:text-left md:ml-12">
                <h2 className="text-4xl md:text-6xl font-bold mb-6 italic leading-tight">
                   Let's make <span className="font-light">something</span> <br/> <span className="font-black uppercase tracking-tighter text-5xl md:text-7xl">great together</span>
                </h2>
                <p className="text-gray-500 max-w-md mx-auto md:mx-0">
                   we are dedicated to helping businesses achieve those goals through innovative digital solutions.
                </p>
             </div>
             
             <div className="flex-shrink-0">
                <Link to="/inquiry" className="group flex items-center gap-4 bg-white text-black px-10 py-5 font-black uppercase tracking-widest hover:bg-accent hover:text-white transition-all transform hover:scale-105">
                   Contact Us
                   <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                   </svg>
                </Link>
             </div>
          </div>
        </div>
        
        {/* Background Decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-full pointer-events-none opacity-20">
           <div className="w-full h-full border border-white/5 rounded-full blur-3xl"></div>
        </div>
      </section>

    </div>
  );
};

export default Home;
