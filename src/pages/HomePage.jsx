import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaYoutube, FaInstagram, FaTiktok, FaTwitter, FaFacebook, FaEnvelope, FaAmazon, FaSearch } from 'react-icons/fa'
import LinkPageLayout from '../components/LinkPageLayout'

const HOME_TITLE = 'Blurrysadgirl | Toy Collecting, Unboxings & Cute Finds'

const socialIconLinks = [
  {
    name: 'Email for Brand Deals',
    url: 'mailto:blurrysadgirl@gmail.com',
    icon: <FaEnvelope />
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@blurrysadgirl',
    icon: <FaYoutube />
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/blurrysadgirl/',
    icon: <FaInstagram />
  },
  {
    name: 'TikTok',
    url: 'https://www.tiktok.com/@blurrysadgirl',
    icon: <FaTiktok />
  },
  {
    name: 'Twitter',
    url: 'https://x.com/blurrysadgirl',
    icon: <FaTwitter />
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/profile.php?id=100010502029208',
    icon: <FaFacebook />
  }
]

const primaryLinks = [
  {
    name: 'Amazon',
    url: 'https://www.amazon.com/shop/blurrysadgirl',
    icon: <FaAmazon />
  },
  {
    name: '$10 Off Brick Sewer - Code: blurrysadgirl',
    url: 'https://bricksewer.com/?sca_ref=11103185.WfjMcqQs88',
    icon: <img src="/brick_sewer_logo.webp" alt="" />
  },
  {
    name: '$200 to spend on Whatnot',
    url: 'https://www.whatnot.com/invite/blurrysadgirl',
    icon: <img src="/logo.webp" alt="" />
  },
  {
    name: 'Up for Trade / In Search Of',
    to: '/up-for-trade',
    icon: <FaSearch />
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
    <LinkPageLayout socialLinks={socialIconLinks}>
      {primaryLinks.map((link, index) => (
        <LinkButton key={index} link={link} />
      ))}
    </LinkPageLayout>
  )
}
