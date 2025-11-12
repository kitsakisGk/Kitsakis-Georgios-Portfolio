import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-s.png'
import Logo from './Logo'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['i', 'o', 'r']
  const nameArray2 = ['o', 's', ' ', 'K', 'i', 't', 's', 'a', 'k', 'i', 's']
  const jobArray = [
    'M',
    'L',
    '/',
    'D',
    'a',
    't',
    'a',
    ' ',
    'E',
    'n',
    'g',
    'i',
    'n',
    'e',
    'e',
    'r',
  ]

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <span className={`${letterClass} _15`}> </span>
            <span className={`${letterClass} _16`}>G</span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={17}
            />
            <img
              src={LogoTitle}
              alt="Georgios Kitsakis Logo"
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray2}
              idx={20}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={31}
            />
          </h1>
          <h2>Data & ML Engineer</h2>
          <p className="home-description">
            Expertise in building ETL pipelines with Informatica (PowerCenter & IICS) and SQL (Oracle, MS SQL Server).
            Experienced in machine learning with Python (TensorFlow, PyTorch, scikit-learn), streaming data with Apache Kafka,
            and cloud ETL workflows with Azure (Data Factory, Storage). Passionate about leveraging data and ML to build impactful products at scale.
            Currently pursuing M.Sc. in AI & Data Science at AUEB.
          </p>
          <div className="home-cta-buttons">
            <Link to="/contact" className="flat-button">
              CONTACT ME
            </Link>
            <Link to="/portfolio" className="flat-button secondary">
              VIEW PROJECTS
            </Link>
          </div>
        </div>
        <Logo />
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home