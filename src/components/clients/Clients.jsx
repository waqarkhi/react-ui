import './clients.css'
import clients from '../../data/clients.json'
import Slider from 'react-slick'
import Title from '../base/Title'

const Clients = ({title}) => {
  const setting = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    arrows: false,
    responsive: [
        {breakpoint: 1024,settings: {slidesToShow: 3,slidesToScroll: 1}},
        {breakpoint: 600,settings: {slidesToShow: 3,slidesToScroll: 1}},
        {breakpoint: 480,settings: {slidesToShow: 2,slidesToScroll: 1}},
        {breakpoint: 400,settings: {slidesToShow: 1,slidesToScroll: 1}}
    ]
  }
  return (
    <section className="section pb-0">
    <div className="container">
      <div className='row'>
        { title && <Title title={title} /> }
      </div>
      <div className="client-logo-slider d-block align-items-center">
        <Slider {...setting}>
          {clients.map((item) => (
            <div className="text-center d-block outline-0 p-4" key={item.id}>
              <img className="d-unset img-fluid" src={item.logo} alt={item.title} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  </section>
  )
}

export default Clients