import style from "./HomeSecondBanner.module.css";
import img_banner_4 from "../../assets/images/banner-4.jpg";
import img_banner_5 from "../../assets/images/banner-5.png";
export default function HomeSecondBanner() {
  return (
    <div className="banner_home">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6 mb-2">
            <div className={`${style.card_hover} position-relative `}>
              <img src={img_banner_4} className="w-100" alt="" />
              <div className="position-absolute top-0 start-0 w-100 h-100 p-5 text-dark">
                <h6>Spring Sale is Coming</h6>
                <div>
                  <h1 className="my-3 h2">
                    All Smart Watches
                    <br /> Discount
                  </h1>
                  <span className="text-primary fs-3">15% off</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 mb-2">
            <div className={`${style.card_hover} position-relative`}>
              <img src={img_banner_5} className="w-100" alt="" />
              <div className="position-absolute top-0 start-0 w-100 h-100 p-5 text-white">
                <h6>Amazing Value</h6>
                <div>
                  <h1 className="my-3 h2">
                    Clothes Trending <br /> Spring Collection 2019
                  </h1>
                  <span className="fs-4">from $59,99</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
