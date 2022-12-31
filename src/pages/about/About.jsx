import { useEffect } from 'react'
import { AboutMe, PageTitle, WorkProcess,Team, Clients } from '../../components'
import './about.css'

const About = () => {
  useEffect(() => {
    window.scrollTo(0,0)
    document.title = "About - Waqar Ahmed"
  })
  return (
    <>
      <PageTitle title="About Me" />
      <AboutMe />
      <WorkProcess />
      <Team />
      <Clients title="My Clients" />
    </>
  )
}

export default About