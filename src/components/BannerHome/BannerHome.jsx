import style from "./BannerHome.module.css";
import img_banner_1 from "../../assets/images/banner-1.jpg";
import img_banner_2 from "../../assets/images/banner-2.jpg";
import img_banner_3 from "../../assets/images/banner-3.jpg";

export default function BannerHome() {
  return (
    <div className="banner_home">
      <div className="container">
        <div className="row">
          <div className="col-6 col-md-6 col-lg-3 mb-2">
            <div className={`${style.card_hover} position-relative`}>
              <img src={img_banner_1} className="w-100" alt="" />
              <div className="position-absolute top-0 start-0 w-100 h-100 p-5 text-white">
                <h6>Weekend Sale</h6>
                <div>
                  <h1 className="my-3 h2">
                    Lighting &<br /> Accessories
                  </h1>
                  <span>25% off</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-6 col-lg-3  mb-2">
            <div className={`${style.card_hover} position-relative`}>
              <img src={img_banner_3} className="w-100" alt="" />
              <div className="position-absolute top-0 start-0 w-100 h-100 p-5 text-white">
                <h6>Smart Offer</h6>
                <div>
                  <h1 className="my-3 h2">
                    Anniversary <br /> Special
                  </h1>
                  <span>15% off</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 mb-2">
            <div className={`${style.card_hover} position-relative`}>
              <img src={img_banner_2} className="w-100" alt="" />
              <div className="position-absolute top-0 start-0 w-100 h-100 p-5 text-white">
                <h6>Amazing Value</h6>
                <div>
                  <h1 className="my-3 h2">
                    Clothes Trending <br /> Spring Collection 2019
                  </h1>
                  <span>from $12,99</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
