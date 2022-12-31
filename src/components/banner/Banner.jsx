import React from 'react'
import leaf from '../../assets/images/illustrations/leaf-bg.png'
import dots from '../../assets/images/illustrations/dots-cyan.png'
import orangeleaf from '../../assets/images/illustrations/leaf-orange.png'
import orange_dots from '../../assets/images/illustrations/dots-orange.png'
import yellow_leaf from "../../assets/images/illustrations/leaf-yellow.png"
import leaf_cyan from '../../assets/images/illustrations/leaf-cyan.png'
import group_dots from "../../assets/images/illustrations/dots-group-orange.png"
import leaf_pink from "../../assets/images/illustrations/leaf-pink-round.png"
import leaf_cyan2 from "../../assets/images/illustrations/leaf-cyan-2.png"
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <section className="hero-area bg-primary" id="parallax">
      <div className="container">
        <div className="row">
          <div className="col-lg-11 mx-auto">
            <h1 data-aos="fade-up" data-aos-delay="500" data-aos-duration="2000" className="text-white font-tertiary">Hi! I’m <br /> Waqar Ahmed <br /> UX designer</h1>
          </div>
        </div>
      </div>
      <div className="layer-bg w-100">
        <img className="img-fluid w-100" src={leaf} alt="bg-shape" />
      </div>
      <div className="layer" id="l2">
        <img src={dots} alt="bg-shape" />
      </div>
      <div className="layer" id="l3" >
        <img src={orangeleaf} alt="bg-shape" data-aos="fade-down" data-aos-delay="1000" />
      </div>
      <div className="layer" id="l4">
        <img src={orange_dots} alt="bg-shape" data-aos="fade-up" data-aos-delay="2000" />
      </div>
      <div className="layer" id="l5">
        <img src={yellow_leaf} alt="bg-shape" data-aos="fade-left" data-aos-delay="1500"  />
      </div>
      <div className="layer" id="l6">
        <img src={leaf_cyan} alt="bg-shape" data-aos="fade-up" data-aos-delay="0" />
      </div>
      <div className="layer" id="l7">
        <img src={group_dots} alt="bg-shape" data-aos="fade-up" data-aos-delay="0" />
      </div>
      <div className="layer" id="l8">
        <img src={leaf_pink} alt="bg-shape" data-aos="fade-up" data-aos-delay="0"/>
      </div>
      <div className="layer" id="l9">
        <img src={leaf_cyan2} alt="bg-shape" data-aos="fade-up" data-aos-delay="0" />
      </div>
      <ul className="list-unstyled ml-5 mt-3 position-relative zindex-1">
        <li className="mb-3"><Link className="text-white" to="/"><i className="ti-facebook"></i></Link></li>
        <li className="mb-3"><Link className="text-white" to="/"><i className="ti-instagram"></i></Link></li>
        <li className="mb-3"><Link className="text-white" to="/"><i className="ti-dribbble"></i></Link></li>
        <li className="mb-3"><Link className="text-white" to="/"><i className="ti-twitter"></i></Link></li>
      </ul>
    </section>
  )
}

export default Banner