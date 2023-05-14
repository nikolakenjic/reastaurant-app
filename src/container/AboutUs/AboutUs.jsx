import React from 'react'
import './AboutUs.css';
import { images } from '../../constants';

const AboutUs = () => {
  return (
    <div className='app__aboutus app__bg flex__center section__padding' id='about'>
      <div className="app__aboutus-overlay">
          <img src={images.G} alt="g logo" />
      </div>

      <div className="app__aboutus-content flex__center">

        <div className="app__aboutus-content_about">
            <h1 className="headtext__cormorant">About Us</h1>
            <img src={images.spoon} alt="spoon" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis nihil beatae consequatur
               dolorum dolor nostrum vero necessitatibus corporis quidem possimus,
               hic consequuntur voluptatum ad exercitationem eligendi minima atque repellat at.</p>
            <button type="button" className="custom__button">Know More</button>        
        </div>

        <div className="app__aboutus-content_knife">
          <img src={images.knife} alt="knife" />
        </div>

        <div className="app__aboutus-content_history">
            <h1 className="headtext__cormorant">Our History</h1>
            <img src={images.spoon} alt="spoon" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis nihil beatae consequatur
               dolorum dolor nostrum vero necessitatibus corporis quidem possimus,
               hic consequuntur voluptatum ad exercitationem eligendi minima atque repellat at.</p>
            <button type="button" className="custom__button">Know More</button>        
        </div>
      </div>
    </div>
  )
}

export default AboutUs
