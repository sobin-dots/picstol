import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const jobDetails = {
  'prep-artist': {
    title: 'Prep Artist (Mid Level)',
    location: 'Remote / On-site',
    type: 'Full-Time',
    about: 'We are seeking a skilled Prep Artist to join our VFX team. This role focuses on ensuring footage is properly prepared for VFX production pipeline. The ideal candidate will have a strong eye for detail, technical understanding of various footage formats, and ability to solve complex preparation challenges while maintaining high quality standards.',
    responsibilities: [
      'Perform plate cleanup, wire/rig removal, and marker removal.',
      'Execute high-quality digital paint work and patch reconstruction.',
      'Create clean plates for complex shots.',
      'Handle camera tracking and match moving.',
      'Stabilize footage when required.',
      'Manage lens distortion analysis and correction.',
      'Perform color space conversion and pipeline preparation.',
      'Create accurate camera data from on-set information.',
      'Handle basic compositing tasks related to prep work.',
      'Maintain detailed documentation of work performed.',
      'Quality check deliverables before passing to next department.'
    ],
    requirements: [
      '2-4 years of professional prep experience in film/TV.',
      'Strong understanding of VFX pipeline workflows.',
      'Excellent eye for detail and consistency.',
      'Experience with tracking difficult shots.',
      'Knowledge of color pipelines and ACES workflow.',
      'Understanding of lens distortion and camera properties.',
      'Ability to handle multiple shots simultaneously.',
      'Strong problem-solving skills.'
    ],
    technicalSkills: [
      'Nuke (required).',
      '3D Equalizer or PFTrack (required).',
      'Mocha Pro (required).',
      'Syntheyes (plus).',
      'Adobe Photoshop (required).',
      'Understanding of Python scripting (plus).',
      'Familiarity with Linux operating system.',
      'Experience with shot management systems.'
    ],
    coreCompetencies: [
      'Advanced digital paint techniques.',
      'Strong tracking and match-moving skills.',
      'Understanding of photography and cinematography.',
      'Knowledge of various footage formats and codecs.',
      'Experience with stereo footage (plus).',
      'Ability to reconstruct missing areas in plates.',
      'Understanding of camera and lens properties.',
      'Knowledge of grain management and restoration.'
    ],
    offers: [
      'Work on high-profile film and TV projects.',
      'State-of-the-art hardware and software.',
      'Professional development opportunities.',
      'Regular training sessions.',
      'Competitive salary and benefits package.',
      'Collaborative work environment.'
    ],
    dailyTasks: [
      'Plate cleanup and preparation.',
      'Camera solving and tracking.',
      'Lens grid analysis.',
      'Clean plate generation.',
      'Marker removal and cleanup.',
      'Frame reconstruction.',
      'Pipeline integration.',
      'Quality control checks.',
      'Technical documentation.'
    ],
    howToApply: "Please send your resume and prep breakdown reel to careers@picstol.com. Your reel should demonstrate: Before/after examples of cleanup work, Complex tracking solutions, Lens distortion handling, Clean plate creation, Digital paint work, Challenging reconstruction examples.",
    requiredInApp: [
      'Resume detailing relevant experience.',
      'Breakdown reel showing technical process.',
      'Examples of problem-solving approaches.',
      'Documentation samples (if available).',
      'References from previous projects.'
    ]
  },
  'roto-artist': {
    title: 'Roto Artist',
    location: 'Nagercoil',
    type: 'Full-Time',
    about: 'Precision rotoscoping for feature films and commercials. Detail-oriented artists with strong Mocha or Silhouette skills welcome.',
    responsibilities: [
      'Manual rotoscoping for complex characters and objects.',
      'Motion tracking and spline management.',
      'Maintaining edge quality and motion blur consistency.',
      'Working closely with compositors for seamless integration.'
    ],
    requirements: [
      '1+ years of experience in rotoscoping.',
      'Proficiency in Silhouette and Mocha.',
      'Strong understanding of human anatomy and motion.',
      'Extreme attention to detail.'
    ],
    technicalSkills: ['Silhouette', 'Mocha Pro', 'Nuke', 'After Effects'],
    offers: [
      'Training by industry veterans.',
      'Exposure to international film projects.',
      'Performance-based bonuses.'
    ],
    howToApply: "Send your resume and reel to careers@picstol.com"
  }
};

