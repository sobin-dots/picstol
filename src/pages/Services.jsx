import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
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

  return (
    <div className="page-transition">
      {/* Hero Section */}
      <section className="pt-20 pb-16 sm:pt-32 sm:pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up font-space">
              Our <span className="gradient-text-primary">Services</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 animate-fade-in-up delay-100">
              Cutting-edge Visual Effects, 3D & Motion Graphics Solutions
            </p>
          </div>
        </div>
      </section>
      
      {/* Overview Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[#4031D4]/10 to-purple-900/10 rounded-3xl p-8 sm:p-12 border border-[#4031D4]/20 scroll-animate">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Full-Spectrum VFX Partner</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                We are a specialized VFX studio dedicated to creating seamless, photorealistic visual effects that enhance storytelling across Films, commercials, digital media, and gaming projects.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We deliver end-to-end visual effects with expertise spanning high-end compositing, advanced roto and paint, match move, and dynamic 3D modeling and motion graphics, serving as a trusted partner for projects of any scale and complexity.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Visual Effects Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 scroll-animate">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Visual Effects (VFX)</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Professional-grade visual effects that seamlessly blend with live-action footage
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {/* Seamless Compositing */}
              <div className="service-card rounded-2xl p-6 sm:p-8 scroll-animate delay-100">
                <div className="w-full aspect-video rounded-xl bg-cover bg-center mb-6" style={{ backgroundImage: "url('/assets/images/vfx_composite.png')" }}></div>
                <h3 className="text-xl font-bold mb-3">Seamless Compositing</h3>
                <p className="text-gray-400 leading-relaxed">
                  Flawless integration of CGI elements with live-action footage, creating photorealistic final outputs that captivate audiences.
                </p>
              </div>
              
              {/* Paint / Prep */}
              <div className="service-card rounded-2xl p-6 sm:p-8 scroll-animate delay-200">
                <div className="w-full aspect-video rounded-xl bg-cover bg-center mb-6" style={{ backgroundImage: "url('/assets/images/vfx_roto.png')" }}></div>
                <h3 className="text-xl font-bold mb-3">Paint / Prep</h3>
                <p className="text-gray-400 leading-relaxed">
                  Clean removal of technical apparatus, wires, rigs, and unwanted elements from live-action footage with meticulous attention to detail.
                </p>
              </div>
              
              {/* Roto / Keying */}
              <div className="service-card rounded-2xl p-6 sm:p-8 scroll-animate delay-300">
                <div className="w-full aspect-video rounded-xl bg-cover bg-center mb-6" style={{ backgroundImage: "url('/assets/images/vfx_roto.png')" }}></div>
                <h3 className="text-xl font-bold mb-3">Roto / Keying</h3>
                <p className="text-gray-400 leading-relaxed">
                  Flawless extraction of mattes from live-action footage with frame-by-frame precision rotoscoping for complex scenes.
                </p>
              </div>
              
              {/* Matchmove */}
              <div className="service-card rounded-2xl p-6 sm:p-8 scroll-animate delay-400">
                <div className="w-full aspect-video rounded-xl bg-cover bg-center mb-6" style={{ backgroundImage: "url('/assets/images/vfx_matchmove.png')" }}></div>
                <h3 className="text-xl font-bold mb-3">Matchmove</h3>
                <p className="text-gray-400 leading-relaxed">
                  Precise tracking of cameras, objects, and body movements in live-action footage for accurate CGI integration and virtual set extensions.
                </p>
              </div>
              
              {/* Matte Painting */}
              <div className="service-card rounded-2xl p-6 sm:p-8 md:col-span-2 scroll-animate delay-500">
                <div className="w-full aspect-[21/9] rounded-xl bg-cover bg-center mb-6" style={{ backgroundImage: "url('/assets/images/vfx_matte_env.png')" }}></div>
                <h3 className="text-xl font-bold mb-3">Matte Painting & Environment Extension</h3>
                <p className="text-gray-400 leading-relaxed">
                  Photorealistic set extensions and environment creation that expand the scope of your production beyond physical limitations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 3D Modeling Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 scroll-animate">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">3D Modeling & Asset Creation</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Production-ready 3D assets with photorealistic details and optimized workflows
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              <div className="service-card rounded-2xl p-6 sm:p-8 scroll-animate delay-100">
                <div className="w-full aspect-video rounded-xl bg-cover bg-center mb-6" style={{ backgroundImage: "url('/assets/images/3d_character.png')" }}></div>
                <h3 className="text-xl font-bold mb-3">Character Modeling</h3>
                <p className="text-gray-400 leading-relaxed">
                  Detailed, production-ready character assets with anatomically accurate modeling and optimized topology for animation.
                </p>
              </div>
              
              <div className="service-card rounded-2xl p-6 sm:p-8 scroll-animate delay-200">
                <div className="w-full aspect-video rounded-xl bg-cover bg-center mb-6" style={{ backgroundImage: "url('/assets/images/3d_environment.png')" }}></div>
                <h3 className="text-xl font-bold mb-3">Environment Design</h3>
                <p className="text-gray-400 leading-relaxed">
                  Comprehensive world-building and set creation with attention to architectural detail and environmental storytelling.
                </p>
              </div>
              
              <div className="service-card rounded-2xl p-6 sm:p-8 scroll-animate delay-300">
                <div className="w-full aspect-video rounded-xl bg-cover bg-center mb-6" style={{ backgroundImage: "url('/assets/images/3d_hard_surface.png')" }}></div>
                <h3 className="text-xl font-bold mb-3">Hard-Surface Modeling</h3>
                <p className="text-gray-400 leading-relaxed">
                  Mechanical, architectural, and industrial asset creation with precision modeling and clean geometry for realistic renders.
                </p>
              </div>
              
              <div className="service-card rounded-2xl p-6 sm:p-8 scroll-animate delay-400">
                <div className="w-full aspect-video rounded-xl bg-cover bg-center mb-6" style={{ backgroundImage: "url('/assets/images/3d_texture.png')" }}></div>
                <h3 className="text-xl font-bold mb-3">Texture Development</h3>
                <p className="text-gray-400 leading-relaxed">
                  Photorealistic material creation and optimization using industry-standard PBR workflows for stunning visual quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Motion Graphics Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 scroll-animate">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Motion Graphics & Animation</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Captivating animations that bring brands and stories to life
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              <div className="service-card rounded-2xl p-6 sm:p-8 scroll-animate delay-100">
                <div className="w-full aspect-video rounded-xl bg-cover bg-center mb-6" style={{ backgroundImage: "url('/assets/images/mg_abstract.png')" }}></div>
                <h3 className="text-xl font-bold mb-3">2D Motion Graphics</h3>
                <p className="text-gray-400 leading-relaxed">
                  Engaging animations combining text, graphics, and visual effects to create memorable brand experiences and explainer content.
                </p>
              </div>
              
              <div className="service-card rounded-2xl p-6 sm:p-8 scroll-animate delay-200">
                <div className="w-full aspect-video rounded-xl bg-cover bg-center mb-6" style={{ backgroundImage: "url('/assets/images/mg_abstract.png')" }}></div>
                <h3 className="text-xl font-bold mb-3">3D Motion Graphics</h3>
                <p className="text-gray-400 leading-relaxed">
                  Dynamic animated sequences for branding and commercials with cinematic quality and professional polish.
                </p>
              </div>
              
              <div className="service-card rounded-2xl p-6 sm:p-8 scroll-animate delay-300">
                <div className="w-full aspect-video rounded-xl bg-cover bg-center mb-6" style={{ backgroundImage: "url('/assets/images/mg_promo.png')" }}></div>
                <h3 className="text-xl font-bold mb-3">Promotional Content</h3>
                <p className="text-gray-400 leading-relaxed">
                  Compelling visual narratives for brands, apps, and products that drive engagement and conversions.
                </p>
              </div>
              
              <div className="service-card rounded-2xl p-6 sm:p-8 scroll-animate delay-400">
                <div className="w-full aspect-video rounded-xl bg-cover bg-center mb-6" style={{ backgroundImage: "url('/assets/images/mg_digital.png')" }}></div>
                <h3 className="text-xl font-bold mb-3">Digital Campaigns</h3>
                <p className="text-gray-400 leading-relaxed">
                  Simplified visualization of complex ideas into captivating stories for social media and digital marketing campaigns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 sm:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-[#4031D4]/20 to-purple-900/20 rounded-3xl p-8 sm:p-12 border border-[#4031D4]/30 scroll-animate">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Let's Create Something <span className="gradient-text">Extraordinary</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Ready to elevate your project with world-class VFX?
            </p>
            <Link to="/inquiry" className="inline-block px-8 py-4 bg-[#4031D4] hover:bg-[#5041E4] text-white font-semibold rounded-full transition-all hover:shadow-lg hover:shadow-[#4031D4]/30 hover:scale-105">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
