import React from 'react'
import'./detailsSection.css'
import Image1 from '../assets/detail-1.jpeg'
import Image2 from '../assets/detail-2.jpeg'
import Image3 from '../assets/detail-3.jpeg'

const DetailsSection = () => {
  return (
    <div className='title main'>
    <div className='title'>
        <h2>Why you want to choose BikePulse ?</h2>
        <div className='details1'>
        <div className='about-left'>
            <h3>Tailor your Services</h3>
            <p>Our platform offers flexible options, allowing you to customize and adapt services to your specific business needs. 
                Whether it's connecting with your own service team or reaching out to skilled technicians through the BikePulse network,
                 we provide the tools to make it work for you.</p>
        </div>
        <div className='about-right'>
            <img src={Image1} alt='' className='Image1'/>
        </div>
      </div>

      <div className='details2'>
        <div className='about-left2'>
            <img src={Image2} alt='' className='Image2'/>
        </div>
        <div className='about-right2'>
            <h3>Enhance your presence</h3>
            <p>Elevate your shop's visibility with in-app promotions, 
                ensuring that your services stand out and attract more customers,
                 ultimately boosting sales.</p>
        </div>
      </div>

      <div className='details3'>
        <div className='about-left3'>
            <h3>Engage with your audience</h3>
            <p>Transform one-time customers into loyal clients by leveraging actionable insights from our platform.
                 Respond to customer feedback, implement loyalty programs, and use data-driven strategies to create lasting connections.
                 At BikePulse, we empower you to connect, grow, and succeed.</p>
        </div>
        <div className='about-right3'>
            <img src={Image3} alt='' className='Image3'/>
        </div>
      </div>


    </div>
    </div>
  )
}

export default DetailsSection
