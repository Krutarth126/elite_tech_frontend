import React from "react";

function Footer() {
  return (
    <div className="footer-clean">
      <footer>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-4 col-md-3 item">
              <h3>Contact Us</h3>
              <ul>
                <li>
                  <a>Phone No. :- 7470664660</a>
                </li>
                <li>
                  <a>Email:- elitetech909@gmail.com</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-4 col-md-3 item">
              <h3>Services</h3>
              <ul>
                <li>
                  <a>Web Development</a>
                </li>
                <li>
                  <a>Web Applications</a>
                </li>
                <li>
                  <a>Hosting</a>
                </li>
                <li>
                  <a>Advertising</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-4 col-md-3 item">
              <h3>About</h3>
              <ul>
                <li>
                  <a>Company</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-4 col-md-3 item">
              <h3>Careers</h3>
              <ul>
                <li>
                  <a>Job openings</a>
                </li>
                <li>
                  <a>Employee success</a>
                </li>
                <li>
                  <a>Benefits</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 item social">
              <p className="copyright">Elite Tech © 2021</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
