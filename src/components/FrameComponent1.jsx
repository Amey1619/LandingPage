import "./FrameComponent1.css";

const FrameComponent1 = () => {
  return (
    <div className="pricing-container-wrapper">
      <div className="pricing-container">
        <div className="pricing-elements">
          <div className="pricing-grid">
            <div className="pricing-row-one">
              <div className="no-over-pricing">No over-pricing</div>
            </div>
            <div className="cheapest-costs-i">
              Cheapest costs I Competitive prices
            </div>
          </div>
        </div>
        <img className="pricing-container-child" alt="" src="/line-295.svg" />
        <div className="download-callout">
          <div className="callout-content">
            <div className="button-wrapper">
              <b className="download-now">Download Now!</b>
            </div>
            <div className="app-icons">
              <img
                className="image-6-icon"
                loading="lazy"
                alt=""
                src="/image-6@2x.png"
              />
              <img
                className="image-7-icon"
                loading="lazy"
                alt=""
                src="/image-7@2x.png"
              />
            </div>
          </div>
        </div>
        <img className="pricing-container-item" alt="" src="/line-296.svg" />
        <div className="pricing-elements1">
          <div className="frame-parent1">
            <div className="no-return-fare-wrapper">
              <div className="no-return-fare">No return fare</div>
            </div>
            <div className="one-way-cab-fare">
              One-Way cab fare I No hidden charges
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
