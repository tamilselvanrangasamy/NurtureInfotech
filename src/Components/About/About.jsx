import React, { useRef } from "react";
import "./About.css";
import Animation from "../Animation/Animation";
import Mission from "../Animation/OurMission";
import Vision from "../Animation/OurVision";
import Philosophy from "../Animation/OurPhilosophy";

const About = () => {
  const missionRef = useRef(null);

  const handleLearnMoreClick = () => {
    if (missionRef.current) {
      missionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="About_Main">
      <div>
        <div className="About">
          <div className="About_head">
            <h1>About Us</h1>
            <br />
            <h2>Home/About</h2>
          </div>
          {/* <img
            src="./assets/about_us_bg.jpg"
            className="AboutImg_size"
            alt="about"
          /> */}
        </div>
        <div className="About_Content">
          <div className="About_Info">
            <div
              className="About_Animation"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <Animation className="About_inner" />
            </div>
            <div
              className="About_us"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <div>
                <h2>About Us</h2>
              </div>
              <div className="About_Info_head">
                <h1>Nurture InfoTech</h1>
              </div>
              <div>
                <p>
                  At NURTURE IT - Erode, We transform trainees into technocrats
                  by providing a state of art in class experience with real time
                  hands on programs. Nurture also emphasize on the soft skills
                  which plays a vital role in making over of student into a
                  professional and also helps them to understand their roles and
                  responsibilities in the company. We not only train the
                  students but also counsel them to find out their best interest
                  by identifying their real needs and potential. The trainee’s
                  here are trained, groomed and nurtured to be buddy
                  professionals. Our training methodology is practical and
                  designed to suit trainee’s minds and also to cater the needs
                  of varied set of clients
                </p>
              </div>
              <div>
                <button class="btn-donate" onClick={handleLearnMoreClick}>
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div ref={missionRef}>
        <div className="Mission">
          <h2 className="Mission_head">Our Mission?</h2>

          <div
            class="cube-container"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <Mission />
          </div>
          <div
            className="Mission_content"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <p className="Mission_para">
              At Nurture InfoTech, our mission is to bridge the gap between
              ambition and achievement. We believe in the transformative power
              of education and our goal is to equip the students with the
              knowledge and skills needed to expertise in the software
              industry.. We are dedicated to fostering a love for learning,
              nurturing creativity, and preparing students for success in a
              rapidly changing world.
            </p>
          </div>
        </div>
        <div className="Vision">
          <h2 className="Vision_head">Our Vision?</h2>
          <div
            className="Vision_content"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <p className="Vision_para">
              At Nurture InfoTech, our vision is to be a catalyst for positive
              change, inspiring innovation and transforming lives. We envision a
              future where our commitment to excellence, sustainability, and
              inclusivity creates a lasting impact on individuals and
              communities alike. Through cutting-edge solutions, ethical
              practices, and a dedication to continuous improvement, we strive
              to be a beacon of positive influence in our industry, fostering a
              world where possibilities are limitless, and aspirations are
              turned into reality.
            </p>
          </div>
          <div
            class="cube-container"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <Vision />
          </div>
        </div>
        <div className="Mission">
          <h2 className="Mission_head">Our Philosophy?</h2>

          <div
            class="cube-container"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <Philosophy />
          </div>
          <div
            className="Mission_content"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <p className="Mission_para">
              At Nurture Infotech, our philosophy stands as the bedrock of our
              unwavering commitment to fostering excellence in education and
              empowering individuals to not only navigate but thrive in the
              ever-evolving landscape of Information Technology. Our core
              principles are not just guiding lights; they are the embodiment of
              our dedication to providing a transformative learning experience
              that transcends the bounds of conventional education.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
