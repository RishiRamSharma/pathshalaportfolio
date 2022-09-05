import React from "react";
import Laug3 from "../images/LaughterDay.jpg";
import "./About.css";
import { ExternalLink } from "react-external-link";
import Footer from "./Footer";

function About() {
  return (
    <>
      <div className="container-fluid bg-dark ">
        <div className="container">
          <img
            src="https://cdn.pixabay.com/photo/2018/01/17/04/14/industry-3087393_960_720.jpg"
            alt=".."
            className="img-fluid  w-100 mt-1 mb-2"
          />
        </div>
      </div>

      {/* Aboout Sesction */}

      <div className="container-fluid bg-light  py-3 my-3 ">
        <div className="container">
          <section
            className="section"
            style={{ paddingTop: "1px", paddingBottom: "15px" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <h3 className="main-heading">About Us</h3>
                  <div className="underline mx-auto"></div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={Laug3}
              className="d-block mx-lg-auto img-fluid img-thumbnail card"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">Pathshala Classes</h1>
            <p
              className="lead"
              style={{
                fontFamily: "sans-serif",
                textAlign: "justify",
                color: "#020486",
              }}
            >
              <span className="fs-1 fw-semibold ">P</span>athshala Classes is a
              learning centre. Monika Sharma started it in 2018 with three
              pupils. But, because to your love, faith, and our efforts, our
              strength is growing exponentially. Today, we are attempting to
              share our expertise with students in order to help them have a
              bright future and wisdom. As a result, we are attempting to
              investigate our students' understanding on all levels. We are
              doing our efforts to provide our pupils the greatest education
              possible. We appreciate your visit. Visit &nbsp;
              <ExternalLink href="https://rishiramsharma.github.io/pathshalaClasses/index.html">
                our website
              </ExternalLink>
              &nbsp; or follow us on social media for additional information.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <a
                href="#mission"
                type="button"
                className="btn btn-outline-primary btn-lg px-4 me-md-2"
              >
                Our Mission
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="b-example-divider"></div>

      <div className="container px-4 py-5" id="custom-cards">
        <h2 className="pb-2 border-bottom">Our Subjects</h2>

        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
          <div className="col">
            <div
              className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-4 shadow-lg"
              style={{
                backgroundImage:
                  " url('https://cdn.pixabay.com/photo/2017/09/06/15/19/blackboard-2721887__340.jpg')",
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-5 text-white text-shadow-1">
                <h2 className="pt-5 mt-5 mb-4 display-6 lh-2 fw-bold">
                  English
                </h2>
              </div>
            </div>
          </div>

          <div className="col">
            <div
              className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-4 shadow-lg "
              style={{
                backgroundImage:
                  "url('https://cdn.pixabay.com/photo/2017/10/05/19/41/differential-calculus-2820682__340.png')"
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-5 text-white text-shadow-1">
                <h2 className="pt-5 mt-5 mb-4 display-6 lh-2 fw-bold">Math</h2>
              </div>
            </div>
          </div>

          <div className="col">
            <div
              className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-4 shadow-lg"
              style={{
                backgroundImage:
                  " url('https://media.istockphoto.com/photos/biotechnology-concept-food-tech-nutritional-science-picture-id1210306984?k=20&m=1210306984&s=612x612&w=0&h=RbIzBtiXJda2xS1LKtWjPlXuJAe8F5rfRaTl8oQv-Bk=')",
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-5 text-shadow-1">
                <h2 className="pt-5 mt-5 mb-4 display-6 lh-2 fw-bold">
                  Science
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="b-example-divider"></div>
      <div
        className="bg-image p-5 text-center shadow-1-strong  mb-5 text-white "
        style={{
          backgroundImage:
            "url('https://mdbcdn.b-cdn.net/img/new/slides/003.webp')", height:"auto", opacity:"0.9"
        }}
      >
        <h1 className="mb-3 h2" id="mission" >
          Our Mission
        </h1>

        <p style={{
          fontFamily: "sans-serif",
          textAlign: "justify",
          fontSize:"20px"
        }} className="text-center"> 
          Our objective is to provide individualised tuition programmes given by
          highly trained and subject-specialist teachers to our students. Our
          systematic support will enable our students to obtain exceptional
          outcomes in their exams and have the confidence to take on new
          challenges throughout their lives. We inspire and empower students to
          apply new skills in and out of the classroom.
        </p>
      </div>
  
      <Footer />
    </>
  );
}
export default About;
