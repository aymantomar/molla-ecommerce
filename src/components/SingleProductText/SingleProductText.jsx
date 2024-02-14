import { useDispatch, useSelector } from "react-redux";
import style from "./SingleProductText.module.css";
import { FaStar } from "react-icons/fa";
import { addToWhishList } from "../../redux/AddWhishListSlice";
import { getWhishList } from "../../redux/GetWhishListSlice";
import toast from "react-hot-toast";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";

export default function SingleProductText({
  // eslint-disable-next-line react/prop-types
  title,
  // eslint-disable-next-line react/prop-types
  price,
  // eslint-disable-next-line react/prop-types
  rating,
  // eslint-disable-next-line react/prop-types
  description,
  // eslint-disable-next-line react/prop-types
  id,
}) {
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const x = useSelector((state) => state.addWishList);

  console.log(x);
  const addToWishListId = (item_id) => {
    dispatch(addToWhishList(item_id));
    dispatch(getWhishList());
    toast.success("Added To WhishList");
  };

  let { countControl, addToCart } = useContext(cartContext);

  async function addToCardHandler(productId) {
    let data = await addToCart(productId);

    if (data?.status === "success") {
      toast.success(data?.message);
    } else {
      toast.error(data?.message);
    }

    countControl(data.data.products.length);
  }

  return (
    <div className={`${style.product_text}`}>
      <h2 className={`${style.product_title}`}>{title}</h2>
      <div className={`${style.product_rating}`}>
        <FaStar color="gold" size={18} className="me-1" />( {rating} Rating)
      </div>
      <div className={`${style.product_price}`}>{price}$</div>
      <p className={`${style.product_description}`}>{description}</p>
      <div className="d-flex align-items-center">
        <div className={`${style.product_quantity}`}>Qty : </div>
        <div className={`${style.product_buttons} d-flex`}>
          <div className={`${style.hover_crease}`}>+</div>
          <input
            type="number"
            name=""
            id=""
            className={`${style.productCounter} text-center`}
          />
          <div className={`${style.hover_crease}`}>-</div>
        </div>
      </div>
      <div className="d-flex my-4">
        <button
          className={`${style.btn_color} btn `}
          onClick={() => addToCardHandler(id)}
        >
          ADD TO CART
        </button>
        <button
          className={`${style.btn_color} btn `}
          onClick={() => addToWishListId(id)}
        >
          Add to Wishlist
        </button>
      </div>
    </div>
  );
}
