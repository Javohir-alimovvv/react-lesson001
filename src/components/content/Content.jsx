import React from 'react'
import "./Content.css"
import avatar from '../../assets/images/IMAGE (10).png'
import avatartwo from '../../assets/images/IMAGE (9).png'
import img1 from "../../assets/images/image (2).png"
import img2 from "../../assets/images/image (3).png"
import img3 from "../../assets/images/image (4).png"
import img4 from "../../assets/images/image (5).png"
import img5 from "../../assets/images/image (6).png"
import img6 from "../../assets/images/image (7).png"



const Content = () => {
  return (
    <>

      <div className="content__big">
        <div className="container">
          <div className="content__box">
            <div className='content__top'>
              <h3 className='content__top__text'>Featured Posts</h3>
              <div className='featured'>
                <div className='featured__card'>
                  <h3 className='featured__card__top__text'>The Road Ahead</h3>
                  <p className='featured__card__center__text'>The road ahead might be paved - it might not be.</p>
                  <div className='featured__card__group'>
                    <div className='featured__card__avatar__gr'>
                      <img className='featured__card__avatar' src={avatar} alt="avatar" />
                      <p className='featured__card__avatar__text'>Mat Vogels</p>
                    </div>
                    <p className='featured__card__right__text'>September 25, 2015</p>
                  </div>
                </div>
                <div className='featured__card__two'>
                  <h3 className='featured__card__top__text'>The Road Ahead</h3>
                  <p className='featured__card__center__text'>The road ahead might be paved - it might not be.</p>
                  <div className='featured__card__group'>
                    <div className='featured__card__avatar__gr'>
                      <img className='featured__card__avatar' src={avatar} alt="avatar" />
                      <p className='featured__card__avatar__text'>Mat Vogels</p>
                    </div>
                    <p className='featured__card__right__text'>September 25, 2015</p>
                  </div>
                </div>
              </div>
            </div>

            <div className-='content__bottom'>
              <h3 className='content__bottom_text'>Most Recent</h3>
              <div className='content__bottom__gr'>
                <div className="most_card">
                  <img className="most_img" src={img1} alt="most_img" />
                  <p className="most_card_title1">Still Standing Tall</p>
                  <p className="most_card_title2">Life begins at the end of your comfort zone.</p>
                  <hr className="most_line" />
                  <div className="most_user_content">
                    <div className="user_wrap">
                      <img className="most_user_img" src={avatartwo} alt="most_user_img" />
                      <span className="most_username">William Wong</span>
                    </div>
                    <p className="most_data">9/25/2015</p>
                  </div>
                </div>
                <div className="most_card">
                  <img className="most_img" src={img2} alt="most_img" />
                  <p className="most_card_title1">Sunny Side Up</p>
                  <p className="most_card_title2">No place is ever tell you it’s going to be.</p>
                  <hr className="most_line" />
                  <div className="most_user_content">
                    <div className="user_wrap">
                      <img className="most_user_img" src={avatar} alt="most_user_img" />
                      <span className="most_username">Mat Vogels</span>
                    </div>
                    <p className="most_data">9/25/2015</p>
                  </div>
                </div>
                <div className="most_card">
                  <img className="most_img" src={img3} alt="most_img" />
                  <p className="most_card_title1">Still Standing Tall</p>
                  <p className="most_card_title2">Life begins at the end of your comfort zone.</p>
                  <hr className="most_line" />
                  <div className="most_user_content">
                    <div className="user_wrap">
                      <img className="most_user_img" src={avatartwo} alt="most_user_img" />
                      <span className="most_username">William Wong</span>
                    </div>
                    <p className="most_data">9/25/2015</p>
                  </div>
                </div>
                <div className="most_card">
                  <img className="most_img" src={img4} alt="most_img" />
                  <p className="most_card_title1">Sunny Side Up</p>
                  <p className="most_card_title2">No place is ever tell you it’s going to be.</p>
                  <hr className="most_line" />
                  <div className="most_user_content">
                    <div className="user_wrap">
                      <img className="most_user_img" src={avatar} alt="most_user_img" />
                      <span className="most_username">Mat Vogels</span>
                    </div>
                    <p className="most_data">9/25/2015</p>
                  </div>
                </div>
                <div className="most_card">
                  <img className="most_img" src={img5} alt="most_img" />
                  <p className="most_card_title1">Still Standing Tall</p>
                  <p className="most_card_title2">Life begins at the end of your comfort zone.</p>
                  <hr className="most_line" />
                  <div className="most_user_content">
                    <div className="user_wrap">
                      <img className="most_user_img" src={avatartwo} alt="most_user_img" />
                      <span className="most_username">William Wong</span>
                    </div>
                    <p className="most_data">9/25/2015</p>
                  </div>
                </div>
                <div className="most_card">
                  <img className="most_img" src={img6} alt="most_img" />
                  <p className="most_card_title1">Sunny Side Up</p>
                  <p className="most_card_title2">No place is ever tell you it’s going to be.</p>
                  <hr className="most_line" />
                  <div className="most_user_content">
                    <div className="user_wrap">
                      <img className="most_user_img" src={avatar} alt="most_user_img" />
                      <span className="most_username">Mat Vogels</span>
                    </div>
                    <p className="most_data">9/25/2015</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Content