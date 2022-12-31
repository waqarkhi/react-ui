import './team.css'
import team from '../../data/team.json'
import Title from '../base/Title'

const Clients = () => {
  return (
    <section className="section bg-cover" style={{backgroundImage:"url(/images/backgrounds/team-bg.png)"}}>
      <div className="container">
        <div className="row">
          <Title title="My Team" />
          {team.map((item) => (
            <div className="col-md-4 col-sm-6 mb-4 mb-md-0" key={item.id} data-aos="fade-down" data-aos-delay={item.id*250}>
              <div className="card text-center">
                <img src={item.image} alt={item.name} className="card-img-top" />
                <div className="card-body">
                  <h4 className="card-title">{item.name}</h4>
                  <p className="text-light font-secondary">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Clients