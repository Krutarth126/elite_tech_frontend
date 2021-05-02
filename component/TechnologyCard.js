import React, { useEffect } from "react";
import aos from "aos";

function TechnologyCard() {
  useEffect(() => {
    aos.init();
  }, []);
  return (
    <div>
      <div className="row m-auto" style={{ width: "95%" }}>
        <div className="col-sm-4 col-12">
          <div
            className="carddd m-2"
            data-aos="slide-up"
            data-aos-duration="1000"
            style={{ width: "18rem" }}
          >
            <div style={{ minHeight: "200px" }}>
              <img
                className="carddd-img"
                src="https://i.ibb.co/ccvk58d/mongo.png"
                alt="Card image cap"
                width="200px"
                height="200px"
              />
            </div>
            <div className="carddd-body">
              <h5 className="carddd-title">MongoDB</h5>
              <p className="carddd-text">
                MongoDB is a source-available cross-platform document-oriented
                database program. Classified as a NoSQL database program,
                MongoDB uses JSON-like documents with optional schemas.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-4 col-12">
          <div
            className="carddd m-2"
            data-aos="slide-up"
            data-aos-duration="1000"
            style={{ width: "18rem" }}
          >
            <div style={{ minHeight: "200px" }}>
              <img
                className="carddd-img"
                src="https://i.ibb.co/8m2dgFR/express.png"
                alt="Card image cap"
                width="200px"
                height="150px"
              />
            </div>
            <div className="carddd-body">
              <h5 className="carddd-title">Express js</h5>
              <p className="carddd-text">
                Express is a minimal and flexible Node.js web application
                framework that provides a robust set of features for web and
                mobile applications.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-4 col-12">
          <div
            className="carddd m-2"
            data-aos="slide-up"
            data-aos-duration="1000"
            style={{ width: "18rem" }}
          >
            <div style={{ minHeight: "200px" }}>
              <img
                className="carddd-img"
                src="https://i.ibb.co/Fqv1GvQ/react.webp"
                alt="Card image cap"
                width="200px"
                height="150px"
              />
            </div>
            <div className="carddd-body">
              <h5 className="carddd-title">React JS</h5>
              <p className="carddd-text">
                React is an open-source, front end, JavaScript library for
                building user interfaces or UI components. It is maintained by
                Facebook and a community of individual developers and companies
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-4 col-12">
          <div
            className="carddd m-2"
            data-aos="slide-up"
            data-aos-duration="1000"
            style={{ width: "18rem" }}
          >
            <div style={{ minHeight: "200px" }}>
              <img
                className="carddd-img"
                src="https://i.ibb.co/fQvpGdB/next.png"
                alt="Card image cap"
                width="200px"
                height="150px"
              />
            </div>
            <div className="carddd-body">
              <h5 className="carddd-title">Next Js</h5>
              <p className="carddd-text">
                Next.js is an open-source React front-end development web
                framework created by Vercel that enables functionality such as
                server-side rendering and generating static websites for React
                based web
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-4 col-12">
          <div
            className="carddd m-2"
            data-aos-duration="1000"
            data-aos="slide-up"
            style={{ width: "18rem" }}
          >
            <div style={{ minHeight: "200px" }}>
              <img
                className="carddd-img"
                src="https://i.ibb.co/frdw2Pq/node.png"
                alt="Card image cap"
                width="200px"
                height="150px"
              />
            </div>
            <div className="carddd-body">
              <h5 className="carddd-title">Node Js</h5>
              <p className="carddd-text">
                Node.js is an open-source, cross-platform, back-end JavaScript
                runtime environment that runs on the V8 engine and executes
                JavaScript code outside a web browser.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechnologyCard;
