import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import CategoriesFilter from "../../components/CategoriesFilter/CategoriesFilter";
import style from "./Categories.module.css";

export default function Categories() {
  return (
    <>
      <div
        className={`${style.bgHeader} d-flex justify-content-center align-items-center`}
      >
        <h1>Categories</h1>
      </div>
      <Breadcrumbs />
      <CategoriesFilter />
    </>
  );
}
