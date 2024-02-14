import style from "./HomeNewsLetter.module.css";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function HomeNewsLetter() {
  return (
    <div className={`${style.newsBg} mt-5`}>
      <div className="container">
        <div className="row py-5">
          <div className="col-12 col-md-6 text-white">
            <h6 className="p-0 mb-1 fw-bold">Join Our Newsletter</h6>
            <p className="p-0 m-0 fs-6">
              Subcribe to get information about products and coupons
            </p>
          </div>
          <div className="col-12 col-md-6">
            <div className="input-group mt-1">
              <input
                type="text"
                className="form-control p-2 rounded-0"
                placeholder="Enter Your Email Address"
              />
              <div className="input-group-append">
                <button className="btn outline-btn-primary text-white border border-right-0 rounded-0 p-2">
                  Subscribe <IoIosArrowRoundForward />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
