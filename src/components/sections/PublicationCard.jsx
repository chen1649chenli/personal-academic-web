import { useState } from 'react'

function highlightAuthor(authors) {
  return authors.replace(
    /Zhenling Jiang/g,
    '<span class="author-highlight">Zhenling Jiang</span>'
  )
}

function extractYear(dateStr) {
  if (!dateStr) return ''
  return dateStr.slice(0, 4)
}

function renderLinks(pub) {
  const allLinks = []

  if (pub.doi) {
    allLinks.push(
      <a key="doi" href={pub.doi} target="_blank" rel="noopener noreferrer">
        DOI
      </a>
    )
  }

  if (pub.codeUrl) {
    allLinks.push(
      <a key="code" href={pub.codeUrl} target="_blank" rel="noopener noreferrer">
        Code
      </a>
    )
  }

  if (pub.links) {
    pub.links.forEach((link) => {
      allLinks.push(
        <a
          key={link.url}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.name}
        </a>
      )
    })
  }

  return allLinks
}

export default function PublicationCard({ pub, view }) {
  const [showAbstract, setShowAbstract] = useState(false)

  if (view === 'citation') {
    const year = extractYear(pub.date)
    return (
      <div className="pub-card-citation">
        <span
          className="pub-authors"
          dangerouslySetInnerHTML={{ __html: highlightAuthor(pub.authors) }}
        />
        {year && <span className="pub-year"> ({year}).</span>}
        {' '}
        <span className="pub-title-link">&ldquo;{pub.title}&rdquo;</span>
        {pub.publication && (
          <>
            {' '}
            <span
              className="pub-venue"
              dangerouslySetInnerHTML={{ __html: pub.publication }}
            />
          </>
        )}
        {'. '}
        {pub.doi && (
          <span className="pub-doi">
            <a href={pub.doi} target="_blank" rel="noopener noreferrer">
              {pub.doi}
            </a>
          </span>
        )}
        <span className="pub-links">
          {pub.abstract && (
            <button
              className="abstract-toggle"
              onClick={() => setShowAbstract(!showAbstract)}
            >
              {showAbstract ? 'Hide Abstract' : 'Abstract'}
            </button>
          )}
          {renderLinks(pub).filter((l) => l.key !== 'doi')}
        </span>
        {showAbstract && pub.abstract && (
          <div className="pub-abstract">{pub.abstract}</div>
        )}
      </div>
    )
  }

  // List view
  return (
    <div className="pub-card-list">
      <div className="pub-title">{pub.title}</div>
      <div
        className="pub-authors"
        dangerouslySetInnerHTML={{ __html: highlightAuthor(pub.authors) }}
      />
      {pub.publication && (
        <div
          className="pub-venue-line"
          dangerouslySetInnerHTML={{ __html: pub.publication }}
        />
      )}
      <div className="pub-links">
        {pub.abstract && (
          <button
            className="abstract-toggle"
            onClick={() => setShowAbstract(!showAbstract)}
          >
            {showAbstract ? 'Hide Abstract' : 'Abstract'}
          </button>
        )}
        {renderLinks(pub)}
      </div>
      {showAbstract && pub.abstract && (
        <div className="pub-abstract">{pub.abstract}</div>
      )}
    </div>
  )
}
