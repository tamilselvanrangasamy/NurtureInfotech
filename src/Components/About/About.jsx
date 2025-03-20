import React, { useRef } from "react";
import "./About.css";


const About = () => {
  const missionRef = useRef(null);

  const handleLearnMoreClick = () => {
    if (missionRef.current) {
      missionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="About_Main">
      {/* <div>
        <div className="About">
          <div className="About_head">
            <h1>About Us</h1>
            <br />
            <h2>Home/About</h2>
          </div>
         
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
                <p className="About_para">
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
      <div>
        <div>
          <h1 className="Why_Head">Why Choose Us?</h1>
        </div>
      </div>
      <div className="Total_card1">
        <div class="card shadow">
          <h1 className="card_head">Training By Industrial Experts</h1>
          <p className="card_para">
            We ensure an exceptionally dynamic live online also as offline
            training that can be utilized everywhere, with devoted colleagues
            who assist us with arriving at our customer fulfillment
            responsibility.{" "}
          </p>
        </div>
        <div class="card shadow">
          <h1 className="card_head">Training On Latest Technologies </h1>
          <p className="card_para">
            Our training sections have gained high quality, participation and
            involvement through keep following the vibrant trend by implementing
            latest technologies, tools and utilizing advanced software
            technologies.{" "}
          </p>
        </div>
        <div class="card shadow">
          <h1 className="card_head">Professional Skill Enhancement Program </h1>
          <p className="card_para">
            We offer a wide assortment of self-improvement programs to students,
            pointed toward developing significant job related delicate
            abilities.{" "}
          </p>
        </div>
      </div>
      <div className="Total_card2">
        <div class="card shadow">
          <h1 className="card_head">Resume Preparation Assistance </h1>
          <p className="card_para">
            {" "}
            With advancement and uniqueness, our group will assist you with
            drafting a quality resume featuring your abilities and skill for
            your vocation.
          </p>
        </div>
        <div class="card shadow">
          <h1 className="card_head">Mock Interviews </h1>
          <p className="card_para">
            We plan mock interviews for every trainee with the assistance of our
            industry experienced mentors and the business proficient
            organization to assist them with understanding their qualities and
            shortcomings.{" "}
          </p>
        </div>
        <div class="card shadow">
          <h1 className="card_head">Real Time Assignments </h1>
          <p className="card_para">
            Our students are provided with live projects and assignments by our
            master trainers with an inside and out execution and also make use
            of various innovative technologies for creating them.{" "}
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default About;
