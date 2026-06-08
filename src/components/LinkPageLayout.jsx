import { Link } from 'react-router-dom'
import '../App.css'

function SocialIconLink({ link }) {
  const className = 'social-icon-link'

  if (link.to) {
    return (
      <Link to={link.to} className={className} aria-label={link.name}>
        {link.icon}
      </Link>
    )
  }

  return (
    <a href={link.url} className={className} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
      {link.icon}
    </a>
  )
}

export default function LinkPageLayout({ children, socialLinks = [] }) {
  return (
    <div className="container">
      <div className="profile-section">
        <div className="profile-avatar-wrap">
          <div className="profile-orbit" aria-hidden="true">
            <span className="orbit-circle orbit-circle--1" />
            <span className="orbit-circle orbit-circle--2" />
            <span className="orbit-circle orbit-circle--3" />
            <span className="orbit-circle orbit-circle--4" />
          </div>
          <div className="profile-image">
            <Link to="/" className="profile-image-link" aria-label="Back to home">
              <img src="/profileImageblurrySadgirl.jpg" alt="" width={120} height={120} fetchPriority="high" />
            </Link>
          </div>
        </div>
        <h1 className="profile-name">blurrysadgirl</h1>
        <p className="profile-bio">
          sad girl. mami & wife ♡<br />
          collecting toys & unboxing⋆˚𝜗𝜚˚⋆
        </p>
        {socialLinks.length > 0 && (
          <div className="social-icons-row">
            {socialLinks.map((link, index) => (
              <SocialIconLink key={index} link={link} />
            ))}
          </div>
        )}
      </div>

      <div className="links-section">{children}</div>

      <footer className="footer">
        <p>© 2026 blurrysadgirl</p>
      </footer>
    </div>
  )
}
