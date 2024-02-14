import HomeCardProduct from "../HomeCardProduct/HomeCardProduct";
import style from "./HomeProductRow.module.css";

// eslint-disable-next-line react/prop-types
export default function HomeProductRow({ isGray, title ,categories}) {
  console.log("categoriesProduct", categories );
  return (
    <div
      className={
        isGray ? `${style.product_row_color} my-5 py-5` : `${style.product_row} my-5 py-5`
      }
    >
      <div className="container">
        <div className="heading border-bottom pb-2 mb-4">
          <h4 className="font-weight-bold">{title}</h4>
        </div>
        <div className="row">
          <HomeCardProduct categories={categories}/>
        </div>
      </div>
    </div>
  );
}
