import { Link } from "react-router-dom";
import style from "./SideCartsShop.module.css";

// eslint-disable-next-line react/prop-types
export default function SideCartsShop({ getCartTotal , showBtn}) {
  return (
    <div className="bg-light border-1 p-4">
      <div className={`${style.title} border-bottom p-3`}>Cart Total </div>
      <div className={`${style.total_price}`}>
        <div>Total : </div>
        <div> {getCartTotal} $</div>
      </div>
      <div className="d-flex justify-content-between text-center">
        {showBtn && (<button
          className={`${style.btn_style} btn btn-outline-primary rounded-0`}
        >
          <Link to={"/checkout"} className={`${style.checkOut}`}>
             Online Payment
          </Link>
        </button>)}
        {showBtn && (<button
          className={`${style.btn_style} btn btn-outline-primary rounded-0`}
        >
          <Link to={"/cashPayment"} className={`${style.checkOut}`}>
            Cash Payment
          </Link>
        </button>)}
        
      </div>
    </div>
  );
}
