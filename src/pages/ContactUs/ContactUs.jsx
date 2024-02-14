import style from "./ContactUs.module.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

export default function ContactUs() {
  return (
    <>
      <div
        className={`${style.bgHeader} d-flex justify-content-center align-items-center`}
      >
        <h1>Contact Us</h1>
      </div>
      <Breadcrumbs />
      <div className={`${style.contact} my-5`}>
        <div className="container">
          <div className={`${style.row}`}>
            <div className={`${style.input_text}`}>
              <form action="">
                <h4>Send Us Message</h4>
                <input
                  type="text"
                  name="email"
                  id="#"
                  placeholder="Your Email Address"
                />
                <textarea
                  type="text"
                  name="msg"
                  id="#"
                  placeholder="How Can We Help ?"
                ></textarea>
                <button>Submit</button>
              </form>
            </div>
            <div className={`${style.details_text}`}>
              <div className={`${style.details_text_spaa}`}>
                <span>
                  <FaMapMarkerAlt size={18} className="me-4" />
                  <h5>Address</h5>
                </span>
                <p>
                  Molla Store Center 8th floor, 379 Hudson St, New York, NY
                  10018 US
                </p>
              </div>
              <div className={`${style.details_text_spaa}`}>
                <span>
                  <FaPhoneAlt size={18} className="me-4" />
                  <h5>Lets Talk</h5>
                </span>
                <p className={`${style.p}`}>+10123 456 789</p>
              </div>
              <div className={`${style.details_text_spaa}`}>
                <span>
                  <MdOutlineEmail size={18} className="me-4" />
                  <h5>Sale Support</h5>
                </span>
                <p className={`${style.p}`}>contact@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
