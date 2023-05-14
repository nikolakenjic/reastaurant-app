import React, { useRef, useState } from 'react'
import './Intro.css';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs'

import { meal } from '../../constants';

const Intro = () => {

  const [playVideo, setPlayVideo] = useState(false)
  const vidRef = useRef()

  const handleVideo = () => {
    setPlayVideo(prevSet => !prevSet)
    
    if(playVideo) {
      vidRef.current.pause()
    } else {
      vidRef.current.play()
    }
  }

  return (
    <div className='app__video'>
      <video 
          src={meal}
          ref={vidRef}
          type='video/mp4'
          controls={false}
          loop
          muted
      />

      <div className="app__video_overlay flex__center">
        <div 
          className="app__video-overlay-circle flex__center"
          onClick={handleVideo}
        >
          {playVideo ? <BsPauseFill className='pausePlay' color='#fff' fontSize={30}/> : <BsFillPlayFill className='pausePlay' color='#fff' fontSize={30}/>}
        </div>
      </div>
    </div>
  )
}

export default Intro
