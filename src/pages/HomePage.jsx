import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaYoutube, FaInstagram, FaTiktok, FaTwitter, FaFacebook, FaEnvelope, FaAmazon, FaSearch } from 'react-icons/fa'
import LinkPageLayout from '../components/LinkPageLayout'

const HOME_TITLE = 'Blurrysadgirl | Toy Collecting, Unboxings & Cute Finds'

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
    name: '$10 Off Brick Sewer - Code: blurrysadgirl',
    url: 'https://bricksewer.com/?sca_ref=11103185.WfjMcqQs88',
    icon: <img src="/brick_sewer_logo.webp" alt="" />,
    color: '#8B4513'
  },
  {
    name: 'Up for Trade / In Search Of',
    to: '/up-for-trade',
    icon: <FaSearch />,
    color: '#4A4A4A'
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

function LinkButton({ link }) {
  const content = (
    <>
      <span className="link-icon">{link.icon}</span>
      <span className="link-name">{link.name}</span>
    </>
  )
  if (link.to) {
    return (
      <Link to={link.to} className="link-button">
        {content}
      </Link>
    )
  }
  return (
    <a href={link.url} className="link-button" target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  )
}

export default function HomePage() {
  useEffect(() => {
    document.title = HOME_TITLE
  }, [])

  return (
    <LinkPageLayout>
      {socialLinks.map((link, index) => (
        <LinkButton key={index} link={link} />
      ))}
    </LinkPageLayout>
  )
}
