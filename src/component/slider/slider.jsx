import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./slider.module.css";

import img1 from "./img/tow.png";
import img2 from "./img/tow2.png";
import img3 from "./img/tow3.png";

export default function SliderMain() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <h1>Slider</h1>
      <div className="slider_place">
        <Slider {...settings} className={style.slider}>
          <div className={style.slide}>
            <img src={img1} alt="" className={style.img} />
          </div>
          <div className={style.slide}>
            <img src={img2} alt="" className={style.img} />
          </div>
          <div className={style.slide}>
            <img src={img3} alt="" className={style.img} />
          </div>
        </Slider>
      </div>
    </>
  );
}
