import React from "react";
import Sdata from "./sdata";
import Card from "./card1";
import img from "../src/image/a-removebg-preview.png";
const Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4 cards">
              {Sdata.map((val, ind) => {
                return (
                  <Card key={ind} imgsrc={val.imgsrc} title={val.about_title} />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
