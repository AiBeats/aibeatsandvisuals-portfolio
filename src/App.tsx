/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useSpring } from 'motion/react';
import { 
  Code2, 
  Music, 
  Camera, 
  Terminal, 
  Youtube, 
  Mail, 
  ExternalLink, 
  Github, 
  Twitter, 
  Instagram,
  ChevronRight,
  Cpu
} from 'lucide-react';
import { useState, useEffect } from 'react';

// --- Data ---

const YOUTUBE_VIDEOS = [
  { id: "RaiAYly03Ec", title: "Solo Hearts: Dancing Free", views: "69K", tag: "DANCE POP" },
  { id: "MXTvc1xqwgc", title: "It's Not Okay", views: "57K", tag: "R&B" },
  { id: "aLPugJ4Ollg", title: "Speak Up", views: "28K", tag: "MUSIC VIDEO" },
  { id: "Xg9YH71MmEY", title: "Love Will Be Right Here", views: "24K", tag: "MUSIC VIDEO" },
  { id: "a0Pdx_loNQw", title: "The Kind of Love", views: "10K", tag: "R&B" },
  { id: "REthCiZDeAw", title: "Just Let Me In", views: "9.1K", tag: "MUSIC VIDEO" },
  { id: "U1S4sGksOjo", title: "Forever Missing You", views: "8.5K", tag: "MUSIC VIDEO" },
  { id: "gIr16VbZ6Ro", title: "Break The Loop", views: "6.6K", tag: "EDM" },
  { id: "nBJf-0y165s", title: "Taking a Chance", views: "6.2K", tag: "MUSIC VIDEO" },
  { id: "i3f-H2m3yzg", title: "Unchained Love pt. 2", views: "5.5K", tag: "EDM" },
];

// --- Components ---

const GrainOverlay = () => (
  <div className="grain-overlay" aria-hidden="true" />
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Work', href: '#work' },
    { name: 'Projects', href: '#projects' },
    { name: 'Lab', href: '#lab' },
    { name: 'Media', href: '#media' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-md border-b border-border py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-xl font-bold tracking-tighter text-accent uppercase">
          ABV<span className="text-text-primary">.</span>
        </a>
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-text-muted hover:text-accent transition-colors tracking-widest uppercase"
            >
              {link.name}
            </a>
          ))}
        </div>
        <a href="#contact" className="md:hidden text-accent">
          <Mail size={20} />
        </a>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 opacity-50" 
          style={{ 
            background: 'radial-gradient(circle at 50% 50%, rgba(0, 229, 255, 0.1) 0%, transparent 70%)' 
          }} 
        />
      </div>
      
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-4 glitch-effect" data-text="ANTONIO MONREAL">
            ANTONIO MONREAL
          </h1>
          <p className="text-lg md:text-2xl text-text-muted font-light tracking-[0.2em] uppercase mb-8">
            AI Beats and Visuals <span className="text-accent mx-2">|</span> Cultural Branding
          </p>
          <motion.a
            href="#work"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-accent text-background px-8 py-4 rounded-none font-bold uppercase tracking-widest hover:bg-white transition-colors border-glow"
          >
            Explore My Work <ChevronRight size={20} />
          </motion.a>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
        <div className="w-[1px] h-12 bg-accent" />
      </div>
    </section>
  );
};

