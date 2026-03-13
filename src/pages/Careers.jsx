import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Careers = () => {
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


  const openings = [
    {
      id: 'prep-artist',
      title: 'Prep Artist (Mid Level)',
      type: 'Full-time',
      location: 'Remote / On-site',
      description: "We are seeking a skilled Prep Artist to join our VFX team. This role focuses on ensuring footage is properly prepared for VFX production pipeline.",
      tags: ['Nuke', '3D Equalizer', 'Mocha Pro', 'Paint']
    },
    {
      id: 'roto-artist',
      title: 'Roto Artist',
      type: 'Full-time',
      location: 'Nagercoil',
      description: 'Precision rotoscoping for feature films and commercials. Detail-oriented artists with strong Mocha or Silhouette skills welcome.',
      tags: ['Mocha', 'Silhouette', 'Nuke', '1+ years exp']
    }
  ];

  return (
    <div className="page-transition">
      {/* Hero Section */}
      <section className="pt-20 pb-16 sm:pt-32 sm:pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 animate-fade-in-up uppercase tracking-tighter">
              <span className="text-[#4031D4]">Careers</span>
            </h1>
            <p className="text-2xl sm:text-3xl font-bold mb-4 animate-fade-in-up delay-100 italic">
              A Workplace Built on Trust, Not Titles
            </p>
            <p className="text-lg text-gray-400 animate-fade-in-up delay-200 uppercase tracking-widest font-mono">
              Bring your ideas, we'll bring the opportunity.
            </p>
          </div>
        </div>
      </section>
      
     
      
      {/* Current Openings Section */}
      <section className="py-16 sm:py-24 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 scroll-animate">
              <h2 className="text-3xl sm:text-5xl font-black mb-4 uppercase tracking-tighter">Current Openings</h2>
              <p className="text-gray-500 uppercase tracking-[0.2em] text-xs font-bold">Join our team of elite visual storytellers</p>
            </div>
            
            <div className="space-y-8">
              {openings.map((job, i) => (
                <div key={i} className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 sm:p-10 scroll-animate hover:border-[#4031D4]/30 transition-all duration-500" style={{ animationDelay: `${i * 100}ms` }}>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-8">
                    <div>
                      <h3 className="text-3xl font-black mb-3 uppercase tracking-tight">{job.title}</h3>
                      <div className="flex flex-wrap gap-3">
                        <span className="px-4 py-1.5 bg-[#4031D4] text-white text-[10px] font-black rounded-full uppercase tracking-widest">{job.type}</span>
                        <span className="px-4 py-1.5 bg-white/5 text-gray-400 text-[10px] font-black rounded-full uppercase tracking-widest border border-white/10">{job.location}</span>
                      </div>
                    </div>
                    <Link to={`/careers/${job.id}`} className="px-10 py-4 bg-white text-black hover:bg-[#4031D4] hover:text-white text-xs font-black rounded-none transition-all text-center uppercase tracking-widest skew-x-[-12deg]">
                      <span className="block skew-x-[12deg]">View Details</span>
                    </Link>
                  </div>
                  <p className="text-gray-400 mb-8 text-lg font-medium italic">
                    {job.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((tag, j) => (
                      <span key={j} className="px-4 py-1.5 bg-white/5 text-gray-400 text-[10px] font-bold rounded-sm border border-white/5 uppercase tracking-wider">{tag}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Careers;
