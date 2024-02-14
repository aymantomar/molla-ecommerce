import style from "./HomeCategories.module.css";
import image1 from "../../assets/images/1.jpg";
import image2 from "../../assets/images/2.jpg";
import image3 from "../../assets/images/3.jpg";
import image4 from "../../assets/images/4.jpg";
import image5 from "../../assets/images/5.jpg";
import image6 from "../../assets/images/6.jpg";

export default function HomeCategories() {
  return (
    <div className={`${style.categories} my-5`}>
      <div className="container">
        <div className={`${style.title_categories} text-center mb-2`}>
          Explore Popular Categories
        </div>
        <div className="row">
          <div className="col-6 col-md-4 col-lg-2 ">
            <div className={`${style.cart_item} text-center`}>
              <img
                src={image1}
                alt="Computer & Laptop"
                style={{ maxheight: "117px" }}
              />
              <h6  className="mt-1">Computer & Laptop</h6>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-2">
            <div className={`${style.cart_item} text-center`}>
              <img src={image2} alt="Lighting" style={{ height: "117px" }} />
              <h6  className="mt-1">Lighting</h6>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-2">
            <div className={`${style.cart_item} text-center`}>
              <img src={image3} alt="Lighting" style={{ height: "117px" }} />
              <h6  className="mt-1">Smart Phones</h6>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-2">
            <div className={`${style.cart_item} text-center`}>
              <img src={image4} alt="Lighting" style={{ height: "117px" }} />
              <h6  className="mt-1">Televisions</h6>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-2">
            <div className={`${style.cart_item} text-center`}>
              <img src={image5} alt="Lighting" style={{ height: "117px" }} />
              <h6  className="mt-1">Cooking</h6>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-2">
            <div className={`${style.cart_item} text-center`}>
              <div className="text-center">
                <img src={image6} alt="Lighting" style={{ height: "117px" }} />
                <h6  className="mt-1">Furniture</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
