import React, { useState } from "react";
const Contact = () => {
  const [Data, setData] = useState({
    Fullname: "",
    Phone: "",
    Email: "",
    Message: "",
  });
  const InputEvent = (event) => {
    const { name, value } = event.target;
    setData((preVal) => {
      return {
        ...preVal, //spread operator
        [name]: value,
      };
    });
  };
  const formsubmit = (e) => {
    e.preventDefault();
    const textOut = `My name is ${Data.Fullname}. My mobile number is ${Data.Phone} and email is ${Data.Email}, Here is what i want to say ${Data.Message}`;
    alert(textOut);
  };
  return (
    <div className="contact">
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formsubmit}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  name="Fullname"
                  value={Data.Fullname}
                  onChange={InputEvent}
                  placeholder="Enter your Name"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Phone
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleInputEmail1"
                  name="Phone"
                  value={Data.Phone}
                  onChange={InputEvent}
                  placeholder="Enter your phone"
                />
              </div>
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email <address></address>
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                name="Email"
                value={Data.Email}
                onChange={InputEvent}
                placeholder="Enter your email"
                aria-describedby="emailHelp"
              />
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Message{" "}
                </label>
                <textarea
                  id="exampleFormControlTextarea1"
                  className="form-control"
                  name="Message"
                  value={Data.Message}
                  onChange={InputEvent}
                  rows="3"
                ></textarea>
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Check me out
                </label>
              </div>
              <div className="col-12 text-center">
                <button type="submit" className="btn123">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
