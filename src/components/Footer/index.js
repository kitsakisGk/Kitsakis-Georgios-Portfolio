import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './index.scss'

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-contact">
          <a href="mailto:kitsakisgk@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
            <span>kitsakisgk@gmail.com</span>
          </a>
        </div>
        <div className="footer-social">
          <a
            href="https://www.linkedin.com/in/georgios-kitsakis-gr/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://github.com/kitsakisGk"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
