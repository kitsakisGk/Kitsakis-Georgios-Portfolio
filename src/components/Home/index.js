import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-s.png'
import Logo from './Logo'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['i', 'o', 'r', 'g', 'o', 's', ' ', 'K', 'i', 't', 's', 'a', 'k', 'i', 's']
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
            <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Data Engineer specializing in ETL Pipeline Design & Automation</h2>
          <p className="home-description">
            Building scalable data solutions with Informatica (PowerCenter & IICS), Oracle SQL, and MS SQL Server.
            Experienced in machine learning with Python (TensorFlow, scikit-learn), Power BI dashboarding,
            and full-stack development. Currently pursuing M.Sc. in AI & Data Science.
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