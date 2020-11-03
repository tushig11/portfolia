import SocialLinks from './SocialLinks'

const Contact = props => {
    return (
      <section id="contact">
        <div className="container">
          <div className="heading-wrapper">
            <div className="heading">
              <p className="title">
                Want to <br />
                contact me?
              </p>
              <p className="separator" />
              <p className="subtitle">
                Please, send an email to {''}
                <span className="mail">
                    gantushig.javkhlan@gmail.com
                </span>
              </p>
            </div>
            <SocialLinks />
          </div>
        </div>
      </section>
    );
};

export default Contact;