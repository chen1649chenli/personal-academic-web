import { publications } from '../../data/publications'
import PublicationCard from './PublicationCard'

export default function PublicationSection({ title, type, view }) {
  const filtered = publications
    .filter((p) => p.publicationType === type)
    .sort((a, b) => {
      // For items with real dates, sort descending
      const dateA = a.date || a.publishDate || ''
      const dateB = b.date || b.publishDate || ''
      return dateB.localeCompare(dateA)
    })

  if (filtered.length === 0) return null

  return (
    <div className="publication-section">
      <h3 className="publication-section-heading">{title}</h3>
      {filtered.map((pub) => (
        <PublicationCard key={pub.id} pub={pub} view={view} />
      ))}
    </div>
  )
}
