import React from 'react'
import './Laurels.css';
import { images } from '../../constants';
import { SubHeading } from '../../components';
import { data } from '../../constants';
import AwardCard from './AwardCard';


const Laurels = () => {

  const laurelAwards = data.awards
  const laurelAward = laurelAwards.map((award, index) => (
    <AwardCard
       key={award.title + index}
       award={award}
    />
  ))

  return (
    <div className='app__bg app__wrapper section__padding' id='awards'>
      <div className="app__wrapper_info">
        <SubHeading title='Awards & recongnition' />
        <h1 className='headtext__cormorant'>Our Laurels</h1>
        
        <div className="app__laurels_awards">
          {laurelAward}
        </div>
      </div>

      <div className="app__wrapper_img">
        <img src={images.laurels} alt="laurelsImg" />
      </div>
    </div>
  )
}

export default Laurels

