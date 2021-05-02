import React from "react";
import Card from "./Card";

function Body() {
  return (
    <div className="body_image">
      <div className="body__content">
        <h1>
          <span className="red">YOU DREAM</span> <span className="red">IT</span>{" "}
          <span className="blue"> WE BUILD IT</span>
        </h1>
        <Card />
      </div>
    </div>
  );
}

export default Body;
