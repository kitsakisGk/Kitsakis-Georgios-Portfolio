import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import Footer from '../Footer'
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
          <p>
            I'm open to opportunities in <strong>Data Engineering</strong> and <strong>AI/ML</strong>.
            I build reliable <strong>ETL</strong> pipelines (Informatica/SSIS), prepare analysis-ready datasets with
            <strong> Python</strong> and <strong>SQL</strong>, and deliver clear <strong>Power BI</strong> insights.
            If you're hiring or have a project in mind, feel free to reach out.
          </p>
          <p style={{ fontSize: '13px', color: '#8d8d8d', marginTop: '15px' }}>
            Based in Athens • Open to remote or on-site in Greece
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
      <Footer />
      <Loader type="pacman" />
    </>
  )
}

export default Contact