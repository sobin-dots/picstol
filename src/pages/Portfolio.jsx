import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const projects = [
  // Existing Video Projects
  { id: 'v1', title: 'Domastic Movie', subtitle: 'Maargan VFX Breakdown', category: 'vfx', videoId: '1128432925' },
  // { id: 'v2', title: '3D Architectural Walkthrough', subtitle: 'luxury apartment project designed to redefine modern urban living', category: '3d', videoId: '1125411288' },
  { id: 'v3', title: 'Picstol - Motion Graphics Showreel', subtitle: 'A cinematic collection of our best motion design work', category: 'mg', videoId: '1094930120' },
  // { id: 'v4', title: 'Domastic Movie', subtitle: 'Shakthi Thirumagan 2025 - VFX Breakdown', category: 'vfx', videoId: '1136032317' },
  // { id: 'v5', title: "SH'MELLOW - 3D Ad", subtitle: 'Dynamic 3D product commercial and animation', category: '3d', videoId: '1111064959' },
  { id: 'v6', title: 'Explainer Video (Motion Graphic)', subtitle: 'Simplified visualization of complex ideas through motion', category: 'mg', videoId: '1111203584' },
  // { id: 'v7', title: 'Domastic Movie', subtitle: 'Pichaikkaran 2', category: 'vfx', videoId: '1095006711' },
  // { id: 'v8', title: 'French Avenue - 3D Ad', subtitle: 'Photorealistic hard-surface modeling and advertising', category: '3d', videoId: '1111061216' },

  // New Local 3D Videos
  // { id: 'v9', title: 'Fragrance World', subtitle: 'Product Commercial', category: '3d', videoPath: '/3D/video/Fragrance World_Ad 12048x1080.mp4' },
  // { id: 'v10', title: 'Architecture Walkthrough', subtitle: 'Extended 3D Video', category: '3d', videoPath: '/3D/video/architecture video.mp4' },

  // 3D PDF Case Studies
  { id: 'p1', title: '3D Architectural Walkthrough', subtitle: 'Process overview — design stages, materials & rendering pipeline', category: '3d', pdfPath: '/3D/PDF/3D Architechtural Walkthrough - Overview.pdf' },
  { id: 'p2', title: '3D Game Assets Collection', subtitle: 'Portfolio of characters, props & environments built for real-time engines', category: '3d', pdfPath: '/3D/PDF/3D Game Assets Collection.pdf' },
  { id: 'p3', title: 'Car Assembly Line', subtitle: 'Industrial 3D visualisation — robotic workflow & factory simulation', category: '3d', pdfPath: '/3D/PDF/Case Study - Car Assembly Line.pdf' },
  { id: 'p4', title: 'Digital Twin', subtitle: 'Engineering case study — real-time spatial data & simulation mapping', category: '3d', pdfPath: '/3D/PDF/Case Study - Digital Twin.pdf' },
  { id: 'p5', title: 'Grocery Store', subtitle: 'Retail 3D visualisation — layout planning & product placement study', category: '3d', pdfPath: '/3D/PDF/Case Study - Grocery Store.pdf' },
  { id: 'p6', title: 'Liminal', subtitle: 'Architectural experience — transitional spaces & atmospheric lighting', category: '3d', pdfPath: '/3D/PDF/Case Study - Liminal.pdf' },
  { id: 'p7', title: 'Product Commercial & e-Commerce', subtitle: '3D advertising — hero shots, turntables & e-commerce-ready renders', category: '3d', pdfPath: '/3D/PDF/Product Commercial & e-Commerce.pdf' },

  // New VFX Image Projects
  { id: 1, title: '120 bahadur', subtitle: 'VFX Project', category: 'vfx', image: '/VFX/images/Artboard_20.png' },
  { id: 2, title: 'Dear', subtitle: 'VFX Project', category: 'vfx', image: '/VFX/images/Artboard_10.png' },
  { id: 3, title: 'Jailer', subtitle: 'VFX Project', category: 'vfx', image: '/VFX/images/Artboard_15.png' },
  { id: 4, title: 'Maanadu', subtitle: 'VFX Project', category: 'vfx', image: '/VFX/images/Artboard_17.png' },
  { id: 5, title: 'chakra', subtitle: 'VFX Project', category: 'vfx', image: '/VFX/images/Artboard_19.png' },
  // { id: 6, title: 'champion-2', subtitle: 'VFX Project', category: 'vfx', image: '/VFX/images/champion-2.jpg' },
  { id: 7, title: 'champion', subtitle: 'VFX Project', category: 'vfx', image: '/VFX/images/Artboard_3.png' },
  { id: 8, title: 'dhurandhar', subtitle: 'VFX Project', category: 'vfx', image: '/VFX/images/Artboard_2.png' },
  { id: 9, title: 'dominic', subtitle: 'VFX Project', category: 'vfx', image: '/VFX/images/Artboard_8.png' },
  { id: 10, title: 'elumalai', subtitle: 'VFX Project', category: 'vfx', image: '/VFX/images/Artboard_7.png' },
  { id: 11, title: 'hitler', subtitle: 'VFX Project', category: 'vfx', image: '/VFX/images/Artboard_11.png' },
  { id: 12, title: 'ireambuthirai', subtitle: 'VFX Project', category: 'vfx', image: '/VFX/images/Artboard_18.png' },
  { id: 13, title: 'Maargan', subtitle: 'VFX Breakdown', category: 'vfx', image: '/VFX/images/Artboard_5.png', linkedVideoId: '1128432925' },
  { id: 14, title: 'madras matinee', subtitle: 'VFX Project', category: 'vfx', image: '/VFX/images/Artboard_9.png' },
  { id: 15, title: 'og', subtitle: 'VFX Project', category: 'vfx', image: '/VFX/images/Artboard_4.png' },
  { id: 16, title: 'oh manapenne', subtitle: 'VFX Project', category: 'vfx', image: '/VFX/images/Artboard_16.png' },
  { id: 17, title: 'pechi', subtitle: 'VFX Project', category: 'vfx', image: '/VFX/images/Artboard_14.png' },
  { id: 18, title: 'Pichaikkaran 2', subtitle: 'VFX Breakdown', category: 'vfx', image: '/VFX/images/Artboard_13.png', linkedVideoId: '1095006711' },
  { id: 19, title: 'romeo', subtitle: 'VFX Project', category: 'vfx', image: '/VFX/images/Artboard_12.png' },
  { id: 20, title: 'Sakthithirumagan', subtitle: 'VFX Breakdown', category: 'vfx', image: '/VFX/images/Artboard_6.png', linkedVideoId: '1136032317' },
  { id: 21, title: 'dhurandhar Revenge', subtitle: 'VFX Project', category: 'vfx', image: '/VFX/images/Artboard_1.png' },
];

