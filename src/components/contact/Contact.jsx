import './contact.css'
import Title from '../base/Title'
import contact from '../../data/contact'
import Input from '../base/Input'
import Textarea from '../base/Textarea'
import Button from '../base/Button'

const Contact = () => {
  return (
    <section className="section section-on-footer" style={{backgroundImage: "url(/images/backgrounds/bg-dots.png)"}}>
  <div className="container">
    <div className="row">
      <Title title="Contact Info" />
      <div className="col-lg-8 mx-auto">
        <div className="bg-white rounded text-center p-5 shadow-down" data-aos="fade-up">
          <h4 className="mb-80">Contact Form</h4>
          <form action="#" className="row">
            {contact.map((item) => (
              <div className={`col-md-${item.col}`} key={item.id}>
                {(item.type === 'text' || item.type === 'email') && <Input info={item} />}
                {item.type === 'textarea' && <Textarea info={item} />}
                {item.type === 'button' && <Button info={item} />}
              </div>
            ))}
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Contact