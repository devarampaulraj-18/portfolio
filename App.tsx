
import React from 'react';
import {
  Github,
  Linkedin,
  Mail,
  ChevronRight,
  ExternalLink,
  Code,
  Cpu,
  Database,
  Layout,
  BookOpen,
  Download,
  Settings
} from 'lucide-react';
import { PROJECTS, EXPERIENCES, SKILLS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-[#D4D1CC] selection:text-[#1E1E1E]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAF7F2]/80 backdrop-blur-md border-b border-[#E5E1DA]">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-xl font-bold serif-title tracking-tight">DP.</div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium opacity-70">
            <a href="#about" className="hover:opacity-100 transition-opacity">About</a>
            <a href="#projects" className="hover:opacity-100 transition-opacity">Work</a>
            <a href="#experience" className="hover:opacity-100 transition-opacity">Experience</a>
            <a href="#connect" className="hover:opacity-100 transition-opacity">Connect</a>
          </div>
          <a
            href="#connect"
            className="px-5 py-2 rounded-full border border-[#5F6F52] text-sm font-medium text-[#5F6F52] hover:bg-[#5F6F52] hover:text-white transition-all"
          >
            Let's Talk
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-32 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E5E1DA]/50 text-[10px] font-bold mb-8 uppercase tracking-[0.2em] text-[#5F6F52]">
            Full-Stack & AI Developer
          </div>
          <h1 className="text-5xl md:text-8xl serif-title leading-tight mb-8 max-w-4xl mx-auto tracking-tight">
            Devaram Paulraj
          </h1>
          <p className="text-xl md:text-2xl text-[#1E1E1E]/60 max-w-2xl mx-auto leading-relaxed mb-12">
            I build clean, scalable web applications and AI systems that solve real-world problems — with a focus on usability and responsible AI.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              className="w-full sm:w-auto px-10 py-4 rounded-full bg-[#5F6F52] text-white font-bold flex items-center justify-center gap-2 hover:shadow-2xl transition-all"
            >
              View My Work <ChevronRight size={18} />
            </a>
            <a
              href="/resume and images/DEVARAM_P_71812305019.pdf"
              download="Devaram_Paulraj_Resume.pdf"
              className="w-full sm:w-auto px-10 py-4 rounded-full border border-[#E5E1DA] font-bold flex items-center justify-center gap-2 hover:bg-[#E5E1DA] transition-all"
            >
              Download Resume <Download size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 bg-[#FAF7F2]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            <div className="aspect-square overflow-hidden rounded-[rem] shadow-xl border border-[#E5E1DA]/50 bg-white">
              <img
                src="resume and images/devaram.png"
                alt="Devaram Paulraj"
                className="w-full h-full object-contain group-hover:scale-105 transition-all duration-1000"
              />
            </div>
          </div>
          <div className="md:pl-10">
            <h2 className="text-5xl md:text-6xl serif-title mb-10 leading-tight">Engineering with purpose.</h2>
            <div className="space-y-8 text-lg text-[#1E1E1E]/60 leading-relaxed">
              <p>
                I’m a B.Tech Information Technology student at Sri Ramakrishna Engineering College, passionate about building meaningful software at the intersection of web development and artificial intelligence.
              </p>
              <p>
                I’ve worked on projects ranging from full-stack academic systems to AI models for healthcare and reliability. As a Google Student Ambassador, I’ve led AI initiatives on campus and conducted hands-on workshops on Google Gemini.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-32 px-6 bg-[#FAF7F2]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl serif-title mb-24 text-center opacity-90">What I work with</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-16 gap-x-8">
            <SkillCard icon={<Code />} title="Languages" items={SKILLS.languages} />
            <SkillCard icon={<Layout />} title="Frontend" items={SKILLS.frontend} />
            <SkillCard icon={<Database />} title="Backend" items={SKILLS.backend} />
            <SkillCard icon={<Cpu />} title="AI / ML" items={SKILLS.ai} isWobbly={true} />
            <SkillCard icon={<BookOpen />} title="Databases" items={SKILLS.db} />
            <SkillCard icon={<Settings />} title="Tools" items={SKILLS.tools} />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 bg-[#FAF7F2]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
            <div>
              <h2 className="text-4xl md:text-5xl serif-title mb-4">Featured Work</h2>
              <p className="text-[#1E1E1E]/50 max-w-xl text-lg">A selection of my recent projects involving full-stack engineering and deep learning applications.</p>
            </div>
            <a href="https://github.com/devarampaulraj-18" target="_blank" className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#5F6F52] group">
              View All Github <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {PROJECTS.map((project) => (
              <div key={project.id} className="group bg-white border border-[#E5E1DA] rounded-[3rem] overflow-hidden p-10 hover:shadow-2xl hover:shadow-[#D4D1CC]/20 transition-all duration-700">
                <div className="flex items-center justify-between mb-10">
                  <div className="w-16 h-16 squircle bg-[#FAF7F2] border border-[#E5E1DA] flex items-center justify-center text-3xl">
                    {project.icon}
                  </div>
                  <div className="flex gap-4 opacity-40 group-hover:opacity-100 transition-opacity">
                    {project.links.github && (
                      <a href={project.links.github} className="p-3 rounded-full hover:bg-[#FAF7F2] transition-colors"><Github size={20} /></a>
                    )}
                    {project.links.live && (
                      <a href={project.links.live} className="p-3 rounded-full hover:bg-[#FAF7F2] transition-colors"><ExternalLink size={20} /></a>
                    )}
                  </div>
                </div>
                <h3 className="text-3xl serif-title mb-2 group-hover:text-[#5F6F52] transition-colors">{project.title}</h3>
                <div className="text-[10px] font-bold opacity-30 uppercase tracking-[0.2em] mb-6">{project.subtitle}</div>
                <p className="text-[#1E1E1E]/60 mb-8 text-lg leading-relaxed">
                  {project.description}
                </p>
                <div className="space-y-4 mb-10">
                  {project.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-[#1E1E1E]/50">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#5F6F52] mt-1.5 shrink-0 opacity-40" />
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="px-4 py-1.5 rounded-full bg-[#FAF7F2] border border-[#E5E1DA] text-[10px] font-bold uppercase tracking-wider text-[#1E1E1E]/50">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-6 bg-[#FAF7F2] border-y border-[#E5E1DA]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl serif-title mb-24 text-center">Journey</h2>
          <div className="space-y-16">
            {EXPERIENCES.map((exp, i) => (
              <div key={i} className="relative pl-12 border-l border-[#E5E1DA]">
                <div className="absolute top-0 left-[-6px] w-3 h-3 rounded-full bg-[#5F6F52]" />
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
                  <div>
                    <h3 className="text-2xl serif-title mb-1">{exp.role}</h3>
                    <div className="text-lg text-[#5F6F52] font-medium opacity-80">{exp.company}</div>
                  </div>
                  <div className="px-5 py-1.5 rounded-full bg-white border border-[#E5E1DA] text-[10px] font-bold uppercase tracking-[0.1em] h-fit">
                    {exp.period}
                  </div>
                </div>
                <div className="space-y-4 text-[#1E1E1E]/60 leading-relaxed text-lg">
                  {exp.description.map((line, j) => (
                    <p key={j} className="flex items-start gap-4">
                      <span className="opacity-30 select-none">•</span> {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <section id="connect" className="py-32 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl serif-title mb-10 tracking-tight">Let's connect</h2>
          <p className="text-xl md:text-2xl text-[#1E1E1E]/50 max-w-xl mx-auto mb-24 leading-relaxed">
            Got an idea, opportunity, or just want to talk tech? I'm always open to new discussions.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-16 mb-24">
            <ContactLink
              icon={<Mail size={24} />}
              label="Email"
              value="devarampaulraj@gmail.com"
              href="mailto:devarampaulraj@gmail.com"
            />
            <ContactLink
              icon={<Linkedin size={24} />}
              label="LinkedIn"
              value="in/devaram-paulraj"
              href="https://www.linkedin.com/in/devaram-paulraj"
            />
            <ContactLink
              icon={<Github size={24} />}
              label="GitHub"
              value="devarampaulraj-18"
              href="https://github.com/devarampaulraj-18"
            />
          </div>

          <div className="p-16 rounded-[4rem] bg-[#5F6F52] text-white flex flex-col md:flex-row items-center gap-12 text-left hover:shadow-3xl transition-all duration-500">
            <div className="flex-1">
              <h3 className="text-4xl serif-title mb-4">Start a conversation.</h3>
              <p className="opacity-70 text-lg leading-relaxed max-w-md">
                I'm currently looking for new opportunities in AI development and full-stack engineering.
              </p>
            </div>
            <a
              href="mailto:devarampaulraj@gmail.com"
              className="px-12 py-6 rounded-full bg-white text-[#5F6F52] font-bold text-lg hover:scale-105 transition-transform shadow-xl"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-[#E5E1DA]/30 text-center">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="serif-title text-3xl font-bold tracking-tighter">DP.</div>
          <div className="text-xs opacity-40 font-bold uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} Devaram Paulraj.
          </div>
          <div className="flex gap-8 opacity-40">
            <a href="https://github.com/devarampaulraj-18" className="hover:opacity-100 transition-opacity"><Github size={20} /></a>
            <a href="https://www.linkedin.com/in/devaram-paulraj" className="hover:opacity-100 transition-opacity"><Linkedin size={20} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

const SkillCard: React.FC<{
  icon: React.ReactNode,
  title: string,
  items: string[],
  isWobbly?: boolean
}> = ({ icon, title, items, isWobbly }) => (
  <div className="text-center group">
    <div className={`w-20 h-20 flex items-center justify-center mx-auto mb-8 bg-white border border-[#E5E1DA] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#5F6F52] group-hover:border-[#5F6F52] shadow-sm group-hover:shadow-lg ${isWobbly ? 'wobbly-squircle' : 'squircle'}`}>
      <div className="text-[#1E1E1E]/80 group-hover:text-white transition-colors duration-500">
        {React.cloneElement(icon as React.ReactElement, { size: 32, strokeWidth: 1.5 })}
      </div>
    </div>

    <h4 className="font-bold text-[10px] uppercase tracking-[0.25em] mb-6 text-[#1E1E1E]/40 group-hover:text-[#5F6F52] transition-colors duration-500">
      {title}
    </h4>

    <div className="space-y-2">
      {items.map(item => (
        <div key={item} className="text-sm font-medium opacity-60 group-hover:opacity-100 transition-opacity tracking-tight">
          {item}
        </div>
      ))}
    </div>
  </div>
);

const ContactLink: React.FC<{ icon: React.ReactNode, label: string, value: string, href: string }> = ({ icon, label, value, href }) => (
  <a href={href} target="_blank" className="group">
    <div className="w-20 h-20 rounded-full border border-[#E5E1DA] flex items-center justify-center mx-auto mb-6 group-hover:bg-[#FAF7F2] group-hover:border-[#5F6F52]/50 transition-all duration-500">
      <div className="text-[#1E1E1E]/40 group-hover:text-[#5F6F52] transition-all">
        {icon}
      </div>
    </div>
    <div className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-30 mb-2">{label}</div>
    <div className="font-medium text-lg tracking-tight group-hover:text-[#5F6F52] transition-colors">{value}</div>
  </a>
);

export default App;
