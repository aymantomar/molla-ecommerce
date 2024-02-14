import Slider from "react-slick";
import style from "./Slider.module.css";
import slider1 from "../../assets/images/slide-1.png";
import slider2 from "../../assets/images/slide-2.jpg";
import slider3 from "../../assets/images/slide-3.jpg";
import { FaArrowRightLong } from "react-icons/fa6";
export default function HomeSlider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    arrows: false,
   
  };
  return (
    <div>
      <Slider  {...settings} className="text-text-center">
        <div className="position-relative">
          <img src={slider1} alt="Slider 1" />
          <div
            className={`${style.start25} ${style.top25} position-absolute z-1`}
          >
            <h3 className={`${style.smallSliderText}`}>Trade-In Offer</h3>
            <div className={`${style.introtitle}`}>
              <h1 className={`${style.bigSliderText} `}>
                MacBook Air 1 <br /> Latest Model
              </h1>
              <span>
                <sup className="font-weight-light">from</sup>
                <span className={`${style.textprimary} text-primary`}>
                  $999<sup>,99</sup>
                </span>
              </span>
            </div>
            <button className="btn btn-outline-primary rounded-0 px-5 py-2 mt-3">
              Shop Now <FaArrowRightLong />{" "}
            </button>
          </div>
        </div>
        <div>
          <img src={slider2} alt="Slider 2" />
          <div
            className={`${style.start25} ${style.top25} position-absolute z-1`}
          >
            <h3 className={`${style.smallSliderText}`}>Trevel & Outdoor</h3>
            <div className={`${style.introtitle}`}>
              <h1 className={`${style.bigSliderText} `}>
                Original Outdoor <br /> Beanbag
              </h1>
              <span>
                <sup className="font-weight-light text-decoration-line-through">
                  $89,99
                </sup>
                <span className={`${style.textprimary} text-primary`}>
                  $29<sup>,99</sup>
                </span>
              </span>
            </div>
            <button className="btn btn-outline-primary rounded-0 px-5 py-2 mt-3">
              Shop Now <FaArrowRightLong />{" "}
            </button>
          </div>
        </div>
        <div>
          <img src={slider3} alt="Slider 3" />
          <div
            className={`${style.start25} ${style.top25} position-absolute z-1`}
          >
            <h3 className={`${style.smallSliderText}`}>Fashion Promotions</h3>
            <div className={`${style.introtitle}`}>
              <h1 className={`${style.bigSliderText} `}>
                Tan Suede <br /> Biker Jacket
              </h1>
              <span>
                <sup className="font-weight-light text-decoration-line-through">
                  $240,00
                </sup>
                <span className={`${style.textprimary} text-primary`}>
                  $180<sup>,99</sup>
                </span>
              </span>
            </div>
            <button className="btn btn-outline-primary rounded-0 px-5 py-2 mt-3">
              Shop Now <FaArrowRightLong />{" "}
            </button>
          </div>
        </div>
      </Slider>
    </div>
  );
}
