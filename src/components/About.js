const About = props => {
    return (
 
      <section id="about">
        <div className="wrapper">
          <article>
            <div className="title">
              <h3>Who am i?</h3>
              <p className="separator" />
            </div>
            <div className="desc full">
              <h4 className="subtitle">My name is Gantushig</h4>
              <p>
              I am a web developer with 8 years of experience in designing, developing, and managing complex web applications.
              </p>
              <p>
                I really enjoy solving problems as well as making things pretty and easy to use. I
                can't stop learning new things; the more, the better. I also love sports with ball like tennis, basketball etc. and pretty good at it ^_-
              </p>
            </div>
            <div className="title">
              <h3>What do I do?</h3>
              <p className="separator" />
            </div>
            <div className="desc">
              <h4 className="subtitle">I'm a Front-end developer.</h4>
              <p>
                For the front-end I usually work with Javascript, either standalone or including
                popular frameworks like ReactJS and Angular. I also make the web pretty by using Sass,
                CSS and, whenever needed, any of their friends: Bootstrap, MaterialUI, etc.
              </p>
            </div>
            <div className="desc">
              <h4 className="subtitle">Also, good at backend development</h4>
              <p>
                I usually work with Javascript and Java (NodeJS, Express, Spring boot, MongoDB etc). But, of
                course, whenever the project requires Python, PHP language, I do Python and PHP as well (Django, Flask, Wordpress, Laravel, etc).
              </p>
            </div>
          </article>
        </div>
      </section>
    );
  };

export default About