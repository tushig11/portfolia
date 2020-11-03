import Project from './Project'

const Projects = props => {
    const link = "https://www.dropbox.com/s/hv96yz7lq3vu195/TushigResume.pdf?dl=0"
    return (
      <section id="projects">
        <div className="projects-container">
          <div className="heading">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <h3 className="title">Click here to download my resume</h3>
          </a>
            <p className="separator" />
          </div>
          <div className="projects-wrapper">
            <Project
              title="Check out my github"
              img={'https://techcrunch.com/wp-content/uploads/2010/07/github-logo.png'}
              tech="js react css java sass node python"
              repo="https://github.com/tushig11"
            >
              <small>JavaScript, React, CSS, Java, Sass, Node and HTML.</small>
              <p className="separator" />
            </Project>
          </div>
        </div>
      </section>
    );
  };

export default Projects