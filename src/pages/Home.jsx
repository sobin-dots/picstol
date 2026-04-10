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

      {/* TPN Certification Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-8 md:px-16">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20 scroll-animate">

            <div className="flex-shrink-0">
              <img
                src="/assets/images/tpn-logo.png"
                alt="Trusted Partner Network"
                className="h-24 md:h-32 w-auto object-contain"
              />
            </div>

            <div className="text-center ml-56 md:text-left">
              <h2 className="text-3xl md:text-5xl font-normal text-white mb-4 leading-tight">
                <span className="font-black">Certified</span> <span className="italic font-light opacity-80">Trusted</span> <br className="hidden lg:block" />
                <span className="italic opacity-80">Partner Network</span> <span className="font-black">member.</span>
              </h2>
              <p className="text-gray-400 text-base md:text-lg font-medium">
                Ensuring top-tier content security and industry compliance.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* About Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center scroll-animate">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-12 font-serif tracking-tight">
              We Are Picstol...
            </h2>
            <div className="space-y-4 md:space-y-6 text-xs md:text-sm text-gray-200 font-medium leading-relaxed px-4 md:px-12">
              <p>
                We are a specialized VFX studio dedicated to creating seamless, photorealistic visual effects that enhance storytelling across films, commercials, digital media, and gaming projects.
              </p>
              <p>
                With our robust team structure, advanced technical capabilities, and proven track record of successful international and domestic collaborations, we deliver industry-leading VFX solutions that captivate audiences and elevate creative visions.
              </p>
              <p>
                We deliver end-to-end visual effects with expertise spanning high-end compositing, advanced roto and paint, match move, and dynamic 3D modeling and motion graphics, we serve as a trusted, full-spectrum partner for projects of any scale and complexity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Brands Section */}
      <section className="py-10 bg-black">
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


      {/* Final CTA Section */}
      <section className="py-32 bg-black overflow-hidden relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-10 scroll-animate">

            <div className="w-full">
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold italic leading-tight tracking-tight" style={{ color: '#3730a3' }}>
                Let's make <span className="font-light">something</span>
                <br />
                <span className="font-black">great together</span>
              </h2>
              <p className="text-white/60 mt-6 max-w-md mx-auto text-sm md:text-base">
                we are dedicated to helping businesses achieve those goals through innovative digital solutions.
              </p>
            </div>

            <div>
              <Link to="/inquiry" className="group inline-flex items-center gap-4 bg-white text-black px-10 py-5 font-black uppercase tracking-widest hover:bg-accent hover:text-white transition-all transform hover:scale-105">
                Contact Us
                <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
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