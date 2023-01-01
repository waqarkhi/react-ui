import './blog.css'
import Title from '../base/Title'
import { Link } from 'react-router-dom'

const BlogList = ({title,blogs}) => {
  return (
    <section className="section">
      <div className="container">
        <div className="row">
          {title && <Title title={title} />}
          {blogs.map((item) => (
            <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0" key={item.id} data-aos="fade-right" data-aos-delay={item.id*150}>
                <article className="card shadow">
                <img className="rounded card-img-top" src={item.media} alt={item.title} />
                <div className="card-body">
                    <h4 className="card-title">
                        <a className="text-dark" href={item.link}>{item.title}</a>
                    </h4>
                    <p className="cars-text">{item.detail}</p>
                    <Link to={item.link} className="btn btn-xs btn-primary">Read More</Link>
                </div>
                </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogList