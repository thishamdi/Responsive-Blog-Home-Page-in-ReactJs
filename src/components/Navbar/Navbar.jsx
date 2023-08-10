import React, { useState } from "react"
import useReadingProgress from "./useReadingProgress"


import './navbar.css'


const nav_links = [
    {
        path: '#home',
        display: 'الرئيسية'
    },
    {
        path: '#',
        display: 'مقالات'
    },
    {
        path: '#',
        display: 'فيديوهات'
    },
    {
        path: '#',
        display: 'منوعات'
    },
    {
        path: '#',
        display: 'محتوى ترفيهي'
    },
];

const menu_links = [
    {
        path: '#',
        display: 'تحقيقات'
    },
    {
        path: '#',
        display: 'روبرتاجات'
    },
    {
        path: '#',
        display: 'نقطة نظام'
    },
    {
        path: '#',
        display: 'روبرتاجات مصورة'
    },
    {
        path: '#',
        display: 'وثائقيات الواب'
    },
];



const Navbar = () => {
    const completion = useReadingProgress();
    const [Mobile, setMobile] = useState(false)
    const [isShown, setIsShown] = useState(false);

    const handleClick = event => {
        // toggle shown state
        setIsShown(current => !current);
    };

    return (
        <>
            <section className="navbar">
                <div className="progress-bar" style={{transform: `translateX(${completion - 100}%)`}}/>
                <div className='container flexSB'>
                    <nav className='flexSB'>
                        <div className='logo'>
                            {/* <img src='./images/logo.png' alt='' /> */}
                            <a href=""><span>بـ</span>السياسة</a>
                        </div>
                        <ul className="navMenu-list flexSB">

                            {nav_links.map((item, index) => (
                                <li key={index} className="nav_item">
                                    <a href={item.path}>
                                        {item.display}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>


                    <div className="mobile-menu flexSB">

                        <div className='user'>
                            {/* <i className='fa fa-search'></i> */}
                            <i className='fas fa-user'></i>
                        </div>
                        <div className='search'>
                            <i className='fa fa-search'></i>
                        </div>

                        <button className='toggle' onClick={() => { setMobile(!Mobile); handleClick() }}>
                            {Mobile ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
                        </button>
                    </div>

                </div>


                {isShown && (
                    <div className={Mobile ? "expanded-nav" : "flexSB"}>
                        <ul className="navMenu-list flexSB">

                            {nav_links.map((item, index) => (
                                <li key={index} className="nav_item">
                                    <a href={item.path}>
                                        {item.display}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <ul className="navMenu-list flexSB">

                            {menu_links.map((item, index) => (
                                <li key={index} className="nav_item">
                                    <a href={item.path}>
                                        {item.display}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <div className="login ">
                            <button>تسجيل الدخول</button>
                        </div>

                        <div className="account flexSB">
                            <i className='fab fa-facebook-f'></i>
                            <i className='fab fa-instagram'></i>
                            <i className='fab fa-twitter'></i>
                            <i className='fab fa-youtube'></i>
                        </div>
                    </div>
                )}
            </section>
        </>
    )
}


export default Navbar