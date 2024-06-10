import Container from "../components/Container";
import BannerContainer from "../components/BannerContainer";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import CarTypes from "../components/CarTypes";
import Benefits from "../components/Benefits";
import OneWayCabBenefits from "../components/OneWayCabBenefits";
import GroupComponent from "../components/GroupComponent";
import "./FrontendPage.css";

const FrontendPage = () => {
  return (
    <div className="frontend-page">
      <Container />
      {/* <div className="ellipse-parent">
        <div className="frame-child" />
        <div className="frame-item" />
      </div> */}
      <section className="banner-container-parent">
        <BannerContainer />
        <FrameComponent1 />
      </section>
      <FrameComponent />
      <CarTypes />
      <Benefits />
      <section className="choose-cab-container-wrapper">
        <div className="choose-cab-container">
          <div className="choose-cab-content">
            <div className="why-choose-ac-bus-or-ac-train-parent">
              <h2 className="why-choose-ac-container">
                <span>{`Why choose AC Bus or AC Train for your `}</span>
                <span className="one-way-journey">One-way Journey</span>
                <span>?</span>
              </h2>
              <p className="our-oneway-cab-container">
                <span className="our-oneway-cab-service-is-chea">
                  <span>
                    Our oneway cab service is cheaper than AC bus and 2 tier AC
                    train ticket fares, it reduces your travel time and you
                    travel at your own private space also to enjoy your journey.
                    Our one way taxi will come at your doorstep and take you to
                    your desired destination. So book you oneway cab from
                    Lucknow to Gorakhpur or Varanasi to Bareilly.
                  </span>
                </span>
                <span className="read-more">
                  <span className="read-more1">read More....</span>
                </span>
              </p>
            </div>
          </div>
          <img
            className="image-processing20200705-14536-icon"
            loading="lazy"
            alt=""
            src="/image-processing2020070514536p3d6n5-1@2x.png"
          />
        </div>
      </section>
      <OneWayCabBenefits />
      <section className="scenic-landscapes">
        <div className="scenic-landscapes-container">
          <div className="description">
            <h1 className="discovering-indias-diverse-container">
              <p className="discovering-indias-diverse">
                Discovering India's diverse landscapes,
              </p>
              <p className="one-scenic-road">one scenic road trip at a time</p>
            </h1>
          </div>
          <div className="experience">
            <p className="experience-the-thrill-container">
              <ul className="experience-the-thrill-of-road">
                <li className="experience-the-thrill">
                  Experience the thrill of road travel with our reliable car
                  rental and taxi service as we explore the diverse landscapes
                  of India together. We're passionate about making car hire
                  accessible and enjoyable for everyone.
                </li>
              </ul>
              <span className="blank-line">&nbsp;</span>
              <ul className="instead-of-worrying-about-the">
                <li className="instead-of-worrying">
                  Instead of worrying about the road, relax in our
                  chauffeur-driven cabs on your next vacation. With a presence
                  in over 2000 cities across India, we're here to take you
                  wherever your heart desires with our car rental services.
                </li>
              </ul>
              <span className="blank-line1">&nbsp;</span>
              <ul className="we-cherish-the-freedom-to-stop">
                <li className="we-cherish-the">
                  We cherish the freedom to stop, breathe in the fresh air,
                  immerse in local cultures, and Savor regional cuisines along
                  the way. These moments of discovery enrich your travels and
                  create lasting memories through our rent a car service.
                </li>
              </ul>
              <span className="blank-line2">&nbsp;</span>
              <ul className="no-destination-is-too-far-or-t">
                <li className="no-destination-is">
                  No destination is too far or too close; we encourage you to
                  explore the beauty around you with our car hire options. Pack
                  your bags, set out on weekend adventures, and uncover the gems
                  in your vicinity with our taxi service.
                </li>
              </ul>
              <span className="blank-line3">&nbsp;</span>
              <ul className="planning-your-trip-is-a-breeze">
                <li className="planning-your-trip">
                  Planning your trip is a breeze with our user-friendly website,
                  or you can chat with our travel experts at 8960170877 for
                  personalized guidance on car rental. Our cab booking app
                  simplifies the process, ensuring a hassle-free experience when
                  you rent a car.
                </li>
              </ul>
              <span className="blank-line4">&nbsp;</span>
              <ul className="our-experienced-drivers-are-yo">
                <li className="our-experienced-drivers">
                  Our experienced drivers are your companions on the road,
                  guiding you through India's best experiences with our car
                  rental and taxi service. From booking to your safe return
                  home, we're dedicated to ensuring you have an exceptional road
                  trip.
                </li>
              </ul>
            </p>
          </div>
        </div>
      </section>
      <section className="why-yatri-rental">
        <div className="rental">
          <div className="yatri-info">
            <h1 className="why-choose-yatri">Why Choose Yatri Car Rental?</h1>
          </div>
          <div className="yatri-platform">
            <div className="platform-info">
              <p className="yatri-car-rental-container">
                <ul className="yatri-car-rental-has-been-a-tr">
                  <li className="yatri-car-rental">
                    Yatri Car Rental has been a trusted digital platform for
                    booking local and outstation car rental and taxi services
                    since 2014. Our primary goal is to offer our clients an
                    exceptional car rental and cab booking experience, and we
                    take great pride in our commitment to safety, reliability,
                    and experienced drivers. These qualities are evident across
                    all our car rental services, making us the preferred choice
                    for those seeking rental cars and taxi services in INDIA.
                  </li>
                  <li className="service-you-can">
                    Service You Can Trust - At Yatri Car Rental, we are
                    dedicated to providing dependable services in INDIA. We
                    guarantee that we won't cancel any bookings without advance
                    notification, and our rental cars are meticulously
                    maintained to ensure a seamless and stress-free journey for
                    our clients.
                  </li>
                  <li className="safety-is-our">
                    Safety is Our Priority - Safety and comfort are paramount at
                    Yatri Car Rental in INDIA. We exclusively hire experienced
                    and skilled drivers who possess in-depth knowledge of the
                    city's roads and traffic regulations. Our drivers are
                    committed to delivering excellent customer service and
                    ensuring a comfortable and stress-free travel experience for
                    passengers.
                  </li>
                  <li className="expert-chauffeurs-at">
                    Expert Chauffeurs at Your Service - Yatri Car Rental takes
                    pride in selecting only the most skilled, knowledgeable, and
                    courteous drivers to enhance the convenience and
                    satisfaction of our clients.
                  </li>
                  <li className="extensive-industry-experience">
                    Extensive Industry Experience - With over 10 years of
                    industry expertise, Yatri Car Rental is your go-to choice
                    for premium car hire services in Lucknow, Uttar Pradesh.
                  </li>
                  <li>
                    Proven Track Record - We place a strong emphasis on
                    transparency in our billing system and consistently strive
                    to provide a seamless and satisfactory experience for our
                    customers. Our commitment to customer comfort and
                    satisfaction is evident in our outstanding Google ratings,
                    where we consistently receive ratings of 4.8 stars or
                    higher.
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </section>
      <GroupComponent />
    </div>
  );
};

export default FrontendPage;
