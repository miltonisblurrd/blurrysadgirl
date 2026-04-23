import { useCallback, useEffect, useId, useState } from 'react'
import { FaInstagram, FaTiktok } from 'react-icons/fa'
import LinkPageLayout from '../components/LinkPageLayout'
import './UpForTradePage.css'

const PAGE_TITLE = 'Up for Trade / In Search Of'

const PHOTOS_UP_FOR_TRADE = [
  '/photos/up-for-trade/IMG_3589.jpeg',
  '/photos/up-for-trade/IMG_3590.jpeg',
  '/photos/up-for-trade/IMG_3591.jpeg'
]

const PHOTOS_IN_SEARCH_FOR = [
  '/photos/in-search-for/IMG_3595.jpeg',
  '/photos/in-search-for/IMG_3596.jpeg',
  '/photos/in-search-for/IMG_3598.jpeg',
  '/photos/in-search-for/IMG_3601.jpeg',
  '/photos/in-search-for/IMG_3602.jpeg',
  '/photos/in-search-for/IMG_3603.jpeg'
]

const TABS = [
  { id: 'trade', label: 'Up for Trade', photos: PHOTOS_UP_FOR_TRADE, photoAlt: 'Item up for trade' },
  { id: 'inSearchFor', label: 'In Search For', photos: PHOTOS_IN_SEARCH_FOR, photoAlt: 'Item in search of' }
]

function PhotoCell({ src, alt }) {
  const [isActive, setIsActive] = useState(false)
  return (
    <div
      className={`trade-photo-cell ${isActive ? 'trade-photo-cell--active' : ''}`}
      role="listitem"
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      onClick={() => {
        if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) {
          setIsActive((v) => !v)
        }
      }}
    >
      <img src={src} alt={alt} loading="lazy" decoding="async" />
      <div className="trade-photo-overlay" aria-hidden={!isActive}>
        <a
          href="https://www.instagram.com/blurrysadgirl/"
          target="_blank"
          rel="noopener noreferrer"
          className="trade-overlay-icon"
          onClick={(e) => e.stopPropagation()}
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.tiktok.com/@blurrysadgirl"
          target="_blank"
          rel="noopener noreferrer"
          className="trade-overlay-icon"
          onClick={(e) => e.stopPropagation()}
          aria-label="TikTok"
        >
          <FaTiktok />
        </a>
      </div>
    </div>
  )
}

function PhotoGrid({ srcs, altPrefix }) {
  return (
    <div className="trade-photo-grid" role="list">
      {srcs.map((src, index) => (
        <PhotoCell
          key={src}
          src={src}
          alt={`${altPrefix} (${index + 1} of ${srcs.length})`}
        />
      ))}
    </div>
  )
}

export default function UpForTradePage() {
  const [activeId, setActiveId] = useState('trade')
  const baseId = useId()

  const tabListId = `${baseId}-tablist`
  const activeIndex = TABS.findIndex((t) => t.id === activeId)

  useEffect(() => {
    document.title = PAGE_TITLE
  }, [])

  const focusTabByIndex = useCallback((index) => {
    const i = (index + TABS.length) % TABS.length
    setActiveId(TABS[i].id)
  }, [])

  const onTabListKeyDown = (e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault()
      focusTabByIndex(activeIndex + 1)
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault()
      focusTabByIndex(activeIndex - 1)
    } else if (e.key === 'Home') {
      e.preventDefault()
      setActiveId(TABS[0].id)
    } else if (e.key === 'End') {
      e.preventDefault()
      setActiveId(TABS[TABS.length - 1].id)
    }
  }

  return (
    <LinkPageLayout>
      <div className="trade-tabs">
        <div
          className="trade-tablist"
          id={tabListId}
          role="tablist"
          aria-label="Collection categories"
          onKeyDown={onTabListKeyDown}
        >
          {TABS.map((tab) => {
            const tabId = `${baseId}-tab-${tab.id}`
            const panelId = `${baseId}-panel-${tab.id}`
            const selected = tab.id === activeId
            return (
              <button
                key={tab.id}
                id={tabId}
                type="button"
                className="trade-tab"
                role="tab"
                aria-selected={selected}
                aria-controls={panelId}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActiveId(tab.id)}
              >
                {tab.label}
              </button>
            )
          })}
        </div>

        {TABS.map((tab) => {
          const tabId = `${baseId}-tab-${tab.id}`
          const panelId = `${baseId}-panel-${tab.id}`
          const selected = tab.id === activeId
          return (
            <div
              key={tab.id}
              id={panelId}
              className="trade-tabpanel"
              role="tabpanel"
              hidden={!selected}
              aria-labelledby={tabId}
            >
              {selected && <PhotoGrid srcs={tab.photos} altPrefix={tab.photoAlt} />}
            </div>
          )
        })}
      </div>
    </LinkPageLayout>
  )
}
