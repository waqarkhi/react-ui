import Title from '../base/Title'
import './skill.css'
import skills from '../../data/skill.json';

const Skill = () => {
  return (
    <section className="section">
    <div className="container">
      <div className="row">
        <Title title="Skills" />
        {skills.map((item) => (
         <div className="col-lg-3 col-sm-6 mb-4 mb-lg-0" key={item.id} data-aos="fade-up" data-aos-delay={item.id*150}>
          <div className="card shadow text-center">
            <div className={`position-relative rounded-top progress-wrapper skill-${item.id}`}>
              <div className="wave" data-progress="90%" style={{bottom: item.level}}></div>
            </div>
            <div className="card-footer bg-white">
              <h4 className="card-title">{item.title} ({item.level})</h4>
            </div>
          </div>
         </div> 
        ))}
      </div>
    </div>
  </section>
  )
}

export default Skill