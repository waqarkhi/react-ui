import './experience.css'
import Title from "../base/Title"
import exp from '../../data/experience.json'

const Experience = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="row justify-content-around">
          <Title title="Experience" />
          {exp.map((item) => (
            <div className="col-lg-3 col-md-4 text-center" key={item.id} data-aos="fade-up" data-aos-delay={item.id*150}>
            <img src={item.icon} alt="icon" />
            <p className="mb-0">{item.duration}</p>
            <h4>{item.title}</h4>
            <h6 className="text-light">{item.sub_title}</h6>
          </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience