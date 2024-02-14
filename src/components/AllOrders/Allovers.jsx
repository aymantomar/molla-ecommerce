import { useDispatch, useSelector } from "react-redux";
import style from "./AllOrders.module.css";
import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import { getCheckOut } from "../../redux/GetCheckOutSlice";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import { LiaCcVisa } from "react-icons/lia";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { Blocks } from "react-loader-spinner";

export default function AllOrders() {
  const { token } = JSON.parse(localStorage.getItem("token"));
  const decode = jwtDecode(token);
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const { getCheckout, isLoading, error } = useSelector(
    (state) => state.getCheckOut
  );

  console.log("getCheckOut", getCheckout);

  const handelGetCheckOut = () => {
    dispatch(getCheckOut(decode && decode.id));
  };

  useEffect(() => {
    handelGetCheckOut();
  }, []);

  return (
    <>
      <div
        className={`${style.bgHeader} d-flex justify-content-center align-items-center`}
      >
        <h1>Orders</h1>
      </div>
      <div className="container">
        <Breadcrumbs />
        <div className="row">
          {isLoading ? (
            <div className="text-center">
              <Blocks
                height="100"
                width="200"
                color="#4fa94d"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                visible={true}
              />
            </div>
          ) : getCheckout?.length === 0 ? (
            <h1 className="text-center my-4">Empty Orders</h1>
          ) : (
            getCheckout &&
            getCheckout.map((items) => (
              <table
                className="table table-success table-striped-columns"
                key={items._id}
              >
                <thead>
                  <tr>
                    <th scope="col-5">Product</th>
                    <th scope="col-2">Title</th>
                    <th scope="col-2">Count</th>
                    <th scope="col-2">Price</th>
                  </tr>
                </thead>
                {items &&
                  items.cartItems.map((item) => (
                    <tbody key={item._id}>
                      <tr className={`${style.removeBorder}`}>
                        <th scope="row">
                          <img
                            className={`${style.image_cover}`}
                            src={item.product.imageCover}
                            alt={item.product.title}
                          />
                        </th>
                        <td className="w-25">{item.product.title}</td>
                        <td>{item.count}</td>
                        <td>{item.price} $</td>
                      </tr>
                    </tbody>
                  ))}
                <tfoot>
                  <tr>
                    <td className={`${style.total_title} p-2`}>
                      Payment Method Type
                    </td>
                    <td className={`${style.total_price} p-2`}>
                      {items.paymentMethodType === "cash" ? (
                        <FaRegMoneyBillAlt />
                      ) : (
                        <LiaCcVisa />
                      )}
                      {items.paymentMethodType}
                    </td>
                    <td className={`${style.total_title} p-2`}>Total Order</td>
                    <td className={`${style.total_price} p-2`}>
                      {items.totalOrderPrice} $
                    </td>
                  </tr>
                </tfoot>
              </table>
            ))
          )}
        </div>
      </div>
    </>
  );
}
