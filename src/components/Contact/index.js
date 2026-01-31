import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import Logo from '../Home/Logo'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('gmail', 'template_YeJhZkgb', form.current, 'your-token')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['L', 'e', 't', "'", 's', ' ', 'c', 'o', 'l', 'l', 'a', 'b', 'o', 'r', 'a', 't', 'e']}
              idx={15}
            />
          </h1>
          <p style={{ fontSize: '14px', lineHeight: '1.7' }}>
            I'm passionate about building <strong>data-driven solutions</strong> that create real impact.
            With expertise in <strong>ETL pipeline development</strong> (Informatica, Databricks, Apache Kafka),
            <strong> machine learning</strong> (TensorFlow, PyTorch, scikit-learn), and <strong>cloud data workflows</strong> (Azure),
            I transform raw data into actionable insights. Whether you're looking to optimize your data infrastructure,
            implement ML solutions, or build scalable data pipelines, I'm here to help bring your vision to life.
          </p>
          <p style={{ fontSize: '13px', color: '#8d8d8d', marginTop: '15px' }}>
            <strong>Based in Athens, Greece</strong> • Open to remote opportunities worldwide
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact