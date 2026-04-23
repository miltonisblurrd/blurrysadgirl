import { Link } from 'react-router-dom'
import '../App.css'

export default function LinkPageLayout({ children }) {
  return (
    <div className="container">
      <div className="profile-section">
        <div className="profile-image">
          <Link to="/" className="profile-image-link" aria-label="Back to home">
            <img src="/profileImageblurrySadgirl.jpg" alt="" width={120} height={120} fetchPriority="high" />
          </Link>
        </div>
        <h1 className="profile-name">blurrysadgirl</h1>
        <p className="profile-bio">
          sad girl. mami & wife ♡<br />
          collecting toys & unboxing⋆˚𝜗𝜚˚⋆
        </p>
      </div>

      <div className="links-section">{children}</div>

      <footer className="footer">
        <p>© 2026 blurrysadgirl</p>
      </footer>
    </div>
  )
}
