import { useParams  } from "react-router-dom";
import "./Product.module.css";
import { useEffect } from "react";
import SingleProductImg from "../../components/SingleProductImg/SingleProductImg";
import SingleProductText from "../../components/SingleProductText/SingleProductText";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { useDispatch, useSelector } from "react-redux";
import { getAllDetails } from "../../redux/ProductDetails";
import { Blocks } from "react-loader-spinner";

export default function Product() {
  const { id } = useParams();
  // const [productDetails, setProductDetails] = useState({});
  const { productsDetails, isLoading, error } = useSelector(
    (state) => state.productDetails
  );
  const despatch = useDispatch();

  useEffect(() => {
    despatch(getAllDetails(id));
    // getProductDetails();
  }, []);

  console.log(id);
  return (
    <div>
      <div className="container">
        <Breadcrumbs />
        {error !== null ? (
          <div className="alert alert-danger text-center mt-3">{error}</div>
        ) : isLoading ? (
          <h1 className="text-center">
            <Blocks
              height="80"
              width="80"
              color="#4fa94d"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              visible={true}
            />
          </h1>
        ) : (
          <div className="row mt-4">
            <div className="col-md-6">
              <SingleProductImg
                imageCover={
                  productsDetails.data && productsDetails.data.imageCover
                }
                images={productsDetails.data && productsDetails.data.images}
              />
            </div>
            <div className="col-md-6">
              <SingleProductText
                title={productsDetails.data && productsDetails.data.title}
                rating={
                  productsDetails.data && productsDetails.data.ratingsAverage
                }
                price={productsDetails.data && productsDetails.data.price}
                description={
                  productsDetails.data && productsDetails.data.description
                }
                id={
                  productsDetails.data && productsDetails.data._id
                }
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
