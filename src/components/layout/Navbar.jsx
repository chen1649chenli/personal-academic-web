import { useState, useEffect, useCallback } from 'react'
import { navigation } from '../../data/navigation'
import '../../styles/navbar.css'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('#about')

  useEffect(() => {
    const sectionIds = navigation.map((n) => n.url.replace('#', ''))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection('#' + entry.target.id)
          }
        })
      },
      { rootMargin: '-20% 0px -70% 0px' }
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const handleClick = useCallback((e, url) => {
    e.preventDefault()
    setMenuOpen(false)
    const el = document.querySelector(url)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  return (
    <nav className="navbar">
      <div className="container">
        <a
          href="#about"
          className="navbar-brand"
          onClick={(e) => handleClick(e, '#about')}
        >
          Zhenling Jiang
        </a>
        <button
          className="navbar-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <i className={menuOpen ? 'fas fa-times' : 'fas fa-bars'} />
        </button>
        <div className={`navbar-nav${menuOpen ? ' open' : ''}`}>
          {navigation.map((item) => (
            <a
              key={item.url}
              href={item.url}
              className={activeSection === item.url ? 'active' : ''}
              onClick={(e) => handleClick(e, item.url)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