const About = () => {
  const identities = [
    {
      title: "The Developer",
      icon: <Code2 className="text-accent" size={32} />,
      description: "Building sovereign stacks and AI-driven architectures. Focused on local LLM hosting and private cloud solutions.",
      tags: ["React", "TypeScript", "Python", "Docker"]
    },
    {
      title: "The Sound Engineer",
      icon: <Music className="text-accent" size={32} />,
      description: "Crafting sonic landscapes where analog warmth meets digital precision. Specialized in AI-assisted music production.",
      tags: ["Ableton", "Sound Design", "Mixing", "AI Audio"]
    },
    {
      title: "The Digital Creator",
      icon: <Camera className="text-accent" size={32} />,
      description: "Visual storytelling through a retro-futuristic lens. Merging generative art with tactile minimalism.",
      tags: ["Generative Art", "Video Editing", "UI/UX", "Branding"]
    }
  ];

  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-3xl font-bold tracking-tighter uppercase mb-2">Identity</h2>
        <div className="w-20 h-[2px] bg-accent" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {identities.map((id, index) => (
          <motion.div
            key={id.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="p-8 bg-card border border-border hover:border-accent/50 transition-all group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              {id.icon}
            </div>
            <div className="mb-6">{id.icon}</div>
            <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">{id.title}</h3>
            <p className="text-text-muted mb-6 leading-relaxed">
              {id.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {id.tags.map(tag => (
                <span key={tag} className="text-[10px] uppercase tracking-widest px-2 py-1 bg-surface border border-border text-text-muted">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Portfolio = () => {
  const projects = YOUTUBE_VIDEOS.slice(0, 4);

  return (
    <section id="work" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-3xl font-bold tracking-tighter uppercase mb-2">Selected Work</h2>
        <div className="w-20 h-[2px] bg-accent" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-card border border-border overflow-hidden group hover:border-accent/30 transition-all"
          >
            <div className="aspect-video bg-surface relative overflow-hidden">
              <iframe
                className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                src={`https://www.youtube.com/embed/${project.id}`}
                title={project.title}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold uppercase tracking-tight">{project.title}</h3>
                <span className="text-[10px] uppercase tracking-widest px-2 py-1 bg-accent/10 text-accent border border-accent/20">
                  {project.tag}
                </span>
              </div>
              <p className="text-text-muted text-sm mb-6">
                Views: {project.views}
              </p>
              <a 
                href={`https://www.youtube.com/watch?v=${project.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-[0.2em] font-bold text-accent inline-flex items-center gap-2 group-hover:gap-4 transition-all"
              >
                Watch on YouTube <ChevronRight size={14} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Projects = () => {
  const githubProjects = [
    {
      name: "sovereign-ai-gateway",
      description: "A secure proxy for local LLM inference with built-in rate limiting and authentication.",
      tags: ["Python", "FastAPI", "Docker", "AI"],
      repoUrl: "https://github.com/AiBeats",
      demoUrl: "#"
    },
    {
      name: "tactile-ui-engine",
      description: "A high-performance React component library focused on analog textures and retro-futurism.",
      tags: ["React", "TypeScript", "Tailwind", "Motion"],
      repoUrl: "https://github.com/AiBeats",
      demoUrl: "#"
    },
    {
      name: "neural-beat-sync",
      description: "Real-time audio analysis tool for synchronizing generative visuals with complex rhythmic patterns.",
      tags: ["Node.js", "WebAudio", "Three.js", "AI"],
      repoUrl: "https://github.com/AiBeats",
      demoUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-3xl font-bold tracking-tighter uppercase mb-2">Open Projects</h2>
        <div className="w-20 h-[2px] bg-accent mb-6" />
        <p className="text-text-muted max-w-2xl">
          Public-facing builds, experiments, and tools from my GitHub profile. Exploring the intersection of code, sound, and digital sovereignty.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {githubProjects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="p-8 bg-card border border-border hover:border-accent/30 transition-all flex flex-col h-full group"
          >
            <div className="flex justify-between items-start mb-6">
              <Github className="text-text-muted group-hover:text-accent transition-colors" size={24} />
              <div className="flex gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[9px] uppercase tracking-widest px-2 py-0.5 bg-surface border border-border text-text-muted">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <h3 className="text-lg font-bold mb-3 uppercase tracking-tight group-hover:text-accent transition-colors">
              {project.name}
            </h3>
            <p className="text-text-muted text-sm mb-8 flex-grow leading-relaxed">
              {project.description}
            </p>
            <div className="flex gap-4 pt-4 border-t border-border">
              <a 
                href={project.repoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[10px] uppercase tracking-widest font-bold text-accent flex items-center gap-2 hover:underline"
              >
                View Repo <ExternalLink size={12} />
              </a>
              {project.demoUrl !== "#" && (
                <a 
                  href={project.demoUrl} 
                  className="text-[10px] uppercase tracking-widest font-bold text-text-muted flex items-center gap-2 hover:text-white transition-colors"
                >
                  Live Demo <ChevronRight size={12} />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Lab = () => {
  return (
    <section id="lab" className="py-24 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter uppercase mb-2">The Lab</h2>
          <div className="w-20 h-[2px] bg-accent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-4xl font-bold tracking-tighter uppercase">ABV Sovereign Stack</h3>
            <p className="text-text-muted leading-relaxed">
              I build in a privacy-first, self-hosted environment designed for creative control, AI experimentation, and secure deployment. My workflows run on local hardware with remote access abstracted through secure tunneling, allowing me to develop and test systems without relying entirely on third-party cloud platforms.
            </p>
            <div className="space-y-4">
              <p className="text-sm font-bold uppercase tracking-widest text-accent">Capabilities include:</p>
              <ul className="space-y-3">
                {[
                  "Local LLM hosting for private inference and rapid iteration",
                  "GPU-assisted generative workflows for music, visuals, and media tooling",
                  "Secure tunnel-based access for remote development and demo delivery",
                  "Self-hosted asset and project management pipelines"
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm tracking-wide">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 flex-shrink-0" />
                    <span className="text-text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-4 border-t border-border/50">
              <p className="text-[10px] text-accent/60 font-mono italic uppercase tracking-widest">
                Note: Public demos showcase the workflow and results, not the private infrastructure behind them.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-black p-1 border border-border rounded-md overflow-hidden shadow-2xl"
          >
            <div className="bg-border/30 px-4 py-2 flex items-center gap-2 border-b border-border">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
              <span className="text-[10px] font-mono text-text-muted ml-4">sovereign-lab — 80x24</span>
            </div>
            <div className="p-6 font-mono text-xs md:text-sm space-y-2 text-accent/80">
              <p><span className="text-white">root@sovereign-lab:</span><span className="text-accent">~#</span> system-status</p>
              <p className="text-text-muted">[OK] Local inference environment — Ready</p>
              <p className="text-text-muted">[OK] GPU acceleration pipeline — Available</p>
              <p className="text-text-muted">[OK] Secure remote gateway — Connected</p>
              <p className="text-text-muted">[OK] Media workflow services — Online</p>
              <p className="text-white mt-4 tracking-widest animate-pulse">_</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Media = () => {
  const featuredVideo = YOUTUBE_VIDEOS[0];

  return (
    <section id="media" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-3xl font-bold tracking-tighter uppercase mb-2">Media Channel</h2>
        <div className="w-20 h-[2px] bg-accent" />
      </div>

      <div className="space-y-12">
        {/* Featured Video */}
        <div className="aspect-video bg-card border border-border overflow-hidden">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${featuredVideo.id}`}
            title="Featured Video"
            loading="lazy"
            allowFullScreen
          />
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {YOUTUBE_VIDEOS.map((video) => (
            <a 
              key={video.id} 
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 group bg-card p-4 border border-border hover:border-accent/30 transition-all"
            >
              <div className="w-32 md:w-48 aspect-video bg-surface border border-border overflow-hidden flex-shrink-0">
                <img 
                  src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`} 
                  alt={video.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h4 className="text-sm md:text-base font-bold uppercase tracking-tight mb-2 group-hover:text-accent transition-colors line-clamp-2">
                  {video.title}
                </h4>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] bg-accent/10 text-accent px-2 py-0.5 border border-accent/20 uppercase tracking-widest font-medium">
                    {video.views} Views
                  </span>
                  <span className="text-[10px] text-text-muted uppercase tracking-widest">
                    {video.tag}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center pt-8">
          <a 
            href="https://www.youtube.com/@AIBeatsAndVisuals" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-3 text-sm uppercase tracking-[0.3em] font-bold text-accent hover:text-white transition-colors group"
          >
            Visit Channel <Youtube size={20} className="group-hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-surface">
      <div className="max-w-3xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter uppercase mb-2">Get In Touch</h2>
          <div className="w-20 h-[2px] bg-accent mx-auto" />
        </div>

        <div className="mb-12">
          <p className="text-text-muted mb-4">For collaborations, bookings, or technical inquiries:</p>
          <a href="mailto:aibeatsandvisuals@gmail.com" className="text-2xl md:text-3xl font-bold text-accent hover:text-white transition-colors tracking-tight">
            aibeatsandvisuals@gmail.com
          </a>
        </div>

        <form 
          className="space-y-4 text-left"
          action="mailto:aibeatsandvisuals@gmail.com"
          method="post"
          encType="text/plain"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input 
              type="text" 
              placeholder="NAME" 
              className="w-full bg-background border border-border px-4 py-3 text-sm focus:border-accent outline-none transition-colors uppercase tracking-widest"
            />
            <input 
              type="email" 
              placeholder="EMAIL" 
              className="w-full bg-background border border-border px-4 py-3 text-sm focus:border-accent outline-none transition-colors uppercase tracking-widest"
            />
          </div>
          <input 
            type="text" 
            placeholder="SUBJECT" 
            className="w-full bg-background border border-border px-4 py-3 text-sm focus:border-accent outline-none transition-colors uppercase tracking-widest"
          />
          <textarea 
            rows={5} 
            placeholder="MESSAGE" 
            className="w-full bg-background border border-border px-4 py-3 text-sm focus:border-accent outline-none transition-colors uppercase tracking-widest resize-none"
          />
          <button className="w-full bg-accent text-background font-bold py-4 uppercase tracking-[0.3em] hover:bg-white transition-colors border-glow">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <p className="text-xs uppercase tracking-widest text-text-muted mb-2">
            © {new Date().getFullYear()} Cultural Branding
          </p>
          <p className="text-sm font-bold tracking-tighter text-accent uppercase">
            aibeatsandvisual.com
          </p>
        </div>

        <div className="flex gap-6">
          <a href="#" className="text-text-muted hover:text-accent transition-colors"><Twitter size={20} /></a>
          <a href="#" className="text-text-muted hover:text-accent transition-colors"><Instagram size={20} /></a>
          <a href="#" className="text-text-muted hover:text-accent transition-colors"><Github size={20} /></a>
          <a href="#" className="text-text-muted hover:text-accent transition-colors"><Youtube size={20} /></a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="relative bg-background selection:bg-accent selection:text-background">
      <GrainOverlay />
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-accent z-50 origin-left" 
        style={{ scaleX }} 
      />
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Projects />
      <Lab />
      <Media />
      <Contact />
      <Footer />
    </main>
  );
}
