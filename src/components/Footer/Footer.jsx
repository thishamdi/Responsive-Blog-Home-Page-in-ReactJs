import React from "react"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className="box">
            <div className='logo'>
              {/* <img src='./images/logo.png' alt='' /> */}
              <a href=""><span>بـ</span>السياسة</a>
            </div>
            <p>© 2023 إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.</p>
          </div>
          <div className='box'>
            <h3>روابط مهمة</h3>
            <ul>
              <li>تواصل معنا</li>
              <li>سياسة الخصوصية</li>
              <li>مقالات</li>
              <li>منوعات</li>
            </ul>
          </div>
          <div className='box'>
            <h3>تابعنا عبر</h3>
            <i className='fab fa-facebook-f'></i>
            <i className='fab fa-instagram'></i>
            <i className='fab fa-twitter'></i>
            <i className='fab fa-youtube'></i>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
