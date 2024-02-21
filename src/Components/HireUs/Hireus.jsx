import React, { useState } from 'react'
import './Hireus.css'
function Hireus() {
    const [selectedTag, setSelectedTag] = useState(null);
    const [ContactDatas, SetContactDatas] = useState({
        Name: "",
        PhoneNumber: "",
        Message: ""
      })
    
    const showImage = (tag) => {
        setSelectedTag(tag);
    };

   
      const handleChange = (e) => {
        SetContactDatas({
          ...ContactDatas,
          [e.target.name]: e.target.value
        })
      }

    return (
        <div>
            <section className='hireScreen'>
                <div className='mainScreen'>
                    <div className='hireLogo'>
                        <img src='./assets/images/Hire/rs.png' className='hirelogoImg' alt='hireLogo'></img>
                    </div>
                    <div className='hireDetails'>
                        <div className='hireDetailsHeading'>
                            <h1 className='hireHeadingOne'>Hire our Trainees at No Cost Hiring</h1>
                            <h3 className='hireHeadingtwo'></h3>
                            <h4 className='hireHeadingthr'>Hire our Nurture students who are budding React & Full Stack Developers at absolutely ZERO Cost involved.</h4>
                            <button className='hireButton'>Get in touch with us</button>
                        </div>
                    </div>
                </div>

                <div className='TrainingModel'>
                    <div className='TrainingModelHeading'>
                        {/* <h4 >Know more about our services</h4> */}
                        <h1 className='hireHeadingtwo'>We strive to provide the best service for our corporate partners.</h1>

                    </div>
                    <div className='TrainingModelDesign'>
                        <div className='TrainingModelTitle' >
                            <div className='model1' onClick={() => showImage('Hire2')}>
                                
                                    <h3>Train and Hire model</h3>
                                    <p>We will help you build your team by supporting you in all the training and hiring activities.</p>
                                
                            </div>
                            <div className='model2' onClick={() => showImage('Hire3')}>
                                <h3>No Cost Hiring</h3>
                                <p>Perfect for budding startups with limited hustlers. Fully trained and ready to deploy.</p>
                            </div>
                            <div className='model3' onClick={() => showImage('Hire2')}>
                                <h3>Corporate Training</h3>
                                <p>We will help you up-skill your existing team and help them adopt the latest industry trends.</p>
                            </div>
                        </div>
                        <div className='TrainingModelimg'>

                          
                            {selectedTag ? (
                                <div className="image-container">
                                    <img src={`./assets/images/hire/${selectedTag}.png`} alt={`Image ${selectedTag}`} />
                                </div>
                            ):( <div className="image-container">
                            <img src={`./assets/images/hire/hire1.png`} alt={`Image ${selectedTag}`} />
                        </div>)}
                        </div>
                    </div>
                </div>

                <div className='HireForm'>
            <h1>Hire our Trainees</h1>
            <div className='FormDesign'>

              <input type='text' onChange={handleChange} autoComplete='off' placeholder='Company Name' name='Name' value={ContactDatas.Name}></input>
              <label className='label'></label>
              <input type='text' onChange={handleChange} autoComplete='off' placeholder='HR Name' name='PhoneNumber' value={ContactDatas.PhoneNumber}></input>
              <label className='label'></label>
              <input type='text' onChange={handleChange} autoComplete='off' placeholder='Contact Details' name='Name' value={ContactDatas.Name}></input>
              <label className='label'></label>
              <textarea  onChange={handleChange} autoComplete='off' placeholder='Message' name='Message' value={ContactDatas.Message}>
              </textarea>
              <label className='label'></label>
              <button className='Contactbutton'>
                <div class="svg-wrapper-1">
                  <div class="svg-wrapper">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path
                        fill="currentColor"
                        d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <span>Send</span>
              </button>


            </div>
        </div>
            <div>
                <img src='./assets/images/hire/requirement.gif'></img>
            </div>
            </section>

        </div>
    )
}

export default Hireus
