import { useEffect } from 'react'
import { PageTitle, Clients, Portfolio as PortfolioItems } from '../../components'
import './portfolio.css'

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0,0)
    document.title = "Portfolio - Waqar Ahmed"
  })
  return (
    <>
      <PageTitle title="My Portfolio" align="center" />
      <PortfolioItems />
      <Clients title="My Clients" />
    </>
  )
}

export default Portfolio