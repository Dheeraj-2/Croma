import React, { useRef } from 'react'
import  './Testimonialls.css'
import next from '../../Img/next-icon.png'
import back from '../../Img/back-icon.png'
import user_1 from '../../Img/user-1.png'
import user_2 from '../../Img/user-2.png'
import user_3 from '../../Img/user-3.png'
import user_4 from '../../Img/user-4.png'


const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

    const sliderForward = ()=>{
        if(tx>-50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }
    
    const sliderBackward = ()=>{
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }


  return (
    <div className='testimonials'>
        <img src={next} alt="" className='next-btn' onClick={sliderForward}/>
        <img src={back} alt="" className='back-btn' onClick={sliderBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>William Jackson</h3>
                                <span>Edusity,USA</span>
                            </div>                  
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat facere recusandae similique? Unde consequuntur pariatur quisquam vitae voluptatem</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>William Jackson</h3>
                                <span>Edusity,USA</span>
                            </div>                  
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat facere recusandae similique? Unde consequuntur pariatur quisquam vitae voluptatem.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>William Jackson</h3>
                                <span>Edusity,USA</span>
                            </div>                  
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat facere recusandae similique? Unde consequuntur pariatur quisquam vitae voluptatem.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>William Jackson</h3>
                                <span>Edusity,USA</span>
                            </div>                  
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat facere recusandae similique? Unde consequuntur pariatur quisquam vitae voluptatem.</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials;
