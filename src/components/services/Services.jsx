import './services.css'
import Title from "../base/Title"
import services from '../../data/services.json'

const Services = () => {
  return (
      <section className="section">
        <div className="container">
          <div className="row">
            <Title title="Services" />
            {services.map((item) => (
              <div className="col-md-4 mb-4 mb-md-0" key={item.id} data-aos="fade-right" data-aos-delay={item.id*250}>
              <div className={`card hover-shadow shadow ${(item.id === 2)?"active-bg-primary":""}`}>
                <div className="card-body text-center px-4 py-5">
                  <i className={item.icon}></i>
                  <h4 className="mb-4">{item.title}</h4>
                  <p>{item.detail}</p>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Services