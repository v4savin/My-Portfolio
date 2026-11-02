import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowDownRight, ArrowUpRight, Menu, X, MoveUpRight,
  Mail, Instagram, Linkedin, Github, Video, Code2, Cuboid, Palette
} from 'lucide-react'

const projects = [
  {
    no: '01', category: 'IMMERSIVE / UNITY', title: 'LEARNING IN\nANOTHER DIMENSION',
    description: 'An interactive VR learning experience that turns science concepts into hands-on exploration for students.',
    image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=1400&q=85',
    tags: ['Unity', 'Meta Quest', 'XR Interaction Toolkit'], year: '2026'
  },
  {
    no: '02', category: 'VIDEO / STORYTELLING', title: 'MOMENTS THAT\nMOVE PEOPLE',
    description: 'Cinematic edits, event films and short-form reels shaped around rhythm, mood and story.',
    image: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1400&q=85',
    tags: ['Videography', 'Editing', 'Reels'], year: 'SELECTED WORK'
  },
  {
    no: '03', category: 'VISUAL DESIGN', title: 'IDEAS INTO\nVISUAL IMPACT',
    description: 'A collection of graphic design explorations for digital campaigns, posters and social media.',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1400&q=85',
    tags: ['Graphic Design', 'Branding', 'Digital'], year: 'SELECTED WORK'
  }
]

