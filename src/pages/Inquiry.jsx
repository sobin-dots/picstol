import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Inquiry = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    'contact-person': '',
    location: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        'contact-person': '',
        location: '',
        message: ''
      });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="page-transition bg-black min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl">
            <h1 className="text-5xl sm:text-4xl lg:text-6xl font-black uppercase tracking-tighter leading-[0.85] mb-8 text-white animate-fade-in-up">
              Let's <br/> <span className="text-[#4031D4]">Connect.</span>
            </h1>
            <p className="text-gray-500 uppercase tracking-[0.3em] text-xs font-bold animate-fade-in-up delay-200">
              Ready to bring your vision to life? Get in touch with us today.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-20 border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
              
              {/* Contact Form */}
              <div className="lg:col-span-7 scroll-animate">
                <h2 className="text-2xl font-black uppercase tracking-tight mb-10 text-white flex items-center gap-4">
                  <span className="w-8 h-1 bg-[#4031D4]"></span>
                  Send us a message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="name" className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-3">Your Name *</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-0 py-3 bg-transparent border-b border-white/10 focus:outline-none focus:border-[#4031D4] transition-all text-white placeholder:text-gray-700 font-medium"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-3">Email Address *</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-0 py-3 bg-transparent border-b border-white/10 focus:outline-none focus:border-[#4031D4] transition-all text-white placeholder:text-gray-700 font-medium"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="phone" className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-3">Contact Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-0 py-3 bg-transparent border-b border-white/10 focus:outline-none focus:border-[#4031D4] transition-all text-white placeholder:text-gray-700 font-medium"
                        placeholder="+91 995 262 7427"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="contact-person" className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-3">Subject</label>
                      <input 
                        type="text" 
                        id="contact-person" 
                        name="contact-person"
                        value={formData['contact-person']}
                        onChange={handleChange}
                        className="w-full px-0 py-3 bg-transparent border-b border-white/10 focus:outline-none focus:border-[#4031D4] transition-all text-white placeholder:text-gray-700 font-medium"
                        placeholder="Project Inquiry"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="location" className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-3">Location </label>
                    <div className="relative">
                      <select 
                        id="location" 
                        name="location" 
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full px-0 py-3 bg-transparent border-b border-white/10 focus:outline-none focus:border-[#4031D4] transition-all text-white appearance-none cursor-pointer font-medium"
                      >
                        <option value="" className="bg-black">Select a location</option>
                        <option value="Chennai" className="bg-black">Chennai</option>
                        <option value="Nagercoil" className="bg-black">Nagercoil</option>
                      </select>
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-3">Project Details *</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      required
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-0 py-3 bg-transparent border-b border-white/10 focus:outline-none focus:border-[#4031D4] transition-all text-white resize-none placeholder:text-gray-700 font-medium"
                      placeholder="Tell us about your project, timeline, and any specific requirements..."
                    ></textarea>
                  </div>
                  
                  <div className="pt-6">
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="group flex items-center gap-6 bg-white text-black px-12 py-5 text-xs font-black uppercase tracking-[0.2em] transition-all hover:bg-[#4031D4] hover:text-white transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed skew-x-[-12deg]"
                    >
                      <span className="block skew-x-[12deg]">{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                      <svg className="w-5 h-5 block skew-x-[12deg] transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                  
                  {/* Success Message */}
                  {isSuccess && (
                    <div className="p-6 bg-[#4031D4]/10 border border-[#4031D4]/20 rounded-sm animate-fade-in">
                      <p className="text-white text-sm font-bold flex items-center gap-3 italic">
                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                        Message sent successfully. We'll be in touch.
                      </p>
                    </div>
                  )}
                </form>
              </div>
              
              {/* Contact Information */}
              <div className="lg:col-span-5 space-y-12 scroll-animate delay-200">
                <div className="space-y-16">
                  <div>
                    <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#4031D4] mb-8">Direct Contact</h3>
                    <div className="space-y-10">
                      <div className="group">
                        <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest mb-2">Email Us</p>
                        <a href="mailto:hello@picstol.com" className="text-lg sm:text-md font-black uppercase tracking-tighter text-white hover:text-[#4031D4] transition-colors block leading-none">
                          hello@picstol.com
                        </a>
                      </div>
                      <div className="group">
                        <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest mb-2">Call Us</p>
                        <a href="tel:+919952627427" className="text-lg sm:text-md  font-black uppercase tracking-tighter text-white hover:text-[#4031D4] transition-colors block leading-none">
                          +91 995 262 7427
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-[#4031D4] mb-8">Our Presence</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                      <div>
                        <p className="text-xs font-black text-white uppercase tracking-widest mb-3 italic">Chennai</p>
                        <p className="text-sm text-gray-500 leading-relaxed font-medium">
                          5th Floor, Tower B, TECCI PARK, OMR, Sholinganallur, Chennai - 600119
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-black text-white uppercase tracking-widest mb-3 italic">Nagercoil</p>
                        <p className="text-sm text-gray-500 leading-relaxed font-medium">
                          Head Office, Tamil Nadu. Professional VFX production hub.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* CTA Card */}
                <div className="bg-gradient-to-br from-[#4031D4] to-indigo-950 p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden group border border-white/5">
                  <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-48 h-48 bg-white/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
                  
                  <h3 className="text-3xl font-black uppercase tracking-tighter mb-4 text-white relative z-10 leading-none">Career <br/> Opportunity</h3>
                  <p className="text-white/70 mb-10 leading-relaxed font-medium text-sm relative z-10">
                    We're always looking for elite talent to join our VFX team. Ready for your next big challenge?
                  </p>
                  
                  <Link to="/careers" className="inline-flex items-center gap-4 bg-white text-black px-8 py-4 text-[10px] font-black rounded-none transition-all uppercase tracking-widest hover:bg-black hover:text-white relative z-10 skew-x-[-12deg]">
                    <span className="block skew-x-[12deg]">View Openings</span>
                    <svg className="w-4 h-4 block skew-x-[12deg]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </Link>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Inquiry;
