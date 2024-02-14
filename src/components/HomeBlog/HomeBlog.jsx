import style from "./HomeBlog.module.css";
import Blog_1 from "../../assets/images/demo13-post1.jpg";
import Blog_2 from "../../assets/images/demo13-post2.jpg";
import Blog_3 from "../../assets/images/demo13-post3.jpg";
import Blog_4 from "../../assets/images/demo13-post4.jpg";
export default function HomeBlog() {
  return (
    <div className={`${style.home_blog}`}>
      <div className="container mt-5 py-3">
        <div className="heading border-bottom py-2 mb-4">
          <h4 className="font-weight-bold">From Our Blog</h4>
        </div>
        <div className="row">
          <div className="col-12 col-lg-3 col-md-6 mb-3 ">
            <div className="card rounded-0">
              <img
                className="card-img-top rounded-0"
                src={Blog_1}
                alt="Card image cap"
              />
              <div className="card-body">
                <p className="card-text font-weight-bold text-muted">
                  {" "}
                  March 29, 2020 0 Comments
                </p>
                <h5 className="card-title fs-5">Card title</h5>
                <p className="card-text fs-6">
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3 col-md-6 mb-3 ">
            <div className="card rounded-0">
              <img
                className="card-img-top rounded-0"
                src={Blog_2}
                alt="Card image cap"
              />
              <div className="card-body">
                <p className="card-text font-weight-bold text-muted">
                  {" "}
                  March 29, 2020 0 Comments
                </p>
                <h5 className="card-title fs-5">Card title</h5>
                <p className="card-text fs-6">
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3 col-md-6 mb-3 ">
            <div className="card rounded-0">
              <img
                className="card-img-top rounded-0"
                src={Blog_3}
                alt="Card image cap"
              />
              <div className="card-body">
                <p className="card-text font-weight-bold text-muted">
                  {" "}
                  March 29, 2020 0 Comments
                </p>
                <h5 className="card-title fs-5">Card title</h5>
                <p className="card-text fs-6">
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3 col-md-6 mb-3 ">
            <div className="card rounded-0">
              <img
                className="card-img-top rounded-0"
                src={Blog_4}
                alt="Card image cap"
              />
              <div className="card-body">
                <p className="card-text font-weight-bold text-muted">
                  {" "}
                  March 29, 2020 0 Comments
                </p>
                <h5 className="card-title fs-5">Card title</h5>
                <p className="card-text fs-6">
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
