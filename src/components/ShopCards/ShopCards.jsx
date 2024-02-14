import { useDispatch, useSelector } from "react-redux";
import SingleShopCards from "../SingleShopCards/SingleShopCards";
import "./ShopCards.module.css";
import { useEffect, useState } from "react";
import { getAllData } from "../../redux/ProductsSlice";
import ImageGrid from "../ImageGrid/ImageGrid";
import { Blocks } from "react-loader-spinner";

// eslint-disable-next-line react/prop-types
export default function ShopCards({ isCol }) {
  console.log("isCol", isCol);
  const { products, isLoading, error } = useSelector((state) => state.products);
  const [dummyIndex, setDummyIndex] = useState(6);

  const showBtn = () => {
    setDummyIndex(dummyIndex + 6);
  };

  const dispatch = useDispatch();
  console.log(products.data, isLoading);
  useEffect(() => {
    dispatch(getAllData());
  }, []);

  return (
    <div className="shop_cards">
      <div className="container">
        <div className="mt-5"></div>
        <div className="row justify-content-center mb-2">
          {error !== null ? (
            error
          ) : isLoading ? (
            <>
              <Blocks
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                visible={true}
              />
              <ImageGrid />
            </>
          ) : (
            products.data &&
            products.data.map((item, index) =>
              dummyIndex > index ? (
                <SingleShopCards item={item} key={item._id} isCol={isCol} />
              ) : (
                ""
              )
            )
          )}
        </div>

        {dummyIndex >= (products.data && products.data.length) - 1 ? (
          ""
        ) : (
          <div className="text-center mt-5">
            <button
              className="btn btn-outline-primary rounded-0 px-5 "
              onClick={() => showBtn()}
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
