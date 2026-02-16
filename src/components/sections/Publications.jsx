import Section from '../layout/Section'
import PublicationSection from './PublicationSection'
import { siteConfig } from '../../data/siteConfig'
import '../../styles/publications.css'

export default function Publications() {
  return (
    <Section id="publications" title="Publications">
      {siteConfig.publicationSections.map((sec) => (
        <PublicationSection
          key={sec.type}
          title={sec.title}
          type={sec.type}
          view={sec.view}
        />
      ))}
    </Section>
  )
}
