import { PageTitle, Clients, BlogList } from '../../components'
import './blog.css'
import blogs from '../../data/blog.json'
import { useEffect } from 'react'

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0,0)
    document.title = "Blog - Waqar Ahmed"
  },[])
  return (
    <>
      <PageTitle title="My Blog" align="center" />
      <BlogList blogs={blogs} />
      <Clients title="My Clients" />
    </>
  )
}

export default Blog