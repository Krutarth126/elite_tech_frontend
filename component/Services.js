import React from "react";
import ServiceCard from "./ServiceCard";

function Services() {
  return (
    <section id="services">
      <div className="services">
        <h2>Services</h2>
        <p>
          Gain competitive edge with our custom development services for
          businesses with a unique approach.
        </p>
        <ServiceCard />
      </div>
    </section>
  );
}

export default Services;
