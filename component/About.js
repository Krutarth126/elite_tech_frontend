import Aos from "aos";
import React, { useEffect } from "react";

function About() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <section id="about">
      <div className="about">
        <h2>About Us</h2>
        <div
          className="about__card"
          data-aos="fade-out"
          data-aos-duration="3000"
        >
          <h2>Elite Tech:</h2>
          <p>
            You Dream It , We Build It. get your website ready in very low price
            with enhanced quality.
            <br /> we are the team of professional developers, we use the
            hightech techologies such as MERN stack(along with next js)and MEAN
            Stack. <br />
            we are specialsed in building all kinds of websites like E-commerce,
            Blogging, PortFolio, Business, Personal, Magazine and many more....{" "}
            <br />
            we assure you to give the best website in very less time.
            <br />
          </p>
          <h5>Our Vision:-</h5>
          <p>
            To reflect the statement, <span>“You dream it, we build it”</span>
            in every engagement.
          </p>
          <h5>Our Mission:-</h5>
          <ul>
            <li>
              To delight our clients with the fresh ideas and improve quality
              standards for a win-win approach
            </li>
            <li>
              To deliver work as per client’s satisfaction even when it takes
              walking that extra mile
            </li>
            <li>
              To operate in a state-of-the-art facility that helps our clients
              make distinctive improvements
            </li>
          </ul>
          <h5>Our Values:-</h5>
          <p>
            Our company is based on innovation, creativity and knowledge. We
            feel contented with what we do and take pride in integrating an
            organization that compliments values such as
          </p>
          <ul>
            <li>
              To abide by a strict framework around Integrity and Morality
            </li>
            <li>To render talent retention and continuous motivation</li>
            <li>
              To develop a lasting, symbiotic relationship with our clients
            </li>
            <li>To foster Creativity and drive Innovation</li>
            <li>To devise a Learning and growing atmosphere</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
