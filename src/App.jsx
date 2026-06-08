import { useEffect, useRef } from 'react'
import {
  profile,
  about,
  experience,
  skills,
  education,
  projects,
  stats,
} from './data.js'

function initials(name) {
  return name.split(' ').map((n) => n[0]).join('').slice(0, 2).toUpperCase()
}

function Icon({ path }) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
      <path d={path} />
    </svg>
  )
}

const icons = {
  github: 'M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17 4.7 18 5 18 5c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z',
  linkedin: 'M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2zM8 19H5v-9h3zM6.5 8.3a1.7 1.7 0 1 1 0-3.4 1.7 1.7 0 0 1 0 3.4zM19 19h-3v-4.7c0-1.1 0-2.5-1.5-2.5s-1.8 1.2-1.8 2.4V19h-3v-9h2.9v1.2h.04a3.2 3.2 0 0 1 2.9-1.6c3 0 3.6 2 3.6 4.6z',
  email: 'M12 13.5 2 7V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7l-10 6.5zM12 11 22 4.5A2 2 0 0 0 20 4H4a2 2 0 0 0-2 .5L12 11z',
  website: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm6.9 6h-2.8a15.7 15.7 0 0 0-1.3-3.4A8 8 0 0 1 18.9 8zM12 4c.8 1.2 1.5 2.5 1.9 4h-3.8c.4-1.5 1.1-2.8 1.9-4zM4.3 14a7.8 7.8 0 0 1 0-4h3.2a16.6 16.6 0 0 0 0 4zm.8 2h2.8c.3 1.2.8 2.4 1.3 3.4A8 8 0 0 1 5.1 16zm2.8-8H5.1a8 8 0 0 1 4.1-3.4C8.7 5.6 8.2 6.8 7.9 8zM12 20c-.8-1.2-1.5-2.5-1.9-4h3.8c-.4 1.5-1.1 2.8-1.9 4zm2.4-6H9.6a14.7 14.7 0 0 1 0-4h4.8a14.7 14.7 0 0 1 0 4zm.5 5.4c.5-1 1-2.2 1.3-3.4h2.8a8 8 0 0 1-4.1 3.4zM16.5 14a16.6 16.6 0 0 0 0-4h3.2a7.8 7.8 0 0 1 0 4z',
  download:
    'M12 3v10.5l3.5-3.5L17 11.5 12 16.5 7 11.5 8.5 10 12 13.5V3h0zM5 19h14v2H5z',
}

// Reveals its children on scroll via IntersectionObserver.
function Section({ id, title, children }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.unobserve(el)
        }
      },
      { threshold: 0.12 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return (
    <section id={id} className="section reveal" ref={ref}>
      <h2 className="section-title">{title}</h2>
      {children}
    </section>
  )
}

const nav = [
  ['about', 'About'],
  ['experience', 'Experience'],
  ['projects', 'Projects'],
  ['skills', 'Skills'],
  ['education', 'Education'],
]

export default function App() {
  const { name, title, tagline, location, email, seeking, photo, resumePdf, links } = profile

  return (
    <div className="app">
      <nav className="topnav">
        <a href="#top" className="brand">{initials(name)}</a>
        <div className="navlinks">
          {nav.map(([id, label]) => (
            <a key={id} href={`#${id}`}>{label}</a>
          ))}
        </div>
      </nav>

      <header id="top" className="hero">
        {seeking && (
          <div className="badge">
            <span className="dot" /> {seeking}
          </div>
        )}
        <div className="avatar">
          {photo ? <img src={photo} alt={name} /> : <span>{initials(name)}</span>}
        </div>
        <h1 className="name">{name}</h1>
        <p className="role">{title}</p>
        <p className="tagline">{tagline}</p>
        {location && <p className="meta">{location}</p>}

        <div className="links">
          {links.github && (
            <a href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <Icon path={icons.github} />
            </a>
          )}
          {links.linkedin && (
            <a href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Icon path={icons.linkedin} />
            </a>
          )}
          {email && (
            <a href={`mailto:${email}`} aria-label="Email">
              <Icon path={icons.email} />
            </a>
          )}
          {links.website && (
            <a href={links.website} target="_blank" rel="noreferrer" aria-label="Website">
              <Icon path={icons.website} />
            </a>
          )}
        </div>

        <div className="cta">
          <a className="btn primary" href={`mailto:${email}`}>Get in touch</a>
          {resumePdf && (
            <a className="btn ghost" href={resumePdf} download>
              <Icon path={icons.download} /> Download Resume
            </a>
          )}
        </div>

        {stats?.length > 0 && (
          <div className="stats">
            {stats.map((s, i) => (
              <div className="stat" key={i}>
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        )}
      </header>

      <main className="content">
        <Section id="about" title="About">
          <p className="about">{about}</p>
        </Section>

        <Section id="experience" title="Experience">
          <div className="timeline">
            {experience.map((job, i) => (
              <div className="job" key={i}>
                <div className="job-head">
                  <div>
                    <h3>{job.role}</h3>
                    <p className="company">{job.company}</p>
                  </div>
                  <div className="job-meta">
                    <span>{job.period}</span>
                    {job.location && <span>{job.location}</span>}
                  </div>
                </div>
                <ul>
                  {job.points.map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {projects?.length > 0 && (
          <Section id="projects" title="Projects">
            <div className="grid">
              {projects.map((proj, i) => (
                <div className="card" key={i}>
                  <h3>
                    {proj.link ? (
                      <a href={proj.link} target="_blank" rel="noreferrer">
                        {proj.name}
                      </a>
                    ) : (
                      proj.name
                    )}
                  </h3>
                  <p>{proj.description}</p>
                  {proj.tags?.length > 0 && (
                    <div className="tags">
                      {proj.tags.map((t, j) => (
                        <span key={j}>{t}</span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Section>
        )}

        <Section id="skills" title="Skills">
          <div className="tags skills">
            {skills.map((s, i) => (
              <span key={i}>{s}</span>
            ))}
          </div>
        </Section>

        <Section id="education" title="Education">
          {education.map((ed, i) => (
            <div className="edu" key={i}>
              <div>
                <h3>{ed.degree}</h3>
                <p className="company">{ed.school}</p>
              </div>
              <span className="job-meta">{ed.period}</span>
            </div>
          ))}
        </Section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} {name}</p>
      </footer>
    </div>
  )
}
