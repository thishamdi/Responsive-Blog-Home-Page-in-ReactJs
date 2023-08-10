import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./video__slider_latest.css";

import img1 from "../../assets/images/home.jpg";
import img2 from "../../assets/images/home11.jpg";
import img3 from "../../assets/images/home1.jpg";

const SampleNextArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
        <i class='fa fa-chevron-right'></i>
      </button>
    </div>
  )
}
const SamplePrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
        <i class='fa fa-chevron-left'></i>
      </button>
    </div>
  )
}
const Video__slider_latest = () => {
  const settings = {
    arrows: true,

    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <div className="video__slider_latest">
      <section className='upcome'>
        <div className='container'>
          <div className='heading flexSB'>
            <h1>أحدث الفيديوهات</h1>
            <a href="">المزيد</a>
          </div>
          <div className='content'>
            <Slider {...settings}>


              <div className='MovieBox'>
                <div className='img'>
                  <img src={img1} alt='' />
                </div>
                <div className='text'>
                  <div className="content__tags">
                    <div className="tag tag-1">تاريخ</div>
                    <div className="tag tag-2">قانون</div>
                  </div>
                  <h3>في تونس، المرسوم عدد 54 يريد كمّ أفواه الأصوات المناوئة</h3>
                  <div className="banner-details">
                    <p>
                      في 13 ماي 2023
                      <span className="icons icons-red">
                        <i className="fas fa-calendar-day"></i>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="video__duration_wrapper">
                  <p className="video__duration">5:23</p>
                </div>
                <div class="overlay"></div>
                <button class="card-btn"><i class="fas fa-play"></i></button>

              </div>


              <div className='MovieBox'>
                <div className='img'>
                  <img src={img3} alt='' />
                </div>
                <div className='text'>
                  <div className="content__tags">
                    <div className="tag tag-1">تاريخ</div>
                    <div className="tag tag-2">قانون</div>
                  </div>
                  <h3>في تونس، المرسوم عدد 54 يريد كمّ أفواه الأصوات المناوئة</h3>
                  <div className="banner-details">
                    <p>
                      في 13 ماي 2023
                      <span className="icons icons-red">
                        <i className="fas fa-calendar-day"></i>
                      </span>
                    </p>
                  </div>
                </div>
                  <p className="video__duration">14:20</p>
                <div class="overlay"></div>
                <button class="card-btn"><i class="fas fa-play"></i></button>
              </div>


              <div className='MovieBox'>
                <div className='img'>
                  <img src={img2} alt='' />
                </div>
                <div className='text'>
                  <div className="content__tags">
                    <div className="tag tag-1">تاريخ</div>
                    <div className="tag tag-2">قانون</div>
                  </div>
                  <h3>في تونس، المرسوم عدد 54 يريد كمّ أفواه الأصوات المناوئة</h3>
                  <div className="banner-details">
                    <p>
                      في 13 ماي 2023
                      <span className="icons icons-red">
                        <i className="fas fa-calendar-day"></i>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="video__duration_wrapper">
                  <p className="video__duration">5:23</p>
                </div>
                <div class="overlay"></div>
                <button class="card-btn"><i class="fas fa-play"></i></button>
              </div>


              <div className='MovieBox'>
                <div className='img'>
                  <img src={img1} alt='' />
                </div>
                <div className='text'>
                  <div className="content__tags">
                    <div className="tag tag-1">تاريخ</div>
                    <div className="tag tag-2">قانون</div>
                  </div>
                  <h3>في تونس، المرسوم عدد 54 يريد كمّ أفواه الأصوات المناوئة</h3>
                  <div className="banner-details">
                    <p>
                      في 13 ماي 2023
                      <span className="icons icons-red">
                        <i className="fas fa-calendar-day"></i>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="video__duration_wrapper">
                  <p className="video__duration">5:23</p>
                </div>
                <div class="overlay"></div>
                <button class="card-btn"><i class="fas fa-play"></i></button>
              </div>



            </Slider>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Video__slider_latest
