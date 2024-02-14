import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCategory } from "../../redux/CategorySlice";
// import { getBrands } from "../../redux/BrandsSlice";
import style from "./SideBar.module.css";

export default function SideBar() {
  const dispatch = useDispatch();
  const { category } = useSelector((state) => state.category);
  // const { brands } = useSelector((state) => state.brands);

  useEffect(() => {
    dispatch(getCategory());
    // dispatch(getBrands());
    console.log("category", category.data);
    // console.log("brands", brands.data);
  }, []);

  return (
    <div className="col-md-3 position-relative">
      <div className={`${style.sideBar}`}>
        <div className="d-flex justify-content-between">
          <h6>Filters:</h6>
          <p>Clear all</p>
        </div>
        <div className="accordion accordion-flush " id="accordionFlushExample">
          <div className="accordion-item p-4">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed p-0 py-3"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Category
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse show "
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                {category.data &&
                  category.data.map((cat) => (
                    <div key={cat._id}>{cat.name}</div>
                  ))}
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed p-0 py-3"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                Brand
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">Placeholder content</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed p-0 py-3"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                Price
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionFlushExample"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
