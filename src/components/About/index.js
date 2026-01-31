import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
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
              Data & ML Engineer passionate about building scalable data solutions and ML systems that drive business impact.
              Expert in designing and implementing ETL pipelines with modern data platforms including Informatica, Databricks,
              and cloud-native tools (Azure Data Factory). Strong foundation in SQL (Oracle, MS SQL Server) for data transformation
              and Python (TensorFlow, PyTorch, scikit-learn) for ML development. Experienced in real-time data processing with
              Apache Kafka and creating insightful dashboards with Power BI. Currently pursuing M.Sc. in AI & Data Science at
              Athens University of Economics and Business, combining cutting-edge research with practical industry applications.
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <FontAwesomeIcon icon={faPhone} />
                <span>+30 6985774053</span>
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
                <a href="https://www.linkedin.com/in/georgios-kitsakis-gr/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="about-section skills-section">
            <h2>Skills</h2>
            <div className="skill-category">
              <h3>Data Engineering</h3>
              <p>Informatica PowerCenter, Informatica IICS, Databricks, SSIS, ETL Design, Azure (Data Factory, Storage), Apache Spark (PySpark)</p>
            </div>
            <div className="skill-category">
              <h3>Databases & Big Data</h3>
              <p>Oracle SQL, MS SQL Server, PostgreSQL, MySQL, Apache Kafka, Apache Cassandra, Neo4j (Graph DB), Hadoop MapReduce</p>
            </div>
            <div className="skill-category">
              <h3>Machine Learning & Deep Learning</h3>
              <p>Python (TensorFlow, PyTorch, scikit-learn, XGBoost), Transformers (Hugging Face), PEFT/LoRA, Keras</p>
            </div>
            <div className="skill-category">
              <h3>NLP & Text Analytics</h3>
              <p>NLTK, spaCy, Gensim, BERT, GPT, Topic Modeling, Sentiment Analysis</p>
            </div>
            <div className="skill-category">
              <h3>Data Science & Analytics</h3>
              <p>pandas, NumPy, SciPy, statsmodels, Feature Engineering, Statistical Modeling, Customer Analytics</p>
            </div>
            <div className="skill-category">
              <h3>Explainable AI</h3>
              <p>LIME, SHAP, DiCE (Counterfactual Explanations), Anchors</p>
            </div>
            <div className="skill-category">
              <h3>Visualization & BI</h3>
              <p>Power BI, Tableau, Matplotlib, Seaborn, Plotly, Altair, ggplot2 (R)</p>
            </div>
            <div className="skill-category">
              <h3>Programming Languages</h3>
              <p>Python, SQL, R, Java, JavaScript, Scala, Cypher (Graph Queries)</p>
            </div>
            <div className="skill-category">
              <h3>Tools & Platforms</h3>
              <p>Git, Docker, Docker Compose, Vagrant, Jupyter, Node.js, Spring Boot, FastAPI, Streamlit</p>
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
                <span className="date">Oct 2024 - Mar 2026</span>
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

          {/* Certificates Section */}
          <div className="about-section awards-section">
            <h2>Certificates</h2>
            <div className="skill-category">
              <h3>IBM Data Analyst Certificate</h3>
              <p>Professional certificate in data analysis techniques and tools</p>
            </div>
            <div className="skill-category">
              <h3>Statistics with Python Certificate</h3>
              <p>Advanced statistical analysis using Python</p>
            </div>
            <div className="skill-category">
              <h3>HealthCare Data Analyst Certificate</h3>
              <p>Specialized training in healthcare data analytics</p>
            </div>
          </div>

          {/* Languages Section */}
          <div className="about-section skills-section">
            <h2>Languages</h2>
            <div className="skill-category">
              <h3>Greek</h3>
              <p>Native</p>
            </div>
            <div className="skill-category">
              <h3>English</h3>
              <p>Fluent</p>
            </div>
            <div className="skill-category">
              <h3>Spanish</h3>
              <p>Intermediate (Erasmus Exchange - University of Malaga)</p>
            </div>
            <div className="skill-category">
              <h3>German</h3>
              <p>Beginner - Currently learning</p>
            </div>
          </div>

        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About