import React from "react";
import { Link } from "react-router-dom";
import Slider from "../inc/Slider";
import Efs from "./Efs";
import Review from "./Review";

function Home() {
  return (
    <div>
      <Slider />
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3 className="main-heading">Our Pathshala Classes</h3>
              <div className="underline mx-auto"></div>
              <p style={{ padding: "30px" }} className="text-center">
                An excellent tutor has a friendly demeanour that makes children
                feel at ease, allowing them to form a communication relationship
                with their tutor and form a positive association with learning.
                Some people have a natural talent for teaching. They are able to
                make learning easy and fun for their students, explain difficult
                concepts to them, and support them, ensuring that they
                understand and gain confidence in all areas of their curriculum.
                Please contact or send an email if you would like any additional
                advice or information about<b> PATHSHALA CLASSES</b>.
              </p>
              <Link to="/about" className="btn btn-warning shadow">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/*Events & Festivals*/}

      <Efs />

      {/*Students Review*/}

      <Review />
    </div>
  );
}
export default Home;
