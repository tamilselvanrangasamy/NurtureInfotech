import React, { useState } from 'react'
import './Hireus.css'
function Hireus() {
    const [selectedTag, setSelectedTag] = useState(null);

    const showImage = (tag) => {
        setSelectedTag(tag);
    };

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

            </section>

        </div>
    )
}

export default Hireus
