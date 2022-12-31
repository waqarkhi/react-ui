import process from '../../data/work-process.json'
import Title from '../base/Title'

const WorkProcess = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="row justify-content-around">
          <Title title="Work Process" />
          {process.map((item) => (
            <div className="col-lg-3 col-md-4 text-center hover-shadow pt-3" key={item.id} data-aos="fade-down" data-aos-delay={item.id*250}>
              <img src={item.icon} className="mb-4" alt="icon" />
              <h4 className="mb-4">{item.title}</h4>
              <p>{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkProcess