import React from 'react'

const AwardCard = ({ award }) => {

  return (
    <div className='app__laurels_awards-card'>
        <img src={award.imgUrl} alt="award" />
      <div className="app__laurels_awards-card_content">
        <p className='p__cormorant'>{award.title}</p>
        <p className='p__opensans'>{award.subtitle}</p>
      </div>
    </div>
  )
}

export default AwardCard
