import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./article__slider.css";

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
const Article__slider = () => {
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
    <>
      <section className='upcome'>
        <div className='container'>
          <div className='heading flexSB'>
            <h1>أحدث المقالات</h1>
            <a href="">المزيد</a>
          </div>
          <div className='content'>
            <Slider {...settings}>


              <div className='MovieBox'>
                <div className='img'>
                  <img src={img1} alt='' />
                </div>
                <div className='text'>
                  <h3>في تونس، المرسوم عدد 54 يريد كمّ أفواه الأصوات المناوئة
                  </h3>
                  <p className="para__text">وعد قيس سعيد طوال حملته الانتخابية باحترام استقلالية القضاء والحد من التدخلات في السلطة السياسية. لكن الرئيس بعدما استفرد بكل الصلاحيات في 25 جويلية 2021، شرع في عملية تدمير منهجي وتدريجيّ لاستقلالية القضاء التونسي.</p>
                  {/* <span>2h 38min</span> <br /> */}
                  {/*<Link to={`/singlepage/${id}`}>*/}
                  {/* <div className="banner-details flexSB">
                    <span>في 13 ماي 2023</span>
                    <span>بقلم سيف الدين نفاتي</span>
                  </div> */}
                  {/*</Link>*/}
                </div>
              </div>


              <div className='MovieBox'>
                <div className='img'>
                  <img src={img2} alt='' />
                </div>
                <div className='text'>
                  <h3>في تونس، المرسوم عدد 54 يريد كمّ أفواه الأصوات المناوئة
                  </h3>
                  <p className="para__text">وعد قيس سعيد طوال حملته الانتخابية باحترام استقلالية القضاء والحد من التدخلات في السلطة السياسية. لكن الرئيس بعدما استفرد بكل الصلاحيات في 25 جويلية 2021، شرع في عملية تدمير منهجي وتدريجيّ لاستقلالية القضاء التونسي.</p>

                  {/* <span>2h 38min</span> <br /> */}
                  {/*<Link to={`/singlepage/${id}`}>*/}
                  {/* <div className="banner-details flexSB">
                    <span>في 13 ماي 2023</span>
                    <span>بقلم سيف الدين نفاتي</span>
                  </div> */}
                  {/*</Link>*/}
                </div>
              </div>


              <div className='MovieBox'>
                <div className='img'>
                  <img src={img3} alt='' />
                </div>
                <div className='text'>
                  <h3>في تونس، المرسوم عدد 54 يريد كمّ أفواه الأصوات المناوئة
                  </h3>
                  <p className="para__text">وعد قيس سعيد طوال حملته الانتخابية باحترام استقلالية القضاء والحد من التدخلات في السلطة السياسية. لكن الرئيس بعدما استفرد بكل الصلاحيات في 25 جويلية 2021، شرع في عملية تدمير منهجي وتدريجيّ لاستقلالية القضاء التونسي.</p>

                  {/* <span>2h 38min</span> <br /> */}
                  {/*<Link to={`/singlepage/${id}`}>*/}
                  {/* <div className="banner-details flexSB">
                    <span>في 13 ماي 2023</span>
                    <span>بقلم سيف الدين نفاتي</span>
                  </div> */}
                  {/*</Link>*/}
                </div>
              </div>


              <div className='MovieBox'>
                <div className='img'>
                  <img src={img2} alt='' />
                </div>
                <div className='text'>
                  <h3>في تونس، المرسوم عدد 54 يريد كمّ أفواه الأصوات المناوئة
                  </h3>
                  <p className="para__text">وعد قيس سعيد طوال حملته الانتخابية باحترام استقلالية القضاء والحد من التدخلات في السلطة السياسية. لكن الرئيس بعدما استفرد بكل الصلاحيات في 25 جويلية 2021، شرع في عملية تدمير منهجي وتدريجيّ لاستقلالية القضاء التونسي.</p>

                  {/* <span>2h 38min</span> <br /> */}
                  {/*<Link to={`/singlepage/${id}`}>*/}
                  {/* <div className="banner-details flexSB">
                    <span>في 13 ماي 2023</span>
                    <span>بقلم سيف الدين نفاتي</span>
                  </div> */}
                  {/*</Link>*/}
                </div>
              </div>


              
            </Slider>
          </div>
        </div>
      </section>
    </>
  )
}

export default Article__slider
