import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronRight, Paintbrush, Grid, Droplets, Layers, ShieldCheck, CheckCircle2, User, Briefcase, Upload, Eye, EyeOff, Instagram } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';

// --- Components ---

const Logo = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 100 100" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    {/* Buildings */}
    <path d="M30 75V55H40V75" />
    <path d="M40 75V25H55V75" />
    <path d="M55 75V40H70V75" />
    <path d="M70 75V60H80V75" />
    {/* Roof */}
    <path d="M25 80L50 55L75 80" />
    {/* Window */}
    <rect x="47" y="72" width="2.5" height="2.5" fill="currentColor" stroke="none" />
    <rect x="50.5" y="72" width="2.5" height="2.5" fill="currentColor" stroke="none" />
    <rect x="47" y="75.5" width="2.5" height="2.5" fill="currentColor" stroke="none" />
    <rect x="50.5" y="75.5" width="2.5" height="2.5" fill="currentColor" stroke="none" />
  </svg>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Logo className={`w-10 h-10 transition-colors duration-300 ${scrolled ? 'text-bcg-gold' : 'text-bcg-gold'}`} />
            <span className={`text-xl md:text-2xl font-bold font-display tracking-tighter transition-colors duration-300 ${scrolled ? 'text-bcg-navy' : 'text-white'}`}>
              BCG <span className="text-bcg-gold">Constructions</span>
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${scrolled ? 'text-bcg-charcoal hover:text-bcg-gold' : 'text-white/90 hover:text-white hover:scale-105'}`}
                >
                  {link.name}
                </a>
              ))}
              <a href="#contact" className="btn-primary text-sm">
                Request a Quote
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md transition-colors ${scrolled ? 'text-bcg-navy' : 'text-white'} hover:text-bcg-gold focus:outline-none`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-200"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-bcg-charcoal hover:bg-slate-50 block px-3 py-2 rounded-md text-base font-medium"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center btn-primary mt-4"
              >
                Request a Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&q=80&w=2000"
          alt="Modern interior house painting"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        {/* Enhanced gradient overlay for maximum text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-bcg-navy/90 via-bcg-navy/60 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6 text-shadow-md">
            Professional <span className="text-bcg-gold">Painting</span> & <span className="text-bcg-gold">Finishing</span> Services
          </h1>
          <p className="text-xl md:text-2xl text-bcg-accent mb-10 font-light text-shadow-sm">
            High-quality workmanship for residential and commercial projects. Reliability you can build on.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="btn-primary bg-bcg-gold hover:bg-white hover:text-bcg-navy border-none text-center">
              Request a Free Quote
            </a>
            <a href="#services" className="btn-secondary border-white text-white hover:bg-white hover:text-bcg-navy text-center">
              Our Services
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
        <ChevronRight size={32} className="rotate-90" />
      </div>
    </section>
  );
};

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  benefits: string[];
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description, benefits, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
    whileHover={{ y: -10 }}
    className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300"
  >
    <div className="w-14 h-14 bg-bcg-navy/5 rounded-xl flex items-center justify-center text-bcg-navy mb-6">
      <Icon size={28} />
    </div>
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-slate-600 mb-6 leading-relaxed">{description}</p>
    <ul className="space-y-2">
      {benefits.map((benefit, idx) => (
        <li key={idx} className="flex items-center text-sm text-slate-500">
          <CheckCircle2 size={16} className="text-bcg-gold mr-2 shrink-0" />
          {benefit}
        </li>
      ))}
    </ul>
  </motion.div>
);

const Services = () => {
  const services = [
    {
      icon: Paintbrush,
      title: "Full Interior & Exterior Painting",
      description: "Premium painting solutions for all surfaces, ensuring a flawless and durable finish for your property.",
      benefits: ["Residential & Commercial", "Premium Paint Brands", "Surface Preparation"]
    },
    {
      icon: Grid,
      title: "Tiling & Silicone",
      description: "Expert tiling and professional silicone application for kitchens, bathrooms, and commercial spaces.",
      benefits: ["Precise Layouts", "Wet Area Specialist", "Anti-Mould Silicone"]
    },
    {
      icon: Droplets,
      title: "Waterproofing & Screeding",
      description: "Certified waterproofing systems and perfect floor screeding to protect and level your surfaces.",
      benefits: ["Leak Prevention", "Certified Systems", "Level Subfloors"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-bcg-accent/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="heading-badge">Our Expertise</span>
          <h3 className="text-5xl md:text-7xl font-extrabold text-bcg-navy heading-visual block mt-4">Commercial & Residential Services</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <ServiceCard 
              key={idx} 
              index={idx}
              icon={service.icon}
              title={service.title}
              description={service.description}
              benefits={service.benefits}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&q=80&w=1000"
                alt="Professional painting equipment"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-bcg-gold/10 rounded-full -z-0 blur-3xl"></div>
            <div className="absolute -top-8 -left-8 w-64 h-64 bg-bcg-navy/10 rounded-full -z-0 blur-3xl"></div>
          </div>

          <div className="lg:w-1/2">
            <span className="heading-badge">About BCG Constructions</span>
            <h3 className="text-4xl md:text-6xl font-extrabold text-bcg-navy mb-8 leading-tight">
              Committed to Quality and <span className="text-bcg-gold heading-highlight">Customer Satisfaction</span>
            </h3>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              BCG Constructions is a leading provider of high-end finishing services in the residential and commercial sectors. We pride ourselves on our attention to detail, reliability, and the superior quality of our workmanship.
            </p>
            
            <div className="space-y-6 mb-10">
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-bcg-navy text-white rounded-lg flex items-center justify-center">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Reliable Service</h4>
                  <p className="text-slate-500">We understand the importance of deadlines and clear communication throughout every project.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-bcg-navy text-white rounded-lg flex items-center justify-center">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Quality Guaranteed</h4>
                  <p className="text-slate-500">Our team uses only the best materials and techniques to ensure a premium finish that lasts.</p>
                </div>
              </div>
            </div>

            <a href="#contact" className="btn-primary inline-block">
              Learn More About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const ADMIN_PASSWORD = 'bcg2024';

const ProjectModal = ({ project, onClose }: { project: any; onClose: () => void }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [highResLoaded, setHighResLoaded] = useState(false);
  
  const { scrollYProgress } = useScroll({
    container: modalRef,
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-bcg-charcoal/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="bg-white text-bcg-charcoal rounded-3xl overflow-y-auto max-w-3xl w-full max-h-[90vh] shadow-2xl relative scrollbar-hide"
        onClick={(e) => e.stopPropagation()}
        ref={modalRef}
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-20 bg-bcg-navy/50 backdrop-blur-md text-white p-2 rounded-full hover:bg-bcg-gold transition-colors"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col">
          <div className="w-full h-80 md:h-96 overflow-hidden relative bg-slate-100">
            {/* Low-res placeholder */}
            <motion.img
              style={{ y: imageY }}
              src={project.image}
              alt=""
              className={`w-full h-[120%] object-cover absolute top-[-10%] blur-lg transition-opacity duration-500 ${highResLoaded ? 'opacity-0' : 'opacity-100'}`}
              referrerPolicy="no-referrer"
            />
            
            {/* High-res image */}
            <motion.img
              style={{ y: imageY }}
              src={project.image.replace('w=800', 'w=1200')}
              alt={project.title}
              onLoad={() => setHighResLoaded(true)}
              className={`w-full h-[120%] object-cover absolute top-[-10%] transition-opacity duration-700 ${highResLoaded ? 'opacity-100' : 'opacity-0'}`}
              referrerPolicy="no-referrer"
            />
            
            {/* Loading indicator */}
            {!highResLoaded && (
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-8 h-8 border-4 border-bcg-gold border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
          </div>
          <div className="p-8 md:p-14">
            <div className="mb-10 pb-10 border-b-2 border-slate-100">
              <span className="heading-badge mb-6">
                {project.category}
              </span>
              <h3 className="text-4xl md:text-6xl font-extrabold text-bcg-navy leading-[1.1]">
                {project.title}
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="flex items-center gap-5 p-6 rounded-2xl bg-bcg-accent/20 border border-bcg-gold/20">
                <div className="w-14 h-14 rounded-2xl bg-bcg-navy text-bcg-gold flex items-center justify-center shrink-0 shadow-md">
                  <User size={28} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase font-bold tracking-[0.2em] mb-1">Client Type</p>
                  <p className="font-extrabold text-bcg-navy text-xl">{project.clientType}</p>
                </div>
              </div>
              <div className="flex items-center gap-5 p-6 rounded-2xl bg-bcg-accent/20 border border-bcg-gold/20">
                <div className="w-14 h-14 rounded-2xl bg-bcg-navy text-bcg-gold flex items-center justify-center shrink-0 shadow-md">
                  <MapPin size={28} />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase font-bold tracking-[0.2em] mb-1">Location</p>
                  <p className="font-extrabold text-bcg-navy text-xl">{project.location}</p>
                </div>
              </div>
            </div>

            <div className="pt-10 border-t-2 border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-bcg-gold/10 text-bcg-gold flex items-center justify-center">
                  <Briefcase size={20} />
                </div>
                <p className="text-xs text-slate-500 uppercase font-bold tracking-[0.25em]">Project Scope & Execution</p>
              </div>
              <p className="text-slate-800 leading-loose text-xl font-medium">
                {project.description}
              </p>
            </div>

            <div className="mt-14">
              <a href="#contact" onClick={onClose} className="btn-primary inline-block w-full text-center py-6 text-xl shadow-2xl hover:shadow-bcg-navy/30">
                Enquire About Similar Project
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showPasswordPrompt, setShowPasswordPrompt] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const [adminPassword, setAdminPassword] = useState('');
  const [editingProject, setEditingProject] = useState<any>(null);
  const [loginError, setLoginError] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (showPasswordPrompt && passwordInputRef.current) {
      setTimeout(() => passwordInputRef.current?.focus(), 100);
    }
    if (!showPasswordPrompt) {
      setAdminPassword('');
      setLoginError(false);
      setShowPassword(true);
      setIsLoggingIn(false);
    }
  }, [showPasswordPrompt]);

  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Modern Residential Interior",
      category: "Painting & Tiling",
      image: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&q=80&w=800",
      clientType: "Residential",
      location: "Adelaide, SA",
      description: "Complete interior repaint and premium tiling for a high-end residential property. Focused on clean lines and a modern aesthetic."
    },
    {
      id: 2,
      title: "Commercial Office Complex",
      category: "Painting & Waterproofing",
      image: "https://images.unsplash.com/photo-1525909002-1b05e0c869d8?auto=format&fit=crop&q=80&w=800",
      clientType: "Commercial",
      location: "Adelaide, SA",
      description: "Extensive painting and waterproofing for a multi-story office complex. Ensured durability and professional finish for high-traffic areas."
    },
    {
      id: 3,
      title: "Luxury Bathroom Renovation",
      category: "Tiling & Silicone",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
      clientType: "Residential",
      location: "Adelaide, SA",
      description: "High-precision tiling and silicone application for a luxury bathroom. Used large-format porcelain tiles and anti-mould silicone."
    },
    {
      id: 4,
      title: "Exterior Facade Refresh",
      category: "Exterior Painting",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800",
      clientType: "Residential",
      location: "Adelaide, SA",
      description: "Full exterior repaint of a coastal home. Used weather-resistant premium paints to withstand salt air and harsh sun."
    }
  ]);

  const handleUpdateProject = (updatedProject: any) => {
    setProjects(projects.map(p => p.id === updatedProject.id ? updatedProject : p));
    setEditingProject(null);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditingProject({ ...editingProject, image: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAdminToggle = () => {
    if (isAdmin) {
      setIsAdmin(false);
    } else {
      setShowPasswordPrompt(true);
    }
  };

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setLoginError(false);
    
    // Artificial delay for premium feel
    await new Promise(resolve => setTimeout(resolve, 800));

    if (adminPassword === ADMIN_PASSWORD) {
      setIsAdmin(true);
      setShowPasswordPrompt(false);
      setAdminPassword('');
      setIsLoggingIn(false);
    } else {
      setLoginError(true);
      setAdminPassword('');
      setIsLoggingIn(false);
    }
  };

  return (
    <section id="projects" className="py-24 bg-bcg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <span className="heading-badge bg-bcg-gold text-bcg-navy">Our Portfolio</span>
            <h3 className="text-5xl md:text-7xl font-extrabold mt-4">Recent <span className="text-bcg-gold">Projects</span></h3>
          </div>
          <div className="flex flex-col items-end gap-4">
            <p className="text-slate-400 max-w-md text-right">
              A showcase of our high-quality workmanship across residential and commercial sectors. Click on a project to see more details.
            </p>
            <button 
              onClick={handleAdminToggle}
              className={`text-xs px-3 py-1 rounded-full border transition-colors ${isAdmin ? 'bg-bcg-gold text-bcg-navy border-bcg-gold' : 'border-white/20 text-white/40 hover:text-white hover:border-white'}`}
            >
              {isAdmin ? 'Exit Admin Mode' : 'Admin Login'}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
            >
              <div onClick={() => setSelectedProject(project)} className="w-full h-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-bcg-charcoal via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <span className="text-bcg-gold text-xs font-bold uppercase tracking-wider mb-2 block">{project.category}</span>
                  <h4 className="text-xl font-bold">{project.title}</h4>
                </div>
              </div>

              {isAdmin && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setEditingProject(project);
                  }}
                  className="absolute top-4 right-4 z-10 bg-bcg-gold text-bcg-navy px-4 py-2 rounded-full shadow-xl hover:scale-105 transition-all flex items-center gap-2 font-bold text-xs"
                >
                  <Briefcase size={16} />
                  Edit Project
                </button>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
        {editingProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white text-bcg-charcoal p-8 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl scrollbar-hide"
            >
              <h4 className="text-2xl font-bold mb-6 text-bcg-navy">Edit Project Details</h4>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Project Title</label>
                    <input 
                      type="text" 
                      value={editingProject.title}
                      onChange={(e) => setEditingProject({...editingProject, title: e.target.value})}
                      placeholder="e.g. Modern Office Fitout"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-bcg-navy focus:ring-2 focus:ring-bcg-navy/20 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Category</label>
                    <input 
                      type="text" 
                      value={editingProject.category}
                      onChange={(e) => setEditingProject({...editingProject, category: e.target.value})}
                      placeholder="e.g. Commercial"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-bcg-navy focus:ring-2 focus:ring-bcg-navy/20 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Client Type</label>
                    <input 
                      type="text" 
                      value={editingProject.clientType}
                      onChange={(e) => setEditingProject({...editingProject, clientType: e.target.value})}
                      placeholder="e.g. Corporate Client"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-bcg-navy focus:ring-2 focus:ring-bcg-navy/20 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Location</label>
                    <input 
                      type="text" 
                      value={editingProject.location}
                      onChange={(e) => setEditingProject({...editingProject, location: e.target.value})}
                      placeholder="e.g. Sydney CBD"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-bcg-navy focus:ring-2 focus:ring-bcg-navy/20 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Description</label>
                  <textarea 
                    rows={4}
                    value={editingProject.description}
                    onChange={(e) => setEditingProject({...editingProject, description: e.target.value})}
                    placeholder="Provide a detailed description of the project..."
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-bcg-navy focus:ring-2 focus:ring-bcg-navy/20 outline-none transition-all resize-y"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Project Image</label>
                  <div className="flex flex-col gap-3">
                    {editingProject.image && (
                      <div className="relative w-full h-48 rounded-xl overflow-hidden border border-slate-100">
                        <img src={editingProject.image} alt="Preview" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                          <p className="text-white text-xs font-bold">Current Preview</p>
                        </div>
                      </div>
                    )}
                    
                    <div className="grid grid-cols-1 gap-3">
                      <div className="relative">
                        <input 
                          type="file" 
                          accept="image/*"
                          onChange={handleFileUpload}
                          className="hidden" 
                          id="project-image-upload"
                        />
                        <label 
                          htmlFor="project-image-upload"
                          className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl border-2 border-dashed border-slate-200 hover:border-bcg-gold hover:bg-bcg-gold/5 cursor-pointer transition-all group"
                        >
                          <Upload size={20} className="text-slate-400 group-hover:text-bcg-gold" />
                          <span className="text-sm font-bold text-slate-500 group-hover:text-bcg-navy">Upload New Image</span>
                        </label>
                      </div>
                      
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <span className="text-slate-400 text-sm font-bold">URL</span>
                        </div>
                        <input 
                          type="url" 
                          placeholder="Or paste image URL here (https://...)"
                          value={editingProject.image.startsWith('data:') ? '' : editingProject.image}
                          onChange={(e) => setEditingProject({...editingProject, image: e.target.value})}
                          className="w-full pl-14 pr-4 py-3 rounded-lg border border-slate-200 focus:border-bcg-navy focus:ring-2 focus:ring-bcg-navy/20 outline-none transition-all text-sm font-mono"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 pt-4 sticky bottom-0 bg-white pb-2">
                  <button 
                    onClick={() => setEditingProject(null)}
                    className="flex-1 py-3 rounded-xl border border-slate-200 font-bold hover:bg-slate-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={() => handleUpdateProject(editingProject)}
                    className="flex-1 py-3 rounded-xl bg-bcg-navy text-white font-bold hover:bg-bcg-gold hover:text-bcg-navy transition-all"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
        
        {showPasswordPrompt && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-bcg-navy/95 backdrop-blur-xl">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                y: 0,
                x: loginError ? [0, -10, 10, -10, 10, 0] : 0
              }}
              transition={{ 
                x: { duration: 0.4, ease: "easeInOut" },
                default: { duration: 0.3 }
              }}
              className="bg-white p-10 rounded-[2.5rem] max-w-md w-full shadow-[0_32px_64px_-15px_rgba(0,0,0,0.5)] text-center relative overflow-hidden"
            >
              {/* Decorative background element */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-bcg-gold via-bcg-navy to-bcg-gold"></div>
              
              <div className="w-20 h-20 bg-bcg-navy/5 rounded-3xl flex items-center justify-center mx-auto mb-8 rotate-3 hover:rotate-0 transition-transform duration-500">
                <ShieldCheck size={40} className="text-bcg-navy" />
              </div>
              
              <div className="mb-10">
                <h4 className="text-3xl font-black mb-3 text-bcg-navy tracking-tight">Secure Access</h4>
                <p className="text-slate-500 text-sm leading-relaxed px-4">
                  Authorized personnel only. Please verify your identity to manage the <span className="font-bold text-bcg-navy">BCG Portfolio</span>.
                </p>
              </div>
              
              <form onSubmit={handlePasswordSubmit} className="space-y-6">
                <div className="space-y-2">
                  <div className="relative group">
                    <input 
                      ref={passwordInputRef}
                      type={showPassword ? "text" : "password"} 
                      placeholder="Enter Access Key"
                      value={adminPassword}
                      onChange={(e) => {
                        setAdminPassword(e.target.value);
                        if (loginError) setLoginError(false);
                      }}
                      disabled={isLoggingIn}
                      className={`w-full pl-6 pr-14 py-5 rounded-2xl border-2 outline-none transition-all text-lg font-medium ${
                        loginError 
                          ? 'border-red-500 bg-red-50 text-red-900' 
                          : 'border-slate-100 bg-slate-50 focus:border-bcg-gold focus:bg-white focus:shadow-[0_0_0_4px_rgba(212,175,55,0.1)]'
                      } disabled:opacity-50`}
                    />
                    <button
                      type="button"
                      onMouseDown={(e) => e.preventDefault()}
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-bcg-navy transition-colors p-2"
                    >
                      {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
                    </button>
                  </div>
                  
                  <AnimatePresence mode="wait">
                    {loginError && (
                      <motion.p 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-red-500 text-xs font-bold flex items-center justify-center gap-1"
                      >
                        <X size={14} /> Invalid credentials. Access denied.
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                <div className="flex flex-col gap-3">
                  <button 
                    type="submit"
                    disabled={isLoggingIn || !adminPassword}
                    className="w-full py-5 rounded-2xl bg-bcg-navy text-white font-bold hover:bg-bcg-gold hover:text-bcg-navy transition-all shadow-lg hover:shadow-bcg-gold/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 overflow-hidden relative"
                  >
                    {isLoggingIn ? (
                      <>
                        <motion.div 
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                        />
                        <span>Verifying...</span>
                      </>
                    ) : (
                      <>
                        <ShieldCheck size={20} />
                        <span>Unlock Portal</span>
                      </>
                    )}
                  </button>
                  
                  <button 
                    type="button"
                    onClick={() => setShowPasswordPrompt(false)}
                    disabled={isLoggingIn}
                    className="w-full py-4 rounded-2xl text-slate-400 font-bold hover:text-bcg-navy hover:bg-slate-50 transition-all text-sm"
                  >
                    Return to Site
                  </button>
                </div>
              </form>
              
              <div className="mt-10 pt-8 border-t border-slate-100 flex items-center justify-center gap-2 opacity-40">
                <Logo className="w-5 h-5 text-bcg-navy" />
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-bcg-navy">BCG Admin System v2.0</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

const Contact = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [showPasswordPrompt, setShowPasswordPrompt] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const [adminPassword, setAdminPassword] = useState('');
  const [loginError, setLoginError] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (showPasswordPrompt && passwordInputRef.current) {
      setTimeout(() => passwordInputRef.current?.focus(), 100);
    }
    if (!showPasswordPrompt) {
      setAdminPassword('');
      setLoginError(false);
      setShowPassword(true);
      setIsLoggingIn(false);
    }
  }, [showPasswordPrompt]);

  const [contactInfo, setContactInfo] = useState({
    name: "Jawad Barati",
    phone: "0449 995 350",
    email: "bcgconstructions25@gmail.com",
    serviceAreas: "Adelaide and surrounding suburbs",
    instagramUrl: "https://instagram.com/bcg_constructions_group"
  });

  const handleAdminToggle = () => {
    if (isAdmin) {
      setIsAdmin(false);
    } else {
      setShowPasswordPrompt(true);
    }
  };

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setLoginError(false);
    
    // Artificial delay for premium feel
    await new Promise(resolve => setTimeout(resolve, 800));

    if (adminPassword === ADMIN_PASSWORD) {
      setIsAdmin(true);
      setShowPasswordPrompt(false);
      setAdminPassword('');
      setIsLoggingIn(false);
    } else {
      setLoginError(true);
      setAdminPassword('');
      setIsLoggingIn(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-bcg-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row relative">
          {/* Admin Toggle Button */}
          <button 
            onClick={handleAdminToggle}
            className={`absolute top-4 right-4 z-10 text-[10px] px-2 py-1 rounded-full border transition-all ${isAdmin ? 'bg-bcg-gold text-bcg-navy border-bcg-gold font-bold' : 'border-slate-200 text-slate-300 hover:text-slate-600 hover:border-slate-400'}`}
          >
            {isAdmin ? 'EXIT ADMIN' : 'ADMIN'}
          </button>

          <div className="lg:w-1/3 bg-bcg-navy text-white p-12">
            <h3 className="text-3xl font-bold mb-8">Get in Touch</h3>
            <p className="text-bcg-accent mb-12">
              Ready to start your project? Contact us today for a free, no-obligation quote.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <Phone className="text-bcg-gold mt-1" size={20} />
                <div className="flex-1">
                  <p className="text-sm text-bcg-accent uppercase tracking-wider font-bold mb-1">
                    {isAdmin ? (
                      <input 
                        type="text" 
                        value={contactInfo.name} 
                        onChange={(e) => setContactInfo({...contactInfo, name: e.target.value})}
                        className="bg-white/10 border border-white/20 rounded px-2 py-1 w-full text-white outline-none focus:border-bcg-gold"
                      />
                    ) : contactInfo.name}
                  </p>
                  <p className="text-lg font-medium">
                    {isAdmin ? (
                      <input 
                        type="text" 
                        value={contactInfo.phone} 
                        onChange={(e) => setContactInfo({...contactInfo, phone: e.target.value})}
                        className="bg-white/10 border border-white/20 rounded px-2 py-1 w-full text-white outline-none focus:border-bcg-gold mt-1"
                      />
                    ) : contactInfo.phone}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="text-bcg-gold mt-1" size={20} />
                <div className="flex-1">
                  <p className="text-sm text-bcg-accent uppercase tracking-wider font-bold mb-1">Email Us</p>
                  <p className="text-lg font-medium">
                    {isAdmin ? (
                      <input 
                        type="text" 
                        value={contactInfo.email} 
                        onChange={(e) => setContactInfo({...contactInfo, email: e.target.value})}
                        className="bg-white/10 border border-white/20 rounded px-2 py-1 w-full text-white outline-none focus:border-bcg-gold"
                      />
                    ) : contactInfo.email}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="text-bcg-gold mt-1" size={20} />
                <div className="flex-1">
                  <p className="text-sm text-bcg-accent uppercase tracking-wider font-bold mb-1">Service Areas</p>
                  <p className="text-lg font-medium">
                    {isAdmin ? (
                      <textarea 
                        value={contactInfo.serviceAreas} 
                        onChange={(e) => setContactInfo({...contactInfo, serviceAreas: e.target.value})}
                        className="bg-white/10 border border-white/20 rounded px-2 py-1 w-full text-white outline-none focus:border-bcg-gold h-20"
                      />
                    ) : contactInfo.serviceAreas}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-16 border-t border-white/10">
              <h4 className="font-bold mb-4">Follow Us</h4>
              {isAdmin && (
                <div className="mb-6 space-y-3">
                  <div className="flex items-center gap-3">
                    <Instagram size={16} className="text-bcg-gold w-5" />
                    <input 
                      type="url" 
                      value={contactInfo.instagramUrl} 
                      onChange={(e) => setContactInfo({...contactInfo, instagramUrl: e.target.value})}
                      placeholder="Instagram URL"
                      className="bg-white/10 border border-white/20 rounded px-2 py-1 w-full text-white outline-none focus:border-bcg-gold text-sm"
                    />
                  </div>
                </div>
              )}
              <div className="flex gap-4">
                <a href={contactInfo.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Visit our Instagram profile" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-bcg-gold transition-colors cursor-pointer group">
                  <Instagram size={20} className="text-white group-hover:text-bcg-navy transition-colors" />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 p-12">
            <span className="heading-badge">Get Started</span>
            <h3 className="text-4xl md:text-5xl font-extrabold text-bcg-navy mb-10 heading-visual block">Request a Free Quote</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-bcg-navy focus:ring-2 focus:ring-bcg-navy/20 outline-none transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-bcg-navy focus:ring-2 focus:ring-bcg-navy/20 outline-none transition-all" placeholder="john@example.com" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-bcg-navy focus:ring-2 focus:ring-bcg-navy/20 outline-none transition-all" placeholder="0400 000 000" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Service Required</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-bcg-navy focus:ring-2 focus:ring-bcg-navy/20 outline-none transition-all">
                    <option>Select a service</option>
                    <option>Interior Painting</option>
                    <option>Exterior Painting</option>
                    <option>Tiling</option>
                    <option>Waterproofing & Silicone</option>
                    <option>Screeding</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Project Details</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-bcg-navy focus:ring-2 focus:ring-bcg-navy/20 outline-none transition-all" placeholder="Tell us about your project..."></textarea>
              </div>
              <button type="submit" className="btn-primary w-full py-4 text-lg">
                Send Request
              </button>
            </form>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showPasswordPrompt && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-bcg-navy/95 backdrop-blur-xl">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                y: 0,
                x: loginError ? [0, -10, 10, -10, 10, 0] : 0
              }}
              transition={{ 
                x: { duration: 0.4, ease: "easeInOut" },
                default: { duration: 0.3 }
              }}
              className="bg-white p-10 rounded-[2.5rem] max-w-md w-full shadow-[0_32px_64px_-15px_rgba(0,0,0,0.5)] text-center relative overflow-hidden"
            >
              {/* Decorative background element */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-bcg-gold via-bcg-navy to-bcg-gold"></div>
              
              <div className="w-20 h-20 bg-bcg-navy/5 rounded-3xl flex items-center justify-center mx-auto mb-8 rotate-3 hover:rotate-0 transition-transform duration-500">
                <ShieldCheck size={40} className="text-bcg-navy" />
              </div>
              
              <div className="mb-10">
                <h4 className="text-3xl font-black mb-3 text-bcg-navy tracking-tight">Secure Access</h4>
                <p className="text-slate-500 text-sm leading-relaxed px-4">
                  Authorized personnel only. Please verify your identity to manage the <span className="font-bold text-bcg-navy">Contact Information</span>.
                </p>
              </div>
              
              <form onSubmit={handlePasswordSubmit} className="space-y-6">
                <div className="space-y-2">
                  <div className="relative group">
                    <input 
                      ref={passwordInputRef}
                      type={showPassword ? "text" : "password"} 
                      placeholder="Enter Access Key"
                      value={adminPassword}
                      onChange={(e) => {
                        setAdminPassword(e.target.value);
                        if (loginError) setLoginError(false);
                      }}
                      disabled={isLoggingIn}
                      className={`w-full pl-6 pr-14 py-5 rounded-2xl border-2 outline-none transition-all text-lg font-medium ${
                        loginError 
                          ? 'border-red-500 bg-red-50 text-red-900' 
                          : 'border-slate-100 bg-slate-50 focus:border-bcg-gold focus:bg-white focus:shadow-[0_0_0_4px_rgba(212,175,55,0.1)]'
                      } disabled:opacity-50`}
                    />
                    <button
                      type="button"
                      onMouseDown={(e) => e.preventDefault()}
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-bcg-navy transition-colors p-2"
                    >
                      {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
                    </button>
                  </div>
                  
                  <AnimatePresence mode="wait">
                    {loginError && (
                      <motion.p 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-red-500 text-xs font-bold flex items-center justify-center gap-1"
                      >
                        <X size={14} /> Invalid credentials. Access denied.
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                <div className="flex flex-col gap-3">
                  <button 
                    type="submit"
                    disabled={isLoggingIn || !adminPassword}
                    className="w-full py-5 rounded-2xl bg-bcg-navy text-white font-bold hover:bg-bcg-gold hover:text-bcg-navy transition-all shadow-lg hover:shadow-bcg-gold/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 overflow-hidden relative"
                  >
                    {isLoggingIn ? (
                      <>
                        <motion.div 
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                        />
                        <span>Verifying...</span>
                      </>
                    ) : (
                      <>
                        <ShieldCheck size={20} />
                        <span>Unlock Portal</span>
                      </>
                    )}
                  </button>
                  
                  <button 
                    type="button"
                    onClick={() => setShowPasswordPrompt(false)}
                    disabled={isLoggingIn}
                    className="w-full py-4 rounded-2xl text-slate-400 font-bold hover:text-bcg-navy hover:bg-slate-50 transition-all text-sm"
                  >
                    Return to Site
                  </button>
                </div>
              </form>
              
              <div className="mt-10 pt-8 border-t border-slate-100 flex items-center justify-center gap-2 opacity-40">
                <Logo className="w-5 h-5 text-bcg-navy" />
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-bcg-navy">BCG Admin System v2.0</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-bcg-navy text-white py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-2">
              <Logo className="w-10 h-10 text-bcg-gold" />
              <span className="text-xl md:text-2xl font-bold font-display tracking-tighter">
                BCG <span className="text-bcg-gold">Constructions</span>
              </span>
            </div>
            <p className="text-bcg-accent text-sm">© 2024 BCG Constructions. All rights reserved.</p>
          </div>
          
          <div className="flex gap-8 text-sm text-bcg-accent">
            <a href="#" className="hover:text-bcg-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-bcg-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
