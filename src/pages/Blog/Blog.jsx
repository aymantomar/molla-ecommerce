import style from "./Blog.module.css";
import img_1 from "../../assets/images/blog-04.jpg";
import img_2 from "../../assets/images/blog-05.jpg";
import img_6 from "../../assets/images/blog-06.jpg";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

export default function Blog() {
  return (
    <>
      <div
        className={`${style.bgHeader} d-flex justify-content-center align-items-center`}
      >
        <h1>Blog</h1>
      </div>
      <Breadcrumbs />
      <div className=" container my-5">
        <div className={`${style.blog}`}>
          <div className={`${style.blog_box_one}`}>
            <div className={`${style.blog_box_img}`}>
              <img src={img_1} alt="" />
            </div>
            <div className={`${style.blog_box_text}`}>
              <h2>8 Inspiring Ways to Wear Dresses in the Winter</h2>
              <p>
                aptent taciti sociosqu ad litora torquent per conubia nostra,
                per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum
                vitae sapien eu varius
              </p>
              <div className={`${style.blog_box__text_alin}`}>
                <span>
                  By Admin
                  <span>|</span>
                  StreetStyle, Fashion, Couple
                  <span>|</span>8 Comments
                </span>
                <a href="#">CONTINUE READING</a>
              </div>
            </div>
          </div>
          <div className={`${style.blog_box_two}`}>
            <input type="text" placeholder="Search" />
            <h4>Categories</h4>
            <ul>
              <li>Fashion</li>
              <li>Beauty</li>
              <li>Street Style</li>
              <li>Life Style</li>
              <li>DIY & Crafts</li>
            </ul>
          </div>
        </div>

        <div className={`${style.blog}`}>
          <div className={`${style.blog_box_one}`}>
            <div className={`${style.blog_box_img}`}>
              <img src={img_2} alt="" />
            </div>
            <div className={`${style.blog_box_text} `}>
              <h2>The Great Big List of Men Gifts for the Holidays</h2>
              <p>
                aptent taciti sociosqu ad litora torquent per conubia nostra,
                per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum
                vitae sapien eu varius
              </p>
              <div className={`${style.blog_box__text_alin}`}>
                <span>
                  By Admin
                  <span>|</span>
                  StreetStyle, Fashion, Couple
                  <span>|</span>8 Comments
                </span>
                <a href="#">CONTINUE READING</a>
              </div>
            </div>
          </div>

          <div className={`${style.blog_box_two}`}>
            <input type="text" placeholder="Search" />
            <h4>Categories</h4>
            <ul>
              <li>Fashion</li>
              <li>Beauty</li>
              <li>Street Style</li>
              <li>Life Style</li>
              <li>DIY & Crafts</li>
            </ul>
          </div>
        </div>

        <div className={`${style.blog}`}>
          <div className={`${style.blog_box_one}`}>
            <div className={` ${style.blog_box_img}`}>
              <img src={img_6} alt="" />
            </div>
            <div className={`${style.blog_box_text}`}>
              <h2>5 Winter-to-Spring Fashion Trends to Try Now</h2>
              <p>
                aptent taciti sociosqu ad litora torquent per conubia nostra,
                per inceptos himenaeos. Fusce eget dictum tortor. Donec dictum
                vitae sapien eu varius
              </p>
              <div className={`${style.blog_box__text_alin}`}>
                <span>
                  By Admin
                  <span>|</span>
                  StreetStyle, Fashion, Couple
                  <span>|</span>8 Comments
                </span>
                <a href="#">CONTINUE READING</a>
              </div>
            </div>
          </div>
          <div className={`${style.blog_box_two}`}>
            <input type="text" placeholder="Search" />
            <h4>Categories</h4>
            <ul>
              <li>Fashion</li>
              <li>Beauty</li>
              <li>Street Style</li>
              <li>Life Style</li>
              <li>DIY & Crafts</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
