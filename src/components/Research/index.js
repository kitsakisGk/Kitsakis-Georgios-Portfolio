import React, { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import './index.scss';

const Research = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  // Research publications and papers
  const publications = [
    {
      title: 'Credit Risk Assessment Pipeline on Databricks',
      type: 'M.Sc. Research Project',
      authors: 'Georgios Kitsakis',
      institution: 'Athens University of Economics and Business',
      year: '2025',
      description:
        'Production-ready credit risk assessment pipeline built on Databricks. Features automated data ingestion, feature engineering, model training with MLflow tracking, and explainable AI with SHAP. Demonstrates enterprise-grade ML workflows with Delta Lake and Spark.',
      keywords: ['Databricks', 'PySpark', 'MLflow', 'Delta Lake', 'SHAP', 'Credit Risk', 'XGBoost'],
      status: 'completed',
      url: 'https://github.com/kitsakisGk/Credit_Risk_Databricks_Pipeline',
    },
    {
      title: 'Algorithms for Physical Activity Measurements',
      type: 'Bachelor Thesis',
      authors: 'Georgios Kitsakis',
      institution: 'Harokopio University of Athens',
      year: '2023',
      description:
        'Development and implementation of machine learning algorithms for classifying physical activities using smartphone accelerometer and gyroscope sensors. Achieved high accuracy in activity recognition using TensorFlow and scikit-learn.',
      keywords: ['Machine Learning', 'Activity Recognition', 'Mobile Sensors', 'TensorFlow', 'Python'],
      status: 'completed',
      url: 'https://github.com/kitsakisGk/Smartphone-Activity-Recognition',
    },
  ];

  // Research interests
  const researchInterests = [
    'Machine Learning & Deep Learning',
    'Data Engineering & ETL Systems',
    'Natural Language Processing',
    'Computer Vision',
    'Healthcare Analytics',
    'Big Data Processing',
  ];

  // Ongoing projects
  const ongoingProjects = [
    {
      title: 'Health Data Analytics Research',
      description: 'Exploring machine learning applications in healthcare data analysis and predictive modeling.',
      status: 'In Progress',
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'Pandas'],
    },
  ];

  const renderPublication = (pub, index) => (
    <div key={index} className="publication-card">
      <div className="publication-header">
        <FontAwesomeIcon icon={faFileAlt} className="publication-icon" />
        <div className="publication-type">{pub.type}</div>
      </div>
      <h3 className="publication-title">{pub.title}</h3>
      <div className="publication-authors">{pub.authors}</div>
      <div className="publication-meta">
        <span>{pub.institution}</span>
        <span className="year">{pub.year}</span>
      </div>
      <p className="publication-description">{pub.description}</p>
      <div className="publication-keywords">
        {pub.keywords.map((keyword, idx) => (
          <span key={idx} className="keyword-tag">
            {keyword}
          </span>
        ))}
      </div>
      <div className="publication-footer">
        {pub.status === 'completed' && (
          <div className="publication-status completed">Completed</div>
        )}
        {pub.url && (
          <button
            className="view-project-btn"
            onClick={() => window.open(pub.url, '_blank')}
          >
            View Project
          </button>
        )}
      </div>
    </div>
  );

  return (
    <>
      <div className="container research-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['R', 'e', 's', 'e', 'a', 'r', 'c', 'h']}
              idx={15}
            />
          </h1>

          {/* Publications Section */}
          <div className="research-section">
            <h2>Publications & Thesis</h2>
            <div className="publications-grid">
              {publications.map((pub, index) => renderPublication(pub, index))}
            </div>
          </div>

          {/* Ongoing Projects */}
          <div className="research-section">
            <h2>Ongoing Research</h2>
            <div className="projects-grid">
              {ongoingProjects.map((project, index) => (
                <div key={index} className="project-card">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-status">{project.status}</div>
                  <div className="project-tech">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Research Interests */}
          <div className="research-section">
            <h2>Research Interests</h2>
            <div className="interests-grid">
              {researchInterests.map((interest, index) => (
                <div key={index} className="interest-card">
                  <span className="interest-bullet">▸</span>
                  <span>{interest}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Current Education */}
          <div className="research-section">
            <h2>Current Studies</h2>
            <div className="education-card">
              <h3>Master of Science in AI & Data Science</h3>
              <h4>Athens University of Economics and Business</h4>
              <p>
                Pursuing advanced studies in AI, machine learning, and data science with focus on deep learning,
                big data analytics, and practical AI applications.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Research;
