import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import FormContainer from "../Form/FormContainer";
import FormControl from "../Form/FormControl";
import SideCartsShop from "../SideCartsShop/SideCartsShop";
import style from "./CashPayment.module.css";
import { Blocks } from "react-loader-spinner";
import * as yup from "yup";
// import { useDispatch, useSelector } from "react-redux";
import { useContext, useEffect, useState } from "react";
import { cartContext } from "../../context/cartContext";
import { useDispatch, useSelector } from "react-redux";
import { cashPayment } from "../../redux/CashOrderSlice";
import { useNavigate } from "react-router-dom";

export default function CashPayment() {
  let { getUserCart } = useContext(cartContext);
  const [CartTotal, setCartTotal] = useState(0);
  const [cartId, setCartId] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // eslint-disable-next-line no-unused-vars
  const { cashOrder, error, isLoading } = useSelector(
    (state) => state.cashOrderPayment
  );

  console.log(cashOrder);

  async function getUserData() {
    let { data } = await getUserCart();
    console.log("data", data);
    setCartTotal(data?.totalCartPrice);
    setCartId(data?._id);
  }

  const initialValues = {
    name: "",
    phone: "",
    city: "",
  };

  const regPhone = /^01[0125][0-9]{8}$/gi;

  const validationSchema = yup.object({
    name: yup
      .string()
      .min(3, "minimum number is 3")
      .max(10, "maximum number is 10")
      .required("pls enter your name"),
    phone: yup
      .string()
      .matches(regPhone, "pls enter valid number like 01012345678")
      .required("Phone Is Required"),
    city: yup.string().required("City is required"),
  });

  const handlerCashPayment = (values) => {
    dispatch(cashPayment(cartId, values));
  };

  const onSubmit = (values) => {
    handlerCashPayment(values);
    if (cashOrder?.status === "success") {
      navigate("/allorders");
    }
  };
  useEffect(() => {
    getUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [CartTotal]);

  return (
    <>
      <div
        className={`${style.bgHeader} d-flex justify-content-center align-items-center`}
      >
        <h1>Cash Payment</h1>
      </div>
      <div className="container">
        <Breadcrumbs />

        <div className="row mt-5">
          <div className="col-8">
            <FormContainer
              btnText={
                isLoading ? (
                  <Blocks
                    height="30"
                    width="60"
                    color="#4fa94d"
                    ariaLabel="blocks-loading"
                    wrapperStyle={{}}
                    wrapperClass="blocks-wrapper"
                    visible={true}
                  />
                ) : (
                  "Payment"
                )
              }
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              <FormControl
                control="input"
                type="text"
                name="name"
                label="name"
                placeholder="Enter Yours Name"
              />
              <FormControl
                control="input"
                type="tel"
                name="phone"
                label="Enter Your Phone"
                placeholder="Enter Your Phone"
              />
              <FormControl
                control="input"
                type="text"
                name="city"
                label="Enter Your City"
                placeholder="Enter Your City"
              />
            </FormContainer>
          </div>
          <div className="col-4">
            <SideCartsShop
              getCartTotal={CartTotal && CartTotal}
              showBtn={false}
            />
          </div>
        </div>
      </div>
    </>
  );
}
