import photo from '../../assets/images/about/author.jpg'
import sign from '../../assets/images/about/signature.png'


const AboutMe = () => {
  return (
    <section className="section pt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div data-aos="fade-right" data-aos-delay="100">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.</p>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident.</p>
              <p>Deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia.</p>
            </div>
          </div>
          <div className="col-md-4 text-center drag-lg-top">
            <div className="shadow-down mb-4">
              <img src={photo} alt="author" className="img-fluid w-100 rounded-lg border-thick border-white" data-aos="fade-left" data-aos-delay="300" />
            </div>
            <img src={sign} alt="signature" className="img-fluid" data-aos="fade-up"/>
            <h4>Waqar Ahmed</h4>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe