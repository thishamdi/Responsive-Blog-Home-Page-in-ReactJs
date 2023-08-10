import React from 'react'

import "./header__down.css";
import img1 from "../../assets/images/home.jpg";
import img2 from "../../assets/images/home11.jpg";
import img3 from "../../assets/images/home1.jpg";

const Header__down = () => {
    return (
            <section className="article__bloc">

                    <div className='article__box'>
                        <div className='img'>
                            <img src={img1} alt='' />
                        </div>
                        <div className="banner-text">
                            <h1 className="header__title">قيس سعيّد يحكم قبضته الخانقة على القضاء واستقلاليته</h1>
                            <p className="para__text">وعد قيس سعيد طوال حملته الانتخابية باحترام استقلالية القضاء والحد من التدخلات في السلطة السياسية. لكن الرئيس بعدما استفرد بكل الصلاحيات في 25 جويلية 2021، شرع في عملية تدمير منهجي وتدريجيّ لاستقلالية القضاء التونسي.</p>
                            <div className="banner-details flexSB">
                                <span>في 13 ماي 2023</span>
                                <span>بقلم سيف الدين نفاتي</span>
                            </div>
                        </div>
                    </div>


                    <div className='article__box'>
                        <div className='img'>
                            <img src={img2} alt='' />
                        </div>
                        <div className="banner-text">
                            <h1 className="header__title">قيس سعيّد يحكم قبضته الخانقة على القضاء واستقلاليته</h1>
                            <p className="para__text">وعد قيس سعيد طوال حملته الانتخابية باحترام استقلالية القضاء والحد من التدخلات في السلطة السياسية. لكن الرئيس بعدما استفرد بكل الصلاحيات في 25 جويلية 2021، شرع في عملية تدمير منهجي وتدريجيّ لاستقلالية القضاء التونسي.</p>
                            <div className="banner-details flexSB">
                                <span>في 13 ماي 2023</span>
                                <span>بقلم سيف الدين نفاتي</span>
                            </div>
                        </div>
                    </div>

                </section>

    )
}

export default Header__down