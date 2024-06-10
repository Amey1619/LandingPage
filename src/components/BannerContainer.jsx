import "./BannerContainer.css";

const BannerContainer = () => {

  return (
    <div className="banner-container">
      <div className="best-road-trips-in-india-1-parent">
        <img
          className="best-road-trips-in-india-1-icon"
          alt=""
          src="/bestroadtripsinindia-1@2x.png"
        />
        <div className="banner-dot" />
      </div>
      <div className="banner-container-inner">
        <form className="input-background-parent">
          <div className="input-background" />
          <div className="trip-options">
            <div className="trip-type-parent">
              <div className="trip-type">
                <button className="trip-type-options">
                  <div className="outstation">Outstation</div>
                </button>
                <button className="trip-type-options1">
                  <div className="local">Local</div>
                </button>
                <button className="trip-type-options2">
                  <div className="airport">Airport</div>
                </button>
              </div>
            </div>
          </div>
          <div className="location-input">
            <div className="from-input">
              <div className="input-elements">
                <div className="from-container">
                  <div className="from-input-wrapper">
                    <b className="from">FROM</b>
                    <img
                      className="icon-x-circle-close-delete"
                      alt=""
                      src="/-icon-x-circle-close-delete.svg"
                    />
                  </div>
                  <input className="input-divider" type="text" />
                </div>
                <img
                  className="compare-arrows-icon"
                  alt=""
                  src="/compare-arrows.svg"
                />
              </div>
              <div className="pickup-input">
                <b className="pick-up-date">PICK UP DATE</b>
                <div className="pickup-calendar">
                  <img className="icon" alt="" src="/icon.svg" />
                  <input className="calendar-divider" type="date" />
                </div>
              </div>
            </div>
            <div className="destination-input">
              <div className="to-container">
                <b className="to">TO</b>
                <div className="to-calendar">
                  <img className="icon1" alt="" src="/icon-1.svg" />
                  <input className="to-divider" type="text" />
                </div>
              </div>
              <div className="pickup-location">
                <div className="pickup-location-container">
                  <b className="pick-up-at">PICK UP AT</b>
                  <div className="pickup-location-icon">
                    <img className="icon2" alt="" src="/icon-2.svg" />
                    <input className="location-divider" type="text" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="explore-button">
            <button className="button-container">
              <b className="explore-cabs">EXPLORE CABS</b>
            </button>
          </div>
        </form>
      </div>
      <div className="indias-leading-one-way-container">
        <span className="indias-leading-one-way-container1">
          <p className="indias-leading">
            <span className="indias">{`​India's `}</span>
            <span className="leading">Leading</span>
          </p>
          <p className="one-way-inter-city-cab-service">
            <span className="one-way-inter-city">One-Way Inter-City</span>
            <span className="cab-service-provider"> Cab Service Provider</span>
          </p>
        </span>
      </div>
    </div>
  );
};

export default BannerContainer;
