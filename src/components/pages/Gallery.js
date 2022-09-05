import React from "react";
import Holi from "../images/Holi.jpg";
import Study from "../images/study.jpg";
import Enjoy from "../images/enjoy.jpg";
import Laughter from "../images/laughter_one.jpg";
import Laug3 from "../images/LaughterDay.jpg";
import Nat1 from "../images/national_one.jpg";
import Nat2 from "../images/national_two.jpg";
import Nat3 from "../images/national_three.jpg";
import Nat4 from "../images/national_four.jpg";
import Nat5 from "../images/national_five.jpg";
import Footer from "./Footer";

function Gallery() {
  return (
    <>
      <section
        className="section"
        style={{ paddingTop: "20px", paddingBottom: "10px" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="main-heading">Our Gallery</h3>
              <div className="underline mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
      <div className="container-fluid bg-secondary bg-gradient  bg-opacity-50">
        <br />
        <div className="container text-bg-secondary p-3">
          <div
            className="row d-flex flex-wrap align-items-center "
            data-toggle="modal"
            data-target="#lightbox"
          >
            <div className="col-12 col-md-6 col-lg-3">
              <img
                src={Holi}
                data-target="#indicators"
                data-slide-to="0"
                alt="Holi"
                className="img-thumbnail"
              />
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <img
                src={Enjoy}
                data-target="#indicators"
                data-slide-to="2"
                alt="Fun"
                className="img-thumbnail"
              />
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <img
                src={Laughter}
                data-target="#indicators"
                data-slide-to="3"
                alt="Laughter Day"
                className="img-thumbnail"
              />
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <img
                src={Study}
                data-target="#indicators"
                data-slide-to="3"
                alt="Study"
                className="img-thumbnail"
              />
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <img
                src={Laug3}
                data-target="#indicators"
                data-slide-to="3"
                alt="Laughter Day"
                className="img-thumbnail"
              />
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <img
                src={Nat1}
                data-target="#indicators"
                data-slide-to="3"
                alt=".."
                className="img-thumbnail"
              />
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <img
                src={Nat2}
                data-target="#indicators"
                data-slide-to="3"
                alt=".."
                className="img-thumbnail"
              />
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <img
                src={Nat3}
                data-target="#indicators"
                data-slide-to="3"
                alt=".."
                className="img-thumbnail"
              />
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <img
                src={Nat4}
                data-target="#indicators"
                data-slide-to="3"
                alt=".."
                className="img-thumbnail"
              />
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <img
                src={Nat5}
                data-target="#indicators"
                data-slide-to="3"
                alt=".."
                className="img-thumbnail"
              />
            </div>
          </div>
        </div>
        <br />
      </div>

      <Footer />
    </>
  );
}
export default Gallery;
