import React, { useState } from "react"
import Slider from "react-slick";

import { homeData } from "../../dummyData"


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "../Header/header.css";
import "./video__slider.css";
import img1 from "../../assets/images/home.jpg";
import img2 from "../../assets/images/home11.jpg";
import img3 from "../../assets/images/home1.jpg";


import Navbar from "../Navbar/Navbar";




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




const Video__slider = () => {

    const settings = {
        arrows: false,
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,

        autoplaySpeed: 6000,
        pauseOnHover: true,
        // nextArrow: <SampleNextArrow />,
        // prevArrow: <SamplePrevArrow />,
    }

    return (

        <section className="video__slider">

            <div className="container">
                <div className='heading flexSB'>
                    <h1>أفضل الفيديوهات</h1>
                    <a href="">المزيد</a>
                </div>
            </div>

            <div className="video__bloc">
                <Slider {...settings}>


                    <div className="single-banner">
                        <div className="banner-img">
                            <img src={img3} alt="" />
                        </div>
                        <div className="banner-text">
                            <div className="content__tags">
                                <div className="tag tag-1">تاريخ</div>
                                <div className="tag tag-2">قانون</div>
                            </div>
                            <h1 className="header__title">قيس سعيّد يحكم قبضته الخانقة على القضاء واستقلاليته</h1>
                            <p className="para__text">وعد قيس سعيد طوال حملته الانتخابية باحترام استقلالية القضاء والحد من التدخلات في السلطة السياسية. لكن الرئيس بعدما استفرد بكل الصلاحيات في 25 جويلية 2021، شرع في عملية تدمير منهجي وتدريجيّ لاستقلالية القضاء التونسي.</p>
                            <div className="banner-details flexSB">
                                <p>
                                    5 min                                    <span className="icons icons-red">
                                        <i className="fas fa-clock"></i>
                                    </span>
                                </p>
                                <p>
                                    في 16 أوت 2023
                                    <span className="icons icons-red">
                                        <i className="fas fa-calendar-day"></i>
                                    </span>
                                </p>
                                <p>
                                    فادية عياري
                                    <span className="icons icons-red">
                                        <i className="fa fa-user"></i>
                                    </span>
                                </p>
                            </div>

                            <button className='primary-btn'>
                                <i className='fas fa-play'></i> شاهد الان
                            </button>
                        </div>

                        <div className='palyButton'>
                            {/* <Link to={`/singlepage/${id}`}> */}
                            <button class="button">
                                <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="26px"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" fill="currentColor"></path></svg>
                            </button>
                            {/* </Link> */}
                        </div>

                    </div>








                    <div className="single-banner">
                        <div className="banner-img">
                            <img src={img2} alt="" />
                        </div>
                        <div className="banner-text">
                            <div className="content__tags">
                                <div className="tag tag-1">تاريخ</div>
                                <div className="tag tag-2">قانون</div>
                            </div>
                            <h1 className="header__title">قيس سعيّد يحكم قبضته الخانقة على القضاء واستقلاليته</h1>
                            <p className="para__text">وعد قيس سعيد طوال حملته الانتخابية باحترام استقلالية القضاء والحد من التدخلات في السلطة السياسية. لكن الرئيس بعدما استفرد بكل الصلاحيات في 25 جويلية 2021، شرع في عملية تدمير منهجي وتدريجيّ لاستقلالية القضاء التونسي.</p>
                            <div className="banner-details flexSB">
                                <p>
                                    5 min                                    <span className="icons icons-red">
                                        <i className="fas fa-clock"></i>
                                    </span>
                                </p>
                                <p>
                                    في 16 أوت 2023
                                    <span className="icons icons-red">
                                        <i className="fas fa-calendar-day"></i>
                                    </span>
                                </p>
                                <p>
                                    فادية عياري
                                    <span className="icons icons-red">
                                        <i className="fa fa-user"></i>
                                    </span>
                                </p>
                            </div>

                            <button className='primary-btn'>
                                <i className='fas fa-play'></i> شاهد الان
                            </button>
                        </div>

                        <div className='palyButton'>
                            {/* <Link to={`/singlepage/${id}`}> */}
                            <button class="button">
                                <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="26px"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" fill="currentColor"></path></svg>
                            </button>
                            {/* </Link> */}
                        </div>

                    </div>

                    <div className="single-banner">
                        <div className="banner-img">
                            <img src={img1} alt="" />
                        </div>
                        <div className="banner-text">
                            <div className="content__tags">
                                <div className="tag tag-1">تاريخ</div>
                                <div className="tag tag-2">قانون</div>
                            </div>
                            <h1 className="header__title">قيس سعيّد يحكم قبضته الخانقة على القضاء واستقلاليته</h1>
                            <p className="para__text">وعد قيس سعيد طوال حملته الانتخابية باحترام استقلالية القضاء والحد من التدخلات في السلطة السياسية. لكن الرئيس بعدما استفرد بكل الصلاحيات في 25 جويلية 2021، شرع في عملية تدمير منهجي وتدريجيّ لاستقلالية القضاء التونسي.</p>
                            <div className="banner-details flexSB">
                                <p>
                                    5 min                                    <span className="icons icons-red">
                                        <i className="fas fa-clock"></i>
                                    </span>
                                </p>
                                <p>
                                    في 16 أوت 2023
                                    <span className="icons icons-red">
                                        <i className="fas fa-calendar-day"></i>
                                    </span>
                                </p>
                                <p>
                                    فادية عياري
                                    <span className="icons icons-red">
                                        <i className="fa fa-user"></i>
                                    </span>
                                </p>
                            </div>

                            <button className='primary-btn'>
                                <i className='fas fa-play'></i> شاهد الان
                            </button>
                        </div>

                        <div className='palyButton'>
                            {/* <Link to={`/singlepage/${id}`}> */}
                            <button class="play-btn">
                                <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="26px"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" fill="currentColor"></path></svg>
                            </button>
                            {/* </Link> */}
                        </div>

                    </div>

                </Slider >
            </div >
        </section >
    );
};


export default Video__slider

