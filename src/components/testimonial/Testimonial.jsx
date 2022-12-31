import './testimonial.css'
import Title from "../base/Title"
import testimonial from '../../data/testimonial.json'
import Slider from 'react-slick'

const Testimonial = () => {
  const setting = {dots: true,infinite: true,speed: 300,slidesToShow: 1,arrows: false,adaptiveHeight: true}
  return (
    <section className="section bg-primary position-relative testimonial testimonial-bg-shapes">
      <div className="container">
        <div className="row">
          <Title title="Testimonials" />
          <div className="col-lg-10 mx-auto testimonial-slider" data-aos="fade-up" data-aos-delay="100">
            <Slider {...setting}>
              {testimonial.map((item) => (
                <div className="text-center testimonial-content" key={item.id}>
                  <i className="ti-quote-right text-white icon mb-4 d-inline-block"></i>
                  <p className="text-white mb-4">{item.review}</p>
                  <img className="img-fluid rounded-circle mb-4 d-inline-block" src={item.photo}
                    alt={item.name} />
                  <h4 className="text-white">{item.name}</h4>
                  <h6 className="text-light mb-4">{item.title}</h6>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <img src="/images/backgrounds/map.png" alt="map" className="img-fluid bg-map" data-aos="fade-up"/>
      <img src="/images/illustrations/dots-group-v.png" alt="Background" className="img-fluid bg-shape-1" data-aos="fade-right" data-aos-delay="100" />
      <img src="/images/illustrations/leaf-orange.png" alt="Background" className="img-fluid bg-shape-2" data-aos="fade-left" data-aos-delay="100" />
      <img src="/images/illustrations/dots-group-sm.png" alt="Background" className="img-fluid bg-shape-3" data-aos="fade-up" data-aos-delay="100" />
      <img src="/images/illustrations/leaf-pink-round.png" alt="Background" className="img-fluid bg-shape-4" data-aos="fade-right" data-aos-delay="100" />
      <img src="/images/illustrations/leaf-cyan.png" alt="Background" className="img-fluid bg-shape-5" data-aos="fade-left" data-aos-delay="100" />
    </section>
  )
}

export default Testimonial