import "./Benefits.css";

const Benefits = () => {
  return (
    <section className="benefits">
      <div className="frame-parent2">
        <div className="return-fare-container-parent">
          <div className="return-fare-container">
            <img
              className="return-fare-container-child"
              loading="lazy"
              alt=""
              src="/group-1000001863.svg"
            />
          </div>
          <div className="return-fare-title-wrapper-parent">
            <div className="return-fare-title-wrapper">
              <div className="return-fare-not">
                {`Return Fare, Not Fair!`}
              </div>
            </div>
            <p className="why-pay-for">
              Why Pay for Return Journey when you are travelling one-way? Now
              get discounted AC Taxi at just half of the round trip cost for
              your one-way travel.
            </p>
          </div>
        </div>
        <div className="benefit-dividers" />
        <div className="g-p-s-billing-container-parent">
          <div className="g-p-s-billing-container">
            <img
              className="g-p-s-billing-container-child"
              loading="lazy"
              alt=""
              src="/group-1686551829.svg"
            />
          </div>
          <div className="gps-based-billing-system-parent">
            <div className="gps-based-billing">{`GPS Based Billing System `}</div>
            <div className="g-p-s-billing-description-wrap">
              <p className="since-the-gps">
                Since the GPS data captures the actual distance and time
                traveled, it reduce the chance of Kilometer tampering or
                discrepancies in billing.
              </p>
            </div>
          </div>
        </div>
        <div className="benefit-dividers1" />
        <div className="available-routes-container-parent">
          <div className="available-routes-container">
            <img
              className="vuesaxlineardriving-icon"
              loading="lazy"
              alt=""
              src="/vuesaxlineardriving.svg"
            />
          </div>
          <div className="now-available-routes">Now available routes are!</div>
          <div className="available-routes-list-wrapper">
            <p className="lucknow-gorakhpur">
              Lucknow | Gorakhpur | Varanasi | Allahabad | Bareilly
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Benefits;
