import { useDispatch, useSelector } from "react-redux";
import "./HomeBrands.module.css";
import { useEffect } from "react";
import { getBrands } from "../../redux/BrandsSlice";
import Slider from "react-slick";

export default function HomeBrands() {
  // eslint-disable-next-line no-unused-vars
  const { brands, isLoading, isError } = useSelector((state) => state.brands);
  const dispatch = useDispatch();
  console.log(brands);

  useEffect(() => {
    dispatch(getBrands());
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    dots: true,
    slidesToShow: 6,
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
    <div className="brands_home">
      <div className="container">
        <div className="heading border-bottom pb-2 mb-4">
          <h4 className="font-weight-bold">Shop by Brands</h4>
        </div>
        <div className="row">
          <Slider {...settings}>
            {brands?.data &&
              brands?.data
                ?.map((item) => (
                  <div className="col-md-3" key={item._id}>
                    <img src={item.image} alt="" className="w-50"/>
                  </div>
                ))
                .slice(0, 10)}
          </Slider>
        </div>
      </div>
    </div>
  );
}
