import { useEffect } from 'react'
import { PageTitle } from '../../components'
import './not-found.css'

const NotFound = () => {
  useEffect(() => {
    window.scrollTo(0,0)
    document.title = "404 Error - Waqar Ahmed"
  })
  return (
    <>
      <PageTitle title="404 Page Not Found!" />
    </>
  )
}

export default NotFound