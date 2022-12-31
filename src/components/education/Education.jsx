import './education.css'
import Title from "../base/Title"
import edu from '../../data/education.json'
import eduBG from "../../assets/images/backgrounds/education-bg.png"
const Education = () => {
  return (
    <section className="section position-relative">
  <div className="container">
    <div className="row">
      <Title title="Education" />
      {edu.map((item) => (
        <div className="col-lg-6 col-md-6 mb-80" key={item.id} data-aos="fade-up" data-aos-delay={item.id*150}>
          <div className="d-flex">
            <div className="mr-lg-5 mr-3">
              <i className="ti-medall icon icon-light icon-bg bg-white shadow rounded-circle d-block"></i>
            </div>
            <div>
              <p className="text-dark mb-1">{item.year}</p>
              <h4>{item.course}</h4>
              <p className="mb-0 text-light">{item.institute}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  <img className="img-fluid edu-bg-image w-100" src={eduBG} alt="background"/>
</section>
  )
}

export default Education