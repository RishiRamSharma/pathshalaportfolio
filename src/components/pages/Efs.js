import React from "react";
import "./Efs.css";
import Holi from "../images/Holi.jpg";
import Laughter from "../images/LaughterDay.jpg";
import ScienceDay from "../images/ScienceDay.jpg";

function Efs() {
  return (
    <section
      className="section"
      style={{ backgroundColor: " rgb(243, 238, 235)" }}
    >
      {/* Events and Festivals */}
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-5 text-center">
            <h3 className="main-heading">Events & Festivals</h3>
            <div className="underline mx-auto"></div>
          </div>
          <div className="row row-cols-1 row-cols-md-3 g-3">
            <div className="col">
              <div className="card h-100">
                <img src={Holi} className="card-img-top" alt="Holi Festival" />
                <div className="card-body">
                  <h5 className="card-title">Holi Festival</h5>
                  <p className="card-text">
                    We celebrate all religious holidays with children and
                    emphasise their significance.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img
                  src={Laughter}
                  className="card-img-top"
                  alt="World Laughter Day"
                />
                <div className="card-body">
                  <h5 className="card-title">World Laughter Day</h5>
                  <p className="card-text">
                    From time to time, to encourage youth to be cheerful at all
                    times and to emphasise the symbolic importance of every
                    special day.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img
                  src={ScienceDay}
                  className="card-img-top"
                  alt="National Science Day"
                />
                <div className="card-body">
                  <h5 className="card-title">National Science Day</h5>
                  <p className="card-text">
                    A small effort to improve education about science. You can
                    also join us all for our social activities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Efs;
