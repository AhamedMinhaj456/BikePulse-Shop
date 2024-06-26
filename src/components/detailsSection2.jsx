import React from 'react'
import'./detailsSection2.css'
import Image1 from '../assets/pic1.jpeg'
import Image2 from '../assets/pic2.jpeg'
import Image3 from '../assets/pic3.jpeg'


const DetailsSection2 = () => {
  return (
    <div className='title main'>
    <div className='details'>
    <div className='about-left'>
        <h3>Unlock New Customers</h3>
        <p>Tap into a vast pool of potential clients actively seeking bike services in your vicinity.
             By partnering with BikePulse and showcasing your shop on our platform, 
             you gain access to a wide audience of bike enthusiasts looking for quality service providers.
              Expand your reach and connect with customers who are ready to explore what your shop has to offer..</p>
    </div>
    <div className='about-right'>
        <img src={Image1} alt='' className='Image1'/>
    </div>
  </div>
</div>



  )
}

export default DetailsSection2
