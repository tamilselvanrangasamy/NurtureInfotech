import React from "react";
import "./About.css";
import Animation from "../Animation/Animation";
import SoftwareDevelopment from "../Animation/Software_development";
import Graphic from "../Animation/GraphicDesign";
import WebDevelopment from "../Animation/WebDevelopment";

const About = () => {
  return (
    <div className="About_Main">
      <div>
        <div className="About">
          <div className="About_head">
            <h1>About Us</h1>
            <br />
            <h2>Home/About</h2>
          </div>
          <img
            src="./assets/about_us_bg.jpg"
            className="AboutImg_size"
            alt="about"
          />
        </div>
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
                At NURTURE IT - Erode, We transform trainees into technocrats by
                providing a state of art in class experience with real time
                hands on programs. Nurture also emphasize on the soft skills
                which plays a vital role in making over of student into a
                professional and also helps them to understand their roles and
                responsibilities in the company. We not only train the students
                but also counsel them to find out their best interest by
                identifying their real needs and potential. The trainee’s here
                are trained, groomed and nurtured to be buddy professionals. Our
                training methodology is practical and designed to suit trainee’s
                minds and also to cater the needs of varied set of clients
              </p>
            </div>
            <div>
              <button class="btn-donate">Learn More</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="Aspiration">
          <div className="Aspiration_head">
            <h1>Our Aspirations</h1>
          </div>
          <div className="Aspiration_card">
            <div class="book" data-aos="fade-right" data-aos-duration="2000">
              <p>
                Software development is the process of designing, coding,
                testing, and maintaining software applications to meet specific
                needs. It involves a systematic approach and employs various
                tools and methodologies to create functional and efficient
                solutions.
              </p>
              <div class="cover">
                <p className="about_icon">
                  {" "}
                  <SoftwareDevelopment className="About_inner" />
                </p>
                <h3 className="cover_head">Software Development</h3>
              </div>
            </div>
            <div class="book" data-aos="fade-up" data-aos-duration="2000">
              <p>
                Graphic design is the art of visually communicating ideas
                through the use of typography, imagery, and layout. Graphic
                designers create visually appealing content for both print and
                digital media to convey messages effectively.
              </p>
              <div class="cover">
                <p className="about_icon">
                  {" "}
                  <Graphic className="About_inner" />
                </p>
                <h3 className="cover_head">Graphic Design</h3>
              </div>
            </div>
            <div class="book" data-aos="fade-left" data-aos-duration="2000">
              <p>
                Web development is the creation and maintenance of websites and
                web applications. It encompasses coding, design, and structuring
                elements using languages like HTML, CSS, and JavaScript. Web
                developers ensure functionality and a positive user experience,
                addressing both frontend and backend aspects for a seamless
                online presence.
              </p>
              <div class="cover">
                <p className="about_icon">
                  {" "}
                  <WebDevelopment className="About_inner" />
                </p>
                <h3 className="cover_head">Web Development</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="Mission">
          <div
            class="cube-container"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <div class="cube">
              <div class="face front">Java</div>
              <div class="face back">Python</div>
              <div class="face right">Html</div>
              <div class="face left">React</div>
              <div class="face top">Angular</div>
              <div class="face bottom">JavaScript</div>
            </div>
          </div>
          <div
            className="Mission_content"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <h2 className="Mission_head">Our Mission?</h2>
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
          <div
            className="Vision_content"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <h2 className="Vision_head">Our Vision?</h2>
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
            <div class="cube">
              <div class="face front">Java</div>
              <div class="face back">Python</div>
              <div class="face right">Html</div>
              <div class="face left">React</div>
              <div class="face top">Angular</div>
              <div class="face bottom">JavaScript</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
