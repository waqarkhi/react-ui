import './footer.css'
import footer from '../../data/footer'

const Footer = () => {
  return (
    <footer className="bg-dark footer-section">
      <div className="section">
        <div className="container">
          <div className="row">
            {footer.map((item) => (
              <div className={`col-md-${item.col}`} key={item.id}>
                <h5 className="text-light">{item.title}</h5>
                <p className="text-white paragraph-lg font-secondary">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="border-top text-center border-dark py-5">
        <p className="mb-0 text-light">Copyright &copy;{new Date().getFullYear()} Designed &amp; Developed by <a className="text-white-50" href="https://waqaronline.com/">Waqar Ahmed</a></p>
      </div>
    </footer>
  )
}

export default Footer