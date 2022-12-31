import { useEffect } from 'react'
import { PageTitle } from '../../components'
import './contact.css'

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0,0)
    document.title = "Contact - Waqar Ahmed"
  })
  return (
    <>
      <PageTitle title="Contacts" align="center" />
    </>
  )
}

export default Contact