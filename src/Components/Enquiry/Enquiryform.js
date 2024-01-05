import React from "react";
import "./EnquiryForm.css";
function Enquiryform() {
  return (
    <div className="main_form">
      <h1 id="form_head">Who Can Join Us?</h1>
      <div className="form-container">
        <div className="form-content">
          <div className="form-con">
            <div className="form-con-btn">
              <button id="form-one">1</button>
            </div>
            <div className="form-con-content">
              <h3>College Students</h3>
              <p>
                Students of all semesters eventually looking to get placed in IT
                Companies
              </p>
            </div>
          </div>
          <div className="form-con">
            <div className="form-con-btn">
              <button id="form-one">2</button>
            </div>
            <div className="form-con-content">
              <h3>College Students</h3>
              <p>
                Students of all semesters eventually looking to get placed in IT
                Companies
              </p>
            </div>
          </div>
          <div className="form-con">
            <div className="form-con-btn">
              <button id="form-one">3</button>
            </div>
            <div className="form-con-content">
              <h3>College Students</h3>
              <p>
                Students of all semesters eventually looking to get placed in IT
                Companies
              </p>
            </div>
          </div>
          <div className="form-con">
            <div className="form-con-btn">
              <button id="form-one">4</button>
            </div>
            <div className="form-con-content">
              <h3>College Students</h3>
              <p>
                Students of all semesters eventually looking to get placed in IT
                Companies
              </p>
            </div>
          </div>
        </div>
        <div className="form-main">
          <form autoComplete="off" className="form-sub-content">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              id="form-name"
              spellCheck="false"
            />{" "}
            <br />
            <input
              type="number"
              name="number"
              placeholder="Enter your Mobile Number"
              id="form-num"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              required
            />
            <br />
            <input
              type="email"
              name="mail"
              placeholder="Enter your E-mail"
              id="form-mail"
            />{" "}
            <br />
            <div id="form-radio">
              {" "}
              <span>Mode of Training</span>
              <div id="form-radio-btn">
                <input type="radio" name="online" value="online" /> Online
                <input
                  type="radio"
                  name="online"
                  value="offline"
                /> Offline
                <input
                  type="radio"
                  name="online"
                  value="offline"
                /> Both{" "}
              </div>
            </div>
            <br />
            <div className="course-select">
              <label>Course: </label>
              <select id="course-select">
                <option hidden>Choose Course</option>
                <option>Python</option>
                <option>Java</option>
                <option>MERN Stack</option>
                <option>Tally</option>
              </select>
            </div>
            <div className="course-select">
              <label>Degree: </label>
              <select id="course-select">
                <option hidden>Choose Degree</option>
                <option>B.E</option>
                <option>BBA</option>
                <option>B.Sc</option>
                <option>B.Com</option>
              </select>
            </div>
            <center>
              <button className="form-btn">Enquire</button>
            </center>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Enquiryform;
