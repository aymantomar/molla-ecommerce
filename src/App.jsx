import { createHashRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Categories from "./pages/Categories/Categories";
import Product from "./pages/Product/Product";
import Shop from "./pages/Shop/Shop";
import Blog from "./pages/Blog/Blog";
import ContactUs from "./pages/ContactUs/ContactUs";
import ForgetPassword from "./auth/ForgetPassword/ForgetPassword";
import Login from "./auth/Login/Login";
import Register from "./auth/Register/Register";
import ResetPassword from "./auth/ResetPassword/ResetPassword";
import Wishlist from "./pages/Wishlist/Wishlist";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import CartsShop from "./components/CartsShop/CartsShop";
import CheckOut from "./components/CheckOut/CheckOut";
import AllOrders from "./components/Allorders/Allorders";
import CashPayment from "./components/CashPayment/CashPayment";
import { useContext } from "react";
import { ThemeContext } from "./context/DarkMoodContext";

const routers = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
      },
      {
        path: "/about",
        element: (
          <ProtectedRoute>
            <About />
          </ProtectedRoute>
        ),
      },
      {
        path: "/categories",
        element: (
          <ProtectedRoute>
            <Categories />
          </ProtectedRoute>
        ),
      },
      {
        path: "/product",
        element: (
          <ProtectedRoute>
            <Product />
          </ProtectedRoute>
        ),
        children: [
          {
            path: "/product/:id",
            element: (
              <ProtectedRoute>
                <Product />
              </ProtectedRoute>
            ),
          },
        ],
      },
      {
        path: "/shop",
        element: (
          <ProtectedRoute>
            <Shop />
          </ProtectedRoute>
        ),
      },
      {
        path: "/carts",
        element: (
          <ProtectedRoute>
            <CartsShop />
          </ProtectedRoute>
        ),
      },
      {
        path: "/wishlist",
        element: (
          <ProtectedRoute>
            <Wishlist />
          </ProtectedRoute>
        ),
      },
      {
        path: "/blog",
        element: (
          <ProtectedRoute>
            <Blog />
          </ProtectedRoute>
        ),
      },
      {
        path: "/contact-us",
        element: (
          <ProtectedRoute>
            <ContactUs />
          </ProtectedRoute>
        ),
      },
      {
        path: "/allorders",
        element: (
          <ProtectedRoute>
            <AllOrders />
          </ProtectedRoute>
        ),
      },
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
      { path: "/forget-password", element: <ForgetPassword /> },
      { path: "/reset-password", element: <ResetPassword /> },
      {
        path: "/checkout",
        element: (
          <ProtectedRoute>
            <CheckOut />
          </ProtectedRoute>
        ),
      },
      {
        path: "/cashPayment",
        element: (
          <ProtectedRoute>
            <CashPayment />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

function App() {
  const { isDark } = useContext(ThemeContext);

  return (
    <div className={`${isDark ? "dark_mood" : ""} App`}>
      <RouterProvider router={routers}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
