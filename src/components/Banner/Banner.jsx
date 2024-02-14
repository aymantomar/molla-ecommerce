import style from "./Banner.module.css";

export default function Banner() {
  return (
    <div
      className={`${style.bgBanner} d-flex justify-content-center align-items-center`}
    >
      <h1>Shop</h1>
    </div>
  );
}
