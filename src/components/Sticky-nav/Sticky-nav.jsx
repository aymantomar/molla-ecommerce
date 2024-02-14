import logo from "../../assets/images/logo.png";
import { FiShoppingCart } from "react-icons/fi";
// import { FaToggleOff } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import style from "./Sticky-nav.module.css";
import { NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getWhishList } from "../../redux/GetWhishListSlice";
import { cartContext } from "../../context/cartContext";
import { ThemeContext } from "../../context/DarkMoodContext";
import { FaToggleOff } from "react-icons/fa6";
import { FaToggleOn } from "react-icons/fa6";

export default function StickyNav() {
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(true);

  // eslint-disable-next-line no-unused-vars
  const { addCart, isLoading, error } = useSelector((state) => state.addToCart);

  console.log("addToCartHeader", addCart);

  // eslint-disable-next-line no-unused-vars
  let { getUserCart, productsLength } = useContext(cartContext);
  const { isDark, toggleTheme } = useContext(ThemeContext);

  console.log(productsLength);

  const dispatch = useDispatch();
  const { whishList } = useSelector((state) => state.getWhishList);
  // const { getCart } = useSelector((state) => state.getToCart);

  useEffect(() => {
    // cartQuantity();
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;

      if (scrollY > 300) {
        setIsHeaderFixed(true);
        setShowBackToTop(false);
      } else {
        setIsHeaderFixed(false);
        setShowBackToTop(true);
      }
    };
    dispatch(getWhishList());
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  //${style.box}

  return (
    <>
      <button
        className={`${style.box} ${showBackToTop ? `${style.showBtn}` : ""}`}
        onClick={scrollToTop}
      >
        <FaArrowUp />
      </button>
      <div className={isHeaderFixed ? `${style.headerFixed}` : ""}>
        <nav className="navbar navbar-expand-lg my-3">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img src={"logo"} alt="" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            {localStorage.getItem("token") ? (
              <div
                className="collapse navbar-collapse text-center"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink to={""} className="nav-link" aria-current="page">
                      HOME
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to={"about"}
                      className="nav-link"
                      aria-current="page"
                    >
                      ABOUT
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={"categories"}>
                      CATEGORY
                    </NavLink>
                  </li>
                  {/* <li className="nav-item">
                    <NavLink className="nav-link" to={"product"}>
                      PRODUCT
                    </NavLink>
                  </li> */}
                  <li className="nav-item">
                    <NavLink className="nav-link" to={"shop"}>
                      SHOP
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={"blog"}>
                      BLOG
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={"contact-us"}>
                      CONTACT US
                    </NavLink>
                  </li>
                </ul>
                <div className="w-sm-100 text-center">
                  <div className="d-flex align-items-center justify-content-center">
                    <div href="#" className="text-center" onClick={toggleTheme}>
                      {isDark ? (
                        <FaToggleOn size={25} />
                      ) : (
                        <FaToggleOff size={25} />
                      )}

                      <span
                        className="d-block text-center"
                        style={{ fontSize: "10px" }}
                      >
                        Mode
                      </span>
                    </div>
                    <NavLink
                      to={"wishlist"}
                      className="mx-4 position-relative text-center"
                    >
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
                        {whishList?.count}
                      </span>
                      <CiHeart size={25} />
                      <span className="d-block" style={{ fontSize: "10px" }}>
                        Wishlist
                      </span>
                    </NavLink>
                    <NavLink
                      to={"carts"}
                      className="position-relative text-center"
                    >
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
                        {productsLength}
                      </span>
                      <FiShoppingCart size={25} />
                      <span
                        className="d-block text-center"
                        style={{ fontSize: "10px" }}
                      >
                        Cart
                      </span>
                    </NavLink>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </nav>
      </div>
    </>
  );
}
