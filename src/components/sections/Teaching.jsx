import Section from '../layout/Section'
import { teaching } from '../../data/teaching'
import '../../styles/teaching.css'

function formatDate(dateStr) {
  if (!dateStr) return 'Present'
  const d = new Date(dateStr)
  return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
}

export default function Teaching() {
  return (
    <Section id="teaching" title="Teaching">
      <div className="teaching-timeline">
        {teaching.map((item) => (
          <div key={item.title} className="teaching-item">
            <div className="teaching-title">{item.title}</div>
            <div className="teaching-institution">{item.institution}</div>
            <div className="teaching-level">{item.level}</div>
            <div className="teaching-date">
              {formatDate(item.dateStart)} – {formatDate(item.dateEnd)}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
