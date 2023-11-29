import React from "react";
import "./Home.css";
import WhyChoose from "../NavBarDesign/WhyChoose/WhyChoose";
import CourseBanner from "../NavBarDesign/Courses/CourseBanner";
import CourseDetails from "../NavBarDesign/Courses/CourseDetails";

function Home() {
  return (
    <div>
      <section class="landing-pg">
        <div className="mainHome">
          <div className="mainHeader">
            <h1 data-aos="fade-down" data-aos-duration="1500">
              Most-Leading and Trusted Training Institute
            </h1>
            <span data-aos="fade-up" data-aos-duration="1500" id="banner_text">
              Get trained, Work on live projects and get hired.
            </span>
          </div>
          <div className="bannerImg">
            <img
              src="./assets/banner2.webp"
              className="bannerImg_size"
              alt="HomeImg"
            />
          </div>
        </div>
      </section>
      <CourseBanner></CourseBanner>
      <WhyChoose></WhyChoose>
      <CourseDetails></CourseDetails>
    </div>
  );
}

export default Home;
