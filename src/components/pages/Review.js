import React from "react";
import Vikash from "../images/vikash.jpg";
import Tarun from "../images/Tarun.jpg";
import Chirag from "../images/Chirag.jpg";
import Footer from "./Footer";

function Review() {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-5 text-center">
              <h3 className="main-heading">What Our Students Say</h3>
              <div className="underline mx-auto"></div>
            </div>

            <div className="htm">
              <div className="bdy">
                <figure className="snip1157">
                  <blockquote>
                    It is a fantastic offline tuition centre with an elite class
                    faculty for all subjects such as Physics, Chemistry, Math,
                    Biology, English, and Commerce. I wholeheartedly recommend
                    it to my village students.
                    <div className="arrow"></div>
                  </blockquote>
                  <img src={Chirag} alt="sq-sample3" />
                  <div className="author">
                    <h5>
                      Chirag Rohilla <span> Student</span>
                    </h5>
                  </div>
                </figure>
                <figure className="snip1157 hover">
                  <blockquote>
                    If you truly want to learn the subject and achieve something
                    in your life, trust me when I say that there is no other
                    place that can provide you with guidance like them, because
                    they have so much experience in subjects as well as in life,
                    which helps you not only in your subject but also in your
                    life.
                    <div className="arrow"></div>
                  </blockquote>
                  <img src={Tarun} alt="sq-sample27" />
                  <div className="author">
                    <h5>
                      Tarun Sharma<span> Student</span>
                    </h5>
                  </div>
                </figure>

                <figure className="snip1157">
                  <blockquote>
                    A fantastic learning environment. Teachers have extensive
                    experience and provide individual attention. Concentrate on
                    the concept and the weak points. A proper study plan can
                    assist in achieving the goal. Thank you for putting me on
                    the right track in my career.
                    <div className="arrow"></div>
                  </blockquote>
                  <img src={Vikash} alt="sq-sample17" />
                  <div className="author">
                    <h5>
                      Vikash Bhardwaj<span> Student</span>
                    </h5>
                  </div>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
export default Review;
