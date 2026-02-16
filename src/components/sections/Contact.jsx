import Section from '../layout/Section'
import { author } from '../../data/author'
import '../../styles/contact.css'

export default function Contact() {
  const { contact } = author
  return (
    <Section id="contact" title="Contact">
      <ul className="contact-list">
        <li className="contact-item">
          <i className="fas fa-envelope" />
          <span>
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </span>
        </li>
        <li className="contact-item">
          <i className="fas fa-phone" />
          <span>{contact.phone}</span>
        </li>
        <li className="contact-item">
          <i className="fas fa-map-marker-alt" />
          <span>{contact.address}</span>
        </li>
      </ul>
    </Section>
  )
}
