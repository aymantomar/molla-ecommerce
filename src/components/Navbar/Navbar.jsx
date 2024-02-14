import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
import { IoCallOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { IoIosLogOut } from "react-icons/io";
import { MdProductionQuantityLimits } from "react-icons/md";

export default function Navbar() {
  const [localStor, setLocalStor] = useState(null);

  useEffect(() => {
    setLocalStor(JSON.parse(localStorage.getItem("token")));
  }, []);

  console.log(localStor);

  const logOut = () => {
    console.log("aaa");
    localStorage.removeItem("token");
    setLocalStor(null);
    toast.success("log out successfully");
  };

  return (
    <>
      <div className={`${style.top_nav} p-2`}>
        <div className="container">
          {/* Top Header */}
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <a href="#">
                <IoCallOutline size={13} />
                Call: +0123 456 789
              </a>
            </div>
            <div>
              {localStor?.message === "success" ? (
                // <ul className="d-flex list-unstyled justify-content-between align-items-center mb-0">

                <div className="dropdown">
                  <button
                    className="btn btn-light dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <FaRegUserCircle className="mx-2" />
                    {localStor?.user?.name}
                  </button>
                  <ul className="dropdown-menu">
                    <li
                      className="dropdown-item"
                      role="button"
                      onClick={() => logOut()}
                    >
                      <IoIosLogOut /> Log Out
                    </li>
                    <li>
                      <Link className="dropdown-item" to={"/allorders"}>
                        <MdProductionQuantityLimits /> Orders
                      </Link>
                    </li>
                  </ul>
                </div>
              ) : (
                // <li className="mx-3">
                //   <FaRegUserCircle />
                //   {localStor?.user?.name}
                // </li>
                // <li role="button" onClick={() => logOut()}>
                //   Log Out
                // </li>
                // </ul>
                // <h1>{tokenName?.user?.name}</h1>
                <ul className="d-flex list-unstyled justify-content-between align-items-center mb-0">
                  <li className="mx-3">
                    <Link to={"login"}>Sign in</Link>
                  </li>
                  <li>
                    <Link to={"register"}>Sign Up</Link>
                  </li>
                </ul>
              )}
              {/* <ul className="d-flex list-unstyled justify-content-between align-items-center mb-0">
                <li className="mx-3">
                  <Link to={"login"}>Sign in</Link>
                </li>
                <li>
                  <Link to={"register"}>Sign Up</Link>
                </li>
              </ul> */}
            </div>
          </div>
          {/* Header */}
        </div>
      </div>
    </>
  );
}
