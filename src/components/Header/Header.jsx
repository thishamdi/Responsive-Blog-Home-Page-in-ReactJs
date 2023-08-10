import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./header.css";
import img1 from "../../assets/images/home.jpg";
import img2 from "../../assets/images/home11.jpg";
import img3 from "../../assets/images/home1.jpg";

import Navbar from "../Navbar/Navbar";


const Header = () => {

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

    };

    return (
        <div className="banner-area">
            <div className="container">
                <div className='heading flexSB'>
                    <h1>فيديوهات</h1>
                    <a href="">المزيد</a>
                </div>
            </div>
            <Slider {...settings}>


                <div className="single-banner">
                    <div className="banner-img">
                        <img src={img1} alt="" />
                    </div>
                    <div className="banner-text">
                        <h1 className="header__title">قيس سعيّد يحكم قبضته الخانقة على القضاء واستقلاليته</h1>
                        <p className="para__text">وعد قيس سعيد طوال حملته الانتخابية باحترام استقلالية القضاء والحد من التدخلات في السلطة السياسية. لكن الرئيس بعدما استفرد بكل الصلاحيات في 25 جويلية 2021، شرع في عملية تدمير منهجي وتدريجيّ لاستقلالية القضاء التونسي.</p>
                        <button>للإشتراك الان</button>

                    </div>
                </div>




                <div className="single-banner">
                    <div className="banner-img">
                        <img src={img2} alt="" />
                    </div>
                    <div className="banner-text">
                        <h1 className="header__title">قيس سعيّد يحكم قبضته الخانقة على القضاء واستقلاليته</h1>
                        <p className="para__text">وعد قيس سعيد طوال حملته الانتخابية باحترام استقلالية القضاء والحد من التدخلات في السلطة السياسية. لكن الرئيس بعدما استفرد بكل الصلاحيات في 25 جويلية 2021، شرع في عملية تدمير منهجي وتدريجيّ لاستقلالية القضاء التونسي.</p>
                        <button>للإشتراك الان</button>

                    </div>
                </div>



                <div className="single-banner">
                    <div className="banner-img">
                        <img src={img3} alt="" />
                    </div>
                    <div className="banner-text">
                        <h1 className="header__title">قيس سعيّد يحكم قبضته الخانقة على القضاء واستقلاليته</h1>
                        <p className="para__text">وعد قيس سعيد طوال حملته الانتخابية باحترام استقلالية القضاء والحد من التدخلات في السلطة السياسية. لكن الرئيس بعدما استفرد بكل الصلاحيات في 25 جويلية 2021، شرع في عملية تدمير منهجي وتدريجيّ لاستقلالية القضاء التونسي.</p>
                        <button>للإشتراك الان</button>
                    </div>
                </div>

            </Slider >
        </div>

    )
}

export default Header


// const Header = () => (
//     <div className="header">
//         <Navbar />

//         <div className="header__container">
//             <div className="header__content">
//                 <div className="header__content--right">
//                     <h1 className="header__title">قيس سعيّد يحكم قبضته الخانقة على القضاء واستقلاليته</h1>
//                     <p className="para__text">وعد قيس سعيد طوال حملته الانتخابية باحترام استقلالية القضاء والحد من التدخلات في السلطة السياسية. لكن الرئيس بعدما استفرد بكل الصلاحيات في 25 جويلية 2021، شرع في عملية تدمير منهجي وتدريجيّ لاستقلالية القضاء التونسي.</p>
//                     <button>تسجيل الدخول</button>
//                 </div>

//                 <div className="header__content--left">

//                 </div>
//             </div>
//         </div>
//     </div>
// )

// export default Header;