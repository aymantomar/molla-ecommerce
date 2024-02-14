import { Link, useLocation } from "react-router-dom";
import style from "./Breadcrumbs.module.css";

export default function Breadcrumbs() {
  const location = useLocation();

  let currentLink = "";
  const crumbs = location.pathname
    .split("/")
    .filter((crumbs) => crumbs !== "")
    .slice(0,1)
    .map((crumb) => {
      currentLink += `/${crumb}`;

      return (
        <div className={`${style.crumbs}`} key={crumb}>
          <Link to={currentLink}>{crumb}</Link>
        </div>
      );
    });

  return (
    <div className="border-bottom py-3 ">
      <div className={`container ${style.bread_crumbs}`}>
        <Link to="/">home{" > "} </Link>
        {crumbs}
      </div>
    </div>
  );
}
