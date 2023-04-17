import React from "react";
import web from "../src/image/1.svg";
import Popup from "./componets/popup";
import { useState } from "react";

const Home = () => {
  const [Buttonpopup, setButtonpopup] = useState(false);
  return (
    <section id="header" className="d-flex align-items-center">
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              <div className="col-md-6 mt-5 order-2 order-lg-1 d-flex justify-content-center flex-column page-content">
                <h1>
                  Grow your business with
                  <strong className="brand-name"> AccuBalance</strong>
                </h1>
                <h2 className="my-3 brand-bio">
                  Take control of your finances with our powerful and reliable
                  accounting software
                </h2>
                <div className="mt-3">
                  <button
                    onClick={() => setButtonpopup(true)}
                    className="btn-get-started"
                  >
                    Get started
                  </button>
                  <Popup trigger={Buttonpopup} setTrigger={setButtonpopup}>
                    <h3>My popup</h3>
                  </Popup>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 mt-2 header-img">
                <img src={web} className="img-fluid" alt="home image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
