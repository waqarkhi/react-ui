import { PageTitle, BlogDetail, Comments, BlogList } from '../../components'
import './single.css'
import { useEffect } from 'react'
import blog from '../../data/blog.json'

const Single = () => {
  useEffect(() => {
    window.scrollTo(0,0)
    document.title = "Blog - Waqar Ahmed"
  },[])
  return (
    <>
      <PageTitle title="Blog" align="center" />
      <BlogDetail />
      <Comments />
      <BlogList title="Similar Stories" blogs={blog.slice(0,3)} />
    </>
  )
}

export default Single