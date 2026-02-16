function getIconClass(iconPack, icon) {
  if (iconPack === 'ai') return `ai ai-${icon}`
  if (iconPack === 'fab') return `fab fa-${icon}`
  if (iconPack === 'fas') return `fas fa-${icon}`
  return `fas fa-${icon}`
}

export default function SocialIcons({ links, className = '' }) {
  return (
    <div className={`about-social ${className}`}>
      {links.map((link) => (
        <a
          key={link.url}
          href={link.url}
          target={link.url.startsWith('mailto:') || link.url.startsWith('/') ? undefined : '_blank'}
          rel={link.url.startsWith('mailto:') || link.url.startsWith('/') ? undefined : 'noopener noreferrer'}
          aria-label={link.icon}
        >
          <i className={getIconClass(link.iconPack, link.icon)} />
        </a>
      ))}
    </div>
  )
}
