import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>

          {/* Profile Section */}
          <div className="about-section profile-section">
            <h2>Profile</h2>
            <p>
              Data Engineer with expertise in building and optimizing ETL pipelines using
              Informatica (PowerCenter & IICS), Oracle SQL, and MS SQL Server. Proficient in
              Python (pandas, NumPy, scikit-learn, TensorFlow, PyTorch) for data processing and
              machine learning applications. Experienced in developing automated data solutions,
              creating Power BI reports, and ensuring data quality across enterprise systems.
              Currently pursuing M.Sc. in AI & Data Science with a strong foundation in software
              development and ML model implementation.
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <span>Athens, Greece</span>
              </div>
              <div className="contact-item">
                <FontAwesomeIcon icon={faEnvelope} />
                <span>kitsakisgk@gmail.com</span>
              </div>
              <div className="contact-item">
                <FontAwesomeIcon icon={faGithub} />
                <a href="https://github.com/kitsakisGk" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
              <div className="contact-item">
                <FontAwesomeIcon icon={faLinkedin} />
                <a href="https://linkedin.com/in/giorgos-kitsakis" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="about-section skills-section">
            <h2>Skills</h2>
            <div className="skill-category">
              <h3>Data Engineering</h3>
              <p>Informatica PowerCenter, Informatica IICS, SSIS, ETL Design</p>
            </div>
            <div className="skill-category">
              <h3>Databases</h3>
              <p>Oracle SQL, MS SQL Server, PostgreSQL, MySQL</p>
            </div>
            <div className="skill-category">
              <h3>Programming</h3>
              <p>Python (pandas, NumPy, scikit-learn, TensorFlow, PyTorch), SQL, Java, JavaScript</p>
            </div>
            <div className="skill-category">
              <h3>Visualization & BI</h3>
              <p>Power BI, Tableau</p>
            </div>
            <div className="skill-category">
              <h3>Tools & Platforms</h3>
              <p>Git, Docker, Node.js, Spring Boot</p>
            </div>
          </div>

          {/* Experience Section */}
          <div className="about-section experience-section">
            <h2>Work Experience</h2>

            <div className="experience-item">
              <div className="experience-header">
                <h3>Data Engineer</h3>
                <span className="date">Nov 2024 - Present</span>
              </div>
              <h4>Accenture</h4>
              <ul>
                <li>Design and maintain ETL pipelines using Informatica PowerCenter and IICS</li>
                <li>Develop complex SQL queries and stored procedures in Oracle and MS SQL Server</li>
                <li>Build SSIS packages for automated data integration workflows</li>
                <li>Create Power BI dashboards for business stakeholders</li>
              </ul>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <h3>Junior Software Developer</h3>
                <span className="date">Mar 2024 - Oct 2024</span>
              </div>
              <h4>DeltaFoods SA</h4>
              <ul>
                <li>Developed MS SQL Server queries for Power BI dashboards</li>
                <li>Maintained internal applications using C#.NET, PHP, and VB.NET</li>
              </ul>
            </div>

            <div className="experience-item">
              <div className="experience-header">
                <h3>Software Developer Intern</h3>
                <span className="date">Jul 2022 - Sept 2022</span>
              </div>
              <h4>Threenitas S.A.</h4>
              <ul>
                <li>Front-end development (JS/HTML/CSS) and Node.js services</li>
                <li>Contributed to internal tools and bug fixes</li>
              </ul>
            </div>
          </div>

          {/* Education Section */}
          <div className="about-section education-section">
            <h2>Education</h2>

            <div className="education-item">
              <div className="experience-header">
                <h3>Master of AI & Data Science</h3>
                <span className="date">In Progress</span>
              </div>
              <h4>Athens University of Economics and Business</h4>
            </div>

            <div className="education-item">
              <div className="experience-header">
                <h3>Bachelor of Informatics & Telematics</h3>
                <span className="date">Oct 2019 - Sept 2023</span>
              </div>
              <h4>Harokopio University of Athens</h4>
              <p><strong>Diploma Thesis:</strong> Algorithms for physical activity measurement from smartphone sensors</p>
              <p><strong>Erasmus Exchange:</strong> University of Malaga, Spain (6 months)</p>
            </div>
          </div>

          {/* Awards Section */}
          <div className="about-section awards-section">
            <h2>Awards</h2>
            <div className="award-item">
              <h3>Top 10 Winner - Google Solution Challenge</h3>
              <p>Developed an Android application for blood donations to solve one of the 16 UN Goals. Reached Top 10 among around 4,000 participants.</p>
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About