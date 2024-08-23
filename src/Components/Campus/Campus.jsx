import React from 'react'
import './Campus.css'
import gallery_1 from '../../Img/gallery-1.png'
import gallery_2 from '../../Img/gallery-2.png'
import gallery_3 from '../../Img/gallery-3.png'
import gallery_4 from '../../Img/gallery-4.png'
import white from '../../Img/white-arrow.png'


const Campus = () => {
  return (
    <div className='campus'>
      <div className="gallery">
        <img src={gallery_1} alt="" />
        <img src={gallery_2} alt="" />
        <img src={gallery_3} alt="" />
        <img src={gallery_4} alt="" />

      </div>
      <button className='btn dark-btn' >See More Here <img src={white} alt="" /></button>
    </div>
  )
}

export default Campus
