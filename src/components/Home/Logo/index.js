import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPython, faDocker, faReact, faJsSquare, faGitAlt } from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import './index.scss'

const Logo = () => {
  return (
    <div className="logo-container">
      <div className="cubespinner">
        <div className="face1">
          <FontAwesomeIcon icon={faPython} color="#3776AB" />
        </div>
        <div className="face2">
          <FontAwesomeIcon icon={faDatabase} color="#F29111" />
        </div>
        <div className="face3">
          <FontAwesomeIcon icon={faDocker} color="#2496ED" />
        </div>
        <div className="face4">
          <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
        </div>
        <div className="face5">
          <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
        </div>
        <div className="face6">
          <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
        </div>
      </div>
    </div>
  )
}

export default Logo