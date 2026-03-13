import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const projects = [
  // Existing Video Projects
  { id: 'v1', title: 'Domastic Movie', subtitle: 'Maargan VFX Breakdown', category: 'vfx', videoId: '1128432925' },
  { id: 'v2', title: '3D Architectural Walkthrough', subtitle: 'luxury apartment project designed to redefine modern urban living', category: '3d', videoId: '1125411288' },
  { id: 'v3', title: 'Picstol - Motion Graphics Showreel', subtitle: 'A cinematic collection of our best motion design work', category: 'mg', videoId: '1094930120' },
  { id: 'v4', title: 'Domastic Movie', subtitle: 'Shakthi Thirumagan 2025 - VFX Breakdown', category: 'vfx', videoId: '1136032317' },
  { id: 'v5', title: "SH'MELLOW - 3D Ad", subtitle: 'Dynamic 3D product commercial and animation', category: '3d', videoId: '1111064959' },
  { id: 'v6', title: 'Explainer Video (Motion Graphic)', subtitle: 'Simplified visualization of complex ideas through motion', category: 'mg', videoId: '1111203584' },
  { id: 'v7', title: 'Domastic Movie', subtitle: 'Pichaikkaran 2', category: 'vfx', videoId: '1095006711' },
  { id: 'v8', title: 'French Avenue - 3D Ad', subtitle: 'Photorealistic hard-surface modeling and advertising', category: '3d', videoId: '1111061216' },

  // New VFX Image Projects
  { id: 1, title: '120 bahadur', subtitle: 'VFX Project', category: 'vfx', image: '/assets/images/portfolio/vfx/120 bahadur.jpg' },
  { id: 2, title: 'Dear', subtitle: 'VFX Project', category: 'vfx', image: '/assets/images/portfolio/vfx/Dear.jpg' },
  { id: 3, title: 'Jailer', subtitle: 'VFX Project', category: 'vfx', image: '/assets/images/portfolio/vfx/Jailer.jpg' },
  { id: 4, title: 'Maanadu', subtitle: 'VFX Project', category: 'vfx', image: '/assets/images/portfolio/vfx/Maanadu.jpg' },
  { id: 5, title: 'chakra', subtitle: 'VFX Project', category: 'vfx', image: '/assets/images/portfolio/vfx/chakra.jfif' },
  { id: 6, title: 'champion-2', subtitle: 'VFX Project', category: 'vfx', image: '/assets/images/portfolio/vfx/champion-2.jpg' },
  { id: 7, title: 'champion', subtitle: 'VFX Project', category: 'vfx', image: '/assets/images/portfolio/vfx/champion.jpg' },
  { id: 8, title: 'dhurandhar', subtitle: 'VFX Project', category: 'vfx', image: '/assets/images/portfolio/vfx/dhurandhar.jpg' },
  { id: 9, title: 'dominic', subtitle: 'VFX Project', category: 'vfx', image: '/assets/images/portfolio/vfx/dominic.jpg' },
  { id: 10, title: 'elumalai', subtitle: 'VFX Project', category: 'vfx', image: '/assets/images/portfolio/vfx/elumalai.jpg' },
  { id: 11, title: 'hitler', subtitle: 'VFX Project', category: 'vfx', image: '/assets/images/portfolio/vfx/hitler.jpg' },
  { id: 12, title: 'ireambuthirai', subtitle: 'VFX Project', category: 'vfx', image: '/assets/images/portfolio/vfx/ireambuthirai.jpg' },
  { id: 13, title: 'maargan', subtitle: 'VFX Project', category: 'vfx', image: '/assets/images/portfolio/vfx/maargan.jpg' },
  { id: 14, title: 'madras matinee', subtitle: 'VFX Project', category: 'vfx', image: '/assets/images/portfolio/vfx/madras matinee.jpg' },
  { id: 15, title: 'og', subtitle: 'VFX Project', category: 'vfx', image: '/assets/images/portfolio/vfx/og.jpeg' },
  { id: 16, title: 'oh manapenne', subtitle: 'VFX Project', category: 'vfx', image: '/assets/images/portfolio/vfx/oh manapenne.jpg' },
  { id: 17, title: 'pechi', subtitle: 'VFX Project', category: 'vfx', image: '/assets/images/portfolio/vfx/pechi.jpg' },
  { id: 18, title: 'pichaikaran 2', subtitle: 'VFX Project', category: 'vfx', image: '/assets/images/portfolio/vfx/pichaikaran 2.jpg' },
  { id: 19, title: 'romeo', subtitle: 'VFX Project', category: 'vfx', image: '/assets/images/portfolio/vfx/romeo.jpg' },
  { id: 20, title: 'sakthithirumagan', subtitle: 'VFX Project', category: 'vfx', image: '/assets/images/portfolio/vfx/sakthithirumagan.jpg' },
];

