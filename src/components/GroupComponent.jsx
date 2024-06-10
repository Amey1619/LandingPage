import "./GroupComponent.css";

const GroupComponent = () => {
  return (
    <footer className="vector-container">
      <img className="rectangle-icon" alt="" src="/rectangle-34624362.svg" />
      <div className="logo-container">
        <img
          className="logo-container-child"
          loading="lazy"
          alt=""
          src="/group-195@2x.png"
        />
      </div>
      <div className="footer-links">
        <div className="link-list">
          <div className="links">
            <a className="home">Home</a>
          </div>
          <div className="links1">
            <a className="about">About</a>
          </div>
          <a className="services">Services</a>
          <div className="links2">
            <a className="news">News</a>
          </div>
          <div className="contact">Contact</div>
          <a className="privacy-policy">Privacy Policy</a>
        </div>
      </div>
      <div className="newsletter-signup">
        <div className="newsletter-title">
          <div className="newsletter">Newsletter</div>
        </div>
        <div className="email-input">
          <div className="rectangle-parent2">
            <div className="frame-child7" />
            <div className="email">Email</div>
          </div>
          <div className="submit-button">
            <div className="submit-button-child" />
            <img
              className="submit-icon"
              loading="lazy"
              alt=""
              src="/vector-1.svg"
            />
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="all-copyrights-are">
          All Copyrights are reserved by RIDE EVEE
        </div>
      </div>
    </footer>
  );
};

export default GroupComponent;
