import React, { useState } from "react";
import "./Contact.css";
import Footer from "./Footer";

function Contact() {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const InputEvent = (event) => {
    const { name, value } = event.target;
    setData((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you  ${data.name}   ! Your message is saved.`);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div
            className="img-fluid"
            style={{
              width: "100%",
              height: "100vh",
              background:
                "url('https://cdn.pixabay.com/photo/2017/01/06/23/05/sunrise-1959240_960_720.jpg') top center",
              backgroundSize: "cover",
              color: "white",
            }}
            alt=".."
          >
            <div className="text-center fs-1 fw-semibold ">Contact Us</div>
            <br />
            <div className=" container container_div bg-dark bg-gradient bg-opacity-25">
              <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                  <form
                    onSubmit={formSubmit}
                    className="needs-validation m-3 p-3"
                  >
                    <div className="mb-3">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        Name:
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        required
                        value={data.name}
                        onChange={InputEvent}
                        id="exampleFormControlInput1"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        Email address:
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        required
                        value={data.email}
                        onChange={InputEvent}
                        id="exampleFormControlInput1"
                        placeholder="name@example.com"
                      />
                    </div>

                    <div className="mb-3">
                      <label
                        htmlFor="exampleFormControlTextarea1"
                        className="form-label"
                      >
                        Message:
                      </label>
                      <textarea
                        className="form-control"
                        name="message"
                        value={data.message}
                        onChange={InputEvent}
                        id="exampleFormControlTextarea1"
                        rows="3"
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary" type="submit">
                        Submit
                      </button>
                    </div>
                  </form>
                  <div className="container col-12">
                    <iframe
                      className="img-fluid col-lg-12 col-sm-12 col-12"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3482.731435573711!2d76.30946981503602!3d29.202032782196675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39120e5eaa9b1b11%3A0x842a76475848079!2sBuwana%20-%20Kharenti%20Rd%2C%20Buwana%2C%20Haryana%20126101!5e0!3m2!1sen!2sin!4v1662370713129!5m2!1sen!2sin"
                      referrerpolicy="no-referrer-when-downgrade"
                      title="Buwana"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Contact;