const JobDetail = () => {
  const { id } = useParams();
  const job = jobDetails[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!job) return <div className="py-20 text-center text-3xl">Job not found</div>;

  return (
    <div className="page-transition pt-32 pb-24 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/careers" className="inline-flex items-center text-gray-500 hover:text-white mb-12 transition-all uppercase tracking-[0.2em] text-[10px] font-bold group">
          <svg className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
          Back to Careers
        </Link>

        <div className="max-w-6xl">
          <header className="mb-20">
            <div className="flex flex-wrap gap-3 mb-8">
               <span className="px-5 py-2 bg-[#4031D4] text-white text-[10px] font-black rounded-full uppercase tracking-widest shadow-lg shadow-[#4031D4]/20">{job.type}</span>
               <span className="px-5 py-2 bg-white/5 text-gray-400 text-[10px] font-black rounded-full uppercase tracking-widest border border-white/10">{job.location}</span>
            </div>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-4 text-white font-space">
              {job.title}
            </h1>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            <div className="lg:col-span-12 xl:col-span-8 space-y-24">
              {/* About */}
              <section className="scroll-animate">
                <h2 className="text-xl font-black uppercase tracking-widest mb-10 text-white flex items-center gap-4">
                  <span className="w-8 h-1 bg-[#4031D4]"></span>
                  About the Role
                </h2>
                <div className="prose prose-invert max-w-none">
                  <p className="text-gray-400 text-xl leading-relaxed font-medium italic">
                    {job.about}
                  </p>
                </div>
              </section>

              {/* Grid for sections */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24">
                {/* Responsibilities */}
                <section className="scroll-animate">
                  <h2 className="text-xl font-black uppercase tracking-widest mb-10 text-white flex items-center gap-4">
                    <span className="w-8 h-1 bg-[#4031D4]"></span>
                    Responsibilities
                  </h2>
                  <ul className="space-y-4">
                    {job.responsibilities.map((item, i) => (
                      <li key={i} className="flex items-start gap-4 text-gray-400 group">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4031D4] mt-2 group-hover:scale-150 transition-transform"></span>
                        <span className="text-sm font-medium leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* Requirements */}
                <section className="scroll-animate" style={{ animationDelay: '100ms' }}>
                  <h2 className="text-xl font-black uppercase tracking-widest mb-10 text-white flex items-center gap-4">
                    <span className="w-8 h-1 bg-[#4031D4]"></span>
                    Requirements
                  </h2>
                  <ul className="space-y-4">
                    {job.requirements.map((item, i) => (
                      <li key={i} className="flex items-start gap-4 text-gray-400 group">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4031D4] mt-2 group-hover:scale-150 transition-transform"></span>
                        <span className="text-sm font-medium leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* Technical Skills */}
                {job.technicalSkills && (
                  <section className="scroll-animate" style={{ animationDelay: '200ms' }}>
                    <h2 className="text-xl font-black uppercase tracking-widest mb-10 text-white flex items-center gap-4">
                      <span className="w-8 h-1 bg-[#4031D4]"></span>
                      Technical Skills
                    </h2>
                    <div className="flex flex-wrap gap-3">
                      {job.technicalSkills.map((item, i) => (
                        <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-sm text-[10px] font-black uppercase tracking-widest text-[#4031D4] hover:bg-white/10 transition-colors">
                          {item}
                        </span>
                      ))}
                    </div>
                  </section>
                )}

                {/* Daily Tasks */}
                {job.dailyTasks && (
                  <section className="scroll-animate" style={{ animationDelay: '300ms' }}>
                    <h2 className="text-xl font-black uppercase tracking-widest mb-10 text-white flex items-center gap-4">
                      <span className="w-8 h-1 bg-[#4031D4]"></span>
                      Daily Tasks
                    </h2>
                    <ul className="space-y-4">
                      {job.dailyTasks.map((item, i) => (
                        <li key={i} className="flex items-start gap-4 text-gray-400 group">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#4031D4] mt-2 group-hover:scale-150 transition-transform"></span>
                          <span className="text-sm font-medium leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}
              </div>
            </div>

            {/* Sidebar Sticky Card */}
            <div className="lg:col-span-12 xl:col-span-4 lg:mt-0">
              <div className="sticky top-32 space-y-8">
                {/* Apply Card */}
                <div className="bg-gradient-to-br from-[#4031D4] to-indigo-900 p-12 rounded-[2.5rem] shadow-3xl shadow-[#4031D4]/20 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-48 h-48 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
                  
                  <h3 className="text-4xl font-black uppercase tracking-tighter mb-8 text-white relative z-10">How to Apply</h3>
                  <div className="text-white/90 mb-10 leading-relaxed font-medium text-lg relative z-10">
                    {job.howToApply}
                  </div>
                  
                  {job.requiredInApp && (
                    <div className="mb-10 relative z-10">
                      <p className="font-black uppercase tracking-[0.2em] text-[10px] mb-6 text-white/50">Required Documents</p>
                      <ul className="space-y-4 text-sm text-white/90">
                        {job.requiredInApp.map((item, i) => (
                          <li key={i} className="flex items-center gap-4 border-b border-white/10 pb-4 last:border-0">
                            <span className="w-2 h-2 bg-white rounded-full"></span>
                            <span className="font-bold tracking-tight">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <a href="mailto:careers@picstol.com" className="block w-full py-6 bg-white text-black text-center font-black uppercase tracking-[0.2em] text-xs transition-all hover:bg-black hover:text-white transform hover:-translate-y-1 shadow-xl relative z-10 skew-x-[-12deg]">
                    <span className="block skew-x-[12deg]">Submit Application</span>
                  </a>
                </div>

                {/* Perks Card */}
                <div className="p-10 border border-white/5 rounded-[2rem] bg-white/[0.02] backdrop-blur-sm">
                  <h4 className="text-lg font-black mb-8 uppercase tracking-widest text-[#4031D4]">What We Offer</h4>
                  <ul className="space-y-6">
                    {job.offers.map((item, i) => (
                      <li key={i} className="flex items-start gap-4 group">
                        <div className="w-8 h-8 rounded-lg bg-[#4031D4]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#4031D4] transition-colors">
                          <svg className="w-4 h-4 text-[#4031D4] group-hover:text-white" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                        </div>
                        <span className="text-sm text-gray-400 font-bold uppercase tracking-tight group-hover:text-white transition-colors">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
