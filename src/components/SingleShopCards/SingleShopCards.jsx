/* eslint-disable react/prop-types */
import style from "./SingleShopCards.module.css";
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { MdShoppingCartCheckout } from "react-icons/md";
import { addToWhishList } from "../../redux/AddWhishListSlice";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getWhishList } from "../../redux/GetWhishListSlice";
import toast from "react-hot-toast";
import { useContext, useState } from "react";
import { removeWishList } from "../../redux/RemoveWishList";
import { cartContext } from "../../context/cartContext";

// eslint-disable-next-line react/prop-types
export default function SingleShopCards({ item, isCol }) {
  const [colorWhish, setColorWhish] = useState(false);
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const whishList = useSelector((state) => state.addWishList);
  // eslint-disable-next-line no-unused-vars
  // const { addCart, isLoading, error } = useSelector((state) => state.addToCart);
  let { countControl, addToCart } = useContext(cartContext);

  async function getCart(productId) {
    let data = await addToCart(productId);

    if (data?.status === "success") {
      toast.success(data?.message);
    } else {
      toast.error(data?.message);
    }

    countControl(data.data.products.length);
  }

  // console.log("whishList" , whishList);
  const addToWishListId = (item_id) => {
    setColorWhish(!colorWhish);
    dispatch(addToWhishList(item_id));
    dispatch(getWhishList());
    toast.success("Added To WhishList");
  };
  const removeItemFromList = (item_id) => {
    setColorWhish(!colorWhish);
    dispatch(removeWishList(item_id));
    dispatch(getWhishList());
    toast.error("Removed From WhishList");
  };

  // useEffect(() => {
  // addToWishListId();
  // }, []);

  return (
    <div className={`col-12 col-md-6 col-lg-${isCol} mb-4`}>
      <div className={`${style.card_item} card text-center`}>
        {/*  eslint-disable-next-line react/prop-types */}
        <div className={`${style.product} w-100`}>
          <img
            // eslint-disable-next-line react/prop-types
            src={item.imageCover}
            className="card-img-top rounded-0"
            // eslint-disable-next-line react/prop-types
            alt={item.category.name}
          />
          <div className={`${style.icon}`}>
            <ul>
              <li>
                {colorWhish ? (
                  <FaHeart
                    role="button"
                    color="red"
                    // eslint-disable-next-line react/prop-types
                    onClick={() => removeItemFromList(item._id)}
                  />
                ) : (
                  <CiHeart
                    role="button"
                    // eslint-disable-next-line react/prop-types
                    onClick={() => addToWishListId(item._id)}
                  />
                )}
              </li>
              <li>
                <Link to={`/product/${item._id}`}>
                  <MdOutlineZoomOutMap />
                </Link>
              </li>
            </ul>
          </div>
          <button
            className={`${style.btn} btn rounded-0 w-100`}
            // eslint-disable-next-line react/prop-types
            onClick={() => getCart(item._id)}
          >
            <MdShoppingCartCheckout /> Add To Cart
          </button>
        </div>
        <div className={`${style.card_body} card-body`}>
          <h5 className={`${style.card_title} card-title `}>
            {/*  eslint-disable-next-line react/prop-types */}
            {item.category.name}
          </h5>
          <p className={`${style.card_text} card-text`}>
            {/*  eslint-disable-next-line react/prop-types */}
            {item.title.split(" ").slice(0, 8).join(" ")}
          </p>
          <div className="d-flex justify-content-between align-items-center my-2">
            {/*  eslint-disable-next-line react/prop-types */}
            <span className={`${style.card_price}`}>${item.price}</span>
            <p className={`${style.rating}`}>
              {/*  eslint-disable-next-line react/prop-types */}
              {item.ratingsAverage} <FaStar size={17} />
            </p>
          </div>
          <div className="all_Product_img d-flex justify-content-center mt-3">
            {/*  eslint-disable-next-line react/prop-types */}
            {item.images &&
              // eslint-disable-next-line react/prop-types
              item.images
                // eslint-disable-next-line react/prop-types
                .slice(0, 4)
                .map((img) => (
                  <img
                    src={img}
                    alt=""
                    style={{ width: "44px" }}
                    className="mx-1"
                    key={img}
                  />
                ))}
            {/* <img src={product_1} alt="" style={{ width: "44px" }}/>
            <img
              src={product_1}
              alt=""
              style={{ width: "44px" }}
              className="mx-2 "
            />
            <img src={product_1} alt="" style={{ width: "44px" }} /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
