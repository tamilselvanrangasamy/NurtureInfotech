import React, { useState } from 'react'
import './Contact.css'
function Contact() {

  const [ContactDatas, SetContactDatas] = useState({
    Name: "",
    PhoneNumber: "",
    Message: ""
  })

  const handleChange = (e) => {
    SetContactDatas({
      ...ContactDatas,
      [e.target.name]: e.target.value
    })
  }
  return (
    <div>
      <section className='Contact'>

        <div className='ContactDetails'>
          <div className='ContactAddress'>
            <h4>Contact</h4>
            <h1> Get in touch with us</h1>
            <div className='ContactDatas'>
              <div className='ContactCall'>
                <div className='callLogo'>
                  <div className='callnumber'>
                    <svg width="26" height="56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.05 5A5 5 0 0 1 19 8.95"></path>
                      <path d="M15.05 1A9 9 0 0 1 23 8.94"></path>
                      <path d="M22 16.92v3a1.998 1.998 0 0 1-2.18 2 19.791 19.791 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16.001 16.001 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.908.339 1.85.574 2.81.7A2 2 0 0 1 22 16.92Z"></path>
                    </svg>
                  </div>
                </div>
                <div className='ContactNumber'>

                  <b>Call us on: +91-8610598460</b><br></br>
                  Talk to our Training Manager
                </div>

              </div>

              <div className='ContactEmail'>
                <div className='EmailLogo'>
                  <div className='EmailAddressLogo'>
                    <svg width="26" height="56" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.875 3.75H4.125A2.628 2.628 0 0 0 1.5 6.375v11.25a2.628 2.628 0 0 0 2.625 2.625h15.75a2.627 2.627 0 0 0 2.625-2.625V6.375a2.627 2.627 0 0 0-2.625-2.625Zm-.665 4.342-6.75 5.25a.75.75 0 0 1-.92 0l-6.75-5.25a.75.75 0 1 1 .92-1.184L12 11.8l6.29-4.892a.75.75 0 0 1 .92 1.184Z"></path>
                    </svg>
                  </div>
                </div>
                <div className='EmailAddress'>

                  <b>Email us directly</b><br></br>
                  nurtureinfotech@gmail.com
                </div>

              </div>


              <div className='ContactLocation'>
                <div className='LocationLogo'>
                  <div className='AddressLogo'>
                    <svg width="26" height="56" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.875 3.75H4.125A2.628 2.628 0 0 0 1.5 6.375v11.25a2.628 2.628 0 0 0 2.625 2.625h15.75a2.627 2.627 0 0 0 2.625-2.625V6.375a2.627 2.627 0 0 0-2.625-2.625Zm-.665 4.342-6.75 5.25a.75.75 0 0 1-.92 0l-6.75-5.25a.75.75 0 1 1 .92-1.184L12 11.8l6.29-4.892a.75.75 0 0 1 .92 1.184Z"></path>
                    </svg>
                  </div>
                </div>
                <div className='Address'>

                  <b>Our Location</b><br></br>
                  161 Parimalam Complex,  II Floor, Mettur Rd, above UCO Bank, Erode, Tamil Nadu 638011
                </div>

              </div>

            </div>


          </div>
          <div className='ContactForm'>
            <h1>We will Answer all your Questions</h1>
            <div className='FormDesign'>

              <input type='text' onChange={handleChange} placeholder='Name' name='Name' value={ContactDatas.Name}></input>
              <input type='text' onChange={handleChange} placeholder='PhoneNumber' name='PhoneNumber' value={ContactDatas.PhoneNumber}></input>
              <input type='text' onChange={handleChange} placeholder='Message' name='Message' value={ContactDatas.Message}></input>
              <button>
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

        </div>
      </section>

    </div>
  )
}

export default Contact
