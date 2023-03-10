import './comments.css'
import comments from '../../data/comments.json'
import moment from 'moment'

const Comments = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h4 className="font-weight-bold mb-3">Comments</h4>
            <div className="bg-gray p-5 mb-4">
              {comments.map((item) => (
                <div className="media py-4" key={item.id}>
                <img src={item.photo} className="img-fluid align-self-start rounded-circle mr-3" alt="" />
                <div className="media-body">
                  <h5 className="mt-0">{item.user}</h5>
                  <p>{moment().subtract(item.hours,'hour').fromNow()}</p>
                  <p>Ne erat velit invidunt his. Eum in dicta veniam interesset, harum fuisset te nam ea cu lupta
                    definitionem.</p>
                  <span className="btn btn-transparent btn-sm pl-0">Reply</span>
                  {item.replies.map((rep) => (
                    <div className="media my-5" key={rep.id}>
                    <img src={rep.photo} className="img-fluid align-self-start rounded-circle mr-3" alt="" />
                    <div className="media-body">
                      <h5 className="mt-0">{rep.user}</h5>
                      <p>{moment().subtract(rep.hours,'hour').fromNow()}</p>
                      <p>{rep.text}</p>
                        <span className="btn btn-transparent btn-sm pl-0">Reply</span>
                    </div>
                  </div>
                  ))}
                </div>
              </div>
              ))}
            </div>
            <div className="mt-5">
              <h4 className="font-weight-bold mb-3 border-bottom pb-3">Leave a Comment</h4>
              <form className="row">
                <div className="col-md-6">
                  <input type="text" className="form-control mb-3" placeholder="First Name" name="fname" id="fname" required="" />
                  <input type="text" className="form-control mb-3" placeholder="Last Name" name="lname" id="lname" required="" />
                  <input type="text" className="form-control mb-3" placeholder="Email *" name="mail" id="mail" required="" />
                </div>
                <div className="col-md-6">
                  <textarea name="comment" id="comment" placeholder="Message" className="form-control mb-4"></textarea>
                  <button type="submit" className="btn btn-primary w-100">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Comments