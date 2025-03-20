import React, { useState } from "react";
import "./EnquiryForm.css";
// import './EnquiryGrid.css'
import { Link } from "react-router-dom";
import logo from './logo.jpg'
import banner from './banner.png'
function Enquiryform() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [mail, setMail] = useState("");
  const [label_name, setlabelName] = useState("");
  const [label_mobile, setlabelMobile] = useState("");
  const [label_mail, setlabelMail] = useState("");
  const Regex =
    /([a-zA-z0-9. -_]{1,20})+@+([a-zA-Z]{1,10})+\.+([a-zA-Z]{1,10})/;
  const submitForm = (e) => {
    if (!Regex.test(mail)) {
      alert("Your Mail Id" + " " + mail + " " + "is incorrect");
    }
    e.preventDefault();
    if (name.length === 0) {
      setlabelName("Incorrect");
    } else if (mobile.length === 0) {
      setlabelMobile("Incorrect");
    } else if (mail.length === 0) {
      setlabelMail("Incorrect");
    } else {
      setlabelMail("");
      setlabelMobile("");
      setlabelName("");
    }
  };
  return (
    <div className="main_form">
      <div className="Enquiry">
        <div className="Enquiry_head">
          <div className="enquiry_bg_img">
            <img src={banner} id="enquiry_bg_img" alt="wrong"></img>
          </div>
          <div className="enquiry_bg_text">
            <h1 id="enquiry_bg_text">The <span id="bg_text">beautiful</span> thing about learning is that nobody <span id="bg_text">can take it away</span> from you</h1>
          </div>
        </div>
      </div>
      <div className="form-container" >
        <div className="form-content">
          <h1 id="form_head" >
            Who Can Join Us ?
          </h1>
          <div className="form-content-sub">
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
                <h3>Fresher Graduates</h3>
                <p>
                  Students with or without backpapers looking for a job in
                  software industry
                </p>
              </div>
            </div>
            <div className="form-con">
              <div className="form-con-btn">
                <button id="form-one">3</button>
              </div>
              <div className="form-con-content">
                <h3>Placed Students</h3>
                <p>
                  Computer/Non-Computer students placed in MNCs like infy,
                  UST looking to pass their probationary exams
                </p>
              </div>
            </div>
            <div className="form-con">
              <div className="form-con-btn ">
                <button id="form-one">4</button>
              </div>
              <div className="form-con-content">
                <h3>Professionals</h3>
                <p>
                  People looking to switch their non-tech career to design/
                  development/testing
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mainparent" data-aos="flip-left">
          <div className="subparent">
            {/* <div className="enquiry_logo"></div> */}
            <div className="enquiry_bg">
              {/* <div id="formHead">
                <h1 id="formHead1">Enquiry Form</h1>
              </div> */}
              {/* <div className="enquire_logo"></div> */}
              <div className="form-main form-border" id="form-main-border" >
                <div className="logoanimate">
                  <div className="enquiry_logo">
                    <div>
                      <img src={logo} id="formlogo1" alt="wrong" />
                    </div>
                    <h1 id="formHead1">Let's Connect with us!</h1>
                  </div>
                </div>
                <div className="glowborder">
                  <span className="spanborder" id="s1"></span>
                  <span className="spanborder" id="s2"></span>
                  <span className="spanborder" id="s3"></span>
                  <span className="spanborder" id="s4"></span>
                </div>
                <form autoComplete="on" className="form-sub-content">
                  <div className="input-details">
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      required
                      id="form-name"
                      spellCheck="false"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />{" "}
                    {/* <label id="name_label">{label_name}</label> */}
                    <br />
                    <input
                      type="number"
                      name="number"
                      placeholder="Enter your Mobile Number"
                      id="form-num"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      required
                    />
                    {/* <label id="mobile_label">{label_mobile}</label> */}
                    <br />
                    <input
                      type="email"
                      name="mail"
                      placeholder="Enter your E-mail"
                      id="form-mail"
                      value={mail}
                      onChange={(e) => setMail(e.target.value)}
                      required
                    />{" "}
                    {/* <label id="mail_label">{label_mail}</label> */}
                    <br />
                  </div>
                  <br />
                  <div className="choose_drop">
                    <div className="course-select">
                      <select id="course-select">
                        <option hidden>Qualification</option>
                        <option>Post Graduate</option>
                        <option>Under Graduate</option>
                        <option>Diploma</option>
                        <option>School</option>
                      </select>
                    </div>
                    {/* <br /> */}
                    <div className="course-select">
                      <select id="course-select">
                        <option hidden>Select Course</option>
                        <option>Python</option>
                        <option>Java</option>
                        <option>MERN Stack</option>
                        <option>Tally</option>
                        <option>Data Analytics</option>
                        <option>Python FullStack</option>
                        <option>Java FullStack</option>
                        <option>Graphic Design</option>
                        <option>SQL</option>
                        <option>Testing</option>
                        <option>CCNA</option>
                        <option>Web Developement</option>
                        <option>React Native</option>
                        <option>AI & ML</option>
                        <option>PHP</option>
                        <option>MS Office</option>
                      </select>
                    </div>
                  </div>
                  <div className="radiolg">
                    <div id="form-radio">
                      {" "}
                      <span>Mode of Training : </span>
                      <div id="form-radio-btn">
                        <span>
                          <input type="radio" name="mode" value="online" />  Online
                        </span>
                        <span>
                          <input type="radio" name="mode" value="offline" /> Offline
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="form-btn1">
                    <button className="form-btn" onClick={submitForm}>
                      Enquire
                    </button>
                  </div>
                </form>
              </div>
              <div className="form-main-box"></div>
              <div className="form-main-box2"></div>
              <div className="form-main-box3"></div>
              <div className="form-main-box4"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="neumorph">
        <div className="neoParent">
          <div className="neoForm">
            <div className="neoMain">
              <div className="neoimg_bg">
                <div className="neoIcon">
                  <img src={logo} id="formlogo" alt="wrong" />
                </div>
              </div>
              <div className="neoHead">
                <h1>Let's Connect with Us !!</h1>
              </div>
              <div className="neoContent">
                <form autoComplete="off" method="get">
                  <div className="neoformdata">
                    <span id="neoinput"><input type="text" name="name" id="neoname" placeholder="Name" /></span>
                  </div>
                  <div>
                    <span id="neoinput"><input type="text" name="mobile" id="neonum" placeholder="Mobile Number" />
                    </span>
                  </div>
                  <div>
                    <span id="neoinput"><input type="text" name="mail" id="neomail" placeholder="E-mail Address" />
                    </span>
                  </div>
                  <div className="neoselect">
                    <div className="formqualify">
                      <select id="neoqua">
                        <option hidden>Qualification</option>
                        <option>PG</option>
                        <option>UG</option>
                        <option>Diploma</option>
                        <option>School</option>
                      </select>
                    </div>
                    <div className="formcourse">
                      <select id="neocourse">
                        <option hidden>Course</option>
                        <option>Python</option>
                        <option>Java</option>
                        <option>Tally</option>
                        <option>Data Analytics</option>
                      </select>
                    </div>
                  </div>
                  <div className="enq_btn">
                    <span><input type="submit" value="Enquire" id="neobtn" /></span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="neoright">
          <div className="form-contents">
            {/* <div className="form-content-sub">
              <h1 id="form_head" >
                Who Can Join Us ?
              </h1>
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
                  <h3>Fresher Graduates</h3>
                  <p>
                    Students with or without backpapers looking for a job in
                    software industry
                  </p>
                </div>
              </div>
              <div className="form-con">
                <div className="form-con-btn">
                  <button id="form-one">3</button>
                </div>
                <div className="form-con-content">
                  <h3>Placed Students</h3>
                  <p>
                    Computer/Non-Computer students placed in MNCs like infy,
                    UST looking to pass their probationary exams
                  </p>
                </div>
              </div>
              <div className="form-con">
                <div className="form-con-btn ">
                  <button id="form-one">4</button>
                </div>
                <div className="form-con-content">
                  <h3>Professionals</h3>
                  <p>
                    People looking to switch their non-tech career to design/
                    development/testing
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Enquiryform;
