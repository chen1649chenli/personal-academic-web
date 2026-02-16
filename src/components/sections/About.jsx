import { author } from '../../data/author'
import SocialIcons from '../common/SocialIcons'
import '../../styles/about.css'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about-grid">
          {/* Left column: profile */}
          <div className="about-profile">
            <img
              className="about-avatar"
              src="/avatar.jpg"
              alt={author.name}
            />
            <h2 className="about-name">{author.name}</h2>
            <h3 className="about-role">{author.role}</h3>
            <div className="about-org-logo">
              <a
                href={author.organization.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/logo.png" alt={author.organization.name} />
              </a>
            </div>
            <SocialIcons links={author.social} />
          </div>

          {/* Right column: bio + details */}
          <div className="about-content">
            <div
              className="about-bio"
              dangerouslySetInnerHTML={{ __html: author.bio }}
            />

            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="cv-button"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19.5 14.25v-2.625A3.375 3.375 0 0016.125 8.25h-1.5A1.125 1.125 0 0113.5 7.125v-1.5A3.375 3.375 0 0010.125 2.25H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9" />
              </svg>
              Download CV
            </a>

            <div className="about-details">
              <div>
                <h3>Interests</h3>
                <ul className="interests-list">
                  {author.interests.map((interest) => (
                    <li key={interest}>{interest}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>Education</h3>
                <ul className="education-list">
                  {author.education.map((edu) => (
                    <li key={edu.degree}>
                      <i className="fas fa-graduation-cap" />
                      <div>
                        <p className="course">
                          {edu.degree}, {edu.years}
                        </p>
                        <p className="institution">{edu.institution}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
