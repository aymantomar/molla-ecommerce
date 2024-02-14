import { useDispatch, useSelector } from "react-redux";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import style from "./Wishlist.module.css";
import { useEffect } from "react";
import { getWhishList } from "../../redux/GetWhishListSlice";
import { Blocks } from "react-loader-spinner";
import { removeWishList } from "../../redux/RemoveWishList";
import toast from "react-hot-toast";

export default function Wishlist() {
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const { whishList, isLoading, error } = useSelector(
    (state) => state.getWhishList
  );
  // eslint-disable-next-line no-unused-vars
  const x = useSelector((state) => state.removeWishList);

  const removeItemFromList = (item_id) => {
    dispatch(removeWishList(item_id));
    dispatch(getWhishList());
    toast.error(x.remWishList.message);
  };

  console.log(x);

  useEffect(() => {
    dispatch(getWhishList());
    // removeItemFromList();
  }, []);

  return (
    <div className="container">
      <Breadcrumbs />
      <div className="row">
        {
        whishList.count === 0 ? (
          <h1 className="text-center my-4">Empty Wishlist</h1>
        ) : (

        isLoading ? (
          <Blocks
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            visible={true}
          />
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th scope="col-5">Product</th>
                <th scope="col-2">Price</th>
                <th scope="col-2">Stock Status</th>
                <th scope="col-2"></th>
              </tr>
            </thead>

            <tbody>
              {whishList.data &&
                whishList.data.map((item) => (
                  <tr className={`${style.removeBorder}`} key={item._id}>
                    <th scope="row">
                      {" "}
                      <img
                        className={`${style.image_cover}`}
                        src={item.imageCover}
                        alt={item.slug}
                      />{" "}
                    </th>
                    <td>{item.title.split(" ").slice(0, 2).join(" ")}</td>
                    <td>{item.price} $</td>
                    <td>
                      <button
                        onClick={() => removeItemFromList(item._id)}
                        className="btn btn-outline-danger rounded-0"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        ))}
      </div>
    </div>
  );
}
