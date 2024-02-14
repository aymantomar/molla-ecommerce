// import { useEffect, useState } from "react";
import style from "./CategoriesFilter.module.css";
import img_banner_1 from "../../assets/images/elec.jpg";
import img_banner_2 from "../../assets/images/banner-6.jpg";
import img_banner_3 from "../../assets/images/mens.jpg";
import { useEffect, useState } from "react";
import CategoriesFilterCard from "../CategoriesFilterCard/CategoriesFilterCard";

// eslint-disable-next-line react/prop-types, no-unused-vars
export default function CategoriesFilter({ selectedCat, categoriesTitle }) {
  const [selectedCatName, setSelectedCatName] = useState("");
  const [selectedCatTitle, setSelectedCatTitle] = useState("");

  useEffect(() => {
    console.log("Selected Category Name: ", selectedCatName);
  }, [selectedCatName]);

  const handlerClick = (cat, catTitle) => {
    setSelectedCatName(cat);
    setSelectedCatTitle(catTitle);
    console.log(selectedCatName);
  };

  return (
    <>
      <div className="banner_home mt-5">
        <div className="container">
          <div className="row">
            <div
              className="col-6 col-md-6 col-lg-3 mb-2"
              onClick={() =>
                handlerClick("Women's Fashion", "Clothing & Apparel")
              }
            >
              <div className={`${style.card_hover} position-relative`}>
                <img
                  src={img_banner_2}
                  className={`${style.img_cover} w-100`}
                  alt=""
                />
                <div className="position-absolute top-0 start-0 w-100 h-100 p-5 text-white">
                  <h6>Weekend Sale</h6>
                  <div>
                    <h1 className="my-3 h2">
                      Clothes <br /> Women Collection
                    </h1>
                    <span>25% off</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-6 col-md-6 col-lg-3  mb-2"
              onClick={() =>
                handlerClick("Men's Fashion", "Clothing & Apparel")
              }
            >
              <div className={`${style.card_hover} position-relative`}>
                <img
                  src={img_banner_3}
                  className={`${style.img_cover} w-100`}
                  alt=""
                />
                <div className="position-absolute top-0 start-0 w-100 h-100 p-5 text-white">
                  <h6>Smart Offer</h6>
                  <div>
                    <h1 className="my-3 h2">
                      Clothes <br /> Mens Collection
                    </h1>
                    <span>15% off</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-12 col-lg-6 mb-2"
              onClick={() => handlerClick("Electronics", "Electronics")}
            >
              <div className={`${style.card_hover} position-relative`}>
                <img
                  src={img_banner_1}
                  className={`${style.img_cover} w-100`}
                  alt=""
                />
                <div className="position-absolute top-0 start-0 w-100 h-100 p-5 text-white">
                  <h6>Amazing Value</h6>
                  <div>
                    <h1 className="my-3 h2">
                      Lighting &<br /> Electronics
                    </h1>
                    <span>from $12,99</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <CategoriesFilterCard
            selectedCat={selectedCatName}
            categoriesTitle={selectedCatTitle}
          />
        </div>
      </div>
    </>
  );
}