const featuredVideos = {
  vfx: { videoId: '1128432925', title: 'Maargan VFX Breakdown', subtitle: 'Precision rotoscoping, paint, and high-end visual integration', thumbnail: 'https://vumbnail.com/1128432925.jpg' },
  '3d': { videoId: '1125411288', title: '3D Architectural Walkthrough', subtitle: 'Luxury apartment project designed to redefine modern urban living', thumbnail: 'https://vumbnail.com/1125411288.jpg' },
  mg: { videoId: '1094930120', title: 'Motion Graphics Showreel', subtitle: 'A cinematic collection of our best motion design work', thumbnail: 'https://vumbnail.com/1094930120.jpg' },
};

const Portfolio = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const filter = queryParams.get('filter') || 'vfx';

  const [activeVideo, setActiveVideo] = useState(null);
  const [activeImage, setActiveImage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [activePdf, setActivePdf] = useState(null);
  const [pdfModalOpen, setPdfModalOpen] = useState(false);

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
    if (modalOpen || pdfModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [modalOpen, pdfModalOpen]);

  const featured = featuredVideos[filter];
  const filteredProjects = (filter === 'all' ? projects : projects.filter(p => p.category === filter))
    .filter(p => !featured?.videoId || p.videoId !== featured.videoId);

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

  const openPdfModal = (pdfPath) => {
    setActivePdf(pdfPath);
    setPdfModalOpen(true);
  };

  const closePdfModal = () => {
    setPdfModalOpen(false);
    setTimeout(() => setActivePdf(null), 300);
  };

  return (
    <div className="page-transition">
      {/* Hero Section */}
      <section className="pt-20 pb-16 sm:pt-32 sm:pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up uppercase tracking-tighter font-space">
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
            {['vfx', '3d', 'mg'].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-8 py-3 rounded-none font-black uppercase tracking-widest transition-all skew-x-[-12deg] ${filter === f ? 'bg-[#4031D4] text-white shadow-lg shadow-[#4031D4]/30' : 'bg-white/5 hover:bg-white/10 text-gray-400 border border-white/10'}`}
              >
                <span className="block skew-x-[12deg] font-black">{f === 'mg' ? 'Motion Graphics' : f}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Video Section */}
      {featured && featured.videoId && (
        <section className="pb-10 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <div
              onClick={() => openVideoModal(featured.videoId)}
              className="group relative w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden border border-white/10 hover:border-[#4031D4]/60 transition-all duration-500 shadow-2xl shadow-black/60 bg-black cursor-pointer"
            >
              {/* Vimeo Thumbnail */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${featured.thumbnail || `https://vumbnail.com/${featured.videoId}.jpg`})` }}
              />

              {/* Vignette / gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />

              {/* Centred Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-white/15 backdrop-blur-md border border-white/30 shadow-2xl transform group-hover:scale-110 group-hover:bg-[#4031D4]/80 transition-all duration-400">
                  <svg className="w-9 h-9 ml-1 text-white drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  {/* Pulse ring */}
                  <span className="absolute inset-0 rounded-full ring-2 ring-white/20 animate-ping opacity-40 group-hover:opacity-0 transition-opacity" />
                </div>
              </div>


            </div>
          </div>
        </section>
      )}

      {/* Portfolio Grid */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 min-h-[400px]">
            {filteredProjects.map((project, index) => {
              const isPortrait = project.category === 'vfx' && !!project.image && !project.videoId && !project.videoPath;
              return (
                <div key={project.id || index} className="scroll-animate break-inside-avoid mb-8" style={{ animationDelay: `${(index % 6) * 100}ms` }}>
                  <div
                    onClick={() => project.pdfPath ? openPdfModal(project.pdfPath) : project.linkedVideoId ? openVideoModal(project.linkedVideoId) : project.videoPath ? openVideoModal(project.videoPath) : project.videoId ? openVideoModal(project.videoId) : openImageModal(project.image)}
                    className={`group relative overflow-hidden rounded-xl bg-white/5 ${isPortrait ? 'aspect-[4/5]' : 'aspect-video'} cursor-pointer border border-white/5 hover:border-[#4031D4]/50 transition-all duration-500`}
                  >
                    {/* Thumbnail */}
                    {project.pdfPath ? (
                      <div className="absolute inset-0 bg-[#1a1a1a] flex items-center justify-center transition-transform duration-1000 group-hover:scale-110">
                        <svg className="w-24 h-24 text-[#4031D4]/40" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" /></svg>
                      </div>
                    ) : project.videoPath ? (
                      <video
                        preload="metadata"
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 bg-[#1a1a1a]"
                      >
                        <source src={`${project.videoPath}#t=0.5`} type="video/mp4" />
                      </video>
                    ) : (
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                        style={{ backgroundImage: `url(${project.image || `https://vumbnail.com/${project.videoId}.jpg`})` }}
                      ></div>
                    )}

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-all duration-500"></div>

                    {/* Play/View Icon */}
                    <div className="absolute inset-0 flex items-center justify-center translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
                      <div className="w-16 h-16 bg-[#4031D4] rounded-full flex items-center justify-center text-white shadow-2xl shadow-[#4031D4]/50 transform hover:scale-110 transition-transform">
                        {project.pdfPath ? (
                          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                        ) : project.linkedVideoId || project.videoId || project.videoPath ? (
                          <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                        ) : (
                          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
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
              );
            })}
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-7xl font-black mb-8 italic uppercase tracking-tighter font-space">
            Ready to create <br /> <span className="text-[#4031D4]">Something Great?</span>
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
          <div className={`relative w-full max-w-6xl ${activeVideo ? 'aspect-video bg-black shadow-2xl border border-white/10' : 'h-[80vh] md:h-[90vh] bg-transparent'} rounded-xl overflow-hidden animate-scale-in`}>
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
                activeVideo.endsWith('.mp4') ? (
                  <video
                    controls
                    autoPlay
                    className="w-full h-full object-contain bg-black"
                  >
                    <source src={activeVideo} type="video/mp4" />
                  </video>
                ) : (
                  <iframe
                    src={`https://player.vimeo.com/video/${activeVideo}?autoplay=1&title=0&byline=0&portrait=0`}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen>
                  </iframe>
                )
              ) : (
                <img src={activeImage} alt="Portfolio Detail" className="max-w-full max-h-full object-contain" />
              )}
            </div>
          </div>
        </div>
      )}

      {/* PDF Viewer Modal */}
      {pdfModalOpen && activePdf && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center animate-fade-in">
          <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" onClick={closePdfModal} />
          <div className="relative w-full max-w-5xl h-[90vh] mx-4 flex flex-col rounded-2xl overflow-hidden border border-white/10 shadow-2xl animate-scale-in">
            {/* Modal header */}
            <div className="flex items-center justify-between px-6 py-4 bg-[#111] border-b border-white/10 flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#4031D4]/20 flex items-center justify-center">
                  <svg className="w-4 h-4 text-[#4031D4]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" /></svg>
                </div>
                <span className="text-sm font-semibold text-white/70 uppercase tracking-widest">
                  {activePdf.split('/').pop().replace('.pdf', '')}
                </span>
              </div>
              <button
                onClick={closePdfModal}
                className="p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            {/* iframe PDF viewer — #toolbar=0 hides Chrome's download button */}
            <div className="relative flex-1 bg-[#1a1a1a] overflow-hidden">
              <iframe
                key={activePdf}
                src={`${activePdf}#toolbar=0&navpanes=0&view=FitH`}
                className="w-full h-full border-0"
                title="PDF Viewer"
                onContextMenu={(e) => e.preventDefault()}
              />
              {/* Transparent top-strip overlay to block the browser's download/print bar (Chromium) */}
              <div className="absolute top-0 left-0 right-0 h-10 z-10 select-none" style={{ pointerEvents: 'all' }} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;