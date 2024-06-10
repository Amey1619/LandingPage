import "./Container.css";

const Container = () => {
  return (
    <header className="container">
      <div className="frame-parent">
        <div className="whatsapp-image-2023-09-24-at-1-wrapper">
          <img
            className="whatsapp-image-2023-09-24-at-1"
            loading="lazy"
            alt=""
            src="/whatsapp-image-20230924-at-1203-3@2x.png"
          />
        </div>
        <div className="frame-wrapper">
          <div className="frame-group">
            <div className="frame-container">
              <div className="vector-parent">
                <img className="frame-inner" alt="" src="/vector-8.svg" />
                <img className="vector-icon" alt="" src="/vector-11.svg" />
                <div className="wrapper">
                  <a className="a">24</a>
                </div>
              </div>
            </div>
            <div className="frame-div">
              <div className="vector-group">
                <img className="frame-child1" alt="" src="/vector-9.svg" />
                <img className="frame-child2" alt="" src="/vector-10.svg" />
                <div className="frame">
                  <a className="a1">7</a>
                </div>
              </div>
              <div className="rectangle-parent">
                <div className="rectangle-div" />
                <a className="a2">+91876578984</a>
              </div>
            </div>
          </div>
        </div>
        <div className="download-container-parent">
          <div className="download-container">
            <div className="download-elements-wrapper">
              <div className="download-elements">
                <div className="download-icon" />
                <img
                  className="download-for-offline-icon"
                  loading="lazy"
                  alt=""
                  src="/download-for-offline.svg"
                />
              </div>
            </div>
            <a className="download-app">Download App</a>
          </div>
          <div className="name-container">
            <div className="profile-elements-wrapper">
              <div className="profile-elements">
                <div className="profile-icon" />
                <img
                  className="profile-elements-child"
                  alt=""
                  src="/group-1686551795.svg"
                />
              </div>
            </div>
            <a className="ravi">Ravi</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Container;
