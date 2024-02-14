import axios from "axios";
import { createContext, useState } from "react";

export let cartContext = createContext();

// eslint-disable-next-line react/prop-types
export default function CartProvider({ children }) {
  let [productsLength, setProductsLength] = useState(0);
  let [cartId, setCartId] = useState(null);

  function countControl(count) {
    setProductsLength(count);
  }

  const token = JSON.parse(localStorage.getItem("token"));
  let headers = {
    token: token?.token,
  };
  console.log("headers", headers);
  async function addToCart(productId) {
    try {
      let { data } = await axios.post(
        `https://ecommerce.routemisr.com/api/v1/cart`,
        { productId },
        { headers }
      );
      return data;
    } catch (error) {
      return error;
    }
  }

  async function getUserCart() {
    try {
      let { data } = await axios.get(
        `https://ecommerce.routemisr.com/api/v1/cart`,
        { headers }
      );
      setCartId(data.data._id);
      setProductsLength(data.data.products.length);
      return data;
    } catch (error) {
      return error;
    }
  }
  async function getUserOrders(userId) {
    try {
      let data = await axios.get(
        `https://ecommerce.routemisr.com/api/v1/orders/user/${userId}`
      );

      return data;
    } catch (error) {
      return error;
    }
  }

  async function deleteUserProduct(productId) {
    try {
      let data = await axios.delete(
        `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
        {
          headers,
        }
      );

      return data;
    } catch (error) {
      return error;
    }
  }

  async function deleteUserCart() {
    try {
      let data = await axios.delete(
        `https://ecommerce.routemisr.com/api/v1/cart`,
        {
          headers,
        }
      );

      setProductsLength(0);
      return data;
    } catch (error) {
      return error;
    }
  }

  async function updateUserProduct(productId, count) {
    try {
      let data = await axios.put(
        `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
        { count },
        { headers }
      );
      return data;
    } catch (error) {
      return error;
    }
  }

  async function cashOnDelivery(values) {
    try {
      let data = axios.post(
        `https://ecommerce.routemisr.com/api/v1/orders/${cartId}`,
        { shippingAddress: values },
        { headers }
      );

      return data;
    } catch (error) {
      return error;
    }
  }
  async function onlinePayment(values) {
    try {
      let data = await axios.post(
        `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}`,
        { shippingAddress: values },
        {
          headers,
          params: {
            url: "https://aymantomar.github.io/Ecommerce/#",
          },
        }
      );
      return data;
    } catch (error) {
      return error;
    }
  }

  return (
    <cartContext.Provider
      value={{
        addToCart,
        getUserCart,
        deleteUserProduct,
        updateUserProduct,
        deleteUserCart,
        productsLength,
        countControl,
        cashOnDelivery,
        getUserOrders,
        onlinePayment,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}
