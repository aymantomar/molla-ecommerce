import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./ProductsSlice";
import { categoryReducer } from "./CategorySlice";
import { brandsReducer } from "./BrandsSlice";
import { productDetailsReducer } from "./ProductDetails";
import { registerReducer } from "./RegisterSlice";
import { loginReducer } from "./LoginSlice";
import { addWhishListReducer } from "./AddWhishListSlice";
import { getWhishListReducer } from "./GetWhishListSlice";
import { removeWishListReducer } from "./RemoveWishList";
import { addToCartReducer } from "./AddToCartSlice";
import { getToCartReducer } from "./GetToCartSlice";
import { removeToCartReducer } from "./RemoveToCartSlice";
import { updateUserCartReducer } from "./UpdateUserCartSlice";
import { checkoutReducer } from "./CheckOutSlice";
import { getCheckoutReducer } from "./GetCheckOutSlice";
import { cashOrderReducer } from "./CashOrderSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    category: categoryReducer,
    brands: brandsReducer,
    productDetails: productDetailsReducer,
    register: registerReducer,
    logIn: loginReducer,
    addWishList: addWhishListReducer,
    getWhishList: getWhishListReducer,
    removeWishList: removeWishListReducer,
    addToCart: addToCartReducer,
    getToCart: getToCartReducer,
    removeCart: removeToCartReducer,
    updateUser: updateUserCartReducer,
    checkOut: checkoutReducer,
    getCheckOut : getCheckoutReducer,
    cashOrderPayment : cashOrderReducer ,
  },
});
