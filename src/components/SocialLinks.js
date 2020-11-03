const SocialLinks = props => {
    return (
      <div className="social">
        <a
          href="https://www.linkedin.com/in/gantushigjavkhlan/"
          target="_blank"
          rel="noopener noreferrer"
          title="Link to author's Twitter profile"
        >
          {' '}
          <i className="fab fa-twitter" />
        </a>
        <a
          id="profile-link"
          href="https://github.com/tushig11"
          target="_blank"
          rel="noopener noreferrer"
          title="Link to author's GitHub Profile"
        >
          {' '}
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.instagram.com/offline1181/"
          target="_blank"
          rel="noopener noreferrer"
          title="Link to author's Codepen Profile"
        >
          {' '}
          <i className="fab fa-codepen" />
        </a>
      </div>
    );
  };

  export default SocialLinks;