// Instagram pages shown when "View project" is opened
// Opens a Gmail compose window (works even when no desktop mail app is set up)
const EMAIL = 'v4savin@gmail.com'
const gmailCompose = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}&su=${encodeURIComponent('Hello Savin — project enquiry')}`

const instagramLinks = [
  { handle: '@savi._creation', label: 'REELS & VIDEOS', url: 'https://www.instagram.com/savi._creation' },
  { handle: '@mca_valee', label: 'MORE VIDEO WORK', url: 'https://www.instagram.com/mca_valee' },
]

const skills = [
  { title: 'IMMERSIVE DEVELOPMENT', items: 'Unity · C# · Meta Quest · XR Interaction Toolkit', icon: Cuboid },
  { title: 'VIDEO & MOTION', items: 'Videography · Video Editing · Reels · Storytelling', icon: Video },
  { title: 'VISUAL DESIGN', items: 'Graphic Design · Layout · Social Media Creatives', icon: Palette },
  { title: 'WEB DEVELOPMENT', items: 'React.js · Tailwind CSS · Java · Spring Boot', icon: Code2 },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
}

function SectionLabel({ children, number }) {
  return <div className="section-label"><span>{number}</span><span>{children}</span><i /></div>
}

/*
  PORTRAIT: save a transparent-background PNG cut-out of yourself as
  public/savin.png (waist-up, facing the camera, background removed).
  Until it exists, a neutral silhouette is shown instead.
*/
function Portrait() {
  const [failed, setFailed] = useState(false)
  if (!failed) {
    return <img className="portrait-img" src="/savin.png" alt="Savin Gowda" onError={() => setFailed(true)} />
  }
  return (
    <svg className="portrait-fallback" viewBox="0 0 400 520" aria-hidden="true">
      <defs>
        <linearGradient id="sg-body" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#47474a" /><stop offset="1" stopColor="#0b0b0b" />
        </linearGradient>
        <radialGradient id="sg-head" cx=".4" cy=".35" r=".85">
          <stop offset="0" stopColor="#7a625c" /><stop offset="1" stopColor="#1b1514" />
        </radialGradient>
      </defs>
      <path d="M10 520 C 20 400 90 350 160 335 L240 335 C310 350 380 400 390 520 Z" fill="url(#sg-body)" />
      <rect x="168" y="285" width="64" height="70" rx="24" fill="#2a2222" />
      <ellipse cx="200" cy="195" rx="82" ry="102" fill="url(#sg-head)" />
      <path d="M118 175 C120 90 175 70 205 72 C250 72 288 105 283 175 C270 130 240 112 200 112 C160 112 132 135 118 175 Z" fill="#0d0d0d" />
      <text x="200" y="470" textAnchor="middle" fontFamily="Anton, sans-serif" fontSize="70" fill="#ffffff22">SG</text>
    </svg>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeProject, setActiveProject] = useState(null)
  const nav = [['WORK', '#work'], ['ABOUT', '#about'], ['SKILLS', '#skills'], ['CONTACT', '#contact']]
  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') setActiveProject(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <div className="site-shell">
      <div className="grain" />

      <header className="topbar">
        <a href="#home" className="wordmark" onClick={closeMenu}>SAVIN<span>®</span></a>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          {nav.map(([label, href]) => <a key={label} href={href} onClick={closeMenu}>{label}</a>)}
        </nav>
        <a className="availability" href="#contact"><span className="status-dot" /> AVAILABLE FOR SELECT PROJECTS</a>
        <button className="menu-toggle" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-inner">
            <span className="plus">+</span>
            <div className="hero-topline">
              <span>CREATIVE DEVELOPER / VISUAL STORYTELLER</span>
              <span>BASED IN INDIA · 2026</span>
            </div>

            <div className="hero-stage">
              <div className="hero-giant" aria-hidden="true">SAVIN</div>

              <div className="hero-copy">
                <h1>SAVIN<br />GOWDA<i>.</i></h1>
                <p className="role">VR Developer &amp;<br />Video Creative</p>
                <p className="hero-description">I build immersive experiences and create visuals that tell stories.</p>
                <a href="#work" className="red-button">EXPLORE MY WORK <ArrowUpRight size={16} /></a>
              </div>

              <div className="portrait-wrap"><Portrait /></div>

              <aside className="hero-side">
                <span className="avail"><span className="status-dot" /> OPEN FOR COLLABORATION</span>
                <p className="hero-quote">Every frame, a different feeling.</p>
                <div className="hero-stats">
                  <div><b>3<em>+</em></b><span>YEARS CREATING</span></div>
                  <div><b>10<em>+</em></b><span>PROJECTS</span></div>
                </div>
              </aside>

              <div className="hero-bottom-note"><span>SCROLL TO DISCOVER</span><ArrowDownRight size={18} /></div>
            </div>

            <div className="hero-footer">
              <span>VR DEVELOPER</span><span>VIDEOGRAPHER</span><span>VIDEO EDITOR</span><span>GRAPHIC DESIGNER</span>
            </div>
          </div>
        </section>

        <section className="intro-strip">
          <p>NOT JUST MAKING THINGS LOOK GOOD.<br /><span>MAKING THEM MEAN SOMETHING.</span></p>
          <div className="strip-mark">✳</div>
          <p className="strip-small">A multidisciplinary creative working across immersive technology, moving images and visual communication.</p>
        </section>

        <section className="work-section section-wrap" id="work">
          <SectionLabel number="01">SELECTED WORK</SectionLabel>
          <div className="section-heading-row">
            <h2>FROM IDEA.<br /><span>TO IMPACT.</span></h2>
            <p>A selection of projects and creative directions.<br />More work is always in progress.</p>
          </div>
          <div className="project-list">
            {projects.map((project, index) => (
              <motion.article
                className={`project-card project-${index + 1}`}
                key={project.no}
                variants={fadeUp} initial="hidden" whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
              >
                <button className="project-image" onClick={() => setActiveProject(project)} aria-label={`View ${project.title.replace('\n', ' ')}`}>
                  <img src={project.image} alt="" />
                  <span className="image-overlay"><span>VIEW PROJECT</span><MoveUpRight size={22} /></span>
                  <span className="project-number">{project.no}</span>
                </button>
                <div className="project-meta">
                  <div>
                    <span className="eyebrow">{project.category}</span>
                    <h3>{project.title.split('\n').map((line, i) => <span key={i}>{line}<br /></span>)}</h3>
                  </div>
                  <div className="project-detail">
                    <p>{project.description}</p>
                    <div className="tag-row">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                    <span className="project-year">{project.year}</span>
                    <button className="text-link project-open" onClick={() => setActiveProject(project)}>VIEW PROJECT <ArrowUpRight size={16} /></button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="about-section section-wrap" id="about">
          <SectionLabel number="02">BEHIND THE WORK</SectionLabel>
          <div className="about-grid">
            <div className="about-headline">
              <p className="eyebrow">A LITTLE ABOUT ME</p>
              <h2>CURIOUS BY<br />NATURE.<br /><span>CREATIVE BY<br />CHOICE.</span></h2>
            </div>
            <div className="about-body">
              <p className="about-lead">I’m Savin Gowda — a creative technologist with a passion for building experiences that connect people, ideas and technology.</p>
              <p>My work moves between educational VR development, videography, video editing and graphic design. I enjoy taking an idea from its first rough sketch to a finished experience that people can interact with, watch or remember.</p>
              <p>Currently, I work on VR-based educational experiences at Wisdom Ed while continuing to explore visual storytelling and digital creativity.</p>
              <a className="text-link" href="#contact">LET'S CREATE SOMETHING <ArrowUpRight size={16} /></a>
            </div>
            <div className="about-stamp"><span>MAKE IT<br />FEEL REAL.</span><b>SG®</b></div>
          </div>
        </section>

        <section className="skills-section section-wrap" id="skills">
          <SectionLabel number="03">WHAT I BRING</SectionLabel>
          <div className="section-heading-row">
            <h2>TOOLS OF<br /><span>THE CRAFT.</span></h2>
            <p>Different disciplines.<br />One curious mindset.</p>
          </div>
          <div className="skill-grid">
            {skills.map((skill, i) => {
              const Icon = skill.icon
              return (
                <motion.div className="skill-item" key={skill.title} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
                  <div className="skill-top"><span>0{i + 1}</span><Icon size={22} /></div>
                  <h3>{skill.title}</h3>
                  <p>{skill.items}</p>
                  <div className="skill-line" />
                </motion.div>
              )
            })}
          </div>
        </section>

        <section className="experience-section section-wrap">
          <SectionLabel number="04">THE JOURNEY</SectionLabel>
          <div className="journey-grid">
            <h2>LEARNING.<br /><span>BUILDING.</span><br />EVOLVING.</h2>
            <div className="timeline">
              <div className="timeline-item"><span>01</span><div><b>VR DEVELOPER</b><p>Wisdom Ed · Educational VR experiences</p></div><small>2026 — PRESENT</small></div>
              <div className="timeline-item"><span>02</span><div><b>FREELANCE CREATIVE</b><p>Videography · Video editing · Graphic design</p></div><small>ONGOING</small></div>
              <div className="timeline-item"><span>03</span><div><b>MASTER OF COMPUTER APPLICATIONS</b><p>Building a foundation in software and technology</p></div><small>EDUCATION</small></div>
            </div>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <SectionLabel number="05">HAVE A PROJECT IN MIND?</SectionLabel>
          <div className="contact-grid">
            <div>
              <p className="eyebrow">LET'S WORK TOGETHER</p>
              <h2>MAKE IT<br /><span>FEEL REAL.</span></h2>
              <a className="red-button" href={gmailCompose} target="_blank" rel="noreferrer">SAY HELLO <ArrowUpRight size={16} /></a>
            </div>
            <div className="contact-side">
              <p>Have an idea, a story to tell or something exciting to build? I’d love to hear about it.</p>
              <a href={gmailCompose} target="_blank" rel="noreferrer"><Mail size={17} /> {EMAIL} <ArrowUpRight size={15} /></a>
              <a href="https://www.instagram.com/v4_savin" target="_blank" rel="noreferrer"><Instagram size={17} /> INSTAGRAM <ArrowUpRight size={15} /></a>
              <a href="https://www.linkedin.com/in/savin-25216a339/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LINKEDIN <ArrowUpRight size={15} /></a>
              <a href="https://github.com/v4savin" target="_blank" rel="noreferrer"><Github size={17} /> GITHUB <ArrowUpRight size={15} /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a href="#home" className="wordmark">SAVIN<span>®</span></a>
        <span>DESIGNED &amp; BUILT WITH INTENTION.</span>
        <span>© 2026 SAVIN GOWDA</span>
        <a href="#home">BACK TO TOP ↑</a>
      </footer>

      {activeProject && (
        <div className="modal-backdrop" onClick={() => setActiveProject(null)}>
          <div className="project-modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" aria-label="Close" onClick={() => setActiveProject(null)}><X /></button>
            <img src={activeProject.image} alt="" />
            <span className="eyebrow">{activeProject.category}</span>
            <h2>{activeProject.title.replace('\n', ' ')}</h2>
            <p>{activeProject.description}</p>
            <div className="tag-row">{activeProject.tags.map(t => <span key={t}>{t}</span>)}</div>
            <div className="modal-links">
              <span className="modal-links-title">WATCH THE WORK ON INSTAGRAM</span>
              {instagramLinks.map(l => (
                <a key={l.url} href={l.url} target="_blank" rel="noreferrer">
                  <Instagram size={17} /> {l.handle} <em>{l.label}</em> <ArrowUpRight size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App