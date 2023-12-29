import React from 'react'
import './Internship.css'

const Internship = () => {
  return (
    <div>
      <div className='n'>
            <div className='internship-content'>
              <div className='content'>
              <div className='content-heading'><h1>Nurture infotec Internship Program</h1></div>
                <div className='content-sub'><h1>Accelerate your career with Nurture InfoTech internships</h1></div>
                </div>         
            </div>
            <div className='internship-img'>
                <img className='img' src="./assets/Images/Internship images/Internship_image.png" alt="" />
            </div>
            <div className='internship-bgc'></div>
      </div>

      <div className='cards'>
        <div className='c-content'>        
        <div className='card-content'>
        <button class="btn">
    Join us
</button><br></br>
          <h1>Intern with Nurture Infotech </h1><br></br>
          <h2>Nurture Infotech makes it possible for you to achieve your fullest potential. We nurture our talent, and equip them to contribute to the creation of a better future. With exciting opportunities across a breadth of domains and industries, we encourage you to take the initial steps toward a fulfilling career with us.</h2>
        </div>
        <div className='card-image'> 
          <img className='c-img1' src="./assets/Images/Internship images/c-img-1.jpg" alt="" /></div>
        </div>
        <div className='c-content'> 
        <div className='card-image'> 
          <img className='c-img1' src="./assets/Images/Internship images/c-img-2.jpg" alt="" />
        </div>
          <div className='card-content'>
          <button class="btn">
    Join us
</button><br></br>
          <h1>Intern with Nurture Infotech </h1><br></br>
          <h2>"Embark on a journey of learning and growth with Nurture Infotech's internship program. Here, we don't just offer opportunities; we cultivate future leaders, nurture innovation, and sow the seeds of success. Join us, where internships become the bridge between potential and achievement. Your professional evolution starts here at Nurture Infotech."</h2>
        </div>
        </div>       
       
        
      </div>
    </div>
  )
}

export default Internship
