import style from "./Footer.module.css";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="border-top py-3 mt-5">
      <div className="container">
        <div className="row mt-5">
          <div className="col-12 col-md-6 col-lg-3 mb-2">
            <img src={logo} alt="" />
            <p className="py-3">
              Praesent dapibus, neque id cursus ucibus, tortor neque egestas
              augue, eu vulputate magna eros eu erat.
            </p>
            <ul className="d-flex mb-2">
              <li className="mx-2">
                <Link to="#" className={`${style.socialIcon}`}>
                  <FaFacebookF size={15} />
                </Link>
              </li>

              <li className="mx-2">
                <Link to="#" className={`${style.socialIcon}`}>
                  <FaTwitter size={15} />
                </Link>
              </li>

              <li className="mx-2">
                <Link to="#" className={`${style.socialIcon}`}>
                  <FaInstagram size={15} />
                </Link>
              </li>

              <li className="mx-2">
                <Link to="#" className={`${style.socialIcon}`}>
                  <FaYoutube size={15} />
                </Link>
              </li>
              <li className="mx-2">
                <Link to="#" className={`${style.socialIcon}`}>
                  <FaPinterest size={15} />
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-6 col-lg-3 mb-2">
            <h5 className="">Information</h5>
            <ul className={`${style.footerLink}`}>
              <li>
                <Link to="">About Molla</Link>
              </li>
              <li>
                <Link to="">How to shop in Molla</Link>
              </li>
              <li>
                <Link to="">FAQ</Link>
              </li>
              <li>
                <Link to="">Contact Us</Link>
              </li>
              <li>
                <Link to="">Login</Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-6 col-lg-3 mb-2">
            <h5 className="">Customer Service</h5>
            <ul className={`${style.footerLink}`}>
              <li>
                <Link to="">About Molla</Link>
              </li>
              <li>
                <Link to="">How to shop in Molla</Link>
              </li>
              <li>
                <Link to="">FAQ</Link>
              </li>
              <li>
                <Link to="">Contact Us</Link>
              </li>
              <li>
                <Link to="">Login</Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-6 col-lg-3 mb-2">
            <h5 className="">My Account</h5>
            <ul className={`${style.footerLink}`}>
              <li>
                <Link to="">About Molla</Link>
              </li>
              <li>
                <Link to="">How to shop in Molla</Link>
              </li>
              <li>
                <Link to="">FAQ</Link>
              </li>
              <li>
                <Link to="">Contact Us</Link>
              </li>
              <li>
                <Link to="">Login</Link>
              </li>
            </ul>
          </div>
        </div>
        {/* <div className="border-top mt-5">
          <div className="py-3 d-flex justify-content-between">
            <div>Copyright © 2019 Molla Store. All Rights Reserved.</div>
            <div>
              <img src={payment} alt="payment" />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
