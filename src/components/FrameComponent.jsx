import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <section className="why-yatri-container-wrapper">
      <div className="why-yatri-container">
        <div className="yatri-header">
          <h1 className="why-yatri-container1">
            <span className="why-yatri-container2">
              <span>{`Why `}</span>
              <span className="yatri">Yatri</span>
              <span> ?</span>
            </span>
          </h1>
        </div>
        <div className="car-rental-image">
          <img
            className="carrentalagra-1-icon"
            loading="lazy"
            alt=""
            src="/carrentalagra-1@2x.png"
          />
          <div className="fast-response-container-wrapper">
            <div className="fast-response-container">
              <div className="fast-response-wrapper">
                <div className="fast-response-content">
                  <img
                    className="fast-response-icon"
                    loading="lazy"
                    alt=""
                    src="/vector.svg"
                  />
                  <div className="fast-response-time-parent">
                    <div className="fast-response-time">Fast response time</div>
                    <p className="avail-best-car">
                      Avail Best Car Rental Service in Lucknow with driver for
                      Local or Outstation within the moment of your call for
                      best car hire experience.
                    </p>
                  </div>
                </div>
              </div>
              <div className="vast-fleet-container-wrapper">
                <div className="vast-fleet-container">
                  <div className="vast-fleet-wrapper">
                    <img
                      className="vuesaxlinearpeople-icon"
                      loading="lazy"
                      alt=""
                      src="/vuesaxlinearpeople.svg"
                    />
                  </div>
                  <div className="vast-fleet-parent">
                    <b className="vast-fleet">Vast fleet</b>
                    <p className="we-have-all">
                      We have all kinds of Car on Rent available like Sedan,
                      Suv, Muv, Premium Sedan, Tampo Traveller etc as per ur
                      requirement
                    </p>
                  </div>
                </div>
              </div>
              <div className="easy-order-container-wrapper">
                <div className="easy-order-container">
                  <div className="easy-order-wrapper">
                    <img
                      className="easy-order-wrapper-child"
                      loading="lazy"
                      alt=""
                      src="/group-1686551840.svg"
                    />
                  </div>
                  <div className="easy-to-order-parent">
                    <div className="easy-to-order">Easy to order</div>
                    <div className="easily-book-cab">
                      Easily Book Cab Online with our website or call our
                      customer support team.
                    </div>
                  </div>
                </div>
              </div>
              <div className="great-tariffs-container-parent">
                <div className="great-tariffs-container">
                  <img
                    className="paid-icon"
                    loading="lazy"
                    alt=""
                    src="/paid.svg"
                  />
                </div>
                <div className="great-tariffs-parent">
                  <b className="great-tariffs">Great tariffs</b>
                  <p className="rent-a-car">{`Rent A Car !Our car hire tariff are very low when compare to other operators in Lucknow. Book online cabs with best prices in Lucknow at Yatri Car Rental. `}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
