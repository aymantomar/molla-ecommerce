import style from "./HomeCardProduct.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { MdShoppingCartCheckout } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useContext, useEffect } from "react";
import { getAllData } from "../../redux/ProductsSlice";
import { useState } from "react";
import { Blocks } from "react-loader-spinner";
import { Link } from "react-router-dom";
import { addToWhishList } from "../../redux/AddWhishListSlice";
import { getWhishList } from "../../redux/GetWhishListSlice";
import toast from "react-hot-toast";
// import { removeWishList } from "../../redux/RemoveWishList";
import { cartContext } from "../../context/cartContext";
// eslint-disable-next-line react/prop-types
export default function HomeCardProduct({ categories }) {
  // eslint-disable-next-line no-unused-vars
  const { products, isLoading, error } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [electronicsData, setElectronicsData] = useState([]);
  let { countControl, addToCart } = useContext(cartContext);

  console.log("electronicsData", electronicsData);
  console.log("categoriesName", categories);

  const addToCartHandler = async (productId) => {
    const data = await addToCart(productId);
    if (data?.status === "success") {
      toast.success(data?.message);
    } else {
      toast.error(data?.message);
    }
    countControl(data.data.products.length);
  };
  const addToWishListId = (item_id) => {
    dispatch(addToWhishList(item_id));
    dispatch(getWhishList());
    toast.success("Added To WhishList");
  };

  useEffect(() => {
    dispatch(getAllData());
  }, [categories]);

  useEffect(() => {
    if (products.data) {
      const filteredData = products.data.filter((item) => {
        return item.category && item.category.name === categories;
      });
      setElectronicsData(filteredData);
    }
  }, [products.data]);

  const settings = {
    infinite: true,
    speed: 500,
    dots: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    // nextArrow: <div  className="arrow next">Next</div>, // Default right arrow
    // prevArrow: <div className="arrow prev">Prev</div>,
  };

  return (
    <div className={`${style.card_slider}`}>
      {isLoading ? (
        <div className="text-center">
          <Blocks
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            visible={true}
          />
        </div>
      ) : (
        <Slider {...settings}>
          {electronicsData &&
            electronicsData.map((item) => (
              <div
                className={`${style.card_item} card text-center`}
                key={item._id}
              >
                <div className={`${style.product} w-100 mx-auto`}>
                  <img
                    src={item.imageCover}
                    className="card-img-top rounded-0"
                    alt={item.title}
                  />
                  <div className={`${style.icon}`}>
                    <ul>
                      <li>
                        <CiHeart
                          role="button"
                          // eslint-disable-next-line react/prop-types
                          onClick={() => addToWishListId(item._id)}
                        />
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
                    onClick={() => addToCartHandler(item._id)}
                  >
                    <MdShoppingCartCheckout /> Add To Cart
                  </button>
                </div>
                <div className={`${style.card_body} card-body`}>
                  <h5 className={`${style.card_title} card-title `}>
                    {item.category.name}
                  </h5>
                  <p className={`${style.card_text} card-text`}>
                    {item.title.split(" ").slice(0, 3).join(" ")}
                  </p>
                  <div className="d-flex justify-content-between align-items-center my-2">
                    <span className={`${style.card_price}`}>
                      $ {item.price}
                    </span>
                    <p className={`${style.rating}`}>
                      {item.ratingsAverage} <FaStar size={17} />
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </Slider>
      )}
    </div>
  );
}
