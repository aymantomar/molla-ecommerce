import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import style from "./CartsShop.module.css";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useContext, useEffect, useState } from "react";
// import { removeToCart } from "../../redux/RemoveToCartSlice";
import { cartContext } from "../../context/cartContext";
import toast from "react-hot-toast";
import SideCartsShop from "../SideCartsShop/SideCartsShop";
import { FaTrashAlt } from "react-icons/fa";

export default function CartsShop() {
  let {
    deleteUserCart,
    countControl,
    getUserCart,
    deleteUserProduct,

    updateUserProduct,
  } = useContext(cartContext);

  const [cartProduct, setCartProduct] = useState(null);
  const [CartTotal, setCartTotal] = useState(0);

  console.log("cartProduct", cartProduct);

  async function getUserData() {
    let { data } = await getUserCart();
    console.log("data", data);
    setCartProduct(data);
    setCartTotal(data.totalCartPrice);
  }

  // async function updateCartItem(productId, count) {
  //   console.log(productId, count);
  //   dispatch(updateUserCart(productId, count));
  // }
  // const updateCartItem = async (productId, count) => {
  //   console.log(productId, count);
  //   dispatch(updateUserCart(productId, count));
  // };

  async function updateCartItem(productId, count) {
    let { data } = await updateUserProduct(productId, count);
    console.log("data", data);
    setCartTotal(data.data.totalCartPrice);
    if (count === 0) {
      deleteUserData(productId);
    }
  }

  async function deleteUserData(productId) {
    let { data } = await deleteUserProduct(productId);
    countControl(data.data.products.length);
    console.log("data", data);
    setCartTotal(data.data.totalCartPrice);
    setCartProduct(data.data);
    toast.error("Removed Successfully");
  }

  async function deleteUser() {
    let { data } = await deleteUserCart();
    setCartTotal(data?.data?.totalCartPrice);
    setCartProduct(data.data);
    console.log("Data Card", cartProduct.products.length);
    toast.error("Removed All Cards Successfully");
  }

  useEffect(() => {
    getUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div
        className={`${style.bgHeader} d-flex justify-content-center align-items-center`}
      >
        <h1>Cart</h1>
      </div>
      <div className="container">
        <Breadcrumbs />
        <div className="row mt-5">
          <div className="col-8">
            {cartProduct == undefined || cartProduct?.products?.length === 0 ? (
              <h1 className="text-center my-4">Empty Carts</h1>
            ) : (
              <>
                <table className={`${style.table} table`}>
                  <thead>
                    <tr>
                      <th scope="col-5">Product</th>
                      <th scope="col-2">Price</th>
                      <th scope="col-2">Quantity</th>
                      <th scope="col-2">Total</th>
                      <th scope="col-2">Remove</th>
                    </tr>
                  </thead>

                  <tbody>
                    {cartProduct &&
                      cartProduct.products.map((item) => (
                        <tr className={`${style.removeBorder}`} key={item._id}>
                          <td scope="row">
                            {" "}
                            <img
                              className={`${style.image_cover}`}
                              src={item.product.imageCover}
                              alt={item.product.title}
                            />
                            <span>
                              {item.product.title
                                .split(" ")
                                .slice(0, 3)
                                .join(" ")}
                            </span>
                          </td>
                          <td>{item.price} $</td>
                          <td>
                            <div className={`${style.product_buttons} d-flex`}>
                              <div
                                className={`${style.hover_crease}`}
                                onClick={() =>
                                  updateCartItem(
                                    item.product._id,
                                    (item.count += 1)
                                  )
                                }
                              >
                                +
                              </div>
                              <span>{item.count}</span>
                              {/* <input
                                  type="number"
                                  name=""
                                  id=""
                                  className={`${style.productCounter} text-center`}
                                  // value={item.count}
                                /> */}
                              <div
                                className={`${style.hover_crease}`}
                                onClick={() =>
                                  updateCartItem(
                                    item.product._id,
                                    (item.count -= 1)
                                  )
                                }
                              >
                                -
                              </div>
                            </div>
                          </td>
                          <td>{item.price * item.count} $</td>
                          <td className="text-center">
                            <IoMdCloseCircleOutline
                              size={22}
                              role="button"
                              onClick={() => deleteUserData(item.product.id)}
                            />
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
                <div className="justify-content-end">
                  <button
                    onClick={() => deleteUser()}
                    className="btn col-12 btn-outline-danger rounded-0 p-2"
                  >
                    <FaTrashAlt />
                    <span className="mt-1">Clear Cart</span>
                  </button>
                </div>
              </>
            )}
          </div>
          <div className="col-4">
            <SideCartsShop showBtn={true} getCartTotal={CartTotal} />
          </div>
        </div>
      </div>
    </>
  );
}
