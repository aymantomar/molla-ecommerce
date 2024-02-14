import BannerHome from "../../components/BannerHome/BannerHome";
import HomeBlog from "../../components/HomeBlog/HomeBlog";
import HomeBrands from "../../components/HomeBrands/HomeBrands";
import HomeCategories from "../../components/HomeCategories/HomeCategories";
import HomeNewsLetter from "../../components/HomeNewsLetter/HomeNewsLetter";
import HomeProductRow from "../../components/HomeProductRow/HomeProductRow";
import HomeSecondBanner from "../../components/HomeSecondBanner/HomeSecondBanner";
import HomeSlider from "../../components/Slider/Home-slider";
// eslint-disable-next-line no-unused-vars
import style from "./Home.module.css";

export default function Home() {
  return (
    <div>
      <HomeSlider />
      <HomeCategories />
      <BannerHome />
      <HomeProductRow
        isGray={true}
        title={"Electronics"}
        categories={"Electronics"}
      />
      <HomeSecondBanner />
      <HomeProductRow
        isGray={false}
        title={"Clothing & Apparel"}
        categories={"Women's Fashion"}
      />
      <HomeBrands />
      <HomeNewsLetter/>
      <HomeBlog/>
    </div>
  );
}
