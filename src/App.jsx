import './App.css'
import { FaYoutube, FaInstagram, FaTiktok, FaTwitter, FaFacebook, FaEnvelope, FaAmazon } from 'react-icons/fa'

function App() {
  const socialLinks = [
    {
      name: 'Email for Brand Deals',
      url: 'mailto:blurrysadgirl@gmail.com',
      icon: <FaEnvelope />,
      color: '#EA4335'
    },
    {
      name: 'Amazon',
      url: 'https://www.amazon.com/shop/blurrysadgirl',
      icon: <FaAmazon />,
      color: '#FF9900'
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@blurrysadgirl',
      icon: <FaYoutube />,
      color: '#FF0000'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/blurrysadgirl/',
      icon: <FaInstagram />,
      color: '#E4405F'
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@blurrysadgirl',
      icon: <FaTiktok />,
      color: '#000000'
    },
    {
      name: 'Twitter',
      url: 'https://x.com/blurrysadgirl',
      icon: <FaTwitter />,
      color: '#1DA1F2'
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/profile.php?id=100010502029208',
      icon: <FaFacebook />,
      color: '#1877F2'
    }
  ]

  return (
    <div className="container">
      <div className="profile-section">
        <div className="profile-image">
          <img src="/profileImageblurrySadgirl.jpg" alt="Profile" />
        </div>
        <h1 className="profile-name">blurrysadgirl</h1>
        <p className="profile-bio">
          sad girl. mami & wife ♡<br />
          collecting toys & unboxing⋆˚𝜗𝜚˚⋆
        </p>
      </div>

      <div className="links-section">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            className="link-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="link-icon">{link.icon}</span>
            <span className="link-name">{link.name}</span>
          </a>
        ))}
      </div>

      <footer className="footer">
        <p>© 2026 blurrysadgirl</p>
      </footer>
    </div>
  )
}

export default App
