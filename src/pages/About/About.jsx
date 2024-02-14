import style from "./About.module.css";
import img_1 from "../../assets/images/about.jpg";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
export default function About() {
  return (
    <>
      <div
        className={`${style.bgHeader} d-flex justify-content-center align-items-center`}
      >
        <h1>About</h1>
      </div>
      <Breadcrumbs />
      <div className={`${style.about_Sec_page} my-5`}>
        <div className="container">
          <div className="row">
            <div className={`${style.about_img}`}>
              <div className={`${style.hov_img0}`}>
                <img src={img_1} alt="IMG" />
              </div>
            </div>
            <div className={`${style.about_title}`}>
              <h3>Our Mission</h3>
              <p>
                Mauris non lacinia magna. Sed nec lobortis dolor.Vestibulum
                rhoncus dignissim risus, sed <br />
                consectetur erat.Pellentesque habitant morbi tristique senectus
                et netus et malesuada fames ac
                <br />
                turpis egestas.Nullam maximus mauris sit amet odio convallis,
                <br />
                in pharetra magna gravida. Praesent sed nunc fermentum mi
                molestie tempor.Morbi vitae viverra
                <br />
                odio. Pellentesque ac velit egestas,luctus arcu non, laoreet
                mauris. Sed in ipsum tempor,
                <br />
                consequat odio in, porttitor ante. Ut mauris ligula,volutpat in
                sodales in, porta non odio.
                <br />
                Pellentesque tempor urna vitae mi vestibulum,nec venenatis nulla
                lobortis. Proin at gravida ante.
                <br />
                Mauris auctor purus at lacus maximus euismod.Pellentesque
                vulputate massa ut nisl hendrerit,
                <br />
                eget elementum libero iaculis.
              </p>
              <div className={`${style.about_min_title}`}>
                <p>
                  Creativity is just connecting things.When you ask creative
                  people how they did
                  <br />
                  something,they feel a little guilty because they didnt really
                  do it,they just saw
                  <br />
                  something. It seemed obvious to them after a while.
                </p>
                <span>- Steve Job’s</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${style.about_Sec_page} pt-5 my-5`}>
        <div className="container">
          <div className="row">
            <div className={`${style.about_title}`}>
              <h3>Our Mission</h3>
              <p>
                Mauris non lacinia magna. Sed nec lobortis dolor.Vestibulum
                rhoncus dignissim risus, sed <br />
                consectetur erat.Pellentesque habitant morbi tristique senectus
                et netus et malesuada fames ac
                <br />
                turpis egestas.Nullam maximus mauris sit amet odio convallis,
                <br />
                in pharetra magna gravida. Praesent sed nunc fermentum mi
                molestie tempor.Morbi vitae viverra
                <br />
                odio. Pellentesque ac velit egestas,luctus arcu non, laoreet
                mauris. Sed in ipsum tempor,
                <br />
                consequat odio in, porttitor ante. Ut mauris ligula,volutpat in
                sodales in, porta non odio.
                <br />
                Pellentesque tempor urna vitae mi vestibulum,nec venenatis nulla
                lobortis. Proin at gravida ante.
                <br />
                Mauris auctor purus at lacus maximus euismod.Pellentesque
                vulputate massa ut nisl hendrerit,
                <br />
                eget elementum libero iaculis.
              </p>
              <div className={`${style.about_min_title}`}>
                <p>
                  Creativity is just connecting things.When you ask creative
                  people how they did
                  <br />
                  something,they feel a little guilty because they didnt really
                  do it,they just saw
                  <br />
                  something. It seemed obvious to them after a while.
                </p>
                <span>- Steve Job’s</span>
              </div>
            </div>
            <div className={`${style.about_img}`}>
              <div className={`${style.hov_img0}`}>
                <img src={img_1} alt="IMG" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
