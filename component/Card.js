import React from "react";

function Card() {
  return (
    <div className=" row">
      <div className="col-12 col-sm-6  ">
        <div className="w-50 mx-auto my-5 cards-1">
          <img
            src="https://i.ibb.co/S7pjPFY/ecomm.png"
            width="200px"
            height="150px"
          />
          <h5>Ecommerce Websites</h5>
        </div>
      </div>
      <div className="col-12 col-sm-6  ">
        <div className="w-50 mx-auto my-5 cards-2">
          <img
            src="https://i.ibb.co/kSg9QYV/blog.png"
            width="200px"
            height="150px"
          />
          <h5>Blogging Websites</h5>
        </div>
      </div>
      <div className="col-12 col-sm-6 ">
        <div className="w-50 mx-auto my-5 cards-3">
          <img
            src="https://i.ibb.co/YTCd5Cj/education.png"
            width="200px"
            height="150px"
          />
          <h5>Educational Websites</h5>
        </div>
      </div>
      <div className="col-12 col-sm-6 ">
        <div className="w-50 mx-auto my-5 cards-4">
          <img
            src="https://i.ibb.co/ZYtD8QV/final.png"
            width="200px"
            height="150px"
          />
          <h5>Resume/CV Websites</h5>
        </div>
      </div>
    </div>
  );
}

export default Card;
