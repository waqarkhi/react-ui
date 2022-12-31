import leafBG from '../../assets/images/illustrations/leaf-bg-top.png'
import dotsGroupSM from '../../assets/images/illustrations/dots-group-sm.png'
import leafYellow from '../../assets/images/illustrations/leaf-yellow.png'
import leafOrange from '../../assets/images/illustrations/leaf-orange.png'
import dotsGroupCyan from '../../assets/images/illustrations/dots-group-cyan.png'
import leafCyan from '../../assets/images/illustrations/leaf-cyan-lg.png'

import titleBG from '../../assets/images/illustrations/page-title.png'
import pinkLeaf from "../../assets/images/illustrations/leaf-pink-round.png"
import cyanDots from "../../assets/images/illustrations/dots-cyan.png"


const PageTitle = ({title,align}) => {
  if (align !== undefined) {
    return (
      <section className="page-title bg-primary position-relative">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="text-white font-tertiary">{title}</h1>
            </div>
          </div>
        </div>
        <img src={titleBG} alt="illustrations" className="bg-shape-1 w-100" />
        <img src={pinkLeaf} alt="illustrations" className="bg-shape-2" data-aos="fade-up" data-aos-delay="300" />
        <img src={cyanDots} alt="illustrations" className="bg-shape-3" data-aos="fade-up" data-aos-delay="600" />
        <img src={leafOrange} alt="illustrations" className="bg-shape-4" data-aos="fade-up" data-aos-delay="900" />
        <img src={leafYellow} alt="illustrations" className="bg-shape-5" data-aos="fade-up" data-aos-delay="1200" />
        <img src={dotsGroupCyan} alt="illustrations" className="bg-shape-6" data-aos="fade-up" data-aos-delay="1500" />
        <img src={leafCyan} alt="illustrations" className="bg-shape-7" data-aos="fade-up" data-aos-delay="1800" />
      </section>
    )
  } else {
    return (
      <section className="page-title-alt bg-primary position-relative">
        <div className="container"data-aos="fade-up" data-aos-delay="100">
            <div className="row">
            <div className="col-12">
                <h1 className="text-white font-tertiary">{title}</h1>
            </div>
            </div>
        </div>
        
        <img src={leafBG} alt="illustrations" className="bg-shape-1 w-100" />
        <img src={dotsGroupSM} alt="illustrations" className="bg-shape-2" data-aos="fade-up" data-aos-delay="300" />
        <img src={leafYellow} alt="illustrations" className="bg-shape-3" data-aos="fade-up" data-aos-delay="600" />
        <img src={leafOrange} alt="illustrations" className="bg-shape-4" data-aos="fade-up" data-aos-delay="900" />
        <img src={dotsGroupCyan} alt="illustrations" className="bg-shape-5" data-aos="fade-up" data-aos-delay="1200" />
        <img src={leafCyan} alt="illustrations" className="bg-shape-6" data-aos="fade-up" data-aos-delay="1500" />
      </section>
    )
  }
}

export default PageTitle