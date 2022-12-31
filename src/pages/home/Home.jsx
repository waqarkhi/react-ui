import { useEffect } from 'react'
import './home.css'
import {
  Banner,
  About,
  Skill,
  Experience,
  Education,
  Services,
  Portfolio,
  Testimonial,
  Clients,
  BlogList
} from '../../components'

import blogs from '../../data/blog.json'

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = "Home - Waqar Ahmed"
  }, [])
  return (
    <>
      <Banner />
      <About />
      <Skill />
      <Experience />
      <Education />
      <Services />
      <Portfolio title="My Portfolio" />
      <Testimonial />
      <Clients />
      <BlogList title="Blogs" blogs={blogs.slice(0,3)} />
    </>
  )
}

export default Home