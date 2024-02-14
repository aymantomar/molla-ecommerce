import Banner from "../../components/Banner/Banner";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import ShopCards from "../../components/ShopCards/ShopCards";
import SideBar from "../../components/SideBar/SideBar";
import { BsFillGridFill } from "react-icons/bs";
import { BsFillGrid3X2GapFill } from "react-icons/bs";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import "./Shop.module.css";
import { useState } from "react";

export default function Shop() {
  const [isCol, setIsCol] = useState(4);
  const twoCol = () => {
    console.log("twoCol");
    setIsCol(6);
  };

  const fourCol = () => {
    console.log("ThreeCol");
    setIsCol(4);
  };

  const threeCol = () => {
    console.log("ThreeCol");
    setIsCol(3);
  };
  return (
    <div>
      <Banner />
      <Breadcrumbs />
      <div className="container mt-5">
        <div className="row">
          <SideBar />

          <div className="col-md-9">
            <div className="text-end">
              <button className="btn" onClick={twoCol}>
                <BsFillGridFill />
              </button>
              <button className="btn" onClick={fourCol}>
                <BsFillGrid3X2GapFill />
              </button>
              <button className="btn" onClick={threeCol}>
                <TfiLayoutGrid4Alt />
              </button>
            </div>
            <ShopCards isCol={isCol} />
          </div>
        </div>
      </div>
    </div>
  );
}
