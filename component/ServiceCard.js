import Aos from "aos";
import React, { useEffect } from "react";

function ServiceCard() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="serviceCard row ">
      <div className="serviceCard__1 col-sm-6 col-12">
        <div
          className="serviceCard__11"
          data-aos="slide-right"
          data-aos-duration="1000"
        >
          <div className="w-100 mx-auto ">
            <img src="https://i.ibb.co/zGjHBBM/webapp.png" />
          </div>
          <h5>Web Application</h5>
          <p>
            From front end to backend and everything in between our integrated
            solutions are built around modern web technologies that run
            seamlessly on most modern web browser and apps
          </p>
        </div>
      </div>
      <div className="serviceCard__1 col-sm-6 col-12">
        <div
          className="serviceCard__11"
          data-aos="slide-right"
          data-aos-duration="1000"
        >
          <div className="w-100 mx-auto ">
            <img
              src="https://i.ibb.co/S7pjPFY/ecomm.png"
              width="100%"
              height="150px"
            />
          </div>
          <h5>Ecommerce</h5>
          <p>
            Being an ecommerce seller isn't simple, not unless you insist on our
            e-commerce solutions. Cut the chaos associated with website
            management when we build you next ecommerce platfrom
          </p>
        </div>
      </div>
      <div className="serviceCard__1 col-sm-6 col-12">
        <div
          className="serviceCard__11"
          data-aos="slide-right"
          data-aos-duration="1000"
        >
          <div className="w-100 mx-auto ">
            <img
              src="https://i.ibb.co/v1nmyk3/ads-logo.png"
              width="100%"
              height="150px"
            />
          </div>
          <h5>Advertising Support</h5>
          <p>
            We provide Advertising Support to our client through Google Ads,
            Social Media Marketing and from various means. It will definitely
            boost your start-up
          </p>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
