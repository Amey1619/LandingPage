import "./CarTypes.css";

const CarTypes = () => {
  return (
    <section className="car-types">
      <div className="car-type-options">
        <div className="s-u-v-options">
          <div className="button">
            <div className="label">CAR TYPE</div>
          </div>
          <div className="s-u-v-types">
            <div className="s-u-v-types-list">
              <div className="s-u-v-types-list-child" />
              <div className="ac-sedans">AC Sedans</div>
              <div className="ac-hatchbacks">AC Hatchbacks</div>
              <div className="ac-suv">{`AC SUV `}</div>
            </div>
          </div>
        </div>
        <div className="car-type-buttons">
          <div className="button1">
            <h2 className="label1">MODEL INCLUDES</h2>
          </div>
          <div className="car-type-details">
            <div className="car-type-details-child" />
            <div className="etios-amaze-dzire">Etios, Amaze, Dzire etc.</div>
            <div className="wagon-r-celerio">Wagon R, Celerio, Micra etc.</div>
            <div className="ertiga-xylo-etc">{`Ertiga, Xylo etc. `}</div>
          </div>
        </div>
        <div className="car-type-buttons1">
          <div className="button2">
            <h2 className="label2">PASSENGERS</h2>
          </div>
          <div className="rectangle-group">
            <div className="frame-child3" />
            <div className="pax">4 Pax</div>
            <div className="pax1">4 Pax</div>
            <div className="pax2">6-7 Pax</div>
          </div>
        </div>
        <div className="trip-options1">
          <div className="button3">
            <h2 className="label3">IDEAL FOR</h2>
          </div>
          <div className="trip-types">
            <div className="trip-types-child" />
            <p className="comfortable-trips-with">
              Comfortable trips with small families
            </p>
            <p className="budget-trips-over">
              Budget trips over short distances
            </p>
            <p className="premium-trips-with">
              Premium trips with large families
            </p>
          </div>
        </div>
        <div className="car-type-buttons2">
          <div className="button4">
            <h2 className="label4">FARE</h2>
          </div>
          <div className="rectangle-container">
            <div className="frame-child4" />
            <div className="rs11km">Rs.11/KM</div>
            <div className="rs11km1">Rs.11/KM</div>
            <div className="rs13km">Rs.13/KM</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarTypes;