const Portfolio = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const filter = queryParams.get('filter') || 'all';
  
  const [activeVideo, setActiveVideo] = useState(null);
  const [activeImage, setActiveImage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const setFilter = (newFilter) => {
    navigate(`/portfolio?filter=${newFilter}`, { replace: true });
  };

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
  }, [filter]);

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [modalOpen]);

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  const openVideoModal = (videoId) => {
    setActiveVideo(videoId);
    setActiveImage(null);
    setModalOpen(true);
  };

  const openImageModal = (imageUrl) => {
    setActiveImage(imageUrl);
    setActiveVideo(null);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setTimeout(() => {
      setActiveVideo(null);
      setActiveImage(null);
    }, 300);
  };

  return (
    <div className="page-transition">
      {/* Hero Section */}
      <section className="pt-20 pb-16 sm:pt-32 sm:pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up uppercase tracking-tighter">
              Our <span className="text-[#4031D4]">Portfolio</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 animate-fade-in-up delay-100 italic">
              Discover our latest work in VFX, 3D Modeling, and Motion Graphics
            </p>
          </div>
        </div>
      </section>
      
      {/* Filter Section */}
      <section className="pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {['all', 'vfx', '3d', 'mg'].map((f) => (
              <button 
                key={f}
                onClick={() => setFilter(f)}
                className={`px-8 py-3 rounded-none font-black uppercase tracking-widest transition-all skew-x-[-12deg] ${filter === f ? 'bg-[#4031D4] text-white shadow-lg shadow-[#4031D4]/30' : 'bg-white/5 hover:bg-white/10 text-gray-400 border border-white/10'}`}
              >
                <span className="block skew-x-[12deg] font-black">{f === 'mg' ? 'Motion Graphics' : f === 'all' ? 'All Work' : f}</span>
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Portfolio Grid */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
            {filteredProjects.map((project, index) => (
              <div key={project.id || index} className="scroll-animate" style={{ animationDelay: `${(index % 6) * 100}ms` }}>
                <div 
                  onClick={() => project.videoId ? openVideoModal(project.videoId) : openImageModal(project.image)}
                  className="group relative overflow-hidden rounded-xl bg-white/5 aspect-video cursor-pointer border border-white/5 hover:border-[#4031D4]/50 transition-all duration-500"
                >
                  {/* Thumbnail */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" 
                    style={{ backgroundImage: `url(${project.image || `https://vumbnail.com/${project.videoId}.jpg`})` }}
                  ></div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-all duration-500"></div>

                  {/* Play/View Icon */}
                  <div className="absolute inset-0 flex items-center justify-center translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
                    <div className="w-16 h-16 bg-[#4031D4] rounded-full flex items-center justify-center text-white shadow-2xl shadow-[#4031D4]/50 transform hover:scale-110 transition-transform">
                      {project.videoId ? (
                        <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                      ) : (
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                      )}
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-8 z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="inline-block px-3 py-1 bg-[#4031D4] text-[10px] font-black rounded-sm mb-3 uppercase tracking-widest">{project.category}</span>
                    <h3 className="text-2xl font-black mb-1 uppercase tracking-tighter">{project.title}</h3>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-[0.2em]">{project.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
   
      
      {/* CTA Section */}
      <section className="py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-7xl font-black mb-8 italic uppercase tracking-tighter">
              Ready to create <br/> <span className="text-[#4031D4]">Something Great?</span>
            </h2>
            <Link to="/inquiry" className="inline-block px-12 py-5 bg-white text-black hover:bg-[#4031D4] hover:text-white font-black uppercase tracking-[0.2em] transition-all transform hover:scale-105 skew-x-[-12deg]">
              <span className="block skew-x-[12deg]">Get In Touch</span>
            </Link>
        </div>
      </section>

      {/* Media Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-fade-in">
          <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" onClick={closeModal}></div>
          <div className="relative w-full max-w-6xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border border-white/10 animate-scale-in">
            <button 
              onClick={closeModal}
              className="absolute top-6 right-6 z-[110] p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="w-full h-full flex items-center justify-center">
              {activeVideo ? (
                <iframe 
                  src={`https://player.vimeo.com/video/${activeVideo}?autoplay=1&title=0&byline=0&portrait=0`} 
                  className="w-full h-full" 
                  frameBorder="0" 
                  allow="autoplay; fullscreen; picture-in-picture" 
                  allowFullScreen>
                </iframe>
              ) : (
                <img src={activeImage} alt="Portfolio Detail" className="max-w-full max-h-full object-contain" />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
