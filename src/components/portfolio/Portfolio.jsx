import './portfolio.css'
import Title from "../base/Title"
import work from '../../data/portfolio.json'

const Portfolio = ({title}) => {
  return (
    <section className="section">
      <div className="container">
        {title && <div className="row"><Title title={title} /></div>}
        <div className="card-columns">
          {work.map((item) => (
            <div className="card" key={item.id} data-aos="fade-up" data-aos-delay={item.id*300}>
              <div className="position-relative rounded hover-wrapper">
                <img src={item.image} alt="Portfolio Project" className="img-fluid rounded w-100" />
                <div className="hover-overlay">
                  <div className="hover-content">
                    <a className="btn btn-light btn-sm" href="#!">{item.button}</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio