import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card card-2">
          <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
          <div className="card-body card-1">
            <h5 className="card-title font-weight-bold">{props.title}</h5>
            <p className="card-text">{props.body}</p>
            <Link to="#" className="card-btn">
              Explore it
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